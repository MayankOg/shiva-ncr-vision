import { Link, useParams } from 'react-router-dom'
import { services } from '../content/content'
import { useSeo } from '../components/useSeo'
import NotFound from './NotFound'

export default function ServicePage() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  useSeo(s ? `${s.name} — Shiva NCR Consultants` : 'Page not found — Shiva NCR Consultants', s?.summary || '', s ? `services/${s.slug}` : '')
  if (!s) return <NotFound />
  const idx = services.indexOf(s)
  const next = services[(idx + 1) % services.length]
  return (
    <article className="svc-page">
      <header className="svc-hero">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="crumbs"><Link to="/">Home</Link> / <Link to="/#services">Services</Link> / <span aria-current="page">{s.name}</span></nav>
          <p className="eyebrow">Service {s.num}</p>
          <h1>{s.name}</h1>
          <p className="lead">{s.intro}</p>
        </div>
      </header>
      <div className="wrap svc-body">
        <section aria-labelledby="off"><h2 id="off">What we deliver</h2><ul className="tick">{s.offerings.map((o) => <li key={o}>{o}</li>)}</ul></section>
        <section aria-labelledby="out"><h2 id="out">What it changes</h2><ul className="tick">{s.outcomes.map((o) => <li key={o}>{o}</li>)}</ul></section>
        <section aria-labelledby="who"><h2 id="who">Who it's for</h2><p>{s.forWho}</p></section>
      </div>
      <div className="wrap svc-foot">
        <Link to="/#contact" className="btn btn-primary">Start a {s.name.split(' ')[0]} project</Link>
        <Link to={`/services/${next.slug}`} className="next-svc">Next: {next.name} →</Link>
      </div>
    </article>
  )
}
