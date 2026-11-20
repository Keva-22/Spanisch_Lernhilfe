import { unitsOfGrade, vocabOfGrade } from '../content/index.ts'
import type { Grade, Unit } from '../content/types.ts'
import { boxOf, vocabKey, type ProgressData } from './progress.ts'

/** Anteil erledigter Übungen einer Einheit (0–1) */
export function unitDone(unit: Unit, progress: ProgressData) {
  if (unit.exercises.length === 0) return 0
  return unit.exercises.filter((e) => progress.exercises[e.id]).length / unit.exercises.length
}

/** Kennzahlen einer Klasse für Start- und Fortschrittsseite */
export function gradeStats(grade: Grade, progress: ProgressData) {
  const units = unitsOfGrade(grade)
  const exercises = units.flatMap((u) => u.exercises)
  const withTest = units.filter((u) => u.test && u.test.length > 0)
  const words = vocabOfGrade(grade).flatMap((f) =>
    f.words.flatMap((w) => [vocabKey(f.id, w.es, 'es-de'), vocabKey(f.id, w.es, 'de-es')]),
  )
  return {
    units: units.length,
    exercises: exercises.length,
    exercisesDone: exercises.filter((e) => progress.exercises[e.id]).length,
    tests: withTest.length,
    testsDone: withTest.filter((u) => progress.tests[u.id]).length,
    cards: words.length,
    cardsKnown: words.filter((key) => boxOf(progress, key) >= 4).length,
  }
}
