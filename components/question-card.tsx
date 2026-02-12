"use client"

import { CheckCircle2, XCircle } from "lucide-react"
import type { Question } from "@/lib/types"

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  selectedAnswer: number | null
  showResult: boolean
  onSelectAnswer: (index: number) => void
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  showResult,
  onSelectAnswer,
}: QuestionCardProps) {
  const difficultyColors = {
    facil: "bg-emerald-100 text-emerald-700",
    medio: "bg-amber-100 text-amber-700",
    dificil: "bg-red-100 text-red-700",
  }

  const categoryLabels: Record<string, string> = {
    portugues: "Lingua Portuguesa",
    legislacao: "Legislacao",
    informatica: "Informatica",
    pedagogia: "Assuntos Educacionais",
  }

  return (
    <div className="rounded-xl border border-border bg-card shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-6 py-4">
        <span className="text-sm font-semibold text-foreground">
          Questao {questionNumber} de {totalQuestions}
        </span>
        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
          {categoryLabels[question.category] || question.category}
        </span>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${difficultyColors[question.difficulty]}`}>
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </span>
      </div>

      {/* Question Text */}
      <div className="px-6 py-6">
        <p className="whitespace-pre-line text-base leading-relaxed text-card-foreground">
          {question.text}
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3 px-6 pb-6">
        {question.options.map((option, index) => {
          const letter = String.fromCharCode(65 + index) // A, B, C, D, E
          const isSelected = selectedAnswer === index
          const isCorrect = index === question.correctIndex
          const showCorrect = showResult && isCorrect
          const showWrong = showResult && isSelected && !isCorrect

          let optionClasses = "flex items-start gap-3 rounded-lg border-2 p-4 text-left transition-all cursor-pointer "

          if (showCorrect) {
            optionClasses += "border-emerald-500 bg-emerald-50 text-emerald-900"
          } else if (showWrong) {
            optionClasses += "border-red-500 bg-red-50 text-red-900"
          } else if (isSelected && !showResult) {
            optionClasses += "border-primary bg-accent text-accent-foreground"
          } else {
            optionClasses += "border-border bg-card text-card-foreground hover:border-primary/50 hover:bg-accent/50"
          }

          return (
            <button
              key={index}
              onClick={() => !showResult && onSelectAnswer(index)}
              disabled={showResult}
              className={optionClasses}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                {letter}
              </span>
              <span className="flex-1 pt-0.5 text-sm leading-relaxed">{option}</span>
              {showCorrect && <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />}
              {showWrong && <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <div className="border-t border-border bg-secondary/50 px-6 py-5">
          <p className="mb-1 text-sm font-semibold text-foreground">Explicacao:</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
