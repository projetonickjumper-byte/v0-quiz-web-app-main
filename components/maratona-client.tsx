"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  Home,
  Flame,
  Trophy,
  Zap,
  RotateCcw,
  CheckCircle2,
  XCircle,
} from "lucide-react"
import { questions as allQuestions } from "@/lib/questions"
import type { Question } from "@/lib/types"
import {
  getMaratonaRecord,
  updateMaratonaRecord,
  addWrongQuestions,
  addQuizResult,
  markQuestionsUsed,
} from "@/lib/storage"
import type { WrongEntry, QuizResult } from "@/lib/storage"

function shuffleAll(): Question[] {
  return [...allQuestions].sort(() => Math.random() - 0.5)
}

export function MaratonaClient() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [pool, setPool] = useState<Question[]>([])
  const [poolIndex, setPoolIndex] = useState(0)
  const [streak, setStreak] = useState(0)
  const [record, setRecord] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [totalCorrect, setTotalCorrect] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [startTime] = useState(Date.now())

  useEffect(() => {
    setMounted(true)
    setRecord(getMaratonaRecord())
    setPool(shuffleAll())
  }, [])

  const currentQuestion = pool[poolIndex]

  const handleSelect = useCallback((index: number) => {
    if (!showResult) {
      setSelectedAnswer(index)
    }
  }, [showResult])

  function handleConfirm() {
    if (selectedAnswer === null || !currentQuestion) return
    setShowResult(true)

    const isCorrect = selectedAnswer === currentQuestion.correctIndex
    const newTotal = totalAnswered + 1
    const newCorrect = totalCorrect + (isCorrect ? 1 : 0)

    setTotalAnswered(newTotal)
    setTotalCorrect(newCorrect)
    markQuestionsUsed([currentQuestion.id])

    if (isCorrect) {
      const newStreak = streak + 1
      setStreak(newStreak)
      updateMaratonaRecord(newStreak)
      setRecord(Math.max(record, newStreak))
    } else {
      // Save to erros
      const entry: WrongEntry = {
        questionId: currentQuestion.id,
        selectedAnswer: selectedAnswer,
        timestamp: Date.now(),
        category: currentQuestion.category,
      }
      addWrongQuestions([entry])

      if (streak > 0) {
        // Game over on error
        setIsGameOver(true)

        // Save result
        const result: QuizResult = {
          id: crypto.randomUUID(),
          date: Date.now(),
          totalQuestions: newTotal,
          correctCount: newCorrect,
          percentage: Math.round((newCorrect / newTotal) * 100),
          timeSpentSeconds: Math.floor((Date.now() - startTime) / 1000),
          mode: "maratona",
          categoryBreakdown: {},
        }
        addQuizResult(result)
      }
      setStreak(0)
    }
  }

  function handleNext() {
    setSelectedAnswer(null)
    setShowResult(false)

    const nextIndex = poolIndex + 1
    if (nextIndex >= pool.length) {
      // Reshuffle when pool runs out
      setPool(shuffleAll())
      setPoolIndex(0)
    } else {
      setPoolIndex(nextIndex)
    }
  }

  function handleRestart() {
    setPool(shuffleAll())
    setPoolIndex(0)
    setStreak(0)
    setTotalAnswered(0)
    setTotalCorrect(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setIsGameOver(false)
  }

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  // Game over screen
  if (isGameOver) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card px-4 py-4">
          <div className="mx-auto flex max-w-4xl items-center justify-between">
            <h1 className="text-lg font-bold text-foreground">Maratona</h1>
            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Home className="h-4 w-4" />
            </button>
          </div>
        </header>
        <main className="mx-auto flex max-w-md flex-col items-center px-4 py-16 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
            <XCircle className="h-10 w-10 text-destructive" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-foreground">Sequencia quebrada!</h2>
          <p className="mb-8 text-muted-foreground">
            Voce acertou <strong className="text-foreground">{totalCorrect}</strong> de{" "}
            <strong className="text-foreground">{totalAnswered}</strong> questoes nesta sessao.
          </p>

          <div className="mb-8 grid w-full grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <Flame className="mx-auto mb-1 h-5 w-5 text-amber-500" />
              <p className="text-2xl font-bold text-card-foreground">{streak === 0 ? totalCorrect : streak}</p>
              <p className="text-xs text-muted-foreground">Sequencia final</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <Trophy className="mx-auto mb-1 h-5 w-5 text-primary" />
              <p className="text-2xl font-bold text-card-foreground">{record}</p>
              <p className="text-xs text-muted-foreground">Recorde</p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3">
            <button
              onClick={handleRestart}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground"
            >
              <RotateCcw className="h-4 w-4" />
              Jogar novamente
            </button>
            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-medium text-card-foreground hover:bg-secondary"
            >
              <Home className="h-4 w-4" />
              Voltar ao inicio
            </button>
          </div>
        </main>
      </div>
    )
  }

  if (!currentQuestion) return null

  const percentage = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Home className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-4">
            {/* Streak */}
            <div className="flex items-center gap-1.5">
              <Flame className={`h-5 w-5 ${streak > 0 ? "text-amber-500" : "text-muted-foreground"}`} />
              <span className="text-sm font-bold text-foreground">{streak}</span>
            </div>
            {/* Record */}
            <div className="flex items-center gap-1.5">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">{record}</span>
            </div>
            {/* Stats */}
            <span className="text-xs text-muted-foreground">
              {totalCorrect}/{totalAnswered} ({percentage}%)
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-6">
        {/* Streak bar */}
        {streak > 0 && (
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-amber-50 px-4 py-2">
            <Zap className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">
              Sequencia de {streak} acerto{streak !== 1 ? "s" : ""}!
              {streak >= record && streak >= 5 && " Novo recorde!"}
            </span>
          </div>
        )}

        {/* Question */}
        <div className="mb-4 rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              {currentQuestion.category} - {currentQuestion.difficulty}
            </span>
            <span className="text-xs text-muted-foreground">#{totalAnswered + 1}</span>
          </div>
          <p className="text-base leading-relaxed text-card-foreground">{currentQuestion.text}</p>
        </div>

        {/* Options */}
        <div className="mb-4 flex flex-col gap-2">
          {currentQuestion.options.map((opt, i) => {
            const letter = String.fromCharCode(65 + i)
            const isSelected = selectedAnswer === i
            const isCorrect = i === currentQuestion.correctIndex

            let cls =
              "flex items-start gap-3 rounded-lg border p-4 text-sm transition-all cursor-pointer "

            if (showResult) {
              if (isCorrect) {
                cls += "border-emerald-300 bg-emerald-50 text-emerald-900"
              } else if (isSelected && !isCorrect) {
                cls += "border-red-300 bg-red-50 text-red-900"
              } else {
                cls += "border-border bg-card text-muted-foreground opacity-60"
              }
            } else {
              if (isSelected) {
                cls += "border-primary bg-primary/5 text-foreground ring-1 ring-primary"
              } else {
                cls += "border-border bg-card text-card-foreground hover:border-primary/40 hover:bg-secondary/50"
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={showResult}
                className={cls}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold">
                  {letter}
                </span>
                <span className="flex-1 text-left">{opt}</span>
                {showResult && isCorrect && (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                )}
                {showResult && isSelected && !isCorrect && (
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                )}
              </button>
            )
          })}
        </div>

        {/* Explanation on result */}
        {showResult && (
          <div className="mb-4 rounded-lg bg-secondary/50 p-4">
            <p className="text-xs font-semibold text-foreground">Explicacao:</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Action */}
        <div className="flex justify-center">
          {!showResult ? (
            <button
              onClick={handleConfirm}
              disabled={selectedAnswer === null}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              Confirmar
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Proxima questao
            </button>
          )}
        </div>
      </main>
    </div>
  )
}
