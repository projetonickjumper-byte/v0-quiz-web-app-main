"use client"

import { useState, useMemo, useEffect } from "react"
import { useRouter } from "next/navigation"
import { BookOpen, Brain, FileText, GraduationCap, Laptop, Scale } from "lucide-react"
import type { Area, Category, Difficulty } from "@/lib/types"
import { getQuestionsByCategory, getQuestionsByDifficulty } from "@/lib/questions"

const categories: { value: Category | "todas"; label: string; description: string; icon: React.ReactNode }[] = [
  { value: "todas", label: "Todas as Categorias", description: "Questoes variadas de todos os temas", icon: <Brain className="h-5 w-5" /> },
  { value: "portugues", label: "Lingua Portuguesa", description: "Interpretacao de texto, gramatica, ortografia e semantica", icon: <FileText className="h-5 w-5" /> },
  { value: "legislacao", label: "Legislacao", description: "CF, Lei 8.112, LDB, Lei 11.892 e mais", icon: <Scale className="h-5 w-5" /> },
  { value: "informatica", label: "Informatica", description: "Algoritmos, POO, Banco de Dados, Redes e mais", icon: <Laptop className="h-5 w-5" /> },
  { value: "pedagogia", label: "Assuntos Educacionais", description: "Didatica, LDB, BNCC, Teorias da Aprendizagem e mais", icon: <GraduationCap className="h-5 w-5" /> },
]

const difficulties: { value: Difficulty | "todas"; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "facil", label: "Facil" },
  { value: "medio", label: "Medio" },
  { value: "dificil", label: "Dificil" },
]

const quantities = [5, 10, 15, 20]

export function QuizConfigSection() {
  const router = useRouter()
  const [area, setArea] = useState<Area>("informatica")
  const [category, setCategory] = useState<Category | "todas">("todas")
  const [difficulty, setDifficulty] = useState<Difficulty | "todas">("todas")
  const [quantity, setQuantity] = useState(10)

  // Calculate available questions for the current filter selection
  const availableCount = useMemo(() => {
    const filtered = getQuestionsByCategory(category)
    return getQuestionsByDifficulty(filtered, difficulty).length
  }, [category, difficulty])

  // Auto-adjust quantity if it exceeds available questions
  useEffect(() => {
    if (quantity > availableCount && availableCount > 0) {
      // Pick the largest valid quantity option
      const valid = quantities.filter(q => q <= availableCount)
      setQuantity(valid.length > 0 ? valid[valid.length - 1] : availableCount)
    }
  }, [availableCount, quantity])

  function handleStart() {
    const params = new URLSearchParams({
      area,
      category,
      difficulty,
      quantity: quantity.toString(),
    })
    router.push(`/quiz?${params.toString()}`)
  }

  function handleReview() {
    const params = new URLSearchParams({
      area,
      category,
    })
    router.push(`/review?${params.toString()}`)
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="mb-2 text-center text-2xl font-bold text-foreground">
        ou treine por categoria
      </h2>
      <p className="mb-10 text-center text-muted-foreground">
        Personalize seu treino escolhendo area, categoria, dificuldade e quantidade
      </p>

      {/* Area Selection */}
      <div className="mb-8">
        <label className="mb-3 block text-sm font-medium text-foreground">
          Area de atuacao
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            onClick={() => setArea("informatica")}
            className={`flex items-center gap-3 rounded-lg border-2 p-4 text-left transition-all ${
              area === "informatica"
                ? "border-primary bg-accent text-accent-foreground"
                : "border-border bg-card text-card-foreground hover:border-primary/50"
            }`}
          >
            <Laptop className="h-5 w-5 shrink-0" />
            <div>
              <p className="font-medium">Informatica</p>
              <p className="text-sm text-muted-foreground">+ Informatica</p>
            </div>
          </button>
          <button
            onClick={() => setArea("educacionais")}
            className={`flex items-center gap-3 rounded-lg border-2 p-4 text-left transition-all ${
              area === "educacionais"
                ? "border-primary bg-accent text-accent-foreground"
                : "border-border bg-card text-card-foreground hover:border-primary/50"
            }`}
          >
            <GraduationCap className="h-5 w-5 shrink-0" />
            <div>
              <p className="font-medium">Assuntos Educacionais</p>
              <p className="text-sm text-muted-foreground">+ Pedagogia e Educacao</p>
            </div>
          </button>
        </div>
      </div>

      {/* Category Selection */}
      <div className="mb-8">
        <label className="mb-3 block text-sm font-medium text-foreground">
          Categoria
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`flex items-start gap-3 rounded-lg border-2 p-4 text-left transition-all ${
                category === cat.value
                  ? "border-primary bg-accent text-accent-foreground"
                  : "border-border bg-card text-card-foreground hover:border-primary/50"
              }`}
            >
              <div className="mt-0.5 shrink-0">{cat.icon}</div>
              <div>
                <p className="font-medium">{cat.label}</p>
                <p className="text-xs text-muted-foreground">{cat.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty Selection */}
      <div className="mb-8">
        <label className="mb-3 block text-sm font-medium text-foreground">
          Dificuldade
        </label>
        <div className="flex flex-wrap gap-3">
          {difficulties.map((diff) => (
            <button
              key={diff.value}
              onClick={() => setDifficulty(diff.value)}
              className={`rounded-lg border-2 px-5 py-2.5 text-sm font-medium transition-all ${
                difficulty === diff.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-card-foreground hover:border-primary/50"
              }`}
            >
              {diff.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selection */}
      <div className="mb-10">
        <label className="mb-3 block text-sm font-medium text-foreground">
          Quantidade de questoes
          <span className="ml-2 text-xs font-normal text-muted-foreground">
            ({availableCount} disponiveis)
          </span>
        </label>
        <div className="flex flex-wrap gap-3">
          {quantities.map((qty) => {
            const disabled = qty > availableCount
            return (
              <button
                key={qty}
                onClick={() => !disabled && setQuantity(qty)}
                disabled={disabled}
                className={`rounded-lg border-2 px-5 py-2.5 text-sm font-medium transition-all ${
                  disabled
                    ? "cursor-not-allowed border-border bg-secondary/50 text-muted-foreground opacity-50"
                    : quantity === qty
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-card-foreground hover:border-primary/50"
                }`}
              >
                {qty} questoes
              </button>
            )
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleStart}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Brain className="h-5 w-5" />
          Iniciar Quiz
        </button>
        <button
          onClick={handleReview}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-border bg-card px-8 py-4 text-base font-semibold text-card-foreground transition-all hover:border-primary/50"
        >
          <BookOpen className="h-5 w-5" />
          Revisar conteudo antes do Quiz
        </button>
      </div>
    </section>
  )
}
