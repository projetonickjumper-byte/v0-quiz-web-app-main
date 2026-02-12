"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle, Home } from "lucide-react"
import { QuestionCard } from "@/components/question-card"
import { QuizResults } from "@/components/quiz-results"
import type { Question } from "@/lib/types"
import {
  getQuestionsByCategory,
  getQuestionsByDifficulty,
} from "@/lib/questions"
import {
  getUnusedQuestions,
  markQuestionsUsed,
  addWrongQuestions,
  addQuizResult,
} from "@/lib/storage"
import type { WrongEntry, QuizResult } from "@/lib/storage"
import type { Category, Difficulty } from "@/lib/types"

interface QuizClientProps {
  category: Category | "todas"
  difficulty: Difficulty | "todas"
  quantity: number
}

export function QuizClient({ category, difficulty, quantity }: QuizClientProps) {
  const router = useRouter()
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [showResult, setShowResult] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [startTime] = useState(Date.now())

  useEffect(() => {
    let filtered = getQuestionsByCategory(category)
    filtered = getQuestionsByDifficulty(filtered, difficulty)
    const selected = getUnusedQuestions(filtered, quantity)
    setQuestions(selected)
    setAnswers(new Array(selected.length).fill(null))
  }, [category, difficulty, quantity])

  const handleSelectAnswer = useCallback((index: number) => {
    setAnswers((prev) => {
      const newAnswers = [...prev]
      newAnswers[currentIndex] = index
      return newAnswers
    })
  }, [currentIndex])

  function handleConfirm() {
    if (answers[currentIndex] !== null) {
      setShowResult(true)
    }
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setShowResult(false)
    } else {
      // Mark questions as used so they don't repeat
      markQuestionsUsed(questions.map((q) => q.id))

      // Save wrong answers to caderno de erros
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

      // Save quiz result to history
      const result: QuizResult = {
        id: crypto.randomUUID(),
        date: Date.now(),
        totalQuestions: questions.length,
        correctCount,
        percentage: Math.round((correctCount / questions.length) * 100),
        timeSpentSeconds: Math.floor((Date.now() - startTime) / 1000),
        mode: "quiz",
        categoryBreakdown: catBreakdown,
      }
      addQuizResult(result)

      setIsFinished(true)
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      setShowResult(true) // Show result of previously answered question
    }
  }

  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Carregando questoes...</p>
        </div>
      </div>
    )
  }

  if (isFinished) {
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

  const progress = ((currentIndex + 1) / questions.length) * 100
  const answered = answers.filter((a) => a !== null).length

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Inicio</span>
          </button>
          <span className="text-sm font-medium text-foreground">
            {answered}/{questions.length} respondidas
          </span>
        </div>
        {/* Progress Bar */}
        <div className="h-1 bg-secondary">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-6">
        <QuestionCard
          question={questions[currentIndex]}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={answers[currentIndex]}
          showResult={showResult}
          onSelectAnswer={handleSelectAnswer}
        />

        {/* Action Buttons */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Anterior
          </button>

          <div className="flex gap-3">
            {!showResult && answers[currentIndex] !== null && (
              <button
                onClick={handleConfirm}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <CheckCircle className="h-4 w-4" />
                Confirmar
              </button>
            )}
            {showResult && (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
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
