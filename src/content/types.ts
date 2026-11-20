// Datenmodell für alle Inhalte. Neue Inhalte = neue Datei in units/, vocab/ oder text-types/.

/** Klasse (5, 6, 7 – für Klasse 8 reichen neue Daten + ein Eintrag in meta.ts) */
export type Grade = number

/** Bereich einer Einheit: Zeiten & Modi | Weitere Grammatik | Typische Fehler */
export type Area = 'tenses' | 'grammar' | 'mistakes'

/** GERS-Niveau */
export type Cefr = 'A1' | 'A2' | 'A2/B1' | 'B1' | 'B1/B2'

/** Schwierigkeitsstufe einer Übung */
export type Level = 'easy' | 'medium' | 'hard'

/**
 * Erklärungsblock. In Texten erlaubt: **fett**, *kursiv* (spanische Wörter), ~~falsch~~ (durchgestrichen).
 */
export type Block =
  | { type: 'text'; text: string }
  | { type: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { type: 'list'; items: string[] }
  | { type: 'checklist'; items: string[] } // Entscheidungs-Checkliste (Vergleichs-Einheiten)
  | { type: 'tip'; text: string } // Merkhilfe
  | { type: 'warning'; text: string } // typischer Fehler

export interface Section {
  title: string
  blocks: Block[]
}

export interface Example {
  es: string
  de: string
}

interface TaskBase {
  /** Kurze Begründung, wird nach dem Prüfen immer angezeigt (z. B. „ayer → abgeschlossen → indefinido") */
  reason: string
  /** Punkte im Test (Standard 1) */
  points?: number
  /** Eigene Arbeitsanweisung – nötig im Mini-Test, wenn die Standard-Anweisung nicht eindeutig ist */
  instruction?: string
}

/** Lückentext: genau eine Lücke „___", Hinweis (Infinitiv, Person) steht nach der Lücke */
export interface GapTask extends TaskBase {
  type: 'gap'
  text: string
  hint?: string
  answers: string[]
}

/** Multiple Choice: answer muss unter options vorkommen; „___" im prompt wird als Lücke gezeigt */
export interface ChoiceTask extends TaskBase {
  type: 'choice'
  prompt: string
  options: string[]
  answer: string
}

/** Konjugationstabelle: forms = yo, tú, él, nosotros, vosotros, ellos; given = vorausgefüllte Zeilen */
export interface TableTask extends TaskBase {
  type: 'table'
  verb: string
  tense: string
  forms: string[]
  given?: number[]
}

/** Zuordnen: linke und rechte Seiten jeweils eindeutig */
export interface MatchTask extends TaskBase {
  type: 'match'
  pairs: [string, string][]
}

/** Satzbau: words in richtiger Reihenfolge; answers = weitere richtige Reihenfolgen (ganzer Satz) */
export interface OrderTask extends TaskBase {
  type: 'order'
  words: string[]
  answers?: string[]
  de?: string
}

/** Fehler finden & korrigieren: wrong enthält genau einen Fehler */
export interface FixTask extends TaskBase {
  type: 'fix'
  wrong: string
  answers: string[]
}

/** Übersetzen DE → ES; free = freie Übersetzung mit Musterlösung (answers[0]) + Selbstbewertung */
export interface TranslateTask extends TaskBase {
  type: 'translate'
  de: string
  answers: string[]
  free?: boolean
}

export type Task = GapTask | ChoiceTask | TableTask | MatchTask | OrderTask | FixTask | TranslateTask
export type TaskType = Task['type']

export interface Exercise {
  id: string
  level: Level
  instruction: string
  tasks: Task[]
}

export interface Unit {
  id: string
  title: string
  subtitle: string
  grade: Grade
  area: Area
  cefr: Cefr
  /** Reihenfolge innerhalb der Klasse (= Nr. in docs/PLAN.md) */
  order: number
  /** IDs der Einheiten, die man vorher können sollte */
  prerequisites: string[]
  /** zusätzliche Suchbegriffe */
  keywords?: string[]
  /** „Auf einen Blick" (druckbar) */
  summary: Block[]
  explanation: Section[]
  examples: Example[]
  exercises: Exercise[]
  /** Mini-Test (10 Aufgaben) – bei Typische-Fehler-Einheiten optional */
  test?: Task[]
}

export type PartOfSpeech = 'noun' | 'verb' | 'adj' | 'adv' | 'phrase' | 'other'

export interface Word {
  /** Nomen mit Artikel („el billete"), Adjektive mit Femininum („barato/-a") */
  es: string
  de: string
  pos: PartOfSpeech
  /** Beispielsatz bei mehrdeutigen Wörtern */
  example?: Example
  /** weitere richtige Antworten im Tipp-Modus */
  accept?: string[]
}

export interface VocabField {
  id: string
  title: string
  grade: Grade
  cefr: Cefr
  order: number
  words: Word[]
}

/** Textsorte (Extra): Aufbau mit Redemitteln, Musterbeispiel, Checkliste */
export interface TextType {
  id: string
  title: string
  grade: Grade
  cefr: Cefr
  order: number
  /** Wofür, typische Aufgabe, Umfang */
  description: string
  /** Aufbau: Teil, Tipp, Redemittel */
  structure: { part: string; tip: string; phrases: Example[] }[]
  /** weitere Redemittel (z. B. Konnektoren) */
  phrases: { title: string; items: Example[] }[]
  model: { task: string; text: string; de: string }
  checklist: string[]
}
