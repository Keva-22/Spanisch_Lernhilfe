import type { Task } from '../../content/types.ts'
import ChoiceView from './ChoiceView.tsx'
import FixView from './FixView.tsx'
import GapView from './GapView.tsx'
import MatchView from './MatchView.tsx'
import OrderView from './OrderView.tsx'
import TableView from './TableView.tsx'
import TranslateView from './TranslateView.tsx'

/** Zeigt eine Aufgabe passend zu ihrem Typ an */
export default function TaskView({ task, onDone }: { task: Task; onDone: (correct: boolean) => void }) {
  switch (task.type) {
    case 'gap':
      return <GapView task={task} onDone={onDone} />
    case 'choice':
      return <ChoiceView task={task} onDone={onDone} />
    case 'table':
      return <TableView task={task} onDone={onDone} />
    case 'match':
      return <MatchView task={task} onDone={onDone} />
    case 'order':
      return <OrderView task={task} onDone={onDone} />
    case 'fix':
      return <FixView task={task} onDone={onDone} />
    case 'translate':
      return <TranslateView task={task} onDone={onDone} />
  }
}
