export type Difficulty = "facil" | "medio" | "dificil"
export type Category = "portugues" | "legislacao" | "informatica" | "pedagogia"
export type Area = "informatica" | "educacionais"

export interface Question {
  id: number
  text: string
  options: string[]
  correctIndex: number
  explanation: string
  category: Category
  difficulty: Difficulty
}

export interface QuizConfig {
  area: Area
  category: Category | "todas"
  difficulty: Difficulty | "todas"
  quantity: number
}

export interface QuizState {
  questions: Question[]
  currentIndex: number
  answers: (number | null)[]
  startTime: number
  isFinished: boolean
}

export interface SimuladoState {
  questions: Question[]
  currentIndex: number
  answers: (number | null)[]
  flagged: boolean[]
  startTime: number
  timeLimit: number // in seconds
  isFinished: boolean
}
