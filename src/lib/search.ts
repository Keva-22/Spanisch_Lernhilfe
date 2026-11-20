import { textTypes, units, vocabFields } from '../content/index.ts'
import type { TextType, Unit, VocabField, Word } from '../content/types.ts'
import { stripAccents } from './answer.ts'

const fold = (text: string) => stripAccents(text.toLowerCase())

export interface SearchResults {
  units: Unit[]
  words: { field: VocabField; word: Word }[]
  textTypes: TextType[]
}

/** Suche über Einheiten, Vokabeln und Textsorten – ohne Rücksicht auf Akzente und Groß/Klein */
export function search(query: string): SearchResults {
  const q = fold(query.trim())
  if (q.length < 2) return { units: [], words: [], textTypes: [] }
  return {
    units: units.filter((u) => fold([u.title, u.subtitle, ...(u.keywords ?? [])].join(' ')).includes(q)),
    words: vocabFields
      .flatMap((field) => field.words.map((word) => ({ field, word })))
      .filter(({ word }) => fold(word.es).includes(q) || fold(word.de).includes(q))
      .slice(0, 30),
    textTypes: textTypes.filter((t) => fold(`${t.title} ${t.description}`).includes(q)),
  }
}
