import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="page">
      <h1>Seite nicht gefunden</h1>
      <p>¡Ups! Diese Seite gibt es (noch) nicht.</p>
      <p>
        <Link to="/" className="btn btn-primary">
          Zur Startseite
        </Link>
      </p>
    </div>
  )
}
