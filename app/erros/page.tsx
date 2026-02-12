import type { Metadata } from "next"
import { ErrosClient } from "@/components/erros-client"

export const metadata: Metadata = {
  title: "Caderno de Erros - Revisao IFPI 2026",
  description: "Revise as questoes que voce errou e melhore seu desempenho.",
}

export default function ErrosPage() {
  return <ErrosClient />
}
