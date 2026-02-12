"use client"

import { useState, useEffect } from "react"
import { Target, Clock, TrendingUp, BarChart3 } from "lucide-react"
import { getQuizHistory } from "@/lib/storage"
import type { QuizResult } from "@/lib/storage"

export function StatsDashboard() {
  const [history, setHistory] = useState<QuizResult[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setHistory(getQuizHistory())
  }, [])

  if (!mounted || history.length === 0) return null

  const totalQuestions = history.reduce((a, r) => a + r.totalQuestions, 0)
  const totalCorrect = history.reduce((a, r) => a + r.correctCount, 0)
  const avgPercentage = Math.round((totalCorrect / totalQuestions) * 100)
  const totalTime = history.reduce((a, r) => a + r.timeSpentSeconds, 0)
  const hours = Math.floor(totalTime / 3600)
  const minutes = Math.floor((totalTime % 3600) / 60)

  // Category breakdown across all quizzes
  const allCats: Record<string, { correct: number; total: number }> = {}
  history.forEach((r) => {
    Object.entries(r.categoryBreakdown).forEach(([cat, stats]) => {
      if (!allCats[cat]) allCats[cat] = { correct: 0, total: 0 }
      allCats[cat].correct += stats.correct
      allCats[cat].total += stats.total
    })
  })

  const categoryLabels: Record<string, string> = {
    portugues: "Portugues",
    legislacao: "Legislacao",
    informatica: "Informatica",
    pedagogia: "Pedagogia",
  }

  // Last 10 quizzes for mini chart
  const recentResults = history.slice(-10)

  return (
    <section className="mx-auto mb-8 max-w-4xl px-4">
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-bold text-card-foreground">Seu Progresso</h2>
          <span className="ml-auto text-xs text-muted-foreground">{history.length} sessoes</span>
        </div>

        {/* Stats Grid */}
        <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          <div className="rounded-lg bg-secondary/50 p-3 text-center">
            <Target className="mx-auto mb-1 h-4 w-4 text-primary" />
            <p className="text-xl font-bold text-card-foreground">{totalQuestions}</p>
            <p className="text-xs text-muted-foreground">Questoes feitas</p>
          </div>
          <div className="rounded-lg bg-secondary/50 p-3 text-center">
            <TrendingUp className="mx-auto mb-1 h-4 w-4 text-primary" />
            <p className="text-xl font-bold text-card-foreground">{avgPercentage}%</p>
            <p className="text-xs text-muted-foreground">Aproveitamento</p>
          </div>
          <div className="rounded-lg bg-secondary/50 p-3 text-center">
            <Clock className="mx-auto mb-1 h-4 w-4 text-primary" />
            <p className="text-xl font-bold text-card-foreground">
              {hours > 0 ? `${hours}h${minutes}m` : `${minutes}m`}
            </p>
            <p className="text-xs text-muted-foreground">Tempo total</p>
          </div>
          <div className="rounded-lg bg-secondary/50 p-3 text-center">
            <Target className="mx-auto mb-1 h-4 w-4 text-emerald-600" />
            <p className="text-xl font-bold text-card-foreground">{totalCorrect}</p>
            <p className="text-xs text-muted-foreground">Acertos totais</p>
          </div>
        </div>

        {/* Mini chart - last 10 sessions */}
        {recentResults.length > 1 && (
          <div className="mb-6">
            <p className="mb-2 text-xs font-medium text-muted-foreground">Evolucao recente</p>
            <div className="flex items-end gap-1" style={{ height: 48 }}>
              {recentResults.map((r, i) => (
                <div
                  key={r.id}
                  className="flex-1 rounded-t transition-all"
                  style={{
                    height: `${Math.max(r.percentage * 0.48, 4)}px`,
                    backgroundColor:
                      r.percentage >= 70
                        ? "hsl(var(--primary))"
                        : r.percentage >= 50
                          ? "hsl(var(--warning))"
                          : "hsl(var(--destructive))",
                    opacity: 0.4 + (i / recentResults.length) * 0.6,
                  }}
                  title={`${r.percentage}% - ${new Date(r.date).toLocaleDateString("pt-BR")}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Category breakdown */}
        {Object.keys(allCats).length > 0 && (
          <div>
            <p className="mb-3 text-xs font-medium text-muted-foreground">Por categoria</p>
            <div className="flex flex-col gap-2">
              {Object.entries(allCats).map(([cat, stats]) => {
                const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0
                return (
                  <div key={cat}>
                    <div className="mb-0.5 flex items-center justify-between text-xs">
                      <span className="font-medium text-card-foreground">{categoryLabels[cat] || cat}</span>
                      <span className="text-muted-foreground">{pct}% ({stats.correct}/{stats.total})</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${pct}%`,
                          backgroundColor:
                            pct >= 70
                              ? "hsl(var(--primary))"
                              : pct >= 50
                                ? "hsl(var(--warning))"
                                : "hsl(var(--destructive))",
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
