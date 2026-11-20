import { useRef, useState } from 'react'
import type { GapTask } from '../../content/types.ts'
import { checkAnswer } from '../../lib/answer.ts'
import AccentBar from '../AccentBar.tsx'
import { insertChar, onEnter, spanishInputProps } from '../../lib/input.ts'
import { Rich } from '../Rich.tsx'
import { Feedback, TaskActions, type TaskProps } from './shared.tsx'
import { useTaskStatus } from './useTaskStatus.ts'

export default function GapView({ task, onDone }: TaskProps<GapTask>) {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { status, finish, locked } = useTaskStatus(onDone)
  const [before, after = ''] = task.text.split('___')
  const width = Math.max(7, ...task.answers.map((a) => a.length)) + 2

  const check = () => {
    if (!locked && value.trim()) finish(checkAnswer(value, task.answers))
  }

  return (
    <div className="task task-gap">
      <p className="sentence" lang="es">
        <Rich text={before} />
        <input
          ref={inputRef}
          className={`gap-input is-${status}`}
          style={{ width: `${width}ch` }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onEnter(check)}
          onFocus={() => setTouched(true)}
          disabled={locked}
          aria-label="Lücke"
          {...spanishInputProps}
        />
        {task.hint && <span className="hint"> ({task.hint})</span>}
        <Rich text={after} />
      </p>
      {!locked && (
        <>
          {touched && <AccentBar onInsert={(ch) => insertChar(inputRef.current, ch, setValue)} />}
          <TaskActions onCheck={check} canCheck={!!value.trim()} onReveal={() => finish('revealed')} />
        </>
      )}
      <Feedback status={status} solution={task.answers[0]} reason={task.reason} />
    </div>
  )
}
