import { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AccentBar from '../components/AccentBar.tsx'
import BoxBars from '../components/BoxBars.tsx'
import { getVocabField } from '../content/index.ts'
import { posLabels } from '../content/meta.ts'
import type { VocabField, Word } from '../content/types.ts'
import { checkAnswer } from '../lib/answer.ts'
import { insertChar, spanishInputProps } from '../lib/input.ts'
import { boxOf, setBox, useProgress, vocabKey } from '../lib/progress.ts'
import { speak } from '../lib/speech.ts'
import { boxCounts, buildDeck, speakable, vocabAnswers, withoutArticle } from '../lib/vocab.ts'
import NotFoundPage from './NotFoundPage.tsx'

type Result = 'correct' | 'accent' | 'article' | 'wrong'

const MESSAGES: Record<Result, string> = {
  correct: '✓ Richtig!',
  accent: '≈ Fast – Akzent!',
  article: '≈ Fast – Artikel fehlt!',
  wrong: '✗ Leider falsch.',
}

export default function TypingPage() {
  const { id = '' } = useParams()
  const field = getVocabField(id)
  if (!field) return <NotFoundPage />
  return <Typing key={field.id} field={field} />
}

function Typing({ field }: { field: VocabField }) {
  const progress = useProgress()
  const [deck, setDeck] = useState<Word[] | null>(null)
  const [pos, setPos] = useState(0)
  const [value, setValue] = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const [score, setScore] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const start = () => {
    setDeck(buildDeck(field, 'de-es', progress))
    setPos(0)
    setScore(0)
    setValue('')
    setResult(null)
  }

  const check = (word: Word) => {
    if (!value.trim()) return
    const answers = vocabAnswers(word)
    let res: Result = checkAnswer(value, answers)
    if (res === 'wrong' && word.pos === 'noun' && checkAnswer(value, withoutArticle(answers)) === 'correct') {
      res = 'article'
    }
    const key = vocabKey(field.id, word.es, 'de-es')
    setBox(key, res === 'correct' ? boxOf(progress, key) + 1 : 1)
    if (res === 'correct') setScore((s) => s + 1)
    setResult(res)
  }

  const giveUp = (word: Word) => {
    setBox(vocabKey(field.id, word.es, 'de-es'), 1)
    setResult('wrong')
  }

  const next = () => {
    setPos((p) => p + 1)
    setValue('')
    setResult(null)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const header = (
    <>
      <p className="crumbs">
        <Link to="/">Start</Link> › <Link to="/vocab">Vokabeln</Link> › <Link to={`/vocab/${field.id}`}>{field.title}</Link>{' '}
        › Tippen
      </p>
      <h1>Tippen DE → ES: {field.title}</h1>
    </>
  )

  if (!deck) {
    return (
      <div className="page">
        {header}
        <div className="card">
          <p>
            Du siehst das deutsche Wort und schreibst das spanische – Nomen <strong>mit Artikel</strong> (z. B.{' '}
            <em lang="es">el billete</em>). Groß-/Kleinschreibung und Satzzeichen sind egal, Akzente zählen.
          </p>
          <h2>Deine Fächer (DE → ES)</h2>
          <BoxBars counts={boxCounts(field, 'de-es', progress)} />
          <button type="button" className="btn btn-primary" onClick={start}>
            Runde starten ({Math.min(20, field.words.length)} Wörter)
          </button>
        </div>
      </div>
    )
  }

  if (pos >= deck.length) {
    return (
      <div className="page">
        {header}
        <div className="card score-card">
          <p className="score">
            {score} / {deck.length} richtig
          </p>
          <BoxBars counts={boxCounts(field, 'de-es', progress)} />
          <div className="task-actions">
            <button type="button" className="btn btn-primary" onClick={start}>
              Neue Runde
            </button>
            <Link to={`/vocab/${field.id}`} className="btn btn-ghost">
              Zur Wortliste
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const word = deck[pos]
  return (
    <div className="page">
      {header}
      <div className="test-progress">
        <span>
          Wort {pos + 1} von {deck.length}
        </span>
        <span>{score} richtig</span>
      </div>
      <div className="bar">
        <span style={{ width: `${(pos / deck.length) * 100}%` }} />
      </div>
      <div className="card typing-card">
        <p className="card-front">{word.de}</p>
        <p className="muted small">{posLabels[word.pos]}</p>
        <input
          ref={inputRef}
          className={`text-input big ${result ? `is-${result === 'article' ? 'accent' : result}` : ''}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== 'Enter') return
            e.preventDefault()
            if (result) next()
            else check(word)
          }}
          readOnly={!!result}
          autoFocus
          placeholder="auf Spanisch …"
          aria-label="Spanisches Wort"
          {...spanishInputProps}
        />
        {!result && <AccentBar onInsert={(ch) => insertChar(inputRef.current, ch, setValue)} />}
        {!result ? (
          <div className="task-actions">
            <button type="button" className="btn btn-primary" onClick={() => check(word)} disabled={!value.trim()}>
              Prüfen
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => giveUp(word)}>
              Weiß ich nicht
            </button>
          </div>
        ) : (
          <div className={`feedback is-${result === 'article' ? 'accent' : result}`} role="status">
            <strong>{MESSAGES[result]}</strong>{' '}
            {result !== 'correct' && (
              <>
                Richtig: <span className="solution" lang="es">{word.es}</span>
              </>
            )}{' '}
            <button type="button" className="speak-btn" onClick={() => speak(speakable(word.es))} aria-label="Vorlesen">
              🔊
            </button>
            {word.example && (
              <p className="example">
                <span lang="es">{word.example.es}</span> – {word.example.de}
              </p>
            )}
            <div className="task-actions">
              <button type="button" className="btn btn-primary" onClick={next}>
                Weiter → <span className="small">(Enter)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
