import * as THREE from 'three'

const C = { forest: '#183D2B', ivory: '#F3F0E7', charcoal: '#252A26', sage: '#78917A', soft: '#B8CFB9', stone: '#DCDDD3', white: '#FFFFFF' }
const FONT = '600 22px Manrope, system-ui, sans-serif'

export function hasWebGL(): boolean {
  try { const c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))) } catch { return false }
}

type Kind = 'dash' | 'code' | 'app' | 'chart' | 'flow' | 'api' | 'kpi' | 'list'
function tex(kind: Kind, w: number, h: number): THREE.CanvasTexture {
  const S = 2, cv = document.createElement('canvas'); cv.width = w * S; cv.height = h * S
  const g = cv.getContext('2d')!; g.scale(S, S)
  const dark = kind === 'code' || kind === 'api'
  g.fillStyle = dark ? C.charcoal : C.white; g.fillRect(0, 0, w, h)
  const bar = (x: number, y: number, ww: number, hh: number, c: string) => { g.fillStyle = c; g.fillRect(x, y, ww, hh) }
  const txt = (s: string, x: number, y: number, c: string, f = FONT) => { g.font = f; g.fillStyle = c; g.fillText(s, x, y) }
  if (kind !== 'app') {
    bar(0, 0, w, 40, dark ? '#1b1f1c' : C.forest)
    ;[C.soft, C.stone, C.sage].forEach((c, i) => { g.fillStyle = c; g.beginPath(); g.arc(20 + i * 18, 20, 5.5, 0, 7); g.fill() })
  }
  const title: Record<Kind, string> = { dash: 'Operations', code: 'integration.ts', app: '', chart: 'Search visibility', flow: 'Workflow', api: 'POST /api/enquiries', kpi: 'This month', list: 'Customers' }
  if (title[kind]) txt(title[kind], 80, 27, dark ? C.soft : C.ivory, '600 15px Manrope, system-ui, sans-serif')
  if (kind === 'dash') {
    ;[['Orders', '1,284'], ['Open tickets', '36'], ['Avg. response', '2.4h']].forEach(([l, v], i) => {
      const x = 20 + i * ((w - 40) / 3); bar(x, 56, (w - 40) / 3 - 10, 70, C.ivory)
      txt(l, x + 12, 80, C.sage, '600 13px Manrope, sans-serif'); txt(v, x + 12, 112, C.charcoal, '700 26px Manrope, sans-serif')
    })
    ;[0.45, 0.7, 0.55, 0.85, 0.65, 0.95, 0.8, 0.6].forEach((b, i) => bar(26 + i * ((w - 52) / 8), h - 24 - b * (h - 170), (w - 52) / 8 - 12, b * (h - 170), i === 5 ? C.forest : C.soft))
  } else if (kind === 'code' || kind === 'api') {
    const lines = kind === 'code'
      ? [['const', 'order', ' = await crm.find(id)'], ['await', 'erp', '.sync(order)'], ['if', '(order.paid)', ' notify(team)'], ['return', 'invoice', '.create(order)'], ['//', 'automated', ' on every update']]
      : [['{', '', ''], ['  "name"', ':', ' "Priya S."'], ['  "service"', ':', ' "Automation"'], ['  "source"', ':', ' "search"'], ['}', '', ''], ['201', 'Created', '']]
    lines.forEach((l, i) => {
      const y = 76 + i * 34; txt(String(i + 1), 18, y, '#5d665f', '500 15px monospace')
      txt(l[0], 50, y, C.soft, '600 17px monospace'); const x1 = 50 + g.measureText(l[0]).width + 10
      txt(l[1], x1, y, C.sage, '500 17px monospace'); txt(l[2], x1 + g.measureText(l[1]).width, y, C.ivory, '500 17px monospace')
    })
  } else if (kind === 'app') {
    bar(0, 0, w, h, C.ivory); bar(0, 0, w, 64, C.forest); txt('Bookings', 20, 42, C.ivory, '700 20px Manrope, sans-serif')
    for (let i = 0; i < 5; i++) { bar(16, 82 + i * 62, w - 32, 50, C.white); bar(28, 94 + i * 62, 26, 26, i % 2 ? C.soft : C.sage); bar(64, 96 + i * 62, 90 + (i * 23) % 50, 9, C.charcoal); bar(64, 112 + i * 62, 60, 7, C.stone) }
    bar(16, h - 64, w - 32, 44, C.forest); txt('Confirm', w / 2 - 34, h - 36, C.ivory, '700 16px Manrope, sans-serif')
  } else if (kind === 'chart') {
    g.strokeStyle = C.stone; g.lineWidth = 1.5
    for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(20, 70 + i * ((h - 100) / 3)); g.lineTo(w - 20, 70 + i * ((h - 100) / 3)); g.stroke() }
    const pts = [0.15, 0.22, 0.2, 0.38, 0.45, 0.42, 0.62, 0.7, 0.88]
    g.beginPath(); pts.forEach((v, i) => { const x = 20 + i * ((w - 40) / 8), y = h - 30 - v * (h - 110); if (i) g.lineTo(x, y); else g.moveTo(x, y) })
    g.lineTo(w - 20, h - 30); g.lineTo(20, h - 30); g.fillStyle = C.soft; g.fill()
    g.beginPath(); pts.forEach((v, i) => { const x = 20 + i * ((w - 40) / 8), y = h - 30 - v * (h - 110); if (i) g.lineTo(x, y); else g.moveTo(x, y) }); g.strokeStyle = C.forest; g.lineWidth = 4; g.stroke()
    txt('Illustrative', w - 110, 66, C.sage, '600 12px Manrope, sans-serif')
  } else if (kind === 'flow') {
    const steps = ['Enquiry', 'Qualify', 'Assign', 'Follow up']
    steps.forEach((s, i) => {
      const x = 22 + (i % 2) * ((w - 44) / 2 + 10), y = 64 + Math.floor(i / 2) * ((h - 90) / 2)
      bar(x, y, (w - 44) / 2 - 10, (h - 110) / 2, i === 2 ? C.forest : C.ivory)
      txt(s, x + 14, y + 34, i === 2 ? C.ivory : C.charcoal, '700 17px Manrope, sans-serif')
    })
  } else if (kind === 'kpi') {
    ;[['Leads', '+18%'], ['Conversion', '4.2%']].forEach(([l, v], i) => { txt(l, 22, 80 + i * 70, C.sage, '600 14px Manrope, sans-serif'); txt(v, 22, 112 + i * 70, C.forest, '800 30px Manrope, sans-serif') })
    g.strokeStyle = C.stone; g.lineWidth = 14; g.beginPath(); g.arc(w - 70, h / 2 + 20, 42, 0, 7); g.stroke()
    g.strokeStyle = C.forest; g.beginPath(); g.arc(w - 70, h / 2 + 20, 42, -1.57, 2.6); g.stroke()
  } else {
    for (let i = 0; i < 5; i++) { const y = 56 + i * ((h - 70) / 5); bar(16, y, w - 32, (h - 70) / 5 - 8, i === 1 ? C.soft : C.ivory); g.fillStyle = C.sage; g.beginPath(); g.arc(34, y + 17, 10, 0, 7); g.fill(); bar(54, y + 10, 100 + (i * 41) % 90, 8, C.charcoal); bar(w - 70, y + 10, 46, 8, C.sage) }
  }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8
  return t
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const clamp = (v: number) => Math.min(1, Math.max(0, v))
const seg = (p: number, a: number, b: number) => { const t = clamp((p - a) / (b - a)); return t * t * (3 - 2 * t) }
const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z)

