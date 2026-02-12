import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'Revisao IFPI 2026 - Concurso TAE',
  description: 'Questoes elaboradas no nivel de banca para o concurso do Instituto Federal do Piaui 2026. Treine por categoria ou simule a prova completa.',
}

export const viewport: Viewport = {
  themeColor: '#1a9358',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${_inter.variable} ${_jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
