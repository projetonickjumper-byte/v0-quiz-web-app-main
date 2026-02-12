import type { Metadata } from "next"
import { FlashcardClient } from "@/components/flashcard-client"

export const metadata: Metadata = {
  title: "Flashcards - Revisao IFPI 2026",
  description: "Estude com flashcards interativos e revisao espacada.",
}

export default function FlashcardsPage() {
  return <FlashcardClient />
}
