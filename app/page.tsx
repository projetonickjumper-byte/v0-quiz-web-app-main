import { HeroSection } from "@/components/hero-section"
import { QuizConfigSection } from "@/components/quiz-config-section"
import { StatsDashboard } from "@/components/stats-dashboard"
import { StudyToolsSection } from "@/components/study-tools-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsDashboard />
      <QuizConfigSection />
      <StudyToolsSection />
      <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground">
        <p>Revisao IFPI 2026 - Material de estudo para o concurso TAE</p>
        <p className="mt-1">Questoes elaboradas com base na legislacao e conteudos programaticos vigentes.</p>
      </footer>
    </main>
  )
}
