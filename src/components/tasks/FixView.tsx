import { useRef, useState } from 'react'
import type { FixTask } from '../../content/types.ts'
import { checkAnswer } from '../../lib/answer.ts'
import AccentBar from '../AccentBar.tsx'
import { insertChar, onEnter, spanishInputProps } from '../../lib/input.ts'
import { Feedback, TaskActions, type TaskProps } from './shared.tsx'
import { useTaskStatus } from './useTaskStatus.ts'

export default function FixView({ task, onDone }: TaskProps<FixTask>) {
  const [value, setValue] = useState(task.wrong)
  const [touched, setTouched] = useState(false)
  const ref = useRef<HTMLTextAreaElement>(null)
  const { status, finish, locked } = useTaskStatus(onDone)

  const check = () => {
    if (!locked && value.trim()) finish(checkAnswer(value, task.answers))
  }

  return (
    <div className="task task-fix">
      <p className="sentence wrong-sentence" lang="es">
        {task.wrong}
      </p>
      <textarea
        ref={ref}
        className={`text-input is-${status}`}
        rows={2}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onEnter(check)}
        onFocus={() => setTouched(true)}
        disabled={locked}
        aria-label="Korrigierter Satz"
        {...spanishInputProps}
      />
      {!locked && (
        <>
          {touched && <AccentBar onInsert={(ch) => insertChar(ref.current, ch, setValue)} />}
          <TaskActions onCheck={check} canCheck={!!value.trim()} onReveal={() => finish('revealed')} />
        </>
      )}
      <Feedback status={status} solution={task.answers[0]} reason={task.reason} />
    </div>
  )
}
