import { Link } from 'react-router-dom'
import BoxBars from '../components/BoxBars.tsx'
import { unitNumber, unitsOfGrade, vocabOfGrade } from '../content/index.ts'
import { grades } from '../content/meta.ts'
import { resetProgress, useProgress } from '../lib/progress.ts'
import { gradeStats, unitDone } from '../lib/stats.ts'
import { boxCounts } from '../lib/vocab.ts'

const percent = (part: number, total: number) => (total === 0 ? 0 : Math.round((part / total) * 100))

export default function ProgressPage() {
  const progress = useProgress()

  const reset = () => {
    if (window.confirm('Wirklich den gesamten Fortschritt löschen? Das kann nicht rückgängig gemacht werden.')) {
      resetProgress()
    }
  }

  return (
    <div className="page">
      <p className="crumbs">
        <Link to="/">Start</Link> › Fortschritt
      </p>
      <h1>Dein Fortschritt</h1>
      <p className="lead">Gespeichert nur in diesem Browser auf diesem Gerät.</p>
      {progress.mix && (
        <p>
          Letzter Mix-Test ({progress.mix.label}): <strong>{progress.mix.points}/{progress.mix.max}</strong> Punkte
        </p>
      )}

      {grades.map((g) => {
        const stats = gradeStats(g.grade, progress)
        const units = unitsOfGrade(g.grade)
        const fields = vocabOfGrade(g.grade)
        return (
          <section key={g.grade} className="card progress-card">
            <h2>
              {g.title} <span className="badge">{g.cefr}</span>
            </h2>
            {units.length === 0 && fields.length === 0 ? (
              <p className="muted">Noch keine Inhalte.</p>
            ) : (
              <>
                <div className="stat-row">
                  <Stat label="Übungen erledigt" value={`${stats.exercisesDone}/${stats.exercises}`} pct={percent(stats.exercisesDone, stats.exercises)} />
                  <Stat label="Mini-Tests gemacht" value={`${stats.testsDone}/${stats.tests}`} pct={percent(stats.testsDone, stats.tests)} />
                  <Stat label="Vokabeln sicher (Fach 4–5)" value={`${stats.cardsKnown}/${stats.cards}`} pct={percent(stats.cardsKnown, stats.cards)} />
                </div>
                {units.length > 0 && (
                  <table className="progress-table">
                    <thead>
                      <tr>
                        <th>Einheit</th>
                        <th>Übungen</th>
                        <th>Mini-Test (beste)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {units.map((u) => {
                        const test = progress.tests[u.id]
                        return (
                          <tr key={u.id}>
                            <td>
                              <Link to={`/unit/${u.id}`}>
                                {unitNumber(u)} {u.title}
                              </Link>
                            </td>
                            <td>{Math.round(unitDone(u, progress) * 100)} %</td>
                            <td>{test ? `${test.best}/${test.max}` : '–'}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                )}
                {fields.map((f) => (
                  <div key={f.id} className="progress-vocab">
                    <h3>
                      <Link to={`/vocab/${f.id}`}>{f.title}</Link>
                    </h3>
                    <div className="two-cols">
                      <div>
                        <p className="small muted">ES → DE</p>
                        <BoxBars counts={boxCounts(f, 'es-de', progress)} />
                      </div>
                      <div>
                        <p className="small muted">DE → ES</p>
                        <BoxBars counts={boxCounts(f, 'de-es', progress)} />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </section>
        )
      })}

      <p>
        <button type="button" className="btn btn-bad" onClick={reset}>
          Fortschritt zurücksetzen
        </button>
      </p>
    </div>
  )
}

function Stat({ label, value, pct }: { label: string; value: string; pct: number }) {
  return (
    <div className="stat">
      <span className="stat-value">{value}</span>
      <span className="small muted">{label}</span>
      <div className="bar">
        <span style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
