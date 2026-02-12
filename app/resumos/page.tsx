import type { Metadata } from "next"
import { ResumosClient } from "@/components/resumos-client"

export const metadata: Metadata = {
  title: "Resumos - Revisao IFPI 2026",
  description: "Resumos organizados por topico com busca, dicas de banca e mnemonicos.",
}

export default function ResumosPage() {
  return <ResumosClient />
}
