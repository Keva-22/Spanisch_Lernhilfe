import { Link } from 'react-router-dom'
import { textTypes } from '../content/index.ts'
import { getGrade } from '../content/meta.ts'

export default function TextTypesPage() {
  return (
    <div className="page">
      <p className="crumbs">
        <Link to="/">Start</Link> › Textsorten
      </p>
      <h1>Textsorten & Redemittel</h1>
      <p className="lead">
        Aufbau, Redemittel und ein Musterbeispiel für die Schreibaufgaben bei Schularbeiten und der B1-Matura.
      </p>
      {textTypes.length === 0 && <p className="muted">Hier kommen bald Textsorten dazu.</p>}
      <div className="card-grid">
        {textTypes.map((t) => (
          <Link key={t.id} to={`/text-types/${t.id}`} className="card card-link">
            <strong>{t.title}</strong> <span className="badge">{t.cefr}</span>
            <span className="block muted small">ab {getGrade(t.grade)?.title}</span>
            <span className="block small">{t.description}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
