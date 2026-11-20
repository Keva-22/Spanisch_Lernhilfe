import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import TestRunner, { type TestItem } from '../components/TestRunner.tsx'
import { units, unitNumber, unitsOfGrade } from '../content/index.ts'
import { grades } from '../content/meta.ts'
import type { Unit } from '../content/types.ts'
import { recordMix, useProgress } from '../lib/progress.ts'
import { shuffle } from '../lib/random.ts'
import { defaultInstruction } from '../lib/tasks.ts'

const SIZES = [10, 20, 30]

/** Alle Aufgaben einer Einheit (ohne freie Übersetzungen – die sind nicht automatisch bewertbar) */
function tasksOf(unit: Unit): TestItem[] {
  const fromExercises = unit.exercises.flatMap((ex) =>
    ex.tasks.map((task, i) => ({ key: `${ex.id}-${i}`, task, instruction: task.instruction ?? ex.instruction, source: unit.title })),
  )
  const fromTest = (unit.test ?? []).map((task, i) => ({
    key: `${unit.id}-test-${i}`,
    task,
    instruction: task.instruction ?? defaultInstruction[task.type],
    source: unit.title,
  }))
  return [...fromExercises, ...fromTest].filter((item) => !(item.task.type === 'translate' && item.task.free))
}

export default function MixTestPage() {
  const [params] = useSearchParams()
  const initialGrade = Number(params.get('grade'))
  const [chosen, setChosen] = useState<string[]>(() => unitsOfGrade(initialGrade).map((u) => u.id))
  const [size, setSize] = useState(10)
  const [items, setItems] = useState<TestItem[] | null>(null)
  const [label, setLabel] = useState('')
  const [run, setRun] = useState(0)
  const progress = useProgress()

  const toggle = (id: string) => setChosen((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]))
  const selectGrade = (grade: number) => setChosen(unitsOfGrade(grade).map((u) => u.id))
  const available = units.filter((u) => chosen.includes(u.id)).flatMap(tasksOf)

  const start = () => {
    const selectedUnits = units.filter((u) => chosen.includes(u.id))
    const gradeMatch = grades.find(
      (g) => unitsOfGrade(g.grade).length > 0 && unitsOfGrade(g.grade).every((u) => chosen.includes(u.id)) && selectedUnits.every((u) => u.grade === g.grade),
    )
    setLabel(gradeMatch ? gradeMatch.title : `${selectedUnits.length} Einheit${selectedUnits.length === 1 ? '' : 'en'}`)
    setItems(shuffle(available).slice(0, size))
    setRun((r) => r + 1)
  }

  if (items) {
    return (
      <div className="page">
        <p className="crumbs">
          <Link to="/">Start</Link> › <Link to="/mix" onClick={() => setItems(null)}>Mix-Test</Link> › {label}
        </p>
        <h1>Mix-Test: {label}</h1>
        <TestRunner key={run} items={items} onFinish={(points, max) => recordMix(label, points, max)} />
        <p>
          <button type="button" className="btn btn-ghost" onClick={() => setItems(null)}>
            ← Neue Auswahl
          </button>
        </p>
      </div>
    )
  }

  return (
    <div className="page">
      <p className="crumbs">
        <Link to="/">Start</Link> › Mix-Test
      </p>
      <h1>Mix-Test</h1>
      <p className="lead">Zufällige Aufgaben aus den gewählten Einheiten – mit Punkten und Auswertung pro Einheit.</p>
      {progress.mix && (
        <p className="muted">
          Letzter Mix-Test ({progress.mix.label}): {progress.mix.points}/{progress.mix.max} Punkte
        </p>
      )}

      <div className="card">
        <h2>Ganze Klasse</h2>
        <div className="chip-row">
          {grades.map((g) => (
            <button
              key={g.grade}
              type="button"
              className="chip"
              onClick={() => selectGrade(g.grade)}
              disabled={unitsOfGrade(g.grade).length === 0}
            >
              {g.title}
            </button>
          ))}
          <button type="button" className="chip" onClick={() => setChosen([])} disabled={chosen.length === 0}>
            Auswahl leeren
          </button>
        </div>

        <h2>Oder einzelne Einheiten</h2>
        {grades.map((g) => {
          const list = unitsOfGrade(g.grade)
          if (list.length === 0) return null
          return (
            <fieldset key={g.grade} className="unit-picker">
              <legend>{g.title}</legend>
              {list.map((u) => (
                <label key={u.id} className="check">
                  <input type="checkbox" checked={chosen.includes(u.id)} onChange={() => toggle(u.id)} /> {unitNumber(u)}{' '}
                  {u.title}
                </label>
              ))}
            </fieldset>
          )
        })}

        <h2>Anzahl Aufgaben</h2>
        <div className="segmented" role="radiogroup" aria-label="Anzahl">
          {SIZES.map((n) => (
            <button key={n} type="button" className={size === n ? 'active' : ''} onClick={() => setSize(n)}>
              {n}
            </button>
          ))}
        </div>
        <p className="muted small">{available.length} Aufgaben stehen zur Auswahl.</p>
        <button type="button" className="btn btn-primary" onClick={start} disabled={available.length === 0}>
          Test starten
        </button>
      </div>
    </div>
  )
}
