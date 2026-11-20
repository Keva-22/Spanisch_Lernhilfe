import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AccentBar from '../components/AccentBar.tsx'
import { verbs, type Verb } from '../content/verbs.ts'
import { checkAnswer, type CheckResult } from '../lib/answer.ts'
import { insertChar, spanishInputProps } from '../lib/input.ts'
import { pick } from '../lib/random.ts'
import { conjugate, PERSONS, verbTenses, type TenseId } from '../lib/verbs.ts'

type VerbSet = 'all' | 'irregular' | 'regular'

interface Question {
  verb: Verb
  tense: TenseId
  person: number
}

const MESSAGES: Record<CheckResult, string> = {
  correct: '✓ Richtig!',
  accent: '≈ Fast – Akzent!',
  wrong: '✗ Leider falsch.',
}

export default function VerbDrillPage() {
  const [selected, setSelected] = useState<TenseId[]>(['present', 'preterite'])
  const [verbSet, setVerbSet] = useState<VerbSet>('all')
  const [question, setQuestion] = useState<Question | null>(null)
  const [value, setValue] = useState('')
  const [result, setResult] = useState<CheckResult | null>(null)
  const [stats, setStats] = useState({ right: 0, total: 0, streak: 0 })
  const inputRef = useRef<HTMLInputElement>(null)

  const pool = verbs.filter((v) => verbSet === 'all' || (verbSet === 'regular') === v.regular)

  const newQuestion = () => {
    if (selected.length === 0 || pool.length === 0) return
    setQuestion({ verb: pick(pool), tense: pick(selected), person: Math.floor(Math.random() * 6) })
    setValue('')
    setResult(null)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const toggleTense = (id: TenseId) =>
    setSelected((list) => (list.includes(id) ? list.filter((t) => t !== id) : [...list, id]))

  const solution = question ? conjugate(question.verb, question.tense)[question.person] : ''

  const check = () => {
    if (!question || !value.trim() || result) return
    const res = checkAnswer(value, [solution])
    setResult(res)
    setStats((s) => ({
      right: s.right + (res === 'correct' ? 1 : 0),
      total: s.total + 1,
      streak: res === 'correct' ? s.streak + 1 : 0,
    }))
  }

  return (
    <div className="page">
      <p className="crumbs">
        <Link to="/">Start</Link> › Verb-Drill
      </p>
      <h1>Verb-Drill</h1>
      <p className="lead">Zufällige Abfrage: Verb × Zeit × Person. Enter prüft, Enter nochmal = nächste Frage.</p>

      <div className="card">
        <h2>Zeiten</h2>
        <div className="chip-row">
          {verbTenses.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`chip ${selected.includes(t.id) ? 'chip-on' : ''}`}
              onClick={() => toggleTense(t.id)}
              aria-pressed={selected.includes(t.id)}
            >
              {t.name}
            </button>
          ))}
        </div>
        <h2>Verben</h2>
        <div className="segmented" role="radiogroup" aria-label="Verben">
          {(
            [
              ['all', 'alle'],
              ['irregular', 'unregelmäßige'],
              ['regular', 'regelmäßige'],
            ] as const
          ).map(([id, label]) => (
            <button key={id} type="button" className={verbSet === id ? 'active' : ''} onClick={() => setVerbSet(id)}>
              {label}
            </button>
          ))}
        </div>
        {!question && (
          <button type="button" className="btn btn-primary" onClick={newQuestion} disabled={selected.length === 0}>
            Los geht's
          </button>
        )}
      </div>

      {question && (
        <div className="card drill-card">
          <p className="drill-prompt">
            <strong lang="es">{question.verb.inf}</strong> <span className="muted">({question.verb.de})</span>
            <br />
            <span lang="es">{verbTenses.find((t) => t.id === question.tense)?.name}</span> ·{' '}
            <strong>{PERSONS[question.person]}</strong>
          </p>
          <input
            ref={inputRef}
            className={`text-input big ${result ? `is-${result}` : ''}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== 'Enter') return
              e.preventDefault()
              if (result) newQuestion()
              else check()
            }}
            readOnly={!!result}
            autoFocus
            aria-label="Verbform"
            {...spanishInputProps}
          />
          {!result && <AccentBar onInsert={(ch) => insertChar(inputRef.current, ch, setValue)} />}
          {result ? (
            <div className={`feedback is-${result}`} role="status">
              <strong>{MESSAGES[result]}</strong>{' '}
              {result !== 'correct' && (
                <>
                  Richtig: <span className="solution" lang="es">{solution}</span>
                </>
              )}
              <div className="task-actions">
                <button type="button" className="btn btn-primary" onClick={newQuestion}>
                  Nächste Frage →
                </button>
                <Link to={`/verbs/${question.verb.inf}`} className="btn btn-ghost">
                  Tabelle von {question.verb.inf}
                </Link>
              </div>
            </div>
          ) : (
            <div className="task-actions">
              <button type="button" className="btn btn-primary" onClick={check} disabled={!value.trim()}>
                Prüfen
              </button>
            </div>
          )}
          <p className="muted small">
            {stats.right}/{stats.total} richtig · Serie: {stats.streak} 🔥
          </p>
        </div>
      )}
    </div>
  )
}
