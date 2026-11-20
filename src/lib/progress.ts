// Fortschritt im localStorage: erledigte Übungen, Testergebnisse, Vokabel-Fächer (Leitner).
import { useSyncExternalStore } from 'react'

export type Direction = 'es-de' | 'de-es'

export interface ExerciseResult {
  correct: number
  total: number
  best: number
  at: number
}

export interface TestResult {
  points: number
  max: number
  best: number
  at: number
}

export interface ProgressData {
  exercises: Record<string, ExerciseResult>
  tests: Record<string, TestResult>
  mix?: { label: string; points: number; max: number; at: number }
  /** Schlüssel aus vocabKey() → Fach 1–5 */
  vocab: Record<string, number>
}

const STORAGE_KEY = 'spanisch-lernhilfe:progress:v1'

const empty = (): ProgressData => ({ exercises: {}, tests: {}, vocab: {} })

function load(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? { ...empty(), ...(JSON.parse(raw) as Partial<ProgressData>) } : empty()
  } catch {
    return empty()
  }
}

let state = load()
const listeners = new Set<() => void>()

function update(change: (p: ProgressData) => ProgressData) {
  state = change(state)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Speichern nicht möglich (z. B. privater Modus) – Fortschritt gilt dann nur bis zum Neuladen.
  }
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function useProgress(): ProgressData {
  return useSyncExternalStore(subscribe, () => state)
}

export function recordExercise(id: string, correct: number, total: number) {
  update((p) => ({
    ...p,
    exercises: {
      ...p.exercises,
      [id]: { correct, total, best: Math.max(correct, p.exercises[id]?.best ?? 0), at: Date.now() },
    },
  }))
}

export function recordTest(unitId: string, points: number, max: number) {
  update((p) => ({
    ...p,
    tests: {
      ...p.tests,
      [unitId]: { points, max, best: Math.max(points, p.tests[unitId]?.best ?? 0), at: Date.now() },
    },
  }))
}

export function recordMix(label: string, points: number, max: number) {
  update((p) => ({ ...p, mix: { label, points, max, at: Date.now() } }))
}

export const vocabKey = (fieldId: string, es: string, dir: Direction) => `${fieldId}|${es}|${dir}`

/** Fach 1–5; neue Karten liegen in Fach 1 */
export const boxOf = (p: ProgressData, key: string) => p.vocab[key] ?? 1

export function setBox(key: string, box: number) {
  update((p) => ({ ...p, vocab: { ...p.vocab, [key]: Math.min(5, Math.max(1, box)) } }))
}

export function resetProgress() {
  update(() => empty())
}
