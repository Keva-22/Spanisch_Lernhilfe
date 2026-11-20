import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SpeakButton from '../components/SpeakButton.tsx'
import { getVocabField } from '../content/index.ts'
import { getGrade, posLabels } from '../content/meta.ts'
import { speakable } from '../lib/vocab.ts'
import NotFoundPage from './NotFoundPage.tsx'

type Hidden = 'none' | 'es' | 'de'

export default function VocabListPage() {
  const { id = '' } = useParams()
  const field = getVocabField(id)
  const [hidden, setHidden] = useState<Hidden>('none')
  const [revealed, setRevealed] = useState<Set<string>>(new Set())
  if (!field) return <NotFoundPage />

  const hide = (mode: Hidden) => {
    setHidden(mode)
    setRevealed(new Set())
  }
  const reveal = (key: string) => setRevealed((r) => new Set(r).add(key))
  const covered = (side: 'es' | 'de', es: string) => hidden === side && !revealed.has(es)

  return (
    <div className="page vocab-page">
      <p className="crumbs no-print">
        <Link to="/">Start</Link> › <Link to="/vocab">Vokabeln</Link> › {field.title}
      </p>
      <h1>{field.title}</h1>
      <p className="lead">
        {getGrade(field.grade)?.title} · {field.cefr} · {field.words.length} Wörter
      </p>

      <div className="toolbar no-print">
        <button type="button" className={`btn ${hidden === 'es' ? 'btn-primary' : ''}`} onClick={() => hide('es')}>
          Spanisch verdecken
        </button>
        <button type="button" className={`btn ${hidden === 'de' ? 'btn-primary' : ''}`} onClick={() => hide('de')}>
          Deutsch verdecken
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => hide('none')} disabled={hidden === 'none'}>
          Alles zeigen
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
          🖨 Drucken
        </button>
        <Link to={`/vocab/${field.id}/cards`} className="btn">
          Karteikarten
        </Link>
        <Link to={`/vocab/${field.id}/type`} className="btn">
          Tippen DE → ES
        </Link>
      </div>
      {hidden !== 'none' && (
        <p className="muted small no-print">Tippe auf ein verdecktes Feld, um es aufzudecken. Beim Drucken bleibt es leer.</p>
      )}

      <div className="table-wrap">
        <table className="vocab-table">
          <thead>
            <tr>
              <th>Spanisch</th>
              <th>Deutsch</th>
              <th className="col-pos">Wortart</th>
            </tr>
          </thead>
          <tbody>
            {field.words.map((w) => (
              <tr key={w.es}>
                <td lang="es">
                  {covered('es', w.es) ? (
                    <button type="button" className="cover" onClick={() => reveal(w.es)} aria-label="Aufdecken">
                      ?
                    </button>
                  ) : (
                    <>
                      <strong>{w.es}</strong> <SpeakButton text={speakable(w.es)} />
                      {w.example && <span className="example">{w.example.es}</span>}
                    </>
                  )}
                </td>
                <td>
                  {covered('de', w.es) ? (
                    <button type="button" className="cover" onClick={() => reveal(w.es)} aria-label="Aufdecken">
                      ?
                    </button>
                  ) : (
                    <>
                      {w.de}
                      {w.example && <span className="example">{w.example.de}</span>}
                    </>
                  )}
                </td>
                <td className="col-pos muted small">{posLabels[w.pos]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
