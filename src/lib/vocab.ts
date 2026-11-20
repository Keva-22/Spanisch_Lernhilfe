import type { VocabField, Word } from '../content/types.ts'
import { shuffle } from './random.ts'
import { boxOf, vocabKey, type Direction, type ProgressData } from './progress.ts'

const ARTICLE = /^(el|la|los|las)(\/(el|la))? /

/** Richtige Antworten im Tipp-Modus: es-Form, accept, Kurzformen von „el/la …" und „…o/-a" */
export function vocabAnswers(word: Word): string[] {
  const answers = [word.es, ...(word.accept ?? [])]
  const both = word.es.match(/^el\/la (.+)$/)
  if (both) answers.push(`el ${both[1]}`, `la ${both[1]}`)
  const adjective = word.es.match(/^(\S+)o\/-a$/)
  if (adjective) answers.push(`${adjective[1]}o`, `${adjective[1]}a`)
  return answers
}

/** Antworten ohne Artikel – für den Hinweis „Artikel fehlt" */
export const withoutArticle = (answers: string[]) => answers.map((a) => a.replace(ARTICLE, ''))

/** Text für die Sprachausgabe: „el/la turista" → „el turista, la turista" */
export const speakable = (es: string) => es.replace(/^el\/la (.+)$/, 'el $1, la $1').replace(/\/-a\b/, '')

/** Leitner-Runde: niedrige Fächer zuerst, innerhalb eines Fachs zufällig */
export function buildDeck(field: VocabField, dir: Direction, progress: ProgressData, size = 20): Word[] {
  return shuffle(field.words)
    .map((word) => ({ word, box: boxOf(progress, vocabKey(field.id, word.es, dir)) }))
    .sort((a, b) => a.box - b.box)
    .slice(0, size)
    .map((x) => x.word)
}

/** Anzahl Wörter pro Fach (Index 0 = Fach 1) */
export function boxCounts(field: VocabField, dir: Direction, progress: ProgressData): number[] {
  const counts = [0, 0, 0, 0, 0]
  for (const w of field.words) counts[boxOf(progress, vocabKey(field.id, w.es, dir)) - 1]++
  return counts
}
