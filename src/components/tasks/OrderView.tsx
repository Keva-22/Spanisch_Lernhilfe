import { useState } from 'react'
import type { OrderTask } from '../../content/types.ts'
import { checkAnswer } from '../../lib/answer.ts'
import { shuffleChanged } from '../../lib/random.ts'
import { capitalize } from '../../lib/tasks.ts'
import { Feedback, TaskActions, type TaskProps } from './shared.tsx'
import { useTaskStatus } from './useTaskStatus.ts'

interface Chip {
  word: string
  id: number
}

export default function OrderView({ task, onDone }: TaskProps<OrderTask>) {
  const [pool, setPool] = useState<Chip[]>(() => shuffleChanged(task.words.map((word, id) => ({ word, id }))))
  const [line, setLine] = useState<Chip[]>([])
  const { status, finish, locked } = useTaskStatus(onDone)
  const solution = task.words.join(' ')

  const take = (chip: Chip) => {
    if (locked) return
    setPool((p) => p.filter((c) => c.id !== chip.id))
    setLine((l) => [...l, chip])
  }
  const giveBack = (chip: Chip) => {
    if (locked) return
    setLine((l) => l.filter((c) => c.id !== chip.id))
    setPool((p) => [...p, chip])
  }
  const check = () => {
    if (locked || pool.length > 0) return
    finish(checkAnswer(line.map((c) => c.word).join(' '), [solution, ...(task.answers ?? [])]))
  }

  return (
    <div className="task task-order">
      {task.de && <p className="sentence de">{task.de}</p>}
      <div className={`order-line is-${status}`} lang="es" aria-label="Dein Satz">
        {line.length === 0 && <span className="placeholder">Tippe die Wörter unten in der richtigen Reihenfolge an …</span>}
        {line.map((chip) => (
          <button key={chip.id} type="button" className="chip chip-placed" onClick={() => giveBack(chip)} disabled={locked}>
            {chip.word}
          </button>
        ))}
      </div>
      {!locked && (
        <div className="order-pool" lang="es">
          {pool.map((chip) => (
            <button key={chip.id} type="button" className="chip" onClick={() => take(chip)}>
              {chip.word}
            </button>
          ))}
        </div>
      )}
      {!locked && <TaskActions onCheck={check} canCheck={pool.length === 0} onReveal={() => finish('revealed')} />}
      <Feedback status={status} solution={capitalize(solution)} reason={task.reason} />
    </div>
  )
}
