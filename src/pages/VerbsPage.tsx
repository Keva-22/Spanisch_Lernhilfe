import { Link } from 'react-router-dom'
import { verbs } from '../content/verbs.ts'

export default function VerbsPage() {
  const regular = verbs.filter((v) => v.regular)
  const irregular = verbs.filter((v) => !v.regular)
  return (
    <div className="page">
      <p className="crumbs">
        <Link to="/">Start</Link> › Verbtabellen
      </p>
      <h1>Verbtabellen</h1>
      <p className="lead">
        Alle Formen in den Zeiten der 5.–7. Klasse. Zum Üben: <Link to="/verb-drill">Verb-Drill</Link>.
      </p>
      <section>
        <h2>Regelmäßige Musterverben</h2>
        <div className="verb-grid">
          {regular.map((v) => (
            <Link key={v.inf} to={`/verbs/${v.inf}`} className="card card-link verb-chip">
              <strong lang="es">{v.inf}</strong>
              <span className="muted small">{v.de}</span>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2>Wichtige unregelmäßige Verben</h2>
        <div className="verb-grid">
          {irregular.map((v) => (
            <Link key={v.inf} to={`/verbs/${v.inf}`} className="card card-link verb-chip">
              <strong lang="es">{v.inf}</strong>
              <span className="muted small">{v.de}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
