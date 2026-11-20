import type { Area, Grade, Level, PartOfSpeech } from './types.ts'

export interface GradeInfo {
  grade: Grade
  title: string
  cefr: string
  topics: string
}

/** Klassen. Klasse 8 später: eine Zeile ergänzen. */
export const grades: GradeInfo[] = [
  { grade: 5, title: '5. Klasse', cefr: 'A1', topics: 'Presente, ser/estar/hay, gustar, ir a + Infinitiv' },
  { grade: 6, title: '6. Klasse', cefr: 'A2', topics: 'Vergangenheitszeiten, Objektpronomen, Imperativ' },
  { grade: 7, title: '7. Klasse', cefr: 'A2+/B1', topics: 'Futuro, Condicional, Subjuntivo, por/para' },
]

export const getGrade = (grade: number) => grades.find((g) => g.grade === grade)

export interface AreaInfo {
  id: Area
  title: string
  short: string
  description: string
}

export const areas: AreaInfo[] = [
  { id: 'tenses', title: 'Zeiten & Modi', short: 'ZM', description: 'Presente, Vergangenheit, Zukunft, Subjuntivo, Imperativ' },
  { id: 'grammar', title: 'Weitere Grammatik', short: 'GR', description: 'Artikel, Adjektive, Pronomen, Vergleiche, por/para …' },
  { id: 'mistakes', title: 'Typische Fehler', short: 'TF', description: 'Was Deutschsprachige oft falsch machen – mit Übungen' },
]

export const getArea = (id: string) => areas.find((a) => a.id === id)

export const levels: { id: Level; title: string }[] = [
  { id: 'easy', title: 'Leicht' },
  { id: 'medium', title: 'Mittel' },
  { id: 'hard', title: 'Schwer' },
]

export const posLabels: Record<PartOfSpeech, string> = {
  noun: 'Nomen',
  verb: 'Verb',
  adj: 'Adjektiv',
  adv: 'Adverb',
  phrase: 'Wendung',
  other: 'Sonstiges',
}
