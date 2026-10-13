import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { stages } from '../content/content'
import Fallback from './Fallback'

const reducedQuery = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Journey() {
  const root = useRef<HTMLDivElement>(null)
  const host = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(-1)
  const [webgl, setWebgl] = useState<boolean | null>(null)

  useEffect(() => {
    let disposed = false
    let cleanup = () => {}
    const reduced = reducedQuery()
    ;(async () => {
      const { Ecosystem, hasWebGL } = await import('../three/Ecosystem')
      if (disposed) return
      const ok = hasWebGL() && !new URLSearchParams(location.search).has('nowebgl')
      setWebgl(ok)
      let eco: InstanceType<typeof Ecosystem> | null = null
      if (ok && host.current) {
        try { eco = new Ecosystem(host.current, { mobile: window.innerWidth < 768, reduced }) } catch { setWebgl(false) }
      }
      const sections = Array.from(root.current!.querySelectorAll<HTMLElement>('[data-stage]'))
      const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.stage)) }), { rootMargin: '-45% 0px -45% 0px' })
      sections.forEach((s) => io.observe(s))
      let st: { kill: () => void } | null = null
      if (!reduced) {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
        if (disposed) return
        gsap.registerPlugin(ScrollTrigger)
        st = ScrollTrigger.create({ trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: true, onUpdate: (s) => eco?.setProgress(s.progress) })
        root.current!.querySelectorAll('.stage-card').forEach((el) => {
          gsap.from(el, { y: 40, opacity: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
        })
      } else {
        eco?.setProgress(1)
      }
      cleanup = () => { io.disconnect(); st?.kill(); eco?.dispose() }
    })()
    return () => { disposed = true; cleanup() }
  }, [])

  return (
    <div className="journey" ref={root}>
      <div className="journey-sticky" aria-hidden="true">
        <div className="scene" ref={host} />
        {webgl === false && <Fallback />}
        <div className={`scene-labels s${active}`}>
          <span className="lbl l1">Software</span><span className="lbl l2">Integrations</span>
          <span className="lbl l3">Automation</span><span className="lbl l4">Digital visibility</span>
          <span className="lbl illus">Illustrative sample data</span>
        </div>
        <ol className="stage-rail">
          {stages.map((s, i) => <li key={s.id} className={i === active ? 'on' : ''}>{s.id}</li>)}
        </ol>
      </div>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="wrap hero-inner">
          <p className="eyebrow">IT consulting · Software · Digital growth</p>
          <h1 id="hero-title">Your next stage of growth starts with <em>the right systems.</em></h1>
          <p className="lead">We bring strategy, software, automation, and marketing together to help businesses operate smarter, build better digital experiences, and reach the right customers.</p>
          <div className="hero-ctas">
            <Link to="/#contact" className="btn btn-primary">Discuss your project</Link>
            <Link to="/#services" className="btn btn-ghost">Explore our capabilities</Link>
          </div>
          <ul className="hero-pillars" aria-label="What we do">
            <li><b>Consult</b><span>Strategy &amp; roadmaps</span></li>
            <li><b>Engineer</b><span>Custom software</span></li>
            <li><b>Integrate</b><span>Automation &amp; cloud</span></li>
            <li><b>Grow</b><span>Digital marketing</span></li>
          </ul>
        </div>
        <a href="#story" className="scroll-cue">Scroll to see how it connects <span aria-hidden="true">↓</span></a>
      </section>

      <div id="story" className="story" aria-label="From business challenge to connected solution">
        {stages.map((s, i) => (
          <section key={s.id} className="stage" data-stage={i} aria-labelledby={`stage-${s.id}`}>
            <div className="wrap">
              <div className="stage-card" style={{ pointerEvents: 'auto' }}>
                <p className="stage-label"><span>{s.id}</span> {s.label}</p>
                <h2 id={`stage-${s.id}`}>{s.title}</h2>
                <p>{s.body}</p>
                {s.points.length > 0 && <ul className={`chips ${s.id === '04' ? 'flow' : ''}`}>{s.points.map((p) => <li key={p} className={p === 'AI assist' ? 'ai' : ''}>{p}</li>)}</ul>}
                {s.id === '06' && <div className="hero-ctas stage-ctas"><Link to="/#contact" className="btn btn-primary">Discuss your project</Link><Link to="/#services" className="btn btn-ghost">Explore our capabilities</Link></div>}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
