import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { stages } from '../content/content'
import Fallback from './Fallback'

const GROUPS = ['Software', 'Integrations', 'Automation', 'Digital visibility']
const STEPS = ['Request', 'Validate', 'AI', 'Approve', 'Outcome']

export default function Journey() {
  const root = useRef<HTMLDivElement>(null)
  const host = useRef<HTMLDivElement>(null)
  const labels = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(-1)
  const [webgl, setWebgl] = useState<boolean | null>(null)

  useEffect(() => {
    let disposed = false
    let cleanup = () => {}
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ;(async () => {
      const { Ecosystem, hasWebGL } = await import('../three/Ecosystem')
      if (disposed) return
      const ok = hasWebGL() && !new URLSearchParams(location.search).has('nowebgl')
      setWebgl(ok)
      let eco: InstanceType<typeof Ecosystem> | null = null
      if (ok && host.current) {
        const L = labels.current!
        try {
          eco = new Ecosystem(host.current, { mobile: window.innerWidth < 768, reduced, labels: { groups: Array.from(L.querySelectorAll<HTMLElement>('.glabel')), steps: Array.from(L.querySelectorAll<HTMLElement>('.slabel')) } })
        } catch { setWebgl(false) }
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
          gsap.from(el, { y: 50, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
        })
        gsap.from('.hero h1 .w', { y: 60, opacity: 0, duration: 1, stagger: 0.06, ease: 'power3.out', delay: 0.15 })
      } else {
        eco?.setProgress(1)
      }
      cleanup = () => { io.disconnect(); st?.kill(); eco?.dispose() }
    })()
    return () => { disposed = true; cleanup() }
  }, [])

  const words = (s: string) => s.split(' ').map((w, i) => <span className="w" key={i}>{w}</span>)

  return (
    <div className="journey" ref={root}>
      <div className="journey-sticky" aria-hidden="true">
        <div className="scene" ref={host} />
        <div className="scene-labels" ref={labels}>
          {GROUPS.map((g) => <span key={g} className="lbl glabel">{g}</span>)}
          {STEPS.map((s) => <span key={s} className={`lbl slabel ${s === 'AI' ? 'ai' : ''}`}>{s}</span>)}
          <span className={`lbl illus ${active === 4 ? 'on' : ''}`}>Illustrative sample data</span>
        </div>
        {webgl === false && <Fallback />}
        <ol className="stage-rail">
          {stages.map((s, i) => <li key={s.id} className={i === active ? 'on' : ''}>{s.id}</li>)}
        </ol>
      </div>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="wrap hero-inner">
          <p className="eyebrow">IT consulting · Software · Digital growth</p>
          <h1 id="hero-title">{words('Your next stage of growth starts with')}<em>{words('the right systems.')}</em></h1>
          <p className="lead">Strategy, software, automation and marketing — brought together.</p>
          <div className="hero-ctas">
            <Link to="/#contact" className="btn btn-primary">Discuss your project</Link>
            <Link to="/#services" className="btn btn-ghost">Explore our capabilities</Link>
          </div>
        </div>
        <a href="#story" className="scroll-cue"><span className="cue-line" aria-hidden="true" />Scroll</a>
      </section>

      <div id="story" className="story" aria-label="From business challenge to connected solution">
        {stages.map((s, i) => (
          <section key={s.id} className="stage" data-stage={i} aria-labelledby={`stage-${s.id}`}>
            <div className="wrap">
              <div className="stage-card">
                <p className="stage-label"><span>{s.id}</span> {s.label}</p>
                <h2 id={`stage-${s.id}`}>{s.title}</h2>
                <p>{s.short}</p>
                {s.id === '06' && <div className="hero-ctas stage-ctas"><Link to="/#contact" className="btn btn-primary">Discuss your project</Link><Link to="/#services" className="btn btn-ghost">Explore our capabilities</Link></div>}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
