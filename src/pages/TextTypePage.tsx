import { Link, useParams } from 'react-router-dom'
import { Rich } from '../components/Rich.tsx'
import SpeakButton from '../components/SpeakButton.tsx'
import { getTextType } from '../content/index.ts'
import { getGrade } from '../content/meta.ts'
import NotFoundPage from './NotFoundPage.tsx'

export default function TextTypePage() {
  const { id = '' } = useParams()
  const t = getTextType(id)
  if (!t) return <NotFoundPage />

  return (
    <div className="page text-type-page">
      <p className="crumbs no-print">
        <Link to="/">Start</Link> › <Link to="/text-types">Textsorten</Link> › {t.title}
      </p>
      <div className="summary-head">
        <h1>{t.title}</h1>
        <button type="button" className="btn btn-ghost no-print" onClick={() => window.print()}>
          🖨 Drucken
        </button>
      </div>
      <p className="lead">
        <span className="badge">{t.cefr}</span> ab {getGrade(t.grade)?.title} · <Rich text={t.description} />
      </p>

      <section>
        <h2>Aufbau & Redemittel</h2>
        <ol className="structure">
          {t.structure.map((part) => (
            <li key={part.part} className="card">
              <h3>{part.part}</h3>
              <p className="small">
                <Rich text={part.tip} />
              </p>
              <ul className="phrase-list">
                {part.phrases.map((p) => (
                  <li key={p.es}>
                    <span lang="es">{p.es}</span>
                    <span className="de">{p.de}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {t.phrases.map((group) => (
        <section key={group.title}>
          <h2>{group.title}</h2>
          <ul className="phrase-list card">
            {group.items.map((p) => (
              <li key={p.es}>
                <span lang="es">{p.es}</span>
                <span className="de">{p.de}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section>
        <h2>Musterbeispiel</h2>
        <div className="card">
          <p className="small">
            <strong>Aufgabe:</strong> <Rich text={t.model.task} />
          </p>
          <div className="model-text" lang="es">
            {t.model.text.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <p className="no-print">
            <SpeakButton text={t.model.text} label="Mustertext vorlesen" />
          </p>
          <details>
            <summary>Deutsche Übersetzung</summary>
            {t.model.de.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </details>
        </div>
      </section>

      <section>
        <h2>Checkliste vor der Abgabe</h2>
        <ul className="checklist card">
          {t.checklist.map((item) => (
            <li key={item}>
              <Rich text={item} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
