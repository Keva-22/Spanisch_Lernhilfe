import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom'
import ExerciseView from '../components/ExerciseView.tsx'
import { Blocks } from '../components/Rich.tsx'
import SpeakButton from '../components/SpeakButton.tsx'
import TestRunner from '../components/TestRunner.tsx'
import { getUnit, unitNumber } from '../content/index.ts'
import { getArea, getGrade, levels } from '../content/meta.ts'
import type { Level, Unit } from '../content/types.ts'
import { printOnly } from '../lib/print.ts'
import { recordTest, useProgress } from '../lib/progress.ts'
import { defaultInstruction } from '../lib/tasks.ts'
import NotFoundPage from './NotFoundPage.tsx'

type Tab = 'overview' | 'exercises' | 'test'

export default function UnitPage({ tab }: { tab: Tab }) {
  const { id = '' } = useParams()
  const unit = getUnit(id)
  if (!unit) return <NotFoundPage />
  return <UnitView key={unit.id} unit={unit} tab={tab} />
}

function UnitView({ unit, tab }: { unit: Unit; tab: Tab }) {
  const grade = getGrade(unit.grade)
  const area = getArea(unit.area)
  const prerequisites = unit.prerequisites.map((p) => getUnit(p)).filter((u): u is Unit => !!u)

  return (
    <div className="page unit-page">
      <p className="crumbs no-print">
        <Link to="/">Start</Link> › <Link to={`/grade/${unit.grade}`}>{grade?.title ?? `${unit.grade}. Klasse`}</Link> ›{' '}
        <Link to={`/area/${unit.area}`}>{area?.title}</Link>
      </p>
      <header className="unit-header">
        <h1>
          <span className="unit-number">{unitNumber(unit)}</span> {unit.title}
        </h1>
        <p className="lead">{unit.subtitle}</p>
        <p className="unit-meta">
          <span className="badge">{unit.cefr}</span> <span className="badge badge-soft">{area?.title}</span>
        </p>
        {prerequisites.length > 0 && (
          <p className="small muted no-print">
            Vorher können:{' '}
            {prerequisites.map((p, i) => (
              <span key={p.id}>
                {i > 0 && ', '}
                <Link to={`/unit/${p.id}`}>
                  {unitNumber(p)} {p.title}
                </Link>
              </span>
            ))}
          </p>
        )}
      </header>

      <nav className="tabs no-print" aria-label="Teile der Einheit">
        <NavLink to={`/unit/${unit.id}`} end>
          Erklärung
        </NavLink>
        <NavLink to={`/unit/${unit.id}/exercises`}>Übungen</NavLink>
        {unit.test && unit.test.length > 0 && <NavLink to={`/unit/${unit.id}/test`}>Mini-Test</NavLink>}
      </nav>

      {tab === 'overview' && <Overview unit={unit} />}
      {tab === 'exercises' && <Exercises unit={unit} />}
      {tab === 'test' && <MiniTest unit={unit} />}
    </div>
  )
}

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Overview({ unit }: { unit: Unit }) {
  return (
    <>
      <nav className="toc no-print" aria-label="Inhalt">
        <button type="button" onClick={() => scrollTo('summary')}>
          Auf einen Blick
        </button>
        {unit.explanation.map((s, i) => (
          <button key={s.title} type="button" onClick={() => scrollTo(`section-${i}`)}>
            {s.title}
          </button>
        ))}
        <button type="button" onClick={() => scrollTo('examples')}>
          Beispiele
        </button>
      </nav>

      <section className="card summary-card" id="summary">
        <div className="summary-head">
          <h2>Auf einen Blick: {unit.title}</h2>
          <button type="button" className="btn btn-ghost no-print" onClick={() => printOnly('summary')}>
            🖨 Drucken
          </button>
        </div>
        <Blocks blocks={unit.summary} />
      </section>

      {unit.explanation.map((section, i) => (
        <section key={section.title} className="explanation" id={`section-${i}`}>
          <h2>{section.title}</h2>
          <Blocks blocks={section.blocks} />
        </section>
      ))}

      <section className="examples" id="examples">
        <h2>Beispiele</h2>
        <ul className="example-list">
          {unit.examples.map((ex) => (
            <li key={ex.es}>
              <span className="es" lang="es">
                {ex.es} <SpeakButton text={ex.es} />
              </span>
              <span className="de">{ex.de}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="next-step no-print">
        <Link to={`/unit/${unit.id}/exercises`} className="btn btn-primary">
          Weiter zu den Übungen →
        </Link>
      </p>
    </>
  )
}

function Exercises({ unit }: { unit: Unit }) {
  const [params, setParams] = useSearchParams()
  const available = levels.filter((l) => unit.exercises.some((e) => e.level === l.id))
  const requested = params.get('level') as Level | null
  const level = available.find((l) => l.id === requested)?.id ?? available[0]?.id
  const progress = useProgress()
  const list = unit.exercises.filter((e) => e.level === level)

  return (
    <>
      <div className="level-switch no-print" role="tablist" aria-label="Schwierigkeit">
        {available.map((l) => {
          const all = unit.exercises.filter((e) => e.level === l.id)
          const done = all.filter((e) => progress.exercises[e.id]).length
          return (
            <button
              key={l.id}
              type="button"
              role="tab"
              aria-selected={l.id === level}
              className={l.id === level ? 'active' : ''}
              onClick={() => setParams({ level: l.id }, { replace: true })}
            >
              {l.title}
              <span className="small">
                {' '}
                {done}/{all.length}
              </span>
            </button>
          )
        })}
      </div>
      {list.map((exercise) => (
        <ExerciseView key={exercise.id} exercise={exercise} number={unit.exercises.indexOf(exercise) + 1} />
      ))}
      {unit.test && unit.test.length > 0 && (
        <p className="next-step no-print">
          <Link to={`/unit/${unit.id}/test`} className="btn btn-primary">
            Zum Mini-Test →
          </Link>
        </p>
      )}
    </>
  )
}

function MiniTest({ unit }: { unit: Unit }) {
  const progress = useProgress()
  const saved = progress.tests[unit.id]
  if (!unit.test || unit.test.length === 0) return <p className="muted">Diese Einheit hat keinen Mini-Test.</p>
  const items = unit.test.map((task, i) => ({
    key: `${unit.id}-test-${i}`,
    task,
    instruction: task.instruction ?? defaultInstruction[task.type],
  }))
  return (
    <>
      <p className="muted">
        {items.length} gemischte Aufgaben, je 1 Punkt.
        {saved && ` Dein bestes Ergebnis: ${saved.best}/${saved.max} Punkte.`}
      </p>
      <TestRunner items={items} onFinish={(points, max) => recordTest(unit.id, points, max)} />
    </>
  )
}
