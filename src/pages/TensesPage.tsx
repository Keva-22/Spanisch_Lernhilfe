import { Link } from 'react-router-dom'
import { Rich } from '../components/Rich.tsx'
import SpeakButton from '../components/SpeakButton.tsx'
import { getUnit, unitNumber } from '../content/index.ts'
import { tenseGroups, tenses } from '../content/tenses.ts'
import type { Unit } from '../content/types.ts'

export default function TensesPage() {
  return (
    <div className="page">
      <p className="crumbs">
        <Link to="/">Start</Link> › Zeitenübersicht
      </p>
      <h1>Zeitenübersicht</h1>
      <p className="lead">Alle Zeiten auf einem Zeitstrahl – mit Bildung, Beispiel und Link zur Einheit.</p>

      <div className="timeline" aria-hidden="true">
        <span>← Vergangenheit</span>
        <span className="now">jetzt</span>
        <span>Zukunft →</span>
      </div>

      <div className="tense-groups">
        {tenseGroups.map((group) => (
          <section key={group.id} className={`tense-group tense-${group.id}`}>
            <h2>{group.title}</h2>
            {tenses
              .filter((t) => t.group === group.id)
              .map((t) => {
                const linked = t.units.map((id) => getUnit(id)).filter((u): u is Unit => !!u)
                return (
                  <article key={t.id} className="card tense-card">
                    <h3 lang="es">{t.name}</h3>
                    <p className="small">{t.use}</p>
                    <p className="formation small">
                      <strong>Bildung:</strong>{' '}
                      <span lang="es">
                        <Rich text={t.formation} />
                      </span>
                    </p>
                    <p className="example">
                      <span lang="es">
                        {t.example.es} <SpeakButton text={t.example.es} />
                      </span>
                      <br />
                      <span className="muted">{t.example.de}</span>
                    </p>
                    {t.signals && (
                      <p className="small">
                        <strong>Signalwörter:</strong> <em lang="es">{t.signals}</em>
                      </p>
                    )}
                    <p className="small">
                      {linked.length > 0
                        ? linked.map((u) => (
                            <Link key={u.id} to={`/unit/${u.id}`} className="unit-link">
                              → {unitNumber(u)} {u.title}
                            </Link>
                          ))
                        : <span className="muted">Einheit folgt</span>}
                    </p>
                  </article>
                )
              })}
          </section>
        ))}
      </div>
    </div>
  )
}
