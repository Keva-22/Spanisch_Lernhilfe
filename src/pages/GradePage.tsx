import { Link, useParams } from 'react-router-dom'
import UnitList from '../components/UnitList.tsx'
import { unitsOfGrade, vocabOfGrade } from '../content/index.ts'
import { areas, getGrade } from '../content/meta.ts'
import NotFoundPage from './NotFoundPage.tsx'

export default function GradePage() {
  const { grade = '' } = useParams()
  const info = getGrade(Number(grade))
  if (!info) return <NotFoundPage />
  const units = unitsOfGrade(info.grade)
  const fields = vocabOfGrade(info.grade)

  return (
    <div className="page">
      <p className="crumbs">
        <Link to="/">Start</Link> › {info.title}
      </p>
      <h1>
        {info.title} <span className="badge">{info.cefr}</span>
      </h1>
      <p className="lead">{info.topics}</p>
      {units.length > 0 && (
        <p>
          <Link to={`/mix?grade=${info.grade}`} className="btn btn-primary">
            🎲 Mix-Test zur {info.title}
          </Link>
        </p>
      )}

      {areas.map((area) => {
        const list = units.filter((u) => u.area === area.id)
        return (
          <section key={area.id}>
            <h2>{area.title}</h2>
            <UnitList units={list} />
          </section>
        )
      })}

      <section>
        <h2>Vokabeln</h2>
        {fields.length === 0 && <p className="muted">Hier kommen bald Wortfelder dazu.</p>}
        <ul className="unit-list">
          {fields.map((f) => (
            <li key={f.id}>
              <Link to={`/vocab/${f.id}`} className="card card-link unit-card">
                <span className="unit-number">W</span>
                <span className="unit-main">
                  <span className="unit-title">{f.title}</span>
                  <span className="unit-subtitle">{f.words.length} Wörter</span>
                  <span className="unit-meta">
                    <span className="badge">{f.cefr}</span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
