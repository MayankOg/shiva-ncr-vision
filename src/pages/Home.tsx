import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Journey from '../components/Journey'
import Contact from '../components/Contact'
import { ServiceVisual, ProblemIcon } from '../components/Visuals'
import { services, testimonials, steps, reasons, problems, solutionSteps } from '../content/content'
import { useSeo } from '../components/useSeo'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.2 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function Home() {
  useSeo('Shiva NCR Consultants — IT Consulting, Software Engineering & Digital Growth',
    'Shiva NCR Consultants brings strategy, software, automation, and marketing together to help businesses operate smarter and reach the right customers.')
  useReveal()
  return (
    <>
      <Journey />

      <section className="section challenge" id="challenge" aria-labelledby="ch-title">
        <div className="wrap">
          <div className="sec-head split">
            <h2 id="ch-title" className="h2">Good technology should <em>work together.</em></h2>
            <p className="ch-note">Not every business faces all of these. Most face a few.</p>
          </div>
          <ul className="problems" data-reveal>
            {problems.map((p, i) => <li key={p.t} style={{ ['--i' as string]: i }}><ProblemIcon i={p.i} /><span>{p.t}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="section connected" id="solution" aria-labelledby="sol-title">
        <div className="wrap">
          <h2 id="sol-title" className="h2 center">From business challenge to connected execution.</h2>
          <ol className="chain" data-reveal>
            {solutionSteps.map((s, i) => <li key={s} style={{ ['--i' as string]: i }}><span className="node" data-n={String(i + 1).padStart(2, "0")} /><b>{s}</b></li>)}
          </ol>
        </div>
      </section>

      <section className="section services" id="services" aria-labelledby="svc-title">
        <div className="wrap">
          <div className="sec-head split">
            <h2 id="svc-title" className="h2">Five capabilities. <em>One coordinated team.</em></h2>
          </div>
          <ul className="svc-grid">
            {services.map((s) => (
              <li key={s.slug} className="svc-card" data-reveal>
                <ServiceVisual slug={s.slug} />
                <span className="svc-n">{s.num}</span>
                <h3>{s.name}</h3>
                <ul className="tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <details>
                  <summary>Details</summary>
                  <ul className="tick">{s.offerings.slice(0, 4).map((o) => <li key={o}>{o}</li>)}</ul>
                  <Link to={`/services/${s.slug}`} className="more">Full service page →</Link>
                </details>
              </li>
            ))}
            <li className="svc-card svc-cta">
              <h3>Not sure where to start?</h3>
              <Link to="/#contact" className="btn btn-light">Discuss your project</Link>
            </li>
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
                <figure key={i} className="quote" data-reveal>
                  <span className="qmark" aria-hidden="true">“</span>
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
          <h2 id="ap-title" className="h2">A clear process. A solution built around you.</h2>
          <ol className="timeline" data-reveal>
            {steps.map((s, i) => <li key={s.n} style={{ ['--i' as string]: i }}><span className="tdot">{s.n}</span><h3>{s.t}</h3><p>{s.d}</p></li>)}
          </ol>
          <p className="ap-note">Scope and timelines depend on your requirements.</p>
        </div>
      </section>

      <section className="section why" id="about" aria-labelledby="why-title">
        <div className="wrap why-grid">
          <h2 id="why-title" className="h2">Technology decisions with <em>the bigger picture in mind.</em></h2>
          <ul className="reasons" data-reveal>
            {reasons.map((r, i) => <li key={r} style={{ ['--i' as string]: i }}>{r}</li>)}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  )
}