type Panel = { g: THREE.Group; scatter: THREE.Vector3; grid: THREE.Vector3; settle: THREE.Vector3; rs: THREE.Euler; phase: number; group: number }
export type Labels = { groups: HTMLElement[]; steps: HTMLElement[] }

// panel specs: kind, width, height, group (0 Software, 1 Integrations, 2 Automation, 3 Digital visibility)
const SPECS: [Kind, number, number, number][] = [
  ['dash', 2.6, 1.7, 0], ['app', 0.95, 1.75, 0], ['list', 1.7, 1.2, 0],
  ['code', 2.1, 1.35, 1], ['api', 1.8, 1.35, 1], ['list', 1.4, 1.0, 1],
  ['flow', 1.9, 1.3, 2], ['code', 1.6, 1.1, 2], ['kpi', 1.6, 1.15, 2],
  ['chart', 2.3, 1.5, 3], ['kpi', 1.6, 1.15, 3], ['app', 0.9, 1.6, 3],
]
const GROUP_C: [number, number][] = [[-2.7, 1.9], [3.1, 1.9], [-2.7, -2.0], [3.1, -2.0]]
const IN_GROUP: [number, number, number][] = [[-0.5, 0.25, 0], [1.25, -0.2, 0.5], [0.2, -0.9, 0.9]]

