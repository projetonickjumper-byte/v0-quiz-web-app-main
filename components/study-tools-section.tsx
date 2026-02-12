"use client"

import Link from "next/link"
import {
  Layers,
  BookX,
  Flame,
  BookOpen,
  ArrowRight,
} from "lucide-react"

const tools = [
  {
    href: "/flashcards",
    icon: Layers,
    title: "Flashcards",
    description: "Cards viraveis com repeticao espacada. Ideal para memorizar conceitos-chave.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    href: "/erros",
    icon: BookX,
    title: "Caderno de Erros",
    description: "Revise apenas as questoes que errou. Ao acertar, elas saem do caderno.",
    color: "bg-red-100 text-red-700",
  },
  {
    href: "/maratona",
    icon: Flame,
    title: "Maratona",
    description: "Quiz infinito com sequencia de acertos. Treine velocidade e resistencia.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    href: "/resumos",
    icon: BookOpen,
    title: "Resumos",
    description: "Todos os topicos com busca, dicas de banca, mnemonicos e favoritos.",
    color: "bg-blue-100 text-blue-700",
  },
]

export function StudyToolsSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8">
      <h2 className="mb-1 text-lg font-bold text-foreground">Ferramentas de Estudo</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        Recursos extras para turbinar sua preparacao
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${tool.color}`}>
              <tool.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-card-foreground">{tool.title}</h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
