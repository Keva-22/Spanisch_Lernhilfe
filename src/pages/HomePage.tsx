import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { unitNumber, unitsOfGrade, vocabOfGrade } from '../content/index.ts'
import { areas, grades } from '../content/meta.ts'
import { useProgress } from '../lib/progress.ts'
import { search } from '../lib/search.ts'
import { gradeStats } from '../lib/stats.ts'

const TOOLS = [
  { to: '/tenses', icon: '⏳', title: 'Zeitenübersicht', text: 'Alle Zeiten auf einem Zeitstrahl' },
  { to: '/verbs', icon: '📋', title: 'Verbtabellen', text: 'hablar, comer, vivir + 20 unregelmäßige' },
  { to: '/verb-drill', icon: '🔁', title: 'Verb-Drill', text: 'Schnelles Konjugationstraining' },
  { to: '/text-types', icon: '✍️', title: 'Textsorten', text: 'Aufbau und Redemittel für Schreibaufgaben' },
  { to: '/mix', icon: '🎲', title: 'Mix-Test', text: 'Zufällige Aufgaben aus mehreren Einheiten' },
  { to: '/progress', icon: '📈', title: 'Fortschritt', text: 'Was du schon geschafft hast' },
]

const count = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`

export default function HomePage() {
  const [query, setQuery] = useState('')
  const results = useMemo(() => search(query), [query])
  const progress = useProgress()
  const hasQuery = query.trim().length >= 2
  const nothingFound = hasQuery && !results.units.length && !results.words.length && !results.textTypes.length

  return (
    <div className="page home">
      <section className="hero">
        <h1>
          ¡Hola! <span>Spanisch lernen & wiederholen</span>
        </h1>
        <p>
          Erklärungen, Übungen und Vokabeltrainer für die 5. bis 7. Klasse der AHS-Oberstufe – Spanien-Spanisch, Ziel
          B1 zur Matura.
        </p>
        <label className="search">
          <span className="sr-only">Suche</span>
          <input
            type="search"
            placeholder="Suche: Einheit oder Vokabel, z. B. „indefinido“ oder „Koffer“ …"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        {hasQuery && (
          <div className="search-results card">
            {nothingFound && <p className="muted">Nichts gefunden.</p>}
            {results.units.length > 0 && (
              <>
                <h3>Einheiten</h3>
                <ul className="plain">
                  {results.units.map((u) => (
                    <li key={u.id}>
                      <Link to={`/unit/${u.id}`}>
                        {unitNumber(u)} {u.title}
                      </Link>{' '}
                      <span className="muted">– {u.subtitle}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {results.textTypes.length > 0 && (
              <>
                <h3>Textsorten</h3>
                <ul className="plain">
                  {results.textTypes.map((t) => (
                    <li key={t.id}>
                      <Link to={`/text-types/${t.id}`}>{t.title}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {results.words.length > 0 && (
              <>
                <h3>Vokabeln</h3>
                <ul className="plain word-results">
                  {results.words.map(({ field, word }) => (
                    <li key={`${field.id}-${word.es}`}>
                      <strong lang="es">{word.es}</strong> – {word.de}{' '}
                      <Link to={`/vocab/${field.id}`} className="muted">
                        ({field.title})
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </section>

      <section>
        <h2>Nach Klasse</h2>
        <div className="card-grid">
          {grades.map((g) => {
            const stats = gradeStats(g.grade, progress)
            return (
              <Link key={g.grade} to={`/grade/${g.grade}`} className="card card-link grade-card">
                <span className="grade-number">{g.grade}.</span>
                <span>
                  <strong>{g.title}</strong> <span className="badge">{g.cefr}</span>
                  <span className="block muted">{g.topics}</span>
                  <span className="block small">
                    {count(unitsOfGrade(g.grade).length, 'Einheit', 'Einheiten')} ·{' '}
                    {count(vocabOfGrade(g.grade).length, 'Wortfeld', 'Wortfelder')}
                    {stats.exercisesDone > 0 && ` · ${stats.exercisesDone}/${stats.exercises} Übungen erledigt`}
                  </span>
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section>
        <h2>Nach Bereich</h2>
        <div className="card-grid">
          {areas
            .filter((a) => a.id !== 'mistakes')
            .map((a) => (
              <Link key={a.id} to={`/area/${a.id}`} className="card card-link">
                <strong>{a.title}</strong>
                <span className="block muted">{a.description}</span>
              </Link>
            ))}
          <Link to="/vocab" className="card card-link">
            <strong>Vokabeln</strong>
            <span className="block muted">Wortlisten, Karteikarten (Leitner) und Tipp-Modus</span>
          </Link>
          {areas
            .filter((a) => a.id === 'mistakes')
            .map((a) => (
              <Link key={a.id} to={`/area/${a.id}`} className="card card-link">
                <strong>{a.title}</strong>
                <span className="block muted">{a.description}</span>
              </Link>
            ))}
        </div>
      </section>

      <section>
        <h2>Werkzeuge</h2>
        <div className="card-grid tools">
          {TOOLS.map((t) => (
            <Link key={t.to} to={t.to} className="card card-link tool-card">
              <span className="tool-icon" aria-hidden="true">
                {t.icon}
              </span>
              <span>
                <strong>{t.title}</strong>
                <span className="block muted small">{t.text}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
