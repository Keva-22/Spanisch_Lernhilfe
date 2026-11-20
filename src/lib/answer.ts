// Antwortprüfung für alle Eingabefelder.
// Egal: Groß-/Kleinschreibung, Leerzeichen, Satzzeichen, Subjektpronomen.
// Nur Akzent/Tilde falsch → 'accent' („Fast – Akzent!"), zählt aber als falsch.

export type CheckResult = 'correct' | 'accent' | 'wrong'

const SUBJECT_PRONOUNS = new Set([
  'yo', 'tú', 'él', 'ella', 'usted', 'nosotros', 'nosotras', 'vosotros', 'vosotras', 'ellos', 'ellas', 'ustedes',
])

// Nach diesen Wörtern ist das Pronomen kein (weglassbares) Subjekt: „para él", „más alto que yo"
const KEEP_AFTER = new Set([
  'a', 'ante', 'con', 'contra', 'de', 'desde', 'en', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sin', 'sobre',
  'tras', 'que', 'como',
])

/** Kleinbuchstaben, Satzzeichen weg, Leerzeichen zusammenfassen */
export function normalize(text: string): string {
  return text
    .normalize('NFC')
    .toLowerCase()
    .replace(/[¿¡?!.,;:"'«»“”‘’()…–—-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** á → a, ñ → n, ü → u */
export function stripAccents(text: string): string {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC')
}

/** Subjektpronomen entfernen (nicht nach Präpositionen); ein einzelnes Pronomen bleibt stehen */
function dropSubjectPronouns(text: string): string {
  const words = text.split(' ')
  const kept = words.filter((w, i) => !(SUBJECT_PRONOUNS.has(w) && !KEEP_AFTER.has(words[i - 1] ?? '')))
  return kept.length > 0 ? kept.join(' ') : text
}

/** Vergleichsform einer Antwort */
export function canonical(text: string): string {
  return dropSubjectPronouns(normalize(text))
}

export function checkAnswer(input: string, answers: string[]): CheckResult {
  const given = canonical(input)
  if (!given) return 'wrong'
  const expected = answers.map(canonical)
  if (expected.includes(given)) return 'correct'
  const bare = stripAccents(given)
  return expected.some((e) => stripAccents(e) === bare) ? 'accent' : 'wrong'
}
