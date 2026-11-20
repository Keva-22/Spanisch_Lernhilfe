import type { Task, TaskType } from '../content/types.ts'

/** Arbeitsanweisung, wenn eine Aufgabe ohne Übung (Mini-Test) angezeigt wird */
export const defaultInstruction: Record<TaskType, string> = {
  gap: 'Setze die richtige Form ein.',
  choice: 'Wähle die richtige Antwort.',
  table: 'Ergänze die Konjugationstabelle.',
  match: 'Ordne zu: zuerst links, dann rechts antippen.',
  order: 'Bilde den Satz: Tippe die Wörter in der richtigen Reihenfolge an.',
  fix: 'Finde den Fehler und korrigiere den Satz.',
  translate: 'Übersetze ins Spanische.',
}

export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)

/** Musterlösung als Text */
export function taskSolution(task: Task): string {
  switch (task.type) {
    case 'gap':
    case 'fix':
    case 'translate':
      return task.answers[0]
    case 'choice':
      return task.answer
    case 'table':
      return task.forms.join(', ')
    case 'match':
      return task.pairs.map(([left, right]) => `${left} – ${right}`).join(' · ')
    case 'order':
      return capitalize(task.words.join(' '))
  }
}

/** Kurzfassung der Aufgabe (für Test-Auswertungen) */
export function taskPrompt(task: Task): string {
  switch (task.type) {
    case 'gap':
      return task.text.replace('___', task.hint ? `___ (${task.hint})` : '___')
    case 'choice':
      return task.prompt
    case 'table':
      return `${task.verb} – ${task.tense}`
    case 'match':
      return task.pairs.map(([left]) => left).join(', ')
    case 'order':
      return task.de ?? task.words.join(' ')
    case 'fix':
      return task.wrong
    case 'translate':
      return task.de
  }
}
