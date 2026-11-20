import { useRef, useState } from 'react'

export type Status = 'open' | 'correct' | 'accent' | 'wrong' | 'revealed'

export function useTaskStatus(onDone: (correct: boolean) => void) {
  const [status, setStatus] = useState<Status>('open')
  const doneRef = useRef(false)
  const finish = (next: Exclude<Status, 'open'>) => {
    if (doneRef.current) return
    doneRef.current = true
    setStatus(next)
    onDone(next === 'correct')
  }
  return { status, finish, locked: status !== 'open' }
}
