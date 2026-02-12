import { GraduationCap } from "lucide-react"

export function HeroSection() {
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
      </div>
    </section>
  )
}
