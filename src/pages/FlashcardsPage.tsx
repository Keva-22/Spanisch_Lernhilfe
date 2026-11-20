import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BoxBars from '../components/BoxBars.tsx'
import SpeakButton from '../components/SpeakButton.tsx'
import { getVocabField } from '../content/index.ts'
import { posLabels } from '../content/meta.ts'
import type { VocabField, Word } from '../content/types.ts'
import { boxOf, setBox, useProgress, vocabKey, type Direction } from '../lib/progress.ts'
import { boxCounts, buildDeck, speakable } from '../lib/vocab.ts'
import NotFoundPage from './NotFoundPage.tsx'

export default function FlashcardsPage() {
  const { id = '' } = useParams()
  const field = getVocabField(id)
  if (!field) return <NotFoundPage />
  return <Flashcards key={field.id} field={field} />
}

function Flashcards({ field }: { field: VocabField }) {
  const progress = useProgress()
  const [dir, setDir] = useState<Direction>('es-de')
  const [deck, setDeck] = useState<Word[] | null>(null)
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState(0)

  const start = () => {
    setDeck(buildDeck(field, dir, progress))
    setPos(0)
    setKnown(0)
    setFlipped(false)
  }

  const answer = (word: Word, ok: boolean) => {
    const key = vocabKey(field.id, word.es, dir)
    setBox(key, ok ? boxOf(progress, key) + 1 : 1)
    if (ok) setKnown((k) => k + 1)
    setFlipped(false)
    setPos((p) => p + 1)
  }

  const header = (
    <>
      <p className="crumbs">
        <Link to="/">Start</Link> › <Link to="/vocab">Vokabeln</Link> › <Link to={`/vocab/${field.id}`}>{field.title}</Link>{' '}
        › Karteikarten
      </p>
      <h1>Karteikarten: {field.title}</h1>
    </>
  )

  if (!deck) {
    return (
      <div className="page">
        {header}
        <div className="card">
          <h2>Richtung</h2>
          <div className="segmented" role="radiogroup" aria-label="Richtung">
            <button type="button" className={dir === 'es-de' ? 'active' : ''} onClick={() => setDir('es-de')}>
              Spanisch → Deutsch
            </button>
            <button type="button" className={dir === 'de-es' ? 'active' : ''} onClick={() => setDir('de-es')}>
              Deutsch → Spanisch
            </button>
          </div>
          <h2>Deine Fächer</h2>
          <BoxBars counts={boxCounts(field, dir, progress)} />
          <p className="muted small">
            Gewusst → ein Fach weiter (bis Fach 5). Nicht gewusst → zurück in Fach 1. Geübt wird immer zuerst aus den
            niedrigen Fächern.
          </p>
          <button type="button" className="btn btn-primary" onClick={start}>
            Runde starten ({Math.min(20, field.words.length)} Karten)
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
            {known} / {deck.length} gewusst
          </p>
          <BoxBars counts={boxCounts(field, dir, progress)} />
          <div className="task-actions">
            <button type="button" className="btn btn-primary" onClick={start}>
              Neue Runde
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => setDeck(null)}>
              Richtung wechseln
            </button>
          </div>
        </div>
      </div>
    )
  }

  const word = deck[pos]
  const front = dir === 'es-de' ? word.es : word.de
  const back = dir === 'es-de' ? word.de : word.es
  const box = boxOf(progress, vocabKey(field.id, word.es, dir))

  return (
    <div className="page">
      {header}
      <div className="test-progress">
        <span>
          Karte {pos + 1} von {deck.length}
        </span>
        <span>Fach {box}</span>
      </div>
      <div className="bar">
        <span style={{ width: `${(pos / deck.length) * 100}%` }} />
      </div>
      <div
        className={`flashcard ${flipped ? 'is-flipped' : ''}`}
        onClick={() => setFlipped(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setFlipped(true)}
      >
        <p className="card-front" lang={dir === 'es-de' ? 'es' : 'de'}>
          {front}
        </p>
        <p className="muted small">{posLabels[word.pos]}</p>
        {flipped ? (
          <>
            <hr />
            <p className="card-back" lang={dir === 'es-de' ? 'de' : 'es'}>
              {back}
            </p>
            {word.example && (
              <p className="example">
                <span lang="es">{word.example.es}</span>
                <br />
                {word.example.de}
              </p>
            )}
          </>
        ) : (
          <p className="muted">Antippen zum Umdrehen</p>
        )}
      </div>
      <div className="task-actions center">
        <SpeakButton text={speakable(word.es)} label="Spanisches Wort vorlesen" />
        {flipped && (
          <>
            <button type="button" className="btn btn-good" onClick={() => answer(word, true)}>
              ✓ Gewusst
            </button>
            <button type="button" className="btn btn-bad" onClick={() => answer(word, false)}>
              ✗ Nicht gewusst
            </button>
          </>
        )}
      </div>
    </div>
  )
}
