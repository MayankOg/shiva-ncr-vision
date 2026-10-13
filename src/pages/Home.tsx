import { Link } from 'react-router-dom'
import Journey from '../components/Journey'
import Contact from '../components/Contact'
import { services, work, steps, reasons } from '../content/content'
import { useSeo } from '../components/useSeo'

const pillars = [
  { k: 'Consult', d: 'Understand the business, define priorities and choose the right technology.' },
  { k: 'Engineer', d: 'Build software, portals and tools around how your team actually works.' },
  { k: 'Integrate', d: 'Connect systems, automate workflows and run them on reliable infrastructure.' },
  { k: 'Grow', d: 'Bring customers in through marketing that is wired into your data.' },
]

export default function Home() {
  useSeo('Shiva NCR Consultants — IT Consulting, Software Engineering & Digital Growth',
    'Shiva NCR Consultants is your technology partner from strategy to execution: IT consulting, custom software, AI & automation, cloud, and digital marketing.')
  return (
    <>
      <Journey />

      <section className="section connected" id="solution" aria-labelledby="sol-title">
        <div className="wrap">
          <p className="eyebrow">The connected solution</p>
          <h2 id="sol-title" className="h2">One partner for technology, operations, and growth.</h2>
          <ol className="pillars">
            {pillars.map((p, i) => (
              <li key={p.k}><span className="pill-n">0{i + 1}</span><h3>{p.k}</h3><p>{p.d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section services" id="services" aria-labelledby="svc-title">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Services</p>
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

      <section className="section work" id="work" aria-labelledby="work-title">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title" className="h2">Evidence, not promises.</h2>
            <p className="ph-note">Placeholder section — case studies will be added once client approval is in place.</p>
          </div>
          <div className="work-grid">
            {work.map((w, i) => (
              <article key={i} className={`work-card ${w.placeholder ? 'is-ph' : ''}`}>
                <div className="work-visual" aria-hidden="true"><span /><span /><span /></div>
                <p className="work-tag">{w.tag}</p>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach" id="approach" aria-labelledby="ap-title">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow light">How we work</p>
            <h2 id="ap-title" className="h2">A clear path from first call to running system.</h2>
          </div>
          <ol className="steps">
            {steps.map((s) => <li key={s.n}><span>{s.n}</span><h3>{s.t}</h3><p>{s.d}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section why" id="why" aria-labelledby="why-title">
        <div className="wrap why-grid">
          <div>
            <p className="eyebrow">Why Shiva NCR</p>
            <h2 id="why-title" className="h2">Technology decisions, <em>made with the business in mind.</em></h2>
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
