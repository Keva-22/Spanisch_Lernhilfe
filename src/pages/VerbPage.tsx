import { Link, useParams } from 'react-router-dom'
import { Rich } from '../components/Rich.tsx'
import SpeakButton from '../components/SpeakButton.tsx'
import { getUnit } from '../content/index.ts'
import { getVerb, verbs } from '../content/verbs.ts'
import { printOnly } from '../lib/print.ts'
import { conjugate, imperativeRows, PERSONS, verbTenses } from '../lib/verbs.ts'
import NotFoundPage from './NotFoundPage.tsx'

export default function VerbPage() {
  const { verb: inf = '' } = useParams()
  const verb = getVerb(inf)
  if (!verb) return <NotFoundPage />
  const index = verbs.indexOf(verb)
  const prev = verbs[index - 1]
  const next = verbs[index + 1]
  const imperative = imperativeRows(verb)

  return (
    <div className="page verb-page">
      <p className="crumbs no-print">
        <Link to="/">Start</Link> › <Link to="/verbs">Verbtabellen</Link> › {verb.inf}
      </p>
      <div className="summary-head">
        <h1>
          <span lang="es">{verb.inf}</span> <SpeakButton text={verb.inf} />
        </h1>
        <button type="button" className="btn btn-ghost no-print" onClick={() => printOnly('page')}>
          🖨 Drucken
        </button>
      </div>
      <p className="lead">
        {verb.de} · {verb.regular ? 'regelmäßig' : 'unregelmäßig'}
      </p>
      {verb.note && <p className="callout callout-tip">{verb.note}</p>}
      <p>
        <strong>Gerundio:</strong> <span lang="es">{verb.gerund}</span> · <strong>Partizip:</strong>{' '}
        <span lang="es">{verb.participle}</span>
      </p>

      <div className="verb-tables">
        {verbTenses.map((tense) => {
          const unit = getUnit(tense.unit)
          return (
            <div key={tense.id} className="card verb-table">
              <h2>
                {unit ? (
                  <Link to={`/unit/${unit.id}`} lang="es">
                    {tense.name}
                  </Link>
                ) : (
                  <span lang="es">{tense.name}</span>
                )}
              </h2>
              <table>
                <tbody>
                  {conjugate(verb, tense.id).map((form, i) => (
                    <tr key={i}>
                      <th scope="row">
                        <Rich text={PERSONS[i]} />
                      </th>
                      <td lang="es">{form}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        })}
        <div className="card verb-table">
          <h2 lang="es">Imperativo</h2>
          {imperative ? (
            <table>
              <thead>
                <tr>
                  <th />
                  <th>bejaht</th>
                  <th>verneint</th>
                </tr>
              </thead>
              <tbody>
                {imperative.map((row) => (
                  <tr key={row.person}>
                    <th scope="row">{row.person}</th>
                    <td lang="es">{row.affirmative}</td>
                    <td lang="es">{row.negative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="muted small">Kein gebräuchlicher Imperativ.</p>
          )}
        </div>
      </div>

      <p className="pager no-print">
        {prev ? <Link to={`/verbs/${prev.inf}`}>← {prev.inf}</Link> : <span />}
        {next ? <Link to={`/verbs/${next.inf}`}>{next.inf} →</Link> : <span />}
      </p>
    </div>
  )
}
