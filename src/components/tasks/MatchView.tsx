import { useState } from 'react'
import type { MatchTask } from '../../content/types.ts'
import { shuffle } from '../../lib/random.ts'
import { Feedback, TaskActions, type TaskProps } from './shared.tsx'
import { useTaskStatus } from './useTaskStatus.ts'

export default function MatchView({ task, onDone }: TaskProps<MatchTask>) {
  const [rights] = useState(() => shuffle(task.pairs.map((pair) => pair[1])))
  const [selected, setSelected] = useState<number | null>(null)
  const [matched, setMatched] = useState<number[]>([])
  const [mistakes, setMistakes] = useState(0)
  const [flash, setFlash] = useState<string | null>(null)
  const { status, finish, locked } = useTaskStatus(onDone)

  const chooseRight = (right: string) => {
    if (locked || selected === null) return
    if (task.pairs[selected][1] === right) {
      const next = [...matched, selected]
      setMatched(next)
      setSelected(null)
      if (next.length === task.pairs.length) finish(mistakes === 0 ? 'correct' : 'wrong')
    } else {
      setMistakes((m) => m + 1)
      setFlash(right)
      window.setTimeout(() => setFlash(null), 700)
    }
  }

  const reveal = () => {
    setMatched(task.pairs.map((_, i) => i))
    finish('revealed')
  }

  // Nummer des Paares (in der Reihenfolge, in der es gefunden wurde)
  const badge = (pairIndex: number) => {
    const pos = matched.indexOf(pairIndex)
    return pos >= 0 ? <span className="pair-badge">{pos + 1}</span> : null
  }

  return (
    <div className="task task-match">
      <div className="match-grid">
        <div className="match-col">
          {task.pairs.map(([left], i) => (
            <button
              key={left}
              type="button"
              className={`match-item ${matched.includes(i) ? 'is-matched' : ''} ${selected === i ? 'is-selected' : ''}`}
              onClick={() => !locked && !matched.includes(i) && setSelected(i)}
              disabled={locked || matched.includes(i)}
            >
              {badge(i)} {left}
            </button>
          ))}
        </div>
        <div className="match-col">
          {rights.map((right) => {
            const pairIndex = task.pairs.findIndex((p) => p[1] === right)
            const done = matched.includes(pairIndex)
            return (
              <button
                key={right}
                type="button"
                className={`match-item ${done ? 'is-matched' : ''} ${flash === right ? 'is-flash' : ''}`}
                onClick={() => chooseRight(right)}
                disabled={locked || done}
              >
                {badge(pairIndex)} {right}
              </button>
            )
          })}
        </div>
      </div>
      {!locked && <TaskActions onReveal={reveal} />}
      <Feedback
        status={status}
        reason={task.reason}
        title={
          status === 'correct'
            ? '✓ Alles richtig zugeordnet!'
            : status === 'wrong'
              ? `✗ Geschafft, aber mit ${mistakes} Fehlversuch${mistakes === 1 ? '' : 'en'}.`
              : undefined
        }
      />
    </div>
  )
}
