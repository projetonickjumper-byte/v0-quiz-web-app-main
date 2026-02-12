import { Suspense } from "react"
import { ReviewClient } from "@/components/review-client"
import type { Category } from "@/lib/types"

export const metadata = {
  title: "Revisao de Conteudo - IFPI 2026",
  description: "Revise todas as questoes com gabarito comentado antes de iniciar o quiz.",
}

export default async function ReviewPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const params = await searchParams
  const categoryParam = params.category || "todas"
  const categories = categoryParam.includes(",")
    ? categoryParam.split(",") as Category[]
    : categoryParam as Category | "todas"

  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    }>
      <ReviewClient category={categories} />
    </Suspense>
  )
}
