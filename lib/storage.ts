import type { Question, Category } from "./types"

// ============================================================
// KEYS
// ============================================================
const KEYS = {
  USED_QUESTIONS: "ifpi_used_question_ids",
  WRONG_QUESTIONS: "ifpi_wrong_questions",
  QUIZ_HISTORY: "ifpi_quiz_history",
  FLASHCARD_PROGRESS: "ifpi_flashcard_progress",
  MARATONA_RECORD: "ifpi_maratona_record",
  FAVORITE_TOPICS: "ifpi_favorite_topics",
}

// ============================================================
// HELPERS
// ============================================================
function getItem<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function setItem<T>(key: string, value: T): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Storage full or unavailable
  }
}

// ============================================================
// USED QUESTIONS (anti-repeat)
// ============================================================
export function getUsedQuestionIds(): number[] {
  return getItem<number[]>(KEYS.USED_QUESTIONS, [])
}

export function markQuestionsUsed(ids: number[]): void {
  const existing = getUsedQuestionIds()
  const merged = [...new Set([...existing, ...ids])]
  setItem(KEYS.USED_QUESTIONS, merged)
}

export function resetUsedQuestions(): void {
  setItem(KEYS.USED_QUESTIONS, [])
}

export function getUnusedQuestions(pool: Question[], count: number): Question[] {
  const usedIds = new Set(getUsedQuestionIds())
  let unused = pool.filter((q) => !usedIds.has(q.id))

  // If not enough unused, reset and use all
  if (unused.length < count) {
    resetUsedQuestions()
    unused = [...pool]
  }

  // Shuffle and slice
  const shuffled = [...unused].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// ============================================================
// WRONG QUESTIONS (caderno de erros)
// ============================================================
export interface WrongEntry {
  questionId: number
  selectedAnswer: number
  timestamp: number
  category: Category
}

export function getWrongQuestions(): WrongEntry[] {
  return getItem<WrongEntry[]>(KEYS.WRONG_QUESTIONS, [])
}

export function addWrongQuestions(entries: WrongEntry[]): void {
  const existing = getWrongQuestions()
  // Deduplicate by questionId (keep latest attempt)
  const map = new Map<number, WrongEntry>()
  for (const e of existing) map.set(e.questionId, e)
  for (const e of entries) map.set(e.questionId, e)
  setItem(KEYS.WRONG_QUESTIONS, Array.from(map.values()))
}

export function removeWrongQuestion(questionId: number): void {
  const existing = getWrongQuestions()
  setItem(
    KEYS.WRONG_QUESTIONS,
    existing.filter((e) => e.questionId !== questionId)
  )
}

export function clearWrongQuestions(): void {
  setItem(KEYS.WRONG_QUESTIONS, [])
}

// ============================================================
// QUIZ HISTORY (stats)
// ============================================================
export interface QuizResult {
  id: string
  date: number
  totalQuestions: number
  correctCount: number
  percentage: number
  timeSpentSeconds: number
  mode: "quiz" | "simulado" | "maratona" | "erros"
  categoryBreakdown: Record<string, { correct: number; total: number }>
}

export function getQuizHistory(): QuizResult[] {
  return getItem<QuizResult[]>(KEYS.QUIZ_HISTORY, [])
}

export function addQuizResult(result: QuizResult): void {
  const existing = getQuizHistory()
  existing.push(result)
  // Keep last 50 results
  if (existing.length > 50) existing.shift()
  setItem(KEYS.QUIZ_HISTORY, existing)
}

export function clearQuizHistory(): void {
  setItem(KEYS.QUIZ_HISTORY, [])
}

// ============================================================
// MARATONA RECORD
// ============================================================
export function getMaratonaRecord(): number {
  return getItem<number>(KEYS.MARATONA_RECORD, 0)
}

export function updateMaratonaRecord(streak: number): void {
  const current = getMaratonaRecord()
  if (streak > current) {
    setItem(KEYS.MARATONA_RECORD, streak)
  }
}

// ============================================================
// FLASHCARD PROGRESS
// ============================================================
export interface FlashcardProgress {
  [questionId: number]: {
    correct: number
    wrong: number
    lastSeen: number
  }
}

export function getFlashcardProgress(): FlashcardProgress {
  return getItem<FlashcardProgress>(KEYS.FLASHCARD_PROGRESS, {})
}

export function updateFlashcardCard(questionId: number, correct: boolean): void {
  const progress = getFlashcardProgress()
  const current = progress[questionId] || { correct: 0, wrong: 0, lastSeen: 0 }
  progress[questionId] = {
    correct: current.correct + (correct ? 1 : 0),
    wrong: current.wrong + (correct ? 0 : 1),
    lastSeen: Date.now(),
  }
  setItem(KEYS.FLASHCARD_PROGRESS, progress)
}

export function resetFlashcardProgress(): void {
  setItem(KEYS.FLASHCARD_PROGRESS, {})
}

// ============================================================
// FAVORITE TOPICS
// ============================================================
export function getFavoriteTopics(): string[] {
  return getItem<string[]>(KEYS.FAVORITE_TOPICS, [])
}

export function toggleFavoriteTopic(topicId: string): void {
  const favorites = getFavoriteTopics()
  const index = favorites.indexOf(topicId)
  if (index > -1) {
    favorites.splice(index, 1)
  } else {
    favorites.push(topicId)
  }
  setItem(KEYS.FAVORITE_TOPICS, favorites)
}
