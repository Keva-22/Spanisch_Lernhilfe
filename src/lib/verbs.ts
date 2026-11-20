import { getVerb, type Verb } from '../content/verbs.ts'

export const PERSONS = ['yo', 'tú', 'él/ella/usted', 'nosotros/-as', 'vosotros/-as', 'ellos/ellas/ustedes'] as const

export type TenseId =
  | 'present'
  | 'perfect'
  | 'preterite'
  | 'imperfect'
  | 'pluperfect'
  | 'future'
  | 'conditional'
  | 'subjunctive'

/** Zeiten der Verbtabellen und des Verb-Drills, mit zugehöriger Einheit */
export const verbTenses: { id: TenseId; name: string; unit: string }[] = [
  { id: 'present', name: 'Presente', unit: 'present-regular' },
  { id: 'perfect', name: 'Pretérito perfecto', unit: 'present-perfect' },
  { id: 'preterite', name: 'Pretérito indefinido', unit: 'preterite' },
  { id: 'imperfect', name: 'Pretérito imperfecto', unit: 'imperfect' },
  { id: 'pluperfect', name: 'Pluscuamperfecto', unit: 'pluperfect' },
  { id: 'future', name: 'Futuro simple', unit: 'future' },
  { id: 'conditional', name: 'Condicional', unit: 'conditional' },
  { id: 'subjunctive', name: 'Presente de subjuntivo', unit: 'subjunctive-present' },
]

const haber = getVerb('haber')!

/** Alle sechs Formen einer Zeit; Perfecto/Pluscuamperfecto = haber + Partizip */
export function conjugate(verb: Verb, tense: TenseId): string[] {
  switch (tense) {
    case 'perfect':
      return haber.present.map((h) => `${h} ${verb.participle}`)
    case 'pluperfect':
      return haber.imperfect.map((h) => `${h} ${verb.participle}`)
    default:
      return verb[tense]
  }
}

/** Imperativ: usted/ustedes und alle verneinten Formen kommen aus dem Subjuntivo */
export function imperativeRows(verb: Verb): { person: string; affirmative: string; negative: string }[] | null {
  if (!verb.imperative) return null
  const s = verb.subjunctive
  return [
    { person: 'tú', affirmative: verb.imperative.tu, negative: `no ${s[1]}` },
    { person: 'usted', affirmative: s[2], negative: `no ${s[2]}` },
    { person: 'vosotros/-as', affirmative: verb.imperative.vosotros, negative: `no ${s[4]}` },
    { person: 'ustedes', affirmative: s[5], negative: `no ${s[5]}` },
  ]
}
