"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Home,
  RotateCcw,
  ThumbsUp,
  ThumbsDown,
  ChevronLeft,
  ChevronRight,
  Layers,
  Filter,
} from "lucide-react"
import { questions as allQuestions } from "@/lib/questions"
import type { Question, Category } from "@/lib/types"
import {
  getFlashcardProgress,
  updateFlashcardCard,
  resetFlashcardProgress,
} from "@/lib/storage"
import type { FlashcardProgress } from "@/lib/storage"

export function FlashcardClient() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [category, setCategory] = useState<Category | "todas">("todas")
  const [cards, setCards] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [progress, setProgress] = useState<FlashcardProgress>({})
  const [sessionStats, setSessionStats] = useState({ correct: 0, wrong: 0 })

  useEffect(() => {
    setMounted(true)
    setProgress(getFlashcardProgress())
  }, [])

  useEffect(() => {
    let filtered =
      category === "todas" ? [...allQuestions] : allQuestions.filter((q) => q.category === category)

    // Sort: prioritize cards user got wrong or never seen (spaced repetition)
    const prog = getFlashcardProgress()
    filtered.sort((a, b) => {
      const pa = prog[a.id]
      const pb = prog[b.id]
      const scoreA = pa ? pa.correct - pa.wrong * 2 : -100
      const scoreB = pb ? pb.correct - pb.wrong * 2 : -100
      return scoreA - scoreB
    })

    setCards(filtered)
    setCurrentIndex(0)
    setIsFlipped(false)
  }, [category])

  function handleAnswer(correct: boolean) {
    const q = cards[currentIndex]
    updateFlashcardCard(q.id, correct)
    setProgress(getFlashcardProgress())
    setSessionStats((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      wrong: prev.wrong + (correct ? 0 : 1),
    }))

    // Auto advance after short delay
    setIsFlipped(false)
    setTimeout(() => {
      if (currentIndex < cards.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      } else {
        setCurrentIndex(0)
      }
    }, 200)
  }

  function handleReset() {
    resetFlashcardProgress()
    setProgress({})
    setSessionStats({ correct: 0, wrong: 0 })
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  const categories: { value: Category | "todas"; label: string }[] = [
    { value: "todas", label: "Todas" },
    { value: "portugues", label: "Portugues" },
    { value: "legislacao", label: "Legislacao" },
    { value: "informatica", label: "Informatica" },
    { value: "pedagogia", label: "Pedagogia" },
  ]

  const currentCard = cards[currentIndex]
  const cardProgress = currentCard ? progress[currentCard.id] : null
  const totalReviewed = Object.keys(progress).length
  const masteredCount = Object.values(progress).filter(
    (p) => p.correct >= 3 && p.correct > p.wrong
  ).length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-4 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Flashcards</h1>
          </div>
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Inicio</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-6">
        {/* Stats bar */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {currentIndex + 1}/{cards.length}
          </span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
            Sei: {sessionStats.correct}
          </span>
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
            Nao sei: {sessionStats.wrong}
          </span>
          <span className="ml-auto text-xs text-muted-foreground">
            {masteredCount}/{totalReviewed} dominados
          </span>
        </div>

        {/* Category filter */}
        <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-1">
          <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setCategory(c.value)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                category === c.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Flashcard */}
        {currentCard && (
          <div className="mb-6">
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="relative cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front */}
                <div
                  className="rounded-xl border border-border bg-card p-8 shadow-sm"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      {currentCard.category}
                    </span>
                    {cardProgress && (
                      <span className="text-xs text-muted-foreground">
                        {cardProgress.correct}x certo / {cardProgress.wrong}x errado
                      </span>
                    )}
                  </div>
                  <p className="min-h-[120px] text-base leading-relaxed text-card-foreground">
                    {currentCard.text}
                  </p>
                  <p className="mt-6 text-center text-xs text-muted-foreground">
                    Toque para ver a resposta
                  </p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-xl border-2 border-primary/30 bg-primary/5 p-8 shadow-sm"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    Resposta
                  </p>
                  <p className="mb-4 text-base font-semibold text-card-foreground">
                    {currentCard.options[currentCard.correctIndex]}
                  </p>
                  <div className="rounded-lg bg-card p-3">
                    <p className="text-xs font-semibold text-foreground">Explicacao:</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {currentCard.explanation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Answer buttons - only show when flipped */}
        {isFlipped && (
          <div className="mb-6 flex gap-3">
            <button
              onClick={() => handleAnswer(false)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-6 py-3 font-semibold text-red-700 transition-colors hover:bg-red-100"
            >
              <ThumbsDown className="h-4 w-4" />
              Nao sabia
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-6 py-3 font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
            >
              <ThumbsUp className="h-4 w-4" />
              Sabia
            </button>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              setIsFlipped(false)
              setCurrentIndex((prev) => Math.max(0, prev - 1))
            }}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground hover:bg-secondary disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </button>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="h-3 w-3" />
            Resetar progresso
          </button>
          <button
            onClick={() => {
              setIsFlipped(false)
              setCurrentIndex((prev) => Math.min(cards.length - 1, prev + 1))
            }}
            disabled={currentIndex === cards.length - 1}
            className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground hover:bg-secondary disabled:opacity-50"
          >
            Proximo
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  )
}
