"use client"

import { useRouter } from "next/navigation"
import { GraduationCap, Laptop, BookOpen } from "lucide-react"

export function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden bg-primary px-4 py-16 md:py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary-foreground" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-primary-foreground" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
          <GraduationCap className="h-4 w-4" />
          <span>Concurso TAE - IFPI 2026</span>
        </div>
        <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Revisao IFPI 2026
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Questoes elaboradas no nivel de banca para o concurso do Instituto Federal do Piaui.
          Treine por categoria, use flashcards, revise resumos e acompanhe seu progresso.
        </p>
        <p className="mx-auto max-w-xl text-balance text-sm text-primary-foreground/60">
          Formato da prova: 60 questoes (10 Portugues + 10 Legislacao + 40 Especificas)
        </p>

        {/* Simulado Cards */}
        <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            onClick={() => router.push("/simulado?area=informatica")}
            className="group flex flex-col items-center gap-3 rounded-xl border-2 border-primary-foreground/20 bg-primary-foreground/10 px-6 py-6 text-primary-foreground transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/20 active:scale-[0.98]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/15 transition-colors group-hover:bg-primary-foreground/25">
              <Laptop className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-semibold">{"Simulado \u2013 Informatica"}</p>
              <p className="mt-1 text-sm text-primary-foreground/60">
                60 questoes com cronometro
              </p>
            </div>
          </button>

          <button
            onClick={() => router.push("/simulado?area=educacionais")}
            className="group flex flex-col items-center gap-3 rounded-xl border-2 border-primary-foreground/20 bg-primary-foreground/10 px-6 py-6 text-primary-foreground transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/20 active:scale-[0.98]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/15 transition-colors group-hover:bg-primary-foreground/25">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-semibold">{"Simulado \u2013 Assuntos Educacionais"}</p>
              <p className="mt-1 text-sm text-primary-foreground/60">
                60 questoes com cronometro
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
