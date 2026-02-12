import { Suspense } from "react"
import { QuizClient } from "@/components/quiz-client"
import type { Category, Difficulty } from "@/lib/types"

export const metadata = {
  title: "Quiz - Revisao IFPI 2026",
  description: "Responda questoes e teste seus conhecimentos para o concurso do IFPI.",
}

export default async function QuizPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const params = await searchParams
  const category = (params.category || "todas") as Category | "todas"
  const difficulty = (params.difficulty || "todas") as Difficulty | "todas"
  const quantity = parseInt(params.quantity || "10", 10)

  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    }>
      <QuizClient
        category={category}
        difficulty={difficulty}
        quantity={quantity}
      />
    </Suspense>
  )
}
