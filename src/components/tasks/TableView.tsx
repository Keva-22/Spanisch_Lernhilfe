import { useRef, useState, type KeyboardEvent } from 'react'
import type { TableTask } from '../../content/types.ts'
import { checkAnswer, type CheckResult } from '../../lib/answer.ts'
import { PERSONS } from '../../lib/verbs.ts'
import AccentBar from '../AccentBar.tsx'
import { insertChar, spanishInputProps } from '../../lib/input.ts'
import { Rich } from '../Rich.tsx'
import { Feedback, TaskActions, type TaskProps } from './shared.tsx'
import { useTaskStatus } from './useTaskStatus.ts'

export default function TableView({ task, onDone }: TaskProps<TableTask>) {
  const given = task.given ?? []
  const open = task.forms.map((_, i) => i).filter((i) => !given.includes(i))
  const [values, setValues] = useState(() => task.forms.map((form, i) => (given.includes(i) ? form : '')))
  const [cells, setCells] = useState<(CheckResult | null)[]>(() => task.forms.map(() => null))
  const inputs = useRef<(HTMLInputElement | null)[]>([])
  const lastFocused = useRef(open[0] ?? 0)
  const [touched, setTouched] = useState(false)
  const { status, finish, locked } = useTaskStatus(onDone)
  const canCheck = open.every((i) => values[i].trim())

  const setValue = (index: number, value: string) =>
    setValues((prev) => prev.map((v, i) => (i === index ? value : v)))

  const check = () => {
    if (locked || !canCheck) return
    const results = task.forms.map((form, i) => (given.includes(i) ? 'correct' : checkAnswer(values[i], [form])))
    setCells(results)
    if (results.every((r) => r === 'correct')) finish('correct')
    else finish(results.includes('wrong') ? 'wrong' : 'accent')
  }

  // Enter: zum nächsten Feld springen, im letzten Feld prüfen
  const handleKey = (index: number) => (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    const next = open.find((i) => i > index)
    if (next !== undefined) inputs.current[next]?.focus()
    else check()
  }

  return (
    <div className="task task-table">
      <p className="sentence">
        <strong lang="es">{task.verb}</strong> · {task.tense}
      </p>
      <table className="conj-table">
        <tbody>
          {task.forms.map((form, i) => {
            const showSolution = locked && !given.includes(i) && (status === 'revealed' || cells[i] !== 'correct')
            return (
              <tr key={i}>
                <th scope="row">
                  <Rich text={PERSONS[i]} />
                </th>
                <td>
                  {given.includes(i) ? (
                    <span className="given" lang="es">
                      {form}
                    </span>
                  ) : (
                    <input
                      ref={(el) => {
                        inputs.current[i] = el
                      }}
                      className={cells[i] ? `is-${cells[i]}` : ''}
                      value={values[i]}
                      onChange={(e) => setValue(i, e.target.value)}
                      onFocus={() => {
                        lastFocused.current = i
                        setTouched(true)
                      }}
                      onKeyDown={handleKey(i)}
                      disabled={locked}
                      aria-label={PERSONS[i]}
                      {...spanishInputProps}
                    />
                  )}
                  {showSolution && (
                    <span className="cell-solution" lang="es">
                      → {form}
                    </span>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {!locked && (
        <>
          {touched && (
            <AccentBar
              onInsert={(ch) =>
                insertChar(inputs.current[lastFocused.current], ch, (v) => setValue(lastFocused.current, v))
              }
            />
          )}
          <TaskActions onCheck={check} canCheck={canCheck} onReveal={() => finish('revealed')} />
        </>
      )}
      <Feedback status={status} reason={task.reason} />
    </div>
  )
}
