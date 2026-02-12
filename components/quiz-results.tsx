"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2, XCircle, Home, RotateCcw, ChevronDown, ChevronUp, Clock, Target, TrendingUp, Filter } from "lucide-react"
import type { Question } from "@/lib/types"

type ReviewFilter = "all" | "wrong" | "correct"

interface QuizResultsProps {
  questions: Question[]
  answers: (number | null)[]
  startTime: number
  endTime: number
  mode: "quiz" | "simulado"
}

export function QuizResults({ questions, answers, startTime, endTime, mode }: QuizResultsProps) {
  const router = useRouter()

  // Auto-expand all wrong answers on mount
  const wrongIndices = useMemo(() => {
    const indices = new Set<number>()
    questions.forEach((q, i) => {
      if (answers[i] !== q.correctIndex) {
        indices.add(i)
      }
    })
    return indices
  }, [questions, answers])

  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(wrongIndices)
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>("wrong")

  const totalQuestions = questions.length
  const correctCount = questions.reduce((acc, q, i) => {
    return acc + (answers[i] === q.correctIndex ? 1 : 0)
  }, 0)
  const wrongCount = totalQuestions - correctCount
  const percentage = Math.round((correctCount / totalQuestions) * 100)

  const elapsedMs = endTime - startTime
  const totalSeconds = Math.floor(elapsedMs / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  // Category breakdown
  const categoryStats: Record<string, { correct: number; total: number }> = {}
  questions.forEach((q, i) => {
    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { correct: 0, total: 0 }
    }
    categoryStats[q.category].total++
    if (answers[i] === q.correctIndex) {
      categoryStats[q.category].correct++
    }
  })

  const categoryLabels: Record<string, string> = {
    portugues: "Lingua Portuguesa",
    legislacao: "Legislacao",
    informatica: "Informatica",
    pedagogia: "Assuntos Educacionais",
  }

  function getGrade() {
    if (percentage >= 90) return { label: "Excelente!", color: "text-emerald-600" }
    if (percentage >= 70) return { label: "Bom desempenho!", color: "text-emerald-600" }
    if (percentage >= 50) return { label: "Regular", color: "text-amber-600" }
    return { label: "Precisa melhorar", color: "text-red-600" }
  }

  const grade = getGrade()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-4 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <h1 className="text-lg font-bold text-foreground">
            {mode === "simulado" ? "Resultado do Simulado" : "Resultado do Quiz"}
          </h1>
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Home className="h-4 w-4" />
            Inicio
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        {/* Score Card */}
        <div className="mb-8 rounded-xl border border-border bg-card p-8 text-center shadow-sm">
          <div className="mb-4">
            <div className="relative mx-auto flex h-32 w-32 items-center justify-center">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="hsl(var(--secondary))" strokeWidth="8" />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${(percentage / 100) * 339.3} 339.3`}
                />
              </svg>
              <span className="absolute text-3xl font-bold text-foreground">{percentage}%</span>
            </div>
          </div>
          <h2 className={`mb-2 text-2xl font-bold ${grade.color}`}>{grade.label}</h2>
          <p className="text-muted-foreground">
            Voce acertou <strong className="text-foreground">{correctCount}</strong> de <strong className="text-foreground">{totalQuestions}</strong> questoes
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <Target className="mx-auto mb-2 h-5 w-5 text-primary" />
            <p className="text-2xl font-bold text-foreground">{correctCount}</p>
            <p className="text-xs text-muted-foreground">Acertos</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <XCircle className="mx-auto mb-2 h-5 w-5 text-red-500" />
            <p className="text-2xl font-bold text-foreground">{wrongCount}</p>
            <p className="text-xs text-muted-foreground">Erros</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <Clock className="mx-auto mb-2 h-5 w-5 text-amber-500" />
            <p className="text-2xl font-bold text-foreground">{minutes}:{seconds.toString().padStart(2, "0")}</p>
            <p className="text-xs text-muted-foreground">Tempo total</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <TrendingUp className="mx-auto mb-2 h-5 w-5 text-primary" />
            <p className="text-2xl font-bold text-foreground">{percentage}%</p>
            <p className="text-xs text-muted-foreground">Aproveitamento</p>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Desempenho por Categoria</h3>
          <div className="flex flex-col gap-4">
            {Object.entries(categoryStats).map(([cat, stats]) => {
              const catPercent = Math.round((stats.correct / stats.total) * 100)
              return (
                <div key={cat}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">
                      {categoryLabels[cat] || cat}
                    </span>
                    <span className="text-muted-foreground">
                      {stats.correct}/{stats.total} ({catPercent}%)
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${catPercent}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Question Review */}
        <div className="mb-8">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-foreground">Gabarito Comentado</h3>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="inline-flex rounded-lg border border-border bg-secondary/50 p-0.5">
                <button
                  onClick={() => setReviewFilter("wrong")}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    reviewFilter === "wrong"
                      ? "bg-red-100 text-red-700 shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Erradas ({wrongCount})
                </button>
                <button
                  onClick={() => setReviewFilter("correct")}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    reviewFilter === "correct"
                      ? "bg-emerald-100 text-emerald-700 shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Corretas ({correctCount})
                </button>
                <button
                  onClick={() => setReviewFilter("all")}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    reviewFilter === "all"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Todas ({totalQuestions})
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {questions.map((q, i) => {
              const isCorrect = answers[i] === q.correctIndex

              // Apply filter
              if (reviewFilter === "wrong" && isCorrect) return null
              if (reviewFilter === "correct" && !isCorrect) return null

              const isExpanded = expandedQuestions.has(i)

              return (
                <div
                  key={q.id}
                  className="overflow-hidden rounded-lg border border-border bg-card"
                >
                  <button
                    onClick={() => {
                      setExpandedQuestions((prev) => {
                        const next = new Set(prev)
                        if (next.has(i)) {
                          next.delete(i)
                        } else {
                          next.add(i)
                        }
                        return next
                      })
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-secondary/50"
                  >
                    {isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                    ) : (
                      <XCircle className="h-5 w-5 shrink-0 text-red-500" />
                    )}
                    <span className="flex-1 text-sm font-medium text-card-foreground">
                      <span className="text-muted-foreground">Q{i + 1}.</span>{" "}
                      {q.text.length > 100 ? q.text.slice(0, 100) + "..." : q.text}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="border-t border-border px-4 py-4">
                      <p className="mb-4 whitespace-pre-line text-sm text-card-foreground">{q.text}</p>

                      {/* Labels for wrong/unanswered questions */}
                      {!isCorrect && (
                        <div className="mb-3 flex flex-wrap gap-2 text-xs">
                          {answers[i] !== null ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-1 font-medium text-red-700">
                              <XCircle className="h-3 w-3" />
                              Sua resposta: {String.fromCharCode(65 + (answers[i] as number))}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 font-medium text-amber-700">
                              Nao respondida
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 font-medium text-emerald-700">
                            <CheckCircle2 className="h-3 w-3" />
                            Correta: {String.fromCharCode(65 + q.correctIndex)}
                          </span>
                        </div>
                      )}

                      <div className="mb-4 flex flex-col gap-2">
                        {q.options.map((opt, optIndex) => {
                          const letter = String.fromCharCode(65 + optIndex)
                          const isUserAnswer = answers[i] === optIndex
                          const isCorrectOpt = optIndex === q.correctIndex

                          let cls = "flex items-start gap-2 rounded-lg p-3 text-sm "
                          if (isCorrectOpt) {
                            cls += "bg-emerald-50 text-emerald-900 border border-emerald-200"
                          } else if (isUserAnswer) {
                            cls += "bg-red-50 text-red-900 border border-red-200"
                          } else {
                            cls += "bg-secondary/50 text-secondary-foreground"
                          }

                          return (
                            <div key={optIndex} className={cls}>
                              <span className="font-bold">{letter})</span>
                              <span className="flex-1">{opt}</span>
                              {isCorrectOpt && (
                                <span className="ml-auto flex shrink-0 items-center gap-1">
                                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                  <span className="text-xs font-medium text-emerald-600">Correta</span>
                                </span>
                              )}
                              {isUserAnswer && !isCorrectOpt && (
                                <span className="ml-auto flex shrink-0 items-center gap-1">
                                  <XCircle className="h-4 w-4 text-red-600" />
                                  <span className="text-xs font-medium text-red-600">Sua resposta</span>
                                </span>
                              )}
                            </div>
                          )
                        })}
                      </div>

                      <div className="rounded-lg bg-secondary/50 p-3">
                        <p className="text-xs font-semibold text-foreground">Explicacao:</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{q.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => router.push("/")}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-medium text-card-foreground transition-colors hover:bg-secondary"
          >
            <Home className="h-4 w-4" />
            Voltar ao Inicio
          </button>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <RotateCcw className="h-4 w-4" />
            Refazer
          </button>
        </div>
      </main>
    </div>
  )
}
