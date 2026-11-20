import { useState } from 'react'
import type { Task } from '../content/types.ts'
import { taskPrompt, taskSolution } from '../lib/tasks.ts'
import { Rich } from './Rich.tsx'
import TaskView from './tasks/TaskView.tsx'

export interface TestItem {
  key: string
  task: Task
  instruction: string
  /** Herkunft (Titel der Einheit) – für die Auswertung im Mix-Test */
  source?: string
}

const pointsOf = (item: TestItem) => item.task.points ?? 1

function rating(percent: number) {
  if (percent >= 90) return 'Ausgezeichnet! 🎉'
  if (percent >= 75) return 'Gut gemacht!'
  if (percent >= 50) return 'Solide – wiederhole die Fehler.'
  return 'Noch einmal üben – schau dir die Erklärung an.'
}

/** Test: eine Aufgabe nach der anderen, Punkte, Auswertung, „Falsche wiederholen" */
export default function TestRunner({
  items,
  onFinish,
}: {
  items: TestItem[]
  /** nur beim ersten Durchgang (nicht bei „Falsche wiederholen") */
  onFinish?: (points: number, max: number) => void
}) {
  const [queue, setQueue] = useState(items)
  const [pos, setPos] = useState(0)
  const [results, setResults] = useState<boolean[]>([])
  const [practice, setPractice] = useState(false)
  const [round, setRound] = useState(0)

  const max = queue.reduce((sum, item) => sum + pointsOf(item), 0)
  const points = queue.reduce((sum, item, i) => sum + (results[i] ? pointsOf(item) : 0), 0)
  const finished = pos >= queue.length
  const answered = results[pos] !== undefined

  const next = () => {
    if (pos + 1 >= queue.length && !practice) onFinish?.(points, max)
    setPos(pos + 1)
  }

  const restartWith = (list: TestItem[], asPractice: boolean) => {
    setQueue(list)
    setPos(0)
    setResults([])
    setPractice(asPractice)
    setRound((r) => r + 1)
  }

  if (queue.length === 0) return <p className="muted">Keine Aufgaben vorhanden.</p>

  if (finished) {
    const percent = Math.round((points / max) * 100)
    const wrongItems = queue.filter((_, i) => !results[i])
    const sources = [...new Set(queue.map((item) => item.source).filter(Boolean))] as string[]
    return (
      <div className="test-result">
        <div className="card score-card">
          <p className="score">
            {points} / {max} Punkte
          </p>
          <div className="bar">
            <span style={{ width: `${percent}%` }} />
          </div>
          <p>
            {percent} % – {rating(percent)}
          </p>
          {practice && <p className="muted">Wiederholungsrunde – wird nicht gespeichert.</p>}
        </div>

        {sources.length > 1 && (
          <div className="card">
            <h3>Auswertung pro Einheit</h3>
            <ul className="plain">
              {sources.map((source) => {
                const own = queue.map((item, i) => ({ item, ok: results[i] })).filter((x) => x.item.source === source)
                return (
                  <li key={source}>
                    {source}: <strong>{own.filter((x) => x.ok).length}/{own.length}</strong> richtig
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        <div className="card">
          <h3>Deine Antworten</h3>
          <ol className="review-list">
            {queue.map((item, i) => (
              <li key={item.key} className={results[i] ? 'ok' : 'bad'}>
                <span aria-hidden="true">{results[i] ? '✓' : '✗'}</span> <Rich text={taskPrompt(item.task)} />
                {!results[i] && (
                  <div className="small">
                    Lösung: <span lang="es">{taskSolution(item.task)}</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="task-actions">
          {wrongItems.length > 0 && (
            <button type="button" className="btn btn-primary" onClick={() => restartWith(wrongItems, true)}>
              Falsche wiederholen ({wrongItems.length})
            </button>
          )}
          <button type="button" className="btn btn-ghost" onClick={() => restartWith(items, false)}>
            Test neu starten
          </button>
        </div>
      </div>
    )
  }

  const item = queue[pos]
  return (
    <div className="test-runner">
      <div className="test-progress">
        <span>
          Aufgabe {pos + 1} von {queue.length}
        </span>
        <span>
          {points} Punkt{points === 1 ? '' : 'e'}
        </span>
      </div>
      <div className="bar">
        <span style={{ width: `${(pos / queue.length) * 100}%` }} />
      </div>
      <div className="card">
        {item.source && <p className="muted small">{item.source}</p>}
        <p className="instruction">
          <Rich text={item.instruction} />
        </p>
        <TaskView
          key={`${round}-${pos}`}
          task={item.task}
          onDone={(ok) =>
            setResults((r) => {
              const copy = [...r]
              copy[pos] = ok
              return copy
            })
          }
        />
        {answered && (
          <div className="task-actions">
            <button type="button" className="btn btn-primary" onClick={next} autoFocus>
              {pos + 1 >= queue.length ? 'Auswerten' : 'Weiter →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
