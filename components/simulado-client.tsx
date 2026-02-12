"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Flag,
  Home,
  AlertTriangle,
} from "lucide-react"
import { QuestionCard } from "@/components/question-card"
import { QuizResults } from "@/components/quiz-results"
import type { Question, Area } from "@/lib/types"
import { getSimuladoQuestions } from "@/lib/questions"

const TIME_LIMIT = 4 * 60 * 60 // 4 hours in seconds

interface SimuladoClientProps {
  area: Area
}

export function SimuladoClient({ area }: SimuladoClientProps) {
  const router = useRouter()
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [flagged, setFlagged] = useState<boolean[]>([])
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT)
  const [isFinished, setIsFinished] = useState(false)
  const [showConfirmFinish, setShowConfirmFinish] = useState(false)
  const [showNavPanel, setShowNavPanel] = useState(false)
  const startTimeRef = useRef(Date.now())

  useEffect(() => {
    const qs = getSimuladoQuestions(area)
    setQuestions(qs)
    setAnswers(new Array(qs.length).fill(null))
    setFlagged(new Array(qs.length).fill(false))
  }, [area])

  useEffect(() => {
    if (isFinished || questions.length === 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsFinished(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isFinished, questions.length])

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

  function handleToggleFlag() {
    setFlagged((prev) => {
      const newFlagged = [...prev]
      newFlagged[currentIndex] = !newFlagged[currentIndex]
      return newFlagged
    })
  }

  function handleNavigate(index: number) {
    setCurrentIndex(index)
    setShowNavPanel(false)
  }

  function handleFinish() {
    const unanswered = answers.filter((a) => a === null).length
    if (unanswered > 0) {
      setShowConfirmFinish(true)
    } else {
      setIsFinished(true)
    }
  }

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Preparando simulado...</p>
        </div>
      </div>
    )
  }

  if (isFinished) {
    return (
      <QuizResults
        questions={questions}
        answers={answers}
        startTime={startTimeRef.current}
        endTime={Date.now()}
        mode="simulado"
      />
    )
  }

  const answered = answers.filter((a) => a !== null).length
  const flaggedCount = flagged.filter((f) => f).length
  const progress = ((currentIndex + 1) / questions.length) * 100
  const timeWarning = timeLeft < 1800 // < 30 min

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

          <div className="flex items-center gap-4">
            <div
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-mono font-semibold ${
                timeWarning
                  ? "bg-red-100 text-red-700"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              <Clock className="h-4 w-4" />
              {formatTime(timeLeft)}
            </div>

            <button
              onClick={() => setShowNavPanel(!showNavPanel)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {answered}/{questions.length}
            </button>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="h-1 bg-secondary">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Navigation Panel Overlay */}
      {showNavPanel && (
        <div className="fixed inset-0 z-20 flex items-start justify-center bg-foreground/50 pt-20">
          <div className="mx-4 max-h-[70vh] w-full max-w-lg overflow-y-auto rounded-xl border border-border bg-card p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Navegacao</h3>
              <button
                onClick={() => setShowNavPanel(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Fechar
              </button>
            </div>

            <div className="mb-4 flex gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-primary" /> Respondida
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-secondary" /> Nao respondida
              </span>
              <span className="flex items-center gap-1.5">
                <Flag className="h-3 w-3 text-amber-500" /> Marcada
              </span>
            </div>

            <div className="grid grid-cols-10 gap-2">
              {questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleNavigate(i)}
                  className={`relative flex h-9 w-9 items-center justify-center rounded text-xs font-medium transition-colors ${
                    currentIndex === i
                      ? "ring-2 ring-primary ring-offset-2"
                      : ""
                  } ${
                    answers[i] !== null
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {i + 1}
                  {flagged[i] && (
                    <Flag className="absolute -right-1 -top-1 h-3 w-3 text-amber-500" />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowNavPanel(false)}
                className="flex-1 rounded-lg border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Continuar
              </button>
              <button
                onClick={handleFinish}
                className="flex-1 rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Finalizar Prova
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Finish Dialog */}
      {showConfirmFinish && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-foreground/50 px-4">
          <div className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-xl">
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              <h3 className="text-lg font-semibold text-foreground">Finalizar prova?</h3>
            </div>
            <p className="mb-2 text-sm text-muted-foreground">
              Voce ainda tem{" "}
              <strong className="text-foreground">
                {answers.filter((a) => a === null).length} questoes nao respondidas
              </strong>
              .
            </p>
            <p className="mb-6 text-sm text-muted-foreground">
              Questoes em branco serao consideradas como erradas. Deseja finalizar mesmo assim?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmFinish(false)}
                className="flex-1 rounded-lg border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Continuar respondendo
              </button>
              <button
                onClick={() => setIsFinished(true)}
                className="flex-1 rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Finalizar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-6">
        <QuestionCard
          question={questions[currentIndex]}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={answers[currentIndex]}
          showResult={false}
          onSelectAnswer={handleSelectAnswer}
        />

        {/* Action Buttons */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Anterior
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleToggleFlag}
              className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                flagged[currentIndex]
                  ? "border-amber-300 bg-amber-50 text-amber-700"
                  : "border-border bg-card text-card-foreground hover:bg-secondary"
              }`}
            >
              <Flag className="h-4 w-4" />
              <span className="hidden sm:inline">
                {flagged[currentIndex] ? "Marcada" : "Marcar"}
              </span>
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex((prev) => prev + 1)}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Proxima
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <CheckCircle className="h-4 w-4" />
                Finalizar
              </button>
            )}
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="mt-6 flex items-center justify-center gap-6 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
          <span>
            Respondidas: <strong className="text-foreground">{answered}</strong>/{questions.length}
          </span>
          {flaggedCount > 0 && (
            <span className="flex items-center gap-1">
              <Flag className="h-3.5 w-3.5 text-amber-500" />
              Marcadas: <strong className="text-foreground">{flaggedCount}</strong>
            </span>
          )}
        </div>
      </main>
    </div>
  )
}