export class Ecosystem {
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private world = new THREE.Group()
  private camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
  private panels: Panel[] = []
  private hubs: THREE.Mesh[] = []
  private links: { line: THREE.Line; mat: THREE.LineBasicMaterial; a: THREE.Object3D; b: THREE.Object3D; dots: THREE.Mesh[] }[] = []
  private wf = new THREE.Group(); private wfNodes: THREE.Mesh[] = []; private token: THREE.Mesh
  private mkt = new THREE.Group(); private bars: THREE.Mesh[] = []; private funnel: THREE.Mesh[] = []
  private progress = 0; private target = 0; private raf = 0; private running = true
  private clock = new THREE.Clock(); private mouse = new THREE.Vector2(); private sm = new THREE.Vector2()
  private tmp = new THREE.Vector3()

  constructor(private host: HTMLElement, private opts: { mobile: boolean; reduced: boolean; labels?: Labels }) {
    const m = opts.mobile
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, m ? 1.5 : 2))
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.shadowMap.enabled = !m; this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    host.appendChild(this.renderer.domElement); this.renderer.domElement.setAttribute('aria-hidden', 'true')
    this.scene.add(this.world)
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xdcddd3, 1.7))
    const dl = new THREE.DirectionalLight(0xffffff, 1.6); dl.position.set(-3, 4, 14); dl.castShadow = !m
    dl.shadow.mapSize.set(2048, 2048); dl.shadow.radius = 8; dl.shadow.bias = -0.0005
    Object.assign(dl.shadow.camera, { left: -12, right: 12, top: 9, bottom: -9, near: 1, far: 30 })
    this.scene.add(dl)
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 40), new THREE.ShadowMaterial({ color: 0x183d2b, opacity: 0.07 }))
    ground.position.z = -4.5; ground.receiveShadow = true; this.world.add(ground)

    const rnd = mulberry(11)
    const side = new THREE.MeshStandardMaterial({ color: C.stone, roughness: 0.9 })
    const back = new THREE.MeshStandardMaterial({ color: C.white, roughness: 0.9 })
    const specs = m ? SPECS.filter((_, i) => i % 3 !== 2) : SPECS
    const groupCount = [0, 0, 0, 0]
    specs.forEach(([kind, w, h, grp], i) => {
      const k = groupCount[grp]++
      const sc = m ? 0.8 : 1
      const geo = new THREE.BoxGeometry(w * sc, h * sc, 0.09)
      const front = new THREE.MeshStandardMaterial({ map: tex(kind, Math.round(w * 200), Math.round(h * 200)), roughness: 0.75 })
      const mesh = new THREE.Mesh(geo, [side, side, side, side, front, back]); mesh.castShadow = !m
      const g = new THREE.Group(); g.add(mesh); this.world.add(g)
      const [gx, gy] = GROUP_C[grp], [ox, oy, oz] = IN_GROUP[k] || [0, 0, 0]
      const gs = m ? 0.5 : 1
      const grid = V(gx * gs + ox * (m ? 0.6 : 1), gy * (m ? 1.25 : 1) + oy, oz)
      // scatter: rich layered composition (right side on desktop)
      const scatter = m ? V((rnd() - 0.5) * 5.5, 3.1 + rnd() * 2.4, -rnd() * 2.5) : V(-1.5 + rnd() * 9.5, (rnd() - 0.5) * 8.5, -rnd() * 3.5 + 0.5)
      const settle = V(grid.x * 0.78, grid.y * 0.82, grid.z - 0.6)
      this.panels.push({ g, scatter, grid, settle, rs: new THREE.Euler((rnd() - 0.5) * 0.9, (rnd() - 0.6) * 1.1, (rnd() - 0.5) * 0.5), phase: i * 1.7, group: grp })
    })
    // hub nodes (one per group + center)
    const hubMat = [C.forest, C.sage, C.charcoal, C.forest].map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, flatShading: true }))
    for (let i = 0; i < 4; i++) {
      const hb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.26, 0), hubMat[i]); hb.castShadow = !m
      this.world.add(hb); this.hubs.push(hb)
    }
    const center = new THREE.Mesh(new THREE.OctahedronGeometry(0.5, 0), new THREE.MeshStandardMaterial({ color: C.forest, flatShading: true, roughness: 0.5 }))
    center.castShadow = !m; this.world.add(center); this.hubs.push(center)
    // links: panel->its hub, hub->center, hub ring
    const dotGeo = new THREE.SphereGeometry(0.06, 10, 10), dotMat = new THREE.MeshBasicMaterial({ color: C.forest })
    const addLink = (a: THREE.Object3D, b: THREE.Object3D) => {
      const mat = new THREE.LineBasicMaterial({ color: C.sage, transparent: true, opacity: 0 })
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([V(0, 0, 0), V(0, 0, 0)]), mat)
      const dots = [0, 1].map(() => { const d = new THREE.Mesh(dotGeo, dotMat); d.visible = false; this.world.add(d); return d })
      this.world.add(line); this.links.push({ line, mat, a, b, dots })
    }
    this.panels.forEach((p) => addLink(p.g, this.hubs[p.group]))
    for (let i = 0; i < 4; i++) { addLink(this.hubs[i], center); addLink(this.hubs[i], this.hubs[(i + 1) % 4]) }

    // workflow (stage 4): Request -> Validate -> AI -> Approve -> Outcome
    const n = 5, spacing = m ? 0.8 : 1.3
    for (let i = 0; i < n; i++) {
      const ai = i === 2
      const node = new THREE.Mesh(ai ? new THREE.OctahedronGeometry(0.3, 0) : new THREE.BoxGeometry(0.55, 0.55, 0.55), new THREE.MeshStandardMaterial({ color: ai ? C.soft : i === n - 1 ? C.forest : C.white, roughness: 0.6, flatShading: true }))
      node.position.set((i - 2) * spacing, 0, 0); node.castShadow = !m; this.wf.add(node); this.wfNodes.push(node)
      if (i) { const l = new THREE.Mesh(new THREE.BoxGeometry(spacing - 0.55, 0.05, 0.05), new THREE.MeshStandardMaterial({ color: C.sage })); l.position.set((i - 2.5) * spacing, 0, 0); this.wf.add(l) }
    }
    this.token = new THREE.Mesh(new THREE.SphereGeometry(0.17, 20, 20), new THREE.MeshStandardMaterial({ color: C.charcoal, roughness: 0.4 }))
    this.token.castShadow = !m; this.wf.add(this.token)
    this.wf.position.set(m ? 0 : 1.2, m ? 0.6 : -0.2, 3); this.world.add(this.wf)

    // marketing (stage 5): funnel + bars
    const fr = [1.0, 0.78, 0.56, 0.36]
    fr.forEach((r, i) => {
      const f = new THREE.Mesh(new THREE.CylinderGeometry(r, fr[i + 1] ?? 0.22, 0.42, 6), new THREE.MeshStandardMaterial({ color: [C.soft, C.sage, C.forest, C.charcoal][i], flatShading: true, roughness: 0.7 }))
      f.position.y = 0.9 - i * 0.5; f.castShadow = !m; this.mkt.add(f); this.funnel.push(f)
    })
    for (let i = 0; i < 5; i++) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.34, 1, 0.34), new THREE.MeshStandardMaterial({ color: i % 2 ? C.soft : C.forest, roughness: 0.7 }))
      b.position.set(1.7 + i * 0.48, -1.1, 0); b.castShadow = !m; this.mkt.add(b); this.bars.push(b)
    }
    this.mkt.position.set(m ? -1.2 : 0.4, m ? 0.4 : 0, 2.4); this.mkt.scale.setScalar(m ? 0.55 : 0.72); this.world.add(this.mkt)

    this.resize()
    window.addEventListener('resize', this.resize)
    if (!opts.reduced) window.addEventListener('pointermove', this.onMove)
    document.addEventListener('visibilitychange', this.onVis)
    if (opts.reduced) { this.renderFrame(0) } else this.loop()
  }

  private onMove = (e: PointerEvent) => { this.mouse.set(e.clientX / innerWidth - 0.5, e.clientY / innerHeight - 0.5) }
  private onVis = () => { this.running = !document.hidden; if (this.running && !this.opts.reduced) this.loop() }
  private resize = () => {
    const w = this.host.clientWidth || innerWidth, h = this.host.clientHeight || innerHeight
    this.renderer.setSize(w, h, false); this.camera.aspect = w / h
    this.camera.position.z = w / h < 0.8 ? 17 : w / h < 1.2 ? 16 : 13.5
    this.camera.updateProjectionMatrix(); if (this.opts.reduced) this.renderFrame(0)
  }
  setProgress(p: number) { this.target = clamp(p); if (this.opts.reduced) { this.progress = this.target; this.renderFrame(0) } }
  private loop = () => {
    if (!this.running) return
    cancelAnimationFrame(this.raf); this.raf = requestAnimationFrame(this.loop)
    this.progress += (this.target - this.progress) * 0.075
    this.renderFrame(this.clock.getElapsedTime())
  }

  private project(o: THREE.Object3D, el: HTMLElement, op: number, dy = 0) {
    o.getWorldPosition(this.tmp); this.tmp.project(this.camera)
    const x = (this.tmp.x * 0.5 + 0.5) * this.host.clientWidth, y = (-this.tmp.y * 0.5 + 0.5) * this.host.clientHeight + dy
    el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -50%)`; el.style.opacity = op.toFixed(2)
  }

  private renderFrame(t: number) {
    const p = this.progress, m = this.opts.mobile, mv = this.opts.reduced ? 0 : 1
    const grp = seg(p, 0.18, 0.32)
    const lab = seg(p, 0.24, 0.32) * (1 - seg(p, 0.4, 0.46))
    const link = seg(p, 0.38, 0.48)
    const flow = seg(p, 0.44, 0.52)
    const wf = seg(p, 0.56, 0.64) * (1 - seg(p, 0.74, 0.8))
    const mk = seg(p, 0.74, 0.82)
    const st = seg(p, 0.9, 0.98)
    const recede = Math.max(wf, mk * 0.7)
    this.panels.forEach((pn) => {
      const pos = pn.g.position
      pos.lerpVectors(pn.scatter, pn.grid, grp); pos.lerp(pn.settle, st)
      pos.z -= recede * 2.6
      pos.y += Math.sin(t * 0.7 + pn.phase) * 0.1 * mv
      const r = 1 - grp
      pn.g.rotation.set(pn.rs.x * r + Math.sin(t * 0.4 + pn.phase) * 0.03 * mv, pn.rs.y * r - pos.x * 0.03, pn.rs.z * r)
      pn.g.scale.setScalar(1 - recede * 0.22)
    })
    GROUP_C.forEach(([gx, gy], i) => {
      const h = this.hubs[i], gs = m ? 0.5 : 1
      h.position.set(gx * gs + (m ? 0 : 0.35), gy * (m ? 1.25 : 1) * (1 - st * 0.18) + (gy > 0 ? -1.15 : 1.15) * (m ? 0.8 : 1), 1.4 - recede * 1.4)
      h.scale.setScalar(Math.max(0.001, link)); h.rotation.set(t * 0.5 * mv, t * 0.4 * mv, 0)
    })
    const c = this.hubs[4]; c.position.set(m ? 0 : 0.2, 0, 1.6 - recede * 1.4); c.scale.setScalar(Math.max(0.001, link * (1 - wf)))
    c.rotation.y = t * 0.6 * mv + p * 4
    this.links.forEach((l, i) => {
      const a = l.a.position, b = l.b.position, pos = l.line.geometry.attributes.position as THREE.BufferAttribute
      pos.setXYZ(0, a.x, a.y, a.z); pos.setXYZ(1, b.x, b.y, b.z); pos.needsUpdate = true
      l.mat.opacity = link * 0.85
      l.dots.forEach((d, j) => { d.visible = flow > 0.02; const k = mv ? (t * 0.45 + i * 0.17 + j * 0.5) % 1 : (j * 0.5 + 0.25); d.position.lerpVectors(a, b, k); d.scale.setScalar(Math.max(0.001, flow)) })
    })
    // workflow
    this.wf.visible = wf > 0.01; this.wf.scale.setScalar(Math.max(0.001, wf) * (m ? 0.8 : 1))
    const loopT = mv ? (t * 0.28) % 1 : 0.5
    this.token.position.set(lerp(-2, 2, loopT) * (m ? 0.8 : 1.3), 0.62 + Math.abs(Math.sin(loopT * Math.PI * 4)) * 0.25, 0)
    this.wfNodes.forEach((nd, i) => { const active = Math.abs(this.token.position.x - nd.position.x) < 0.45; nd.scale.setScalar(active ? 1.15 : 1); nd.rotation.y = i === 2 ? t * 1.2 * mv : 0.5 })
    // marketing
    this.mkt.visible = mk > 0.01
    this.funnel.forEach((f, i) => { const s = seg(mk, i * 0.15, 0.5 + i * 0.15); f.scale.set(Math.max(0.001, s), Math.max(0.001, s), Math.max(0.001, s)); f.rotation.y = t * 0.3 * mv + i * 0.3 })
    this.bars.forEach((b, i) => { const hh = (0.5 + i * 0.32) * mk; b.scale.y = Math.max(0.001, hh); b.position.y = -1.1 + hh / 2 })
    // world framing: shift right on desktop to leave room for text
    const shift = m ? 0 : lerp(1.6, 2.3, grp) - st * 0.3
    this.world.position.x = shift
    this.world.position.y = m ? grp * 1.3 : 0
    this.world.rotation.y = st * Math.sin(t * 0.2) * 0.12 * mv - 0.06
    this.sm.lerp(this.mouse, 0.05)
    this.camera.position.x = this.sm.x * 1.2 * mv; this.camera.position.y = -this.sm.y * 0.8 * mv + lab * 1.5
    this.camera.lookAt(m ? 0 : 1.4, 0, 0)
    // HTML labels
    const L = this.opts.labels
    if (L) {
      L.groups.forEach((el, i) => this.project(this.hubs[i], el, lab, i < 2 ? -18 : 18))
      L.steps.forEach((el, i) => this.project(this.wfNodes[i], el, wf, m ? 34 : 46))
    }
    this.renderer.render(this.scene, this.camera)
  }

  dispose() {
    this.running = false; cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.resize); window.removeEventListener('pointermove', this.onMove)
    document.removeEventListener('visibilitychange', this.onVis)
    this.scene.traverse((o) => { const mm = o as THREE.Mesh; mm.geometry?.dispose(); const mats = (Array.isArray(mm.material) ? mm.material : mm.material ? [mm.material] : []) as (THREE.Material & { map?: THREE.Texture })[]; mats.forEach((mt) => { mt.map?.dispose(); mt.dispose() }) })
    this.renderer.dispose(); this.renderer.domElement.remove()
  }
}

function mulberry(a: number) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296 } }
