import { Suspense } from "react"
import { SimuladoClient } from "@/components/simulado-client"
import type { Area } from "@/lib/types"

export const metadata = {
  title: "Simulado - Revisao IFPI 2026",
  description: "Simulado identico ao formato da prova: 60 questoes com cronometro e navegacao livre.",
}

export default async function SimuladoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const params = await searchParams
  const area = (params.area || "informatica") as Area

  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    }>
      <SimuladoClient area={area} />
    </Suspense>
  )
}
