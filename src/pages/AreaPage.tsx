import { Link, useParams } from 'react-router-dom'
import UnitList from '../components/UnitList.tsx'
import { unitsOfArea } from '../content/index.ts'
import { getArea, grades } from '../content/meta.ts'
import NotFoundPage from './NotFoundPage.tsx'

export default function AreaPage() {
  const { area = '' } = useParams()
  const info = getArea(area)
  if (!info) return <NotFoundPage />
  const units = unitsOfArea(info.id)

  return (
    <div className="page">
      <p className="crumbs">
        <Link to="/">Start</Link> › {info.title}
      </p>
      <h1>{info.title}</h1>
      <p className="lead">{info.description}</p>
      {grades.map((g) => (
        <section key={g.grade}>
          <h2>
            {g.title} <span className="badge">{g.cefr}</span>
          </h2>
          <UnitList units={units.filter((u) => u.grade === g.grade)} />
        </section>
      ))}
    </div>
  )
}
