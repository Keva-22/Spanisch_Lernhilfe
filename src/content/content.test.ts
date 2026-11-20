// Prüft alle Inhalte: IDs, Pflichtfelder, Lösungen, Mindestanzahl, Abgleich mit docs/PLAN.md.
import { describe, expect, it } from 'vitest'
import planMarkdown from '../../docs/PLAN.md?raw'
import { checkAnswer } from '../lib/answer.ts'
import { vocabAnswers } from '../lib/vocab.ts'
import { textTypes, units, vocabFields } from './index.ts'
import { areas, grades } from './meta.ts'
import { tenses } from './tenses.ts'
import type { Task } from './types.ts'
import { verbs } from './verbs.ts'

// Zeilen der Plan-Tabellen: | … | `id` | Status |
const planRows = [...planMarkdown.matchAll(/\|\s*`([a-z0-9-]+)`\s*\|\s*(☐|🧪|✅)\s*\|/g)].map((m) => ({
  id: m[1],
  status: m[2],
}))
const plannedIds = new Set(planRows.map((r) => r.id))

const CEFR = ['A1', 'A2', 'A2/B1', 'B1', 'B1/B2']
const LEVELS = ['easy', 'medium', 'hard']
const ARTICLE = /^(el|la|los|las|el\/la) /
const gradeIds = grades.map((g) => g.grade)
const isSlug = (s: string) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(s)

function checkTask(task: Task, where: string) {
  expect(task.reason?.trim(), `${where}: Begründung fehlt`).toBeTruthy()
  if ('answers' in task && task.answers) {
    expect(task.answers.length, `${where}: keine Lösung`).toBeGreaterThan(0)
    for (const a of task.answers) expect(a.trim(), `${where}: leere Lösung`).toBeTruthy()
  }
  switch (task.type) {
    case 'gap':
      expect(task.text.split('___').length - 1, `${where}: braucht genau eine Lücke ___`).toBe(1)
      break
    case 'choice':
      expect(task.options.length, `${where}: zu wenige Optionen`).toBeGreaterThanOrEqual(2)
      expect(new Set(task.options).size, `${where}: doppelte Optionen`).toBe(task.options.length)
      expect(task.options, `${where}: Lösung nicht unter den Optionen`).toContain(task.answer)
      expect(
        task.options.filter((o) => checkAnswer(o, [task.answer]) === 'correct').length,
        `${where}: mehrere Optionen wären richtig`,
      ).toBe(1)
      break
    case 'table': {
      expect(task.forms, `${where}: Tabelle braucht 6 Formen`).toHaveLength(6)
      for (const f of task.forms) expect(f.trim(), `${where}: leere Form`).toBeTruthy()
      const given = task.given ?? []
      expect(given.every((i) => i >= 0 && i < 6), `${where}: given außerhalb 0–5`).toBe(true)
      expect(given.length, `${where}: alles vorgegeben`).toBeLessThan(6)
      break
    }
    case 'match':
      expect(task.pairs.length, `${where}: mindestens 3 Paare`).toBeGreaterThanOrEqual(3)
      expect(new Set(task.pairs.map((p) => p[0])).size, `${where}: linke Seite doppelt`).toBe(task.pairs.length)
      expect(new Set(task.pairs.map((p) => p[1])).size, `${where}: rechte Seite doppelt`).toBe(task.pairs.length)
      break
    case 'order':
      expect(task.words.length, `${where}: zu wenige Wörter`).toBeGreaterThanOrEqual(2)
      break
    case 'fix':
      expect(checkAnswer(task.wrong, task.answers), `${where}: Fehlersatz würde als richtig gelten`).not.toBe('correct')
      break
    case 'translate':
      expect(task.de.trim(), `${where}: deutscher Satz fehlt`).toBeTruthy()
      break
  }
}

describe('Plan', () => {
  it('enthält IDs und Status', () => {
    expect(planRows.length).toBeGreaterThan(40)
  })

  it('jeder fertige Inhalt ist im Plan abgehakt (✅ oder 🧪) und umgekehrt', () => {
    const existing = new Set([...units, ...vocabFields, ...textTypes].map((x) => x.id))
    for (const row of planRows) {
      if (row.status !== '☐') expect(existing.has(row.id), `${row.id} ist im Plan abgehakt, fehlt aber`).toBe(true)
      else expect(existing.has(row.id), `${row.id} existiert – im Plan abhaken`).toBe(false)
    }
  })
})

