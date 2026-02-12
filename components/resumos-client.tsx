"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import {
  Home,
  Search,
  Star,
  ChevronDown,
  ChevronUp,
  Filter,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
} from "lucide-react"
import { reviewTopics } from "@/lib/questions"
import type { Category } from "@/lib/types"
import { getFavoriteTopics, toggleFavoriteTopic } from "@/lib/storage"

export function ResumosClient() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState<Category | "todas" | "favoritos">("todas")
  const [expandedTopics, setExpandedTopics] = useState<Set<number>>(new Set())
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    setMounted(true)
    setFavorites(getFavoriteTopics())
  }, [])

  function handleToggleFavorite(topicId: number) {
    toggleFavoriteTopic(String(topicId))
    setFavorites(getFavoriteTopics())
  }

  function toggleExpand(topicId: number) {
    setExpandedTopics((prev) => {
      const next = new Set(prev)
      if (next.has(topicId)) {
        next.delete(topicId)
      } else {
        next.add(topicId)
      }
      return next
    })
  }

  function expandAll() {
    setExpandedTopics(new Set(reviewTopics.map((t) => t.id)))
  }

  function collapseAll() {
    setExpandedTopics(new Set())
  }

  const filteredTopics = useMemo(() => {
    let topics = [...reviewTopics]

    // Category filter
    if (category === "favoritos") {
      topics = topics.filter((t) => favorites.includes(String(t.id)))
    } else if (category !== "todas") {
      topics = topics.filter((t) => t.category === category)
    }

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase()
      topics = topics.filter((t) => {
        if (t.title.toLowerCase().includes(q)) return true
        if (t.keyPoints.some((kp) => kp.title.toLowerCase().includes(q) || kp.content.toLowerCase().includes(q)))
          return true
        if (t.tips.some((tip) => tip.toLowerCase().includes(q))) return true
        if (t.mnemonics.some((m) => m.toLowerCase().includes(q))) return true
        return false
      })
    }

    return topics
  }, [category, search, favorites])

  const categories: { value: Category | "todas" | "favoritos"; label: string }[] = [
    { value: "todas", label: "Todos" },
    { value: "favoritos", label: "Favoritos" },
    { value: "portugues", label: "Portugues" },
    { value: "legislacao", label: "Legislacao" },
    { value: "informatica", label: "Informatica" },
    { value: "pedagogia", label: "Pedagogia" },
  ]

  const categoryLabels: Record<string, string> = {
    portugues: "Portugues",
    legislacao: "Legislacao",
    informatica: "Informatica",
    pedagogia: "Pedagogia",
  }

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-4 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Resumos</h1>
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

      <main className="mx-auto max-w-4xl px-4 py-6">
        {/* Search */}
        <div className="mb-4 flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 shadow-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar topicos, conceitos, dicas..."
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          {search && (
            <button onClick={() => setSearch("")} className="text-xs text-muted-foreground hover:text-foreground">
              Limpar
            </button>
          )}
        </div>

        {/* Category filter */}
        <div className="mb-4 flex items-center gap-2 overflow-x-auto pb-1">
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
              {c.value === "favoritos" && <Star className="mr-1 inline h-3 w-3" />}
              {c.label}
              {c.value === "favoritos" && ` (${favorites.length})`}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{filteredTopics.length} topicos encontrados</span>
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="text-xs text-primary hover:underline"
            >
              Expandir todos
            </button>
            <span className="text-xs text-muted-foreground">/</span>
            <button
              onClick={collapseAll}
              className="text-xs text-primary hover:underline"
            >
              Recolher todos
            </button>
          </div>
        </div>

        {/* Topics */}
        {filteredTopics.length === 0 ? (
          <div className="flex flex-col items-center py-16 text-center">
            <Search className="mb-3 h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Nenhum topico encontrado para esta busca.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filteredTopics.map((topic) => {
              const isExpanded = expandedTopics.has(topic.id)
              const isFav = favorites.includes(String(topic.id))

              return (
                <div key={topic.id} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                  {/* Topic header */}
                  <div className="flex items-center gap-2 px-4 py-3">
                    <button
                      onClick={() => toggleExpand(topic.id)}
                      className="flex flex-1 items-center gap-3 text-left"
                    >
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-card-foreground">{topic.title}</p>
                        <span className="text-xs text-muted-foreground">
                          {categoryLabels[topic.category] || topic.category} - {topic.keyPoints.length} pontos
                        </span>
                      </div>
                    </button>
                    <button
                      onClick={() => handleToggleFavorite(topic.id)}
                      className="shrink-0 p-1"
                      aria-label={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                    >
                      <Star
                        className={`h-4 w-4 transition-colors ${
                          isFav ? "fill-amber-400 text-amber-400" : "text-muted-foreground hover:text-amber-400"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="border-t border-border px-4 py-4">
                      {/* Key Points */}
                      <div className="mb-4 flex flex-col gap-3">
                        {topic.keyPoints.map((kp, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <div>
                              <p className="text-sm font-semibold text-card-foreground">{kp.title}</p>
                              <p className="text-sm leading-relaxed text-muted-foreground">{kp.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tips */}
                      {topic.tips.length > 0 && (
                        <div className="mb-4">
                          <div className="flex flex-col gap-2">
                            {topic.tips.map((tip, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-900"
                              >
                                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                                <span>{tip}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Mnemonics */}
                      {topic.mnemonics.length > 0 && (
                        <div>
                          <div className="flex flex-col gap-2">
                            {topic.mnemonics.map((mnem, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 rounded-lg bg-blue-50 p-3 text-sm text-blue-900"
                              >
                                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                                <span>{mnem}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
