import { describe, expect, it } from 'vitest'
import { checkAnswer, normalize } from './answer.ts'
import { vocabAnswers, withoutArticle } from './vocab.ts'

describe('Antwortprüfung', () => {
  it('ignoriert Groß-/Kleinschreibung und Leerzeichen', () => {
    expect(checkAnswer('Hablo', ['hablo'])).toBe('correct')
    expect(checkAnswer('  HABLO  ', ['hablo'])).toBe('correct')
    expect(checkAnswer('ayer   fui  al cine', ['Ayer fui al cine.'])).toBe('correct')
  })

  it('ignoriert Satzzeichen ¿ ¡ ? ! . , ; :', () => {
    expect(checkAnswer('Que te dijo ayer', ['¿Qué te dijo ayer?'])).not.toBe('correct') // Akzent fehlt
    expect(checkAnswer('qué te dijo ayer', ['¿Qué te dijo ayer?'])).toBe('correct')
    expect(checkAnswer('¡Hola, Ana!', ['hola ana'])).toBe('correct')
    expect(checkAnswer('hola,ana', ['Hola, Ana'])).toBe('correct')
    expect(normalize('¿Dónde estás?')).toBe('dónde estás')
  })

  it('erkennt reine Akzentfehler als „Fast – Akzent!" (zählt als falsch)', () => {
    expect(checkAnswer('hablo', ['habló'])).toBe('accent')
    expect(checkAnswer('habló', ['hablo'])).toBe('accent')
    expect(checkAnswer('tuvó', ['tuvo'])).toBe('accent')
    expect(checkAnswer('ano', ['año'])).toBe('accent')
    expect(checkAnswer('Ayer fui al cine', ['Ayer fuí al cine'])).toBe('accent')
  })

  it('wertet andere Fehler als falsch', () => {
    expect(checkAnswer('como', ['comí'])).toBe('wrong')
    expect(checkAnswer('tuve', ['tuvo'])).toBe('wrong')
    expect(checkAnswer('', ['hablo'])).toBe('wrong')
    expect(checkAnswer('   ', ['hablo'])).toBe('wrong')
  })

  it('akzeptiert mehrere richtige Lösungen', () => {
    const answers = ['quizás', 'quizá']
    expect(checkAnswer('quizá', answers)).toBe('correct')
    expect(checkAnswer('quizás', answers)).toBe('correct')
    expect(checkAnswer('lo veo', ['lo veo', 'le veo'])).toBe('correct')
    expect(checkAnswer('le veo', ['lo veo', 'le veo'])).toBe('correct')
  })

  it('macht Subjektpronomen optional', () => {
    expect(checkAnswer('yo hablo', ['hablo'])).toBe('correct')
    expect(checkAnswer('hablo', ['yo hablo'])).toBe('correct')
    expect(checkAnswer('Nosotros fuimos', ['fuimos'])).toBe('correct')
    expect(checkAnswer('Ayer ella escribió una carta', ['Anoche escribió una carta', 'Ayer escribió una carta'])).toBe(
      'correct',
    )
    expect(checkAnswer('él comió', ['comió'])).toBe('correct')
  })

  it('lässt Pronomen nach Präpositionen und Vergleichen stehen', () => {
    expect(checkAnswer('Es para', ['Es para él'])).toBe('wrong')
    expect(checkAnswer('Mi hermano es más alto que', ['Mi hermano es más alto que yo'])).toBe('wrong')
    expect(checkAnswer('Vamos con ellos', ['Vamos con ellos'])).toBe('correct')
  })

  it('verwechselt el (Artikel) und tu (Possessiv) nicht mit Pronomen', () => {
    expect(checkAnswer('chico come', ['El chico come'])).toBe('wrong')
    expect(checkAnswer('casa es bonita', ['Tu casa es bonita'])).toBe('wrong')
  })

  it('wertet ein einzelnes Pronomen als Antwort nicht als leer', () => {
    expect(checkAnswer('yo', ['yo'])).toBe('correct')
    expect(checkAnswer('tú', ['yo'])).toBe('wrong')
  })
})

describe('Vokabel-Antworten', () => {
  it('erlaubt el/la-Kurzformen und Adjektiv-Formen', () => {
    const turista = vocabAnswers({ es: 'el/la turista', de: 'der Tourist', pos: 'noun' })
    expect(checkAnswer('el turista', turista)).toBe('correct')
    expect(checkAnswer('la turista', turista)).toBe('correct')
    const barato = vocabAnswers({ es: 'barato/-a', de: 'billig', pos: 'adj' })
    expect(checkAnswer('barato', barato)).toBe('correct')
    expect(checkAnswer('barata', barato)).toBe('correct')
    expect(checkAnswer('baratos', barato)).toBe('wrong')
  })

  it('erkennt fehlende Artikel', () => {
    const billete = vocabAnswers({ es: 'el billete', de: 'die Fahrkarte', pos: 'noun' })
    expect(checkAnswer('billete', billete)).toBe('wrong')
    expect(checkAnswer('billete', withoutArticle(billete))).toBe('correct')
  })
})
