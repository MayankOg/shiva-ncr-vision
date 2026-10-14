// Lightweight CSS-3D visuals (no extra WebGL contexts).
export function ServiceVisual({ slug }: { slug: string }) {
  if (slug === 'software-engineering') return (
    <div className="v3d v-soft" aria-hidden="true"><div className="rig">
      <div className="win w1"><i /><b /><b /><b /></div><div className="win w2"><i /><b /><b /></div><div className="win w3 dark"><i /><b /><b /><b /></div>
    </div></div>)
  if (slug === 'ai-automation') return (
    <div className="v3d v-ai" aria-hidden="true"><div className="rig">
      <div className="cube">{Array.from({ length: 6 }, (_, i) => <span key={i} className={`f f${i}`} />)}</div>
      <div className="orbit">{[0, 1, 2].map((i) => <span key={i} className={`o o${i}`} />)}</div>
    </div></div>)
  if (slug === 'it-infrastructure') return (
    <div className="v3d v-infra" aria-hidden="true"><div className="rig">
      {[0, 1, 2].map((i) => <div key={i} className={`slab s${i}`}><span /><span /><em /></div>)}
    </div></div>)
  if (slug === 'digital-marketing') return (
    <div className="v3d v-mkt" aria-hidden="true"><div className="rig">
      {[0.35, 0.55, 0.45, 0.75, 0.95].map((h, i) => <div key={i} className="bar3" style={{ ['--h' as string]: h, ['--i' as string]: i }}><span className="top" /><span className="fr" /><span className="sd" /></div>)}
    </div></div>)
  return (
    <div className="v3d v-map" aria-hidden="true"><div className="rig">
      <svg viewBox="0 0 200 120"><path d="M20 95 C 60 95, 60 40, 100 50 S 150 20, 180 25" fill="none" stroke="#78917A" strokeWidth="3" strokeDasharray="6 6" className="dash" />
        {[[20, 95], [70, 62], [120, 45], [180, 25]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i === 3 ? 9 : 6} fill={i === 3 ? '#183D2B' : '#fff'} stroke="#183D2B" strokeWidth="3" />)}
      </svg>
    </div></div>)
}

export function ProblemIcon({ i }: { i: string }) {
  const p: Record<string, JSX.Element> = {
    split: <><rect x="4" y="6" width="12" height="12" rx="2" /><rect x="24" y="22" width="12" height="12" rx="2" /><path d="M16 12h4M20 28h4" strokeDasharray="2 3" /></>,
    repeat: <><path d="M8 14a10 10 0 0 1 18-4l2 3M32 26a10 10 0 0 1-18 4l-2-3" /><path d="M28 6v7h-7M12 34v-7h7" /></>,
    window: <><rect x="5" y="7" width="30" height="24" rx="3" /><path d="M5 13h30" /><path d="M11 20h10M11 25h16" /></>,
    plug: <><path d="M14 6v8M26 6v8M10 14h20v6a10 10 0 0 1-20 0zM20 30v6" /></>,
    search: <><circle cx="17" cy="17" r="10" /><path d="M25 25l9 9" /><path d="M12 19l4-4 3 3 4-5" /></>,
    compass: <><circle cx="20" cy="20" r="14" /><path d="M25 15l-3 8-7 3 3-8z" /></>,
  }
  return <svg viewBox="0 0 40 40" className="picon" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{p[i]}</svg>
}
