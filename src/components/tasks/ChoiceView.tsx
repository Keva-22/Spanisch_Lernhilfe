import { useState } from 'react'
import type { ChoiceTask } from '../../content/types.ts'
import { shuffle } from '../../lib/random.ts'
import { Feedback, TaskActions, WithBlank, type TaskProps } from './shared.tsx'
import { useTaskStatus } from './useTaskStatus.ts'

export default function ChoiceView({ task, onDone }: TaskProps<ChoiceTask>) {
  const [options] = useState(() => shuffle(task.options))
  const [picked, setPicked] = useState<string | null>(null)
  const { status, finish, locked } = useTaskStatus(onDone)

  const choose = (option: string) => {
    if (locked) return
    setPicked(option)
    finish(option === task.answer ? 'correct' : 'wrong')
  }

  return (
    <div className="task task-choice">
      <p className="sentence">
        <WithBlank text={task.prompt} />
      </p>
      <div className="options">
        {options.map((option) => {
          const state = !locked ? '' : option === task.answer ? 'is-correct' : option === picked ? 'is-wrong' : 'is-dim'
          return (
            <button
              key={option}
              type="button"
              className={`option ${state}`}
              onClick={() => choose(option)}
              disabled={locked}
            >
              {option}
            </button>
          )
        })}
      </div>
      {!locked && <TaskActions onReveal={() => finish('revealed')} />}
      <Feedback status={status} solution={task.answer} reason={task.reason} />
    </div>
  )
}
