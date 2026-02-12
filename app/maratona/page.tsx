import type { Metadata } from "next"
import { MaratonaClient } from "@/components/maratona-client"

export const metadata: Metadata = {
  title: "Maratona - Revisao IFPI 2026",
  description: "Quiz infinito com sequencia de acertos. Treine sua velocidade e resistencia.",
}

export default function MaratonaPage() {
  return <MaratonaClient />
}
