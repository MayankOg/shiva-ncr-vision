import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#approach', label: 'Approach' },
  { href: '/#work', label: 'Work' },
  { href: '/#why', label: 'Why us' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()
  useEffect(() => setOpen(false), [loc])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc); return () => window.removeEventListener('keydown', esc)
  }, [open])
  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <a className="skip" href="#main">Skip to content</a>
      <div className="nav-inner">
        <Link to="/" aria-label="Shiva NCR Consultants home"><Logo /></Link>
        <nav aria-label="Primary" className="nav-links">
          {links.map((l) => <Link key={l.href} to={l.href}>{l.label}</Link>)}
        </nav>
        <Link to="/#contact" className="btn btn-primary nav-cta">Start a project</Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={`burger ${open ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((l, i) => <Link key={l.href} to={l.href} style={{ transitionDelay: `${i * 40}ms` }}>{l.label}</Link>)}
          <Link to="/#contact" className="btn btn-primary">Start a project</Link>
        </nav>
      </div>
    </header>
  )
}
