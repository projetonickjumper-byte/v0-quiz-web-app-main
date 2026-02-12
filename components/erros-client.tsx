"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Home,
  Trash2,
  RotateCcw,
  AlertTriangle,
  BookX,
} from "lucide-react"
import { QuestionCard } from "@/components/question-card"
import { QuizResults } from "@/components/quiz-results"
import type { Question } from "@/lib/types"
import { questions as allQuestions } from "@/lib/questions"
import {
  getWrongQuestions,
  clearWrongQuestions,
  removeWrongQuestion,
  markQuestionsUsed,
  addQuizResult,
  addWrongQuestions,
} from "@/lib/storage"
import type { WrongEntry, QuizResult } from "@/lib/storage"

export function ErrosClient() {
  const router = useRouter()
  const [wrongEntries, setWrongEntries] = useState<WrongEntry[]>([])
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [showResult, setShowResult] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [isQuizMode, setIsQuizMode] = useState(false)
  const [startTime] = useState(Date.now())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    loadWrongQuestions()
  }, [])

  function loadWrongQuestions() {
    const entries = getWrongQuestions()
    setWrongEntries(entries)
    const wrongIds = new Set(entries.map((e) => e.questionId))
    const qs = allQuestions.filter((q) => wrongIds.has(q.id))
    // Shuffle
    const shuffled = [...qs].sort(() => Math.random() - 0.5)
    setQuestions(shuffled)
  }

  function startQuiz() {
    setIsQuizMode(true)
    setCurrentIndex(0)
    setAnswers(new Array(questions.length).fill(null))
    setShowResult(false)
    setIsFinished(false)
  }

  function handleClear() {
    clearWrongQuestions()
    setWrongEntries([])
    setQuestions([])
    setIsQuizMode(false)
  }

  const handleSelectAnswer = useCallback(
    (index: number) => {
      setAnswers((prev) => {
        const newAnswers = [...prev]
        newAnswers[currentIndex] = index
        return newAnswers
      })
    },
    [currentIndex]
  )

  function handleConfirm() {
    if (answers[currentIndex] !== null) {
      setShowResult(true)
      // If the user got it right this time, remove from erros
      const q = questions[currentIndex]
      if (answers[currentIndex] === q.correctIndex) {
        removeWrongQuestion(q.id)
      }
    }
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setShowResult(false)
    } else {
      // Save results
      markQuestionsUsed(questions.map((q) => q.id))

      const wrongs: WrongEntry[] = []
      const catBreakdown: Record<string, { correct: number; total: number }> = {}
      let correctCount = 0

      questions.forEach((q, i) => {
        const cat = q.category
        if (!catBreakdown[cat]) catBreakdown[cat] = { correct: 0, total: 0 }
        catBreakdown[cat].total++
        if (answers[i] === q.correctIndex) {
          correctCount++
          catBreakdown[cat].correct++
        } else if (answers[i] !== null) {
          wrongs.push({
            questionId: q.id,
            selectedAnswer: answers[i]!,
            timestamp: Date.now(),
            category: q.category,
          })
        }
      })

      if (wrongs.length > 0) addWrongQuestions(wrongs)

      const result: QuizResult = {
        id: crypto.randomUUID(),
        date: Date.now(),
        totalQuestions: questions.length,
        correctCount,
        percentage: Math.round((correctCount / questions.length) * 100),
        timeSpentSeconds: Math.floor((Date.now() - startTime) / 1000),
        mode: "erros",
        categoryBreakdown: catBreakdown,
      }
      addQuizResult(result)

      setIsFinished(true)
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      setShowResult(true)
    }
  }

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  // Empty state
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card px-4 py-4">
          <div className="mx-auto flex max-w-4xl items-center justify-between">
            <h1 className="text-lg font-bold text-foreground">Caderno de Erros</h1>
            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Inicio</span>
            </button>
          </div>
        </header>
        <main className="mx-auto flex max-w-md flex-col items-center px-4 py-20 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-2 text-xl font-bold text-foreground">Nenhum erro registrado</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Responda questoes nos quizzes e as que voce errar aparecerao aqui para revisao.
          </p>
          <button
            onClick={() => router.push("/")}
            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Fazer um Quiz
          </button>
        </main>
      </div>
    )
  }

  // Quiz finished
  if (isQuizMode && isFinished) {
    return (
      <QuizResults
        questions={questions}
        answers={answers}
        startTime={startTime}
        endTime={Date.now()}
        mode="quiz"
      />
    )
  }

  // Quiz mode
  if (isQuizMode && questions.length > 0) {
    const progress = ((currentIndex + 1) / questions.length) * 100
    const answered = answers.filter((a) => a !== null).length

    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
            <button
              onClick={() => setIsQuizMode(false)}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Voltar</span>
            </button>
            <span className="text-sm font-medium text-foreground">
              {answered}/{questions.length} respondidas
            </span>
          </div>
          <div className="h-1 bg-secondary">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-6">
          <QuestionCard
            question={questions[currentIndex]}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={answers[currentIndex]}
            showResult={showResult}
            onSelectAnswer={handleSelectAnswer}
          />
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-card-foreground hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Anterior
            </button>
            <div className="flex gap-3">
              {!showResult && answers[currentIndex] !== null && (
                <button
                  onClick={handleConfirm}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  <CheckCircle className="h-4 w-4" />
                  Confirmar
                </button>
              )}
              {showResult && (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  {currentIndex < questions.length - 1 ? (
                    <>
                      Proxima
                      <ArrowRight className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      Ver Resultado
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Overview mode - list of wrong questions
  const catCounts: Record<string, number> = {}
  wrongEntries.forEach((e) => {
    catCounts[e.category] = (catCounts[e.category] || 0) + 1
  })
  const categoryLabels: Record<string, string> = {
    portugues: "Portugues",
    legislacao: "Legislacao",
    informatica: "Informatica",
    pedagogia: "Pedagogia",
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-4 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <h1 className="text-lg font-bold text-foreground">Caderno de Erros</h1>
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Inicio</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6">
        {/* Summary */}
        <div className="mb-6 rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
              <BookX className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <h2 className="font-bold text-card-foreground">{questions.length} questoes para revisar</h2>
              <p className="text-sm text-muted-foreground">Refaca as questoes que errou e domine cada topico</p>
            </div>
          </div>

          {/* Category breakdown */}
          <div className="mb-5 flex flex-wrap gap-2">
            {Object.entries(catCounts).map(([cat, count]) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {categoryLabels[cat] || cat}: {count}
              </span>
            ))}
          </div>

          {/* Alert */}
          <div className="mb-5 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>Ao acertar uma questao no modo revisao, ela e automaticamente removida do caderno.</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={startQuiz}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <RotateCcw className="h-4 w-4" />
              Refazer {questions.length} questoes
            </button>
            <button
              onClick={handleClear}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-6 py-3 font-medium text-destructive transition-colors hover:bg-destructive/10"
            >
              <Trash2 className="h-4 w-4" />
              Limpar caderno
            </button>
          </div>
        </div>

        {/* Question list preview */}
        <div className="flex flex-col gap-2">
          {questions.map((q, i) => (
            <div
              key={q.id}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs font-bold text-destructive">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-sm text-card-foreground">{q.text.length > 120 ? q.text.slice(0, 120) + "..." : q.text}</p>
                <p className="mt-1 text-xs text-muted-foreground">{categoryLabels[q.category] || q.category}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
