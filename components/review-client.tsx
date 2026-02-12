"use client"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Home,
  Brain,
  BookOpen,
  FileText,
  Scale,
  Laptop,
  GraduationCap,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  Bookmark,
} from "lucide-react"
import { reviewTopics } from "@/lib/questions"
import type { Category } from "@/lib/types"

interface ReviewClientProps {
  category: Category | "todas"
}

const categoryConfig: Record<string, { label: string; icon: React.ReactNode; color: string }> = {
  portugues: {
    label: "Lingua Portuguesa",
    icon: <FileText className="h-5 w-5" />,
    color: "text-blue-600",
  },
  legislacao: {
    label: "Legislacao",
    icon: <Scale className="h-5 w-5" />,
    color: "text-amber-600",
  },
  informatica: {
    label: "Informatica",
    icon: <Laptop className="h-5 w-5" />,
    color: "text-emerald-600",
  },
  pedagogia: {
    label: "Assuntos Educacionais",
    icon: <GraduationCap className="h-5 w-5" />,
    color: "text-violet-600",
  },
}

export function ReviewClient({ category }: ReviewClientProps) {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<Category | "todas">(category)
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0)
  const [expandedPoint, setExpandedPoint] = useState<number | null>(0)
  const [reviewed, setReviewed] = useState<Set<number>>(new Set())
  const [showAllTopics, setShowAllTopics] = useState(false)

  const filteredTopics =
    selectedCategory === "todas"
      ? reviewTopics
      : reviewTopics.filter((t) => t.category === selectedCategory)

  const currentTopic = filteredTopics[currentTopicIndex] || null
  const totalTopics = filteredTopics.length
  const reviewedCount = filteredTopics.filter((t) => reviewed.has(t.id)).length
  const progressPercent = totalTopics > 0 ? Math.round((reviewedCount / totalTopics) * 100) : 0

  const handleMarkReviewed = useCallback(() => {
    if (!currentTopic) return
    setReviewed((prev) => {
      const next = new Set(prev)
      if (next.has(currentTopic.id)) {
        next.delete(currentTopic.id)
      } else {
        next.add(currentTopic.id)
      }
      return next
    })
  }, [currentTopic])

  const handleNext = useCallback(() => {
    if (currentTopicIndex < totalTopics - 1) {
      setCurrentTopicIndex((prev) => prev + 1)
      setExpandedPoint(0)
    }
  }, [currentTopicIndex, totalTopics])

  const handlePrev = useCallback(() => {
    if (currentTopicIndex > 0) {
      setCurrentTopicIndex((prev) => prev - 1)
      setExpandedPoint(0)
    }
  }, [currentTopicIndex])

  const handleSkipToQuiz = useCallback(() => {
    const params = new URLSearchParams({
      category: selectedCategory,
      difficulty: "todas",
      quantity: "10",
      area: "informatica",
    })
    router.push(`/quiz?${params.toString()}`)
  }, [router, selectedCategory])

  const categories: (Category | "todas")[] = ["todas", "portugues", "legislacao", "informatica", "pedagogia"]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Material de Revisao</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              {reviewedCount} de {totalTopics} topicos revisados
            </span>
            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Inicio</span>
            </button>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="h-1.5 bg-secondary">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6">
        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setCurrentTopicIndex(0)
                  setExpandedPoint(0)
                }}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-card-foreground hover:border-primary/50"
                }`}
              >
                {cat === "todas" ? (
                  <>
                    <Brain className="h-4 w-4" />
                    Todas
                  </>
                ) : (
                  <>
                    {categoryConfig[cat]?.icon}
                    {categoryConfig[cat]?.label}
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Skip Review */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Topico {currentTopicIndex + 1} de {totalTopics}
          </p>
          <button
            onClick={handleSkipToQuiz}
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Pular revisao e ir para o Quiz
          </button>
        </div>

        {/* Topic Navigation - Mini Map */}
        <div className="mb-6">
          <button
            onClick={() => setShowAllTopics(!showAllTopics)}
            className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            Navegar entre topicos
            {showAllTopics ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          {showAllTopics && (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {filteredTopics.map((topic, i) => {
                const isReviewed = reviewed.has(topic.id)
                const isCurrent = i === currentTopicIndex
                const config = categoryConfig[topic.category]
                return (
                  <button
                    key={topic.id}
                    onClick={() => {
                      setCurrentTopicIndex(i)
                      setExpandedPoint(0)
                      setShowAllTopics(false)
                    }}
                    className={`flex items-start gap-2 rounded-lg border p-3 text-left text-xs transition-all ${
                      isCurrent
                        ? "border-primary bg-accent ring-2 ring-primary ring-offset-1"
                        : isReviewed
                        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                        : "border-border bg-card text-card-foreground hover:border-primary/50"
                    }`}
                  >
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-bold ${
                      isReviewed ? "bg-emerald-600 text-emerald-50" : "bg-secondary text-secondary-foreground"
                    }`}>
                      {isReviewed ? <CheckCircle2 className="h-3 w-3" /> : i + 1}
                    </span>
                    <span className="line-clamp-2 font-medium leading-tight">{topic.title}</span>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Current Topic Card */}
        {currentTopic && (
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            {/* Topic Header */}
            <div className="border-b border-border bg-secondary/30 px-6 py-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className={categoryConfig[currentTopic.category]?.color}>
                    {categoryConfig[currentTopic.category]?.icon}
                  </span>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {categoryConfig[currentTopic.category]?.label}
                    </p>
                    <h2 className="text-lg font-bold text-foreground">
                      {currentTopic.title}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={handleMarkReviewed}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                    reviewed.has(currentTopic.id)
                      ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                      : "border-border bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {reviewed.has(currentTopic.id) ? "Revisado" : "Marcar como revisado"}
                </button>
              </div>
            </div>

            {/* Key Points */}
            <div className="px-6 py-5">
              <div className="flex flex-col gap-3">
                {currentTopic.keyPoints.map((point, i) => {
                  const isExpanded = expandedPoint === i
                  return (
                    <div
                      key={i}
                      className={`overflow-hidden rounded-lg border transition-all ${
                        isExpanded
                          ? "border-primary/30 bg-accent/30"
                          : "border-border bg-card hover:border-primary/20"
                      }`}
                    >
                      <button
                        onClick={() => setExpandedPoint(isExpanded ? null : i)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                            {i + 1}
                          </span>
                          <span className="text-sm font-semibold text-foreground">{point.title}</span>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                        )}
                      </button>
                      {isExpanded && (
                        <div className="border-t border-border/50 px-4 py-4 pl-14">
                          <p className="text-sm leading-relaxed text-card-foreground">
                            {point.content}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Tips (Pegadinhas de Banca) */}
            {currentTopic.tips.length > 0 && (
              <div className="border-t border-border px-6 py-5">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <h3 className="text-sm font-bold text-foreground">
                    Pegadinhas de Banca ({currentTopic.tips.length})
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  {currentTopic.tips.map((tip, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm"
                    >
                      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
                      <span className="text-amber-900">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mnemonics */}
            {currentTopic.mnemonics.length > 0 && (
              <div className="border-t border-border px-6 py-5">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="h-4 w-4 text-blue-500" />
                  <h3 className="text-sm font-bold text-foreground">
                    Mnemonicos para memorizar ({currentTopic.mnemonics.length})
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  {currentTopic.mnemonics.map((mnemonic, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm"
                    >
                      <Bookmark className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
                      <span className="font-mono text-blue-900">{mnemonic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Footer */}
            <div className="border-t border-border px-6 py-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  disabled={currentTopicIndex === 0}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Anterior
                </button>

                <div className="flex items-center gap-1.5">
                  {filteredTopics.map((topic, i) => (
                    <button
                      key={topic.id}
                      onClick={() => {
                        setCurrentTopicIndex(i)
                        setExpandedPoint(0)
                      }}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                        i === currentTopicIndex
                          ? "bg-primary scale-125"
                          : reviewed.has(topic.id)
                          ? "bg-emerald-500"
                          : "bg-border"
                      }`}
                      aria-label={`Topico ${i + 1}`}
                    />
                  ))}
                </div>

                {currentTopicIndex < totalTopics - 1 ? (
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Proximo
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSkipToQuiz}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Brain className="h-4 w-4" />
                    Iniciar Quiz
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {filteredTopics.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
            <BookOpen className="mb-4 h-12 w-12 text-muted-foreground/50" />
            <p className="text-lg font-medium text-foreground">Nenhum topico disponivel</p>
            <p className="mt-1 text-sm text-muted-foreground">Selecione outra categoria para ver os topicos de revisao.</p>
          </div>
        )}
      </main>
    </div>
  )
}
