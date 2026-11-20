import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { grades } from '../content/meta.ts'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app">
      <header className="site-header no-print">
        <div className="header-inner">
          <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              ñ
            </span>
            Spanisch-Lernhilfe
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? '✕' : '☰'} Menü
          </button>
          <nav id="main-nav" className={menuOpen ? 'main-nav open' : 'main-nav'} onClick={() => setMenuOpen(false)}>
            {grades.map((g) => (
              <NavLink key={g.grade} to={`/grade/${g.grade}`}>
                {g.title}
              </NavLink>
            ))}
            <NavLink to="/vocab">Vokabeln</NavLink>
            <NavLink to="/tenses">Zeiten</NavLink>
            <NavLink to="/verbs">Verben</NavLink>
            <NavLink to="/verb-drill">Verb-Drill</NavLink>
            <NavLink to="/text-types">Textsorten</NavLink>
            <NavLink to="/mix">Mix-Test</NavLink>
            <NavLink to="/progress">Fortschritt</NavLink>
          </nav>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="site-footer no-print">
        <div className="container">
          Spanisch-Lernhilfe · AHS-Oberstufe, 5.–7. Klasse · Dein Fortschritt wird nur in diesem Browser gespeichert.
        </div>
      </footer>
    </div>
  )
}
