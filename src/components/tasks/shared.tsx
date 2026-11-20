import type { Task } from '../../content/types.ts'
import { Rich } from '../Rich.tsx'
import type { Status } from './useTaskStatus.ts'

export interface TaskProps<T extends Task> {
  task: T
  /** wird genau einmal aufgerufen, sobald die Aufgabe beantwortet oder aufgelöst ist */
  onDone: (correct: boolean) => void
}

export function TaskActions({
  onCheck,
  canCheck = true,
  onReveal,
}: {
  onCheck?: () => void
  canCheck?: boolean
  onReveal?: () => void
}) {
  return (
    <div className="task-actions no-print">
      {onCheck && (
        <button type="button" className="btn btn-primary" onClick={onCheck} disabled={!canCheck}>
          Prüfen
        </button>
      )}
      {onReveal && (
        <button type="button" className="btn btn-ghost" onClick={onReveal}>
          Lösung zeigen
        </button>
      )}
    </div>
  )
}

const TITLES: Record<Exclude<Status, 'open'>, string> = {
  correct: '✓ Richtig!',
  accent: '≈ Fast – Akzent!',
  wrong: '✗ Leider falsch.',
  revealed: '👁 Lösung',
}

export function Feedback({
  status,
  reason,
  solution,
  title,
}: {
  status: Status
  reason: string
  solution?: string
  title?: string
}) {
  if (status === 'open') return null
  return (
    <div className={`feedback is-${status}`} role="status">
      <strong>{title ?? TITLES[status]}</strong>
      {status !== 'correct' && solution && (
        <>
          {' '}
          Richtig: <span className="solution" lang="es">{solution}</span>
        </>
      )}
      <p className="reason">
        <Rich text={reason} />
      </p>
    </div>
  )
}

/** Zeigt „___" im Text als Lücke */
export function WithBlank({ text }: { text: string }) {
  const parts = text.split('___')
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <span className="blank">_____</span>}
          <Rich text={part} />
        </span>
      ))}
    </>
  )
}
