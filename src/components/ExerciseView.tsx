import { useEffect, useState } from 'react'
import type { Exercise } from '../content/types.ts'
import { recordExercise, useProgress } from '../lib/progress.ts'
import { Rich } from './Rich.tsx'
import TaskView from './tasks/TaskView.tsx'

/** Übung im Übungsmodus: alle Aufgaben untereinander, Sofort-Feedback, „Falsche wiederholen" */
export default function ExerciseView({ exercise, number }: { exercise: Exercise; number: number }) {
  const progress = useProgress()
  const saved = progress.exercises[exercise.id]
  const [round, setRound] = useState(0)
  const [firstRound, setFirstRound] = useState(true)
  const [active, setActive] = useState(() => exercise.tasks.map((_, i) => i))
  const [results, setResults] = useState<Record<number, boolean>>({})

  const answered = active.filter((i) => i in results).length
  const correct = active.filter((i) => results[i]).length
  const done = answered === active.length
  const wrong = active.filter((i) => results[i] === false)

  // Ergebnis des ersten vollständigen Durchgangs speichern
  useEffect(() => {
    if (done && firstRound) recordExercise(exercise.id, correct, active.length)
  }, [done, firstRound, correct, active.length, exercise.id])

  const repeatWrong = () => {
    setActive(wrong)
    setResults({})
    setFirstRound(false)
    setRound((r) => r + 1)
  }

  const restart = () => {
    setActive(exercise.tasks.map((_, i) => i))
    setResults({})
    setFirstRound(true)
    setRound((r) => r + 1)
  }

  return (
    <section className="card exercise" id={exercise.id}>
      <header className="exercise-head">
        <h3>Übung {number}</h3>
        {saved && (
          <span className="badge" title="Bestes Ergebnis im ersten Durchgang">
            ✓ beste: {Math.min(saved.best, saved.total)}/{saved.total}
          </span>
        )}
      </header>
      <p className="instruction">
        <Rich text={exercise.instruction} />
      </p>
      {!firstRound && <p className="muted">Wiederholung der falsch beantworteten Aufgaben:</p>}
      <ol className="task-list">
        {active.map((i) => (
          <li key={`${round}-${i}`} value={i + 1}>
            <TaskView task={exercise.tasks[i]} onDone={(ok) => setResults((r) => ({ ...r, [i]: ok }))} />
          </li>
        ))}
      </ol>
      <footer className="exercise-foot">
        <span className="muted">
          {answered}/{active.length} beantwortet · {correct} richtig
        </span>
        {done && wrong.length > 0 && (
          <button type="button" className="btn btn-primary" onClick={repeatWrong}>
            Falsche wiederholen ({wrong.length})
          </button>
        )}
        {done && (
          <button type="button" className="btn btn-ghost" onClick={restart}>
            Neu starten
          </button>
        )}
      </footer>
    </section>
  )
}
