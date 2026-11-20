import { Link } from 'react-router-dom'
import BoxBars from '../components/BoxBars.tsx'
import { vocabOfGrade } from '../content/index.ts'
import { grades } from '../content/meta.ts'
import { useProgress } from '../lib/progress.ts'
import { boxCounts } from '../lib/vocab.ts'

export default function VocabIndexPage() {
  const progress = useProgress()
  return (
    <div className="page">
      <p className="crumbs">
        <Link to="/">Start</Link> › Vokabeln
      </p>
      <h1>Vokabeln</h1>
      <p className="lead">
        Wortlisten mit „Spalte verdecken“, Karteikarten in beide Richtungen (Leitner-System mit 5 Fächern) und ein
        Tipp-Modus Deutsch → Spanisch.
      </p>
      {grades.map((g) => {
        const fields = vocabOfGrade(g.grade)
        return (
          <section key={g.grade}>
            <h2>
              {g.title} <span className="badge">{g.cefr}</span>
            </h2>
            {fields.length === 0 && <p className="muted">Hier kommen bald Wortfelder dazu.</p>}
            <div className="card-grid">
              {fields.map((f) => (
                <div key={f.id} className="card vocab-card">
                  <h3>
                    <Link to={`/vocab/${f.id}`}>{f.title}</Link>
                  </h3>
                  <p className="muted small">
                    {f.words.length} Wörter · {f.cefr} · Fächer DE → ES:
                  </p>
                  <BoxBars counts={boxCounts(f, 'de-es', progress)} />
                  <p className="link-row">
                    <Link to={`/vocab/${f.id}`}>Liste</Link>
                    <Link to={`/vocab/${f.id}/cards`}>Karteikarten</Link>
                    <Link to={`/vocab/${f.id}/type`}>Tippen</Link>
                  </p>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
