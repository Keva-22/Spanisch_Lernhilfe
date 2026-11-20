import { Link } from 'react-router-dom'
import { unitNumber } from '../content/index.ts'
import { getArea } from '../content/meta.ts'
import type { Unit } from '../content/types.ts'
import { useProgress } from '../lib/progress.ts'
import { unitDone } from '../lib/stats.ts'

export default function UnitList({ units, showArea = false }: { units: Unit[]; showArea?: boolean }) {
  const progress = useProgress()
  if (units.length === 0) return <p className="muted">Hier kommen bald Einheiten dazu.</p>
  return (
    <ul className="unit-list">
      {units.map((unit) => {
        const done = unitDone(unit, progress)
        const test = progress.tests[unit.id]
        return (
          <li key={unit.id}>
            <Link to={`/unit/${unit.id}`} className="card card-link unit-card">
              <span className="unit-number">{unitNumber(unit)}</span>
              <span className="unit-main">
                <span className="unit-title">{unit.title}</span>
                <span className="unit-subtitle">{unit.subtitle}</span>
                <span className="unit-meta">
                  <span className="badge">{unit.cefr}</span>
                  {showArea && <span className="badge badge-soft">{getArea(unit.area)?.title}</span>}
                  {done > 0 && <span className="badge badge-good">Übungen {Math.round(done * 100)} %</span>}
                  {test && (
                    <span className="badge badge-good">
                      Test {test.best}/{test.max}
                    </span>
                  )}
                </span>
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
