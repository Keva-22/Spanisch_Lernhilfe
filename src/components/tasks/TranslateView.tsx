import { useRef, useState } from 'react'
import type { TranslateTask } from '../../content/types.ts'
import { checkAnswer } from '../../lib/answer.ts'
import AccentBar from '../AccentBar.tsx'
import { insertChar, onEnter, spanishInputProps } from '../../lib/input.ts'
import { Feedback, TaskActions, type TaskProps } from './shared.tsx'
import { useTaskStatus } from './useTaskStatus.ts'

export default function TranslateView({ task, onDone }: TaskProps<TranslateTask>) {
  const [value, setValue] = useState('')
  const [modelShown, setModelShown] = useState(false)
  const [touched, setTouched] = useState(false)
  const ref = useRef<HTMLTextAreaElement>(null)
  const { status, finish, locked } = useTaskStatus(onDone)

  const check = () => {
    if (!locked && value.trim()) finish(checkAnswer(value, task.answers))
  }

  return (
    <div className="task task-translate">
      <p className="sentence de">{task.de}</p>
      <textarea
        ref={ref}
        className={`text-input is-${status}`}
        rows={task.free ? 3 : 2}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={task.free ? undefined : onEnter(check)}
        onFocus={() => setTouched(true)}
        disabled={locked}
        placeholder={task.free ? 'Deine Übersetzung (wird nicht automatisch geprüft) …' : 'Auf Spanisch …'}
        aria-label="Übersetzung"
        {...spanishInputProps}
      />
      {!locked && touched && <AccentBar onInsert={(ch) => insertChar(ref.current, ch, setValue)} />}

      {!task.free && !locked && (
        <TaskActions onCheck={check} canCheck={!!value.trim()} onReveal={() => finish('revealed')} />
      )}

      {task.free && !locked && !modelShown && (
        <div className="task-actions no-print">
          <button type="button" className="btn btn-primary" onClick={() => setModelShown(true)}>
            Musterlösung zeigen
          </button>
        </div>
      )}
      {task.free && !locked && modelShown && (
        <div className="self-check">
          <p>
            Musterlösung: <span className="solution" lang="es">{task.answers[0]}</span>
          </p>
          <p className="muted">Vergleiche ehrlich – passt deine Übersetzung inhaltlich und grammatisch?</p>
          <div className="task-actions">
            <button type="button" className="btn btn-good" onClick={() => finish('correct')}>
              ✓ Hatte ich richtig
            </button>
            <button type="button" className="btn btn-bad" onClick={() => finish('wrong')}>
              ✗ Noch nicht ganz
            </button>
          </div>
        </div>
      )}

      <Feedback
        status={status}
        solution={task.free ? undefined : task.answers[0]}
        reason={task.reason}
        title={task.free ? (status === 'correct' ? '✓ Selbst als richtig bewertet' : '✗ Selbst als falsch bewertet') : undefined}
      />
      {task.free && locked && (
        <p className="solution-line">
          Musterlösung: <span className="solution" lang="es">{task.answers[0]}</span>
        </p>
      )}
      {!task.free && locked && task.answers.length > 1 && (
        <p className="muted small">Auch richtig: {task.answers.slice(1).join(' · ')}</p>
      )}
    </div>
  )
}