describe('Einheiten', () => {
  it('haben eindeutige IDs, die im Plan stehen', () => {
    const ids = units.map((u) => u.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const id of ids) {
      expect(isSlug(id), `${id}: ID nur a-z, 0-9, -`).toBe(true)
      expect(plannedIds.has(id), `${id} fehlt in docs/PLAN.md`).toBe(true)
    }
  })

  it('haben eindeutige Übungs-IDs', () => {
    const ids = units.flatMap((u) => u.exercises.map((e) => e.id))
    expect(new Set(ids).size).toBe(ids.length)
    for (const unit of units) {
      for (const e of unit.exercises) expect(e.id.startsWith(`${unit.id}-`), `${e.id}: muss mit ${unit.id}- beginnen`).toBe(true)
    }
  })

  it('haben eindeutige Reihenfolge pro Klasse', () => {
    const keys = units.map((u) => `${u.grade}.${u.order}`)
    expect(new Set(keys).size).toBe(keys.length)
  })

  for (const unit of units) {
    describe(unit.id, () => {
      const mistakes = unit.area === 'mistakes'

      it('hat Klasse, Bereich, Niveau und Texte', () => {
        expect(gradeIds).toContain(unit.grade)
        expect(areas.map((a) => a.id)).toContain(unit.area)
        expect(CEFR).toContain(unit.cefr)
        expect(unit.order).toBeGreaterThan(0)
        expect(unit.title.trim()).toBeTruthy()
        expect(unit.subtitle.trim()).toBeTruthy()
      })

      it('verweist nur auf geplante Voraussetzungen', () => {
        for (const p of unit.prerequisites) {
          expect(p).not.toBe(unit.id)
          expect(plannedIds.has(p), `Voraussetzung ${p} fehlt in docs/PLAN.md`).toBe(true)
        }
      })

      it('hat „Auf einen Blick", Erklärung und Beispiele', () => {
        expect(unit.summary.length).toBeGreaterThan(0)
        expect(unit.explanation.length).toBeGreaterThan(0)
        for (const s of unit.explanation) expect(s.blocks.length, `Abschnitt ${s.title} ist leer`).toBeGreaterThan(0)
        if (mistakes) expect(unit.examples.length).toBeGreaterThanOrEqual(4)
        else {
          expect(unit.examples.length).toBeGreaterThanOrEqual(8)
          expect(unit.examples.length).toBeLessThanOrEqual(12)
        }
      })

      it('hat genug Übungen in den Stufen', () => {
        for (const e of unit.exercises) {
          expect(LEVELS).toContain(e.level)
          expect(e.instruction.trim()).toBeTruthy()
          expect(e.tasks.length).toBeGreaterThan(0)
        }
        const count = (level: string) =>
          unit.exercises.filter((e) => e.level === level).reduce((n, e) => n + e.tasks.length, 0)
        const types = new Set(unit.exercises.flatMap((e) => e.tasks.map((t) => t.type)))
        const required = mistakes ? ['easy', 'medium'] : LEVELS
        for (const level of required) expect(count(level), `Stufe ${level}: mind. 8 Aufgaben`).toBeGreaterThanOrEqual(8)
        expect(types.size, 'zu wenige Übungstypen').toBeGreaterThanOrEqual(mistakes ? 2 : 3)
      })

      it('hat einen Mini-Test mit 10 Aufgaben', () => {
        if (mistakes && !unit.test) return
        expect(unit.test?.length).toBe(10)
      })

      it('hat zu jeder Aufgabe Lösung und Begründung', () => {
        unit.exercises.forEach((e) => e.tasks.forEach((t, i) => checkTask(t, `${e.id} #${i + 1}`)))
        unit.test?.forEach((t, i) => checkTask(t, `${unit.id} Test #${i + 1}`))
      })
    })
  }
})

