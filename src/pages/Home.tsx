import { Link } from 'react-router-dom'
import Journey from '../components/Journey'
import Contact from '../components/Contact'
import { services, testimonials, steps, reasons, problems, solutionSteps } from '../content/content'
import { useSeo } from '../components/useSeo'

export default function Home() {
  useSeo('Shiva NCR Consultants — IT Consulting, Software Engineering & Digital Growth',
    'Shiva NCR Consultants brings strategy, software, automation, and marketing together to help businesses operate smarter and reach the right customers.')
  return (
    <>
      <Journey />

      <section className="section challenge" id="challenge" aria-labelledby="ch-title">
        <div className="wrap ch-grid">
          <div>
            <p className="eyebrow">The challenge</p>
            <h2 id="ch-title" className="h2">Good technology should <em>work together.</em></h2>
            <p className="ch-note">Not every business faces all of these — but most growing businesses recognise at least a few.</p>
          </div>
          <ol className="problems">
            {problems.map((p, i) => <li key={p}><span>{String(i + 1).padStart(2, '0')}</span>{p}</li>)}
          </ol>
        </div>
      </section>

      <section className="section connected" id="solution" aria-labelledby="sol-title">
        <div className="wrap">
          <p className="eyebrow">The connected solution</p>
          <h2 id="sol-title" className="h2">From business challenge to connected execution.</h2>
          <ol className="pillars">
            {solutionSteps.map((p, i) => (
              <li key={p.t}><span className="pill-n">0{i + 1}</span><h3>{p.t}</h3><p>{p.d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section services" id="services" aria-labelledby="svc-title">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Capabilities</p>
            <h2 id="svc-title" className="h2">Five capabilities. <em>One coordinated team.</em></h2>
          </div>
          <ul className="svc-list">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="svc-row">
                  <span className="svc-n">{s.num}</span>
                  <span className="svc-name">{s.name}</span>
                  <span className="svc-sum">{s.summary}</span>
                  <span className="svc-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="section testimonials" id="testimonials" aria-labelledby="tm-title">
          <div className="wrap">
            <p className="eyebrow">Testimonials</p>
            <h2 id="tm-title" className="h2">In our clients’ words.</h2>
            <div className="quotes">
              {testimonials.map((t, i) => (
                <figure key={i} className="quote">
                  <blockquote><p>{t.quote}</p></blockquote>
                  <figcaption><b>{t.name}</b>{(t.role || t.company) && <span>{[t.role, t.company].filter(Boolean).join(', ')}</span>}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section approach" id="approach" aria-labelledby="ap-title">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow light">Our approach</p>
            <h2 id="ap-title" className="h2">A clear process. A solution built around you.</h2>
          </div>
          <ol className="steps">
            {steps.map((s) => <li key={s.n}><span>{s.n}</span><h3>{s.t}</h3><p>{s.d}</p></li>)}
          </ol>
          <p className="ap-note">Scope, timelines and the exact steps depend on your requirements — we agree them with you before work begins.</p>
        </div>
      </section>

      <section className="section why" id="about" aria-labelledby="why-title">
        <div className="wrap why-grid">
          <div>
            <p className="eyebrow">About Shiva NCR</p>
            <h2 id="why-title" className="h2">Technology decisions with <em>the bigger picture in mind.</em></h2>
            <Link to="/#contact" className="btn btn-primary">Discuss your project</Link>
          </div>
          <ul className="reasons">
            {reasons.map((r) => <li key={r.t}><h3>{r.t}</h3><p>{r.d}</p></li>)}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  )
}