describe('Wortfelder', () => {
  it('haben eindeutige IDs, die im Plan stehen', () => {
    const ids = vocabFields.map((f) => f.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const id of ids) expect(plannedIds.has(id), `${id} fehlt in docs/PLAN.md`).toBe(true)
  })

  for (const field of vocabFields) {
    it(`${field.id}: 30–50 vollständige Einträge`, () => {
      expect(gradeIds).toContain(field.grade)
      expect(CEFR).toContain(field.cefr)
      expect(field.words.length).toBeGreaterThanOrEqual(30)
      expect(field.words.length).toBeLessThanOrEqual(50)
      const es = field.words.map((w) => w.es)
      expect(new Set(es).size, 'doppelte Wörter').toBe(es.length)
      for (const w of field.words) {
        expect(w.es.trim() && w.de.trim(), `${w.es}: ES/DE fehlt`).toBeTruthy()
        if (w.pos === 'noun') expect(ARTICLE.test(w.es), `${w.es}: Nomen ohne Artikel`).toBe(true)
        expect(checkAnswer(w.es, vocabAnswers(w))).toBe('correct')
        if (w.example) expect(w.example.es.trim() && w.example.de.trim()).toBeTruthy()
      }
    })
  }
})

describe('Textsorten', () => {
  it('haben eindeutige IDs, die im Plan stehen', () => {
    const ids = textTypes.map((t) => t.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const id of ids) expect(plannedIds.has(id), `${id} fehlt in docs/PLAN.md`).toBe(true)
  })

  for (const t of textTypes) {
    it(`${t.id}: Aufbau, Mustertext und Checkliste`, () => {
      expect(t.structure.length).toBeGreaterThanOrEqual(2)
      for (const part of t.structure) expect(part.phrases.length).toBeGreaterThan(0)
      expect(t.model.text.trim() && t.model.de.trim() && t.model.task.trim()).toBeTruthy()
      expect(t.checklist.length).toBeGreaterThan(0)
    })
  }
})

describe('Verbtabellen', () => {
  const simple = ['present', 'preterite', 'imperfect', 'future', 'conditional', 'subjunctive'] as const

  it('enthalten 3 Musterverben und 15–20 unregelmäßige Verben', () => {
    expect(new Set(verbs.map((v) => v.inf)).size).toBe(verbs.length)
    expect(verbs.filter((v) => v.regular).map((v) => v.inf)).toEqual(['hablar', 'comer', 'vivir'])
    const irregular = verbs.filter((v) => !v.regular).length
    expect(irregular).toBeGreaterThanOrEqual(15)
    expect(irregular).toBeLessThanOrEqual(20)
  })

  for (const v of verbs) {
    it(`${v.inf}: vollständig und in sich stimmig`, () => {
      for (const tense of simple) {
        expect(v[tense], `${v.inf} ${tense}`).toHaveLength(6)
        for (const f of v[tense]) expect(f.trim()).toBeTruthy()
      }
      // Futuro und Condicional haben denselben Stamm
      const stem = v.future[0].slice(0, -1)
      expect(v.future).toEqual(['é', 'ás', 'á', 'emos', 'éis', 'án'].map((e) => stem + e))
      expect(v.conditional).toEqual(['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'].map((e) => stem + e))
    })
  }

  it('regelmäßige Verben folgen den Endungen', () => {
    const endings = {
      ar: {
        present: ['o', 'as', 'a', 'amos', 'áis', 'an'],
        preterite: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'],
        imperfect: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'],
        subjunctive: ['e', 'es', 'e', 'emos', 'éis', 'en'],
      },
      er: {
        present: ['o', 'es', 'e', 'emos', 'éis', 'en'],
        preterite: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
        imperfect: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
        subjunctive: ['a', 'as', 'a', 'amos', 'áis', 'an'],
      },
      ir: {
        present: ['o', 'es', 'e', 'imos', 'ís', 'en'],
        preterite: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
        imperfect: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
        subjunctive: ['a', 'as', 'a', 'amos', 'áis', 'an'],
      },
    }
    for (const v of verbs.filter((x) => x.regular)) {
      const stem = v.inf.slice(0, -2)
      const set = endings[v.inf.slice(-2) as 'ar' | 'er' | 'ir']
      for (const tense of ['present', 'preterite', 'imperfect', 'subjunctive'] as const) {
        expect(v[tense], `${v.inf} ${tense}`).toEqual(set[tense].map((e) => stem + e))
      }
    }
  })
})

describe('Zeitenübersicht', () => {
  it('verweist nur auf geplante Einheiten', () => {
    for (const t of tenses) for (const id of t.units) expect(plannedIds.has(id), `${t.id}: ${id}`).toBe(true)
  })
})
