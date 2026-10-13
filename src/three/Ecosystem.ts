import * as THREE from 'three'

const C = { forest: '#183D2B', ivory: '#F3F0E7', charcoal: '#252A26', sage: '#78917A', soft: '#B8CFB9', stone: '#DCDDD3', white: '#FFFFFF' }

export function hasWebGL(): boolean {
  try {
    const c = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')))
  } catch { return false }
}

function panelTexture(kind: number): THREE.CanvasTexture {
  const w = 512, h = 340
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h
  const g = cv.getContext('2d')!
  g.fillStyle = C.white; g.fillRect(0, 0, w, h)
  g.strokeStyle = C.stone; g.lineWidth = 4; g.strokeRect(2, 2, w - 4, h - 4)
  g.fillStyle = kind % 2 ? C.forest : C.charcoal; g.fillRect(0, 0, w, 44)
  ;[C.soft, C.stone, C.sage].forEach((c, i) => { g.fillStyle = c; g.beginPath(); g.arc(24 + i * 22, 22, 7, 0, 7); g.fill() })
  g.fillStyle = C.stone
  if (kind === 0) { // dashboard bars
    const bars = [0.4, 0.65, 0.5, 0.8, 0.7, 0.95]
    bars.forEach((b, i) => { g.fillStyle = i === 5 ? C.forest : C.sage; g.fillRect(40 + i * 72, h - 30 - b * 220, 48, b * 220) })
  } else if (kind === 1) { // list
    for (let i = 0; i < 6; i++) { g.fillStyle = i === 1 ? C.soft : C.ivory; g.fillRect(28, 66 + i * 44, w - 56, 34); g.fillStyle = C.sage; g.fillRect(40, 78 + i * 44, 120 + (i * 37) % 160, 10) }
  } else if (kind === 2) { // line chart
    g.strokeStyle = C.stone; g.lineWidth = 2
    for (let i = 0; i < 5; i++) { g.beginPath(); g.moveTo(30, 80 + i * 55); g.lineTo(w - 30, 80 + i * 55); g.stroke() }
    g.strokeStyle = C.forest; g.lineWidth = 8; g.beginPath()
    ;[0.2, 0.35, 0.3, 0.55, 0.5, 0.75, 0.9].forEach((v, i) => { const x = 30 + i * 75, y = h - 40 - v * 230; if (i) g.lineTo(x, y); else g.moveTo(x, y) })
    g.stroke()
  } else { // form / workflow
    for (let i = 0; i < 3; i++) { g.fillStyle = C.ivory; g.fillRect(40, 70 + i * 70, w - 80, 48); g.fillStyle = C.sage; g.fillRect(56, 88 + i * 70, 140, 12) }
    g.fillStyle = C.forest; g.fillRect(w - 200, h - 60, 160, 40)
  }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4
  return t
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const clamp = (v: number) => Math.min(1, Math.max(0, v))
const seg = (p: number, a: number, b: number) => { const t = clamp((p - a) / (b - a)); return t * t * (3 - 2 * t) }

type Item = { obj: THREE.Object3D; from: THREE.Vector3; to: THREE.Vector3; rFrom: THREE.Euler; rTo: THREE.Euler; phase: number }

export class Ecosystem {
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera: THREE.PerspectiveCamera
  private panels: Item[] = []
  private nodes: Item[] = []
  private links: { line: THREE.Line; mat: THREE.LineBasicMaterial; a: Item; b: Item; pulse: THREE.Mesh }[] = []
  private bars: THREE.Mesh[] = []
  private core: THREE.Mesh
  private ring: THREE.Mesh
  private progress = 0
  private target = 0
  private raf = 0
  private running = true
  private clock = new THREE.Clock()
  private mouse = new THREE.Vector2()

  constructor(private host: HTMLElement, private opts: { mobile: boolean; reduced: boolean }) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, opts.mobile ? 1.5 : 2))
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    host.appendChild(this.renderer.domElement)
    this.renderer.domElement.setAttribute('aria-hidden', 'true')
    this.camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
    this.camera.position.set(0, 0, 14)
    this.scene.add(new THREE.AmbientLight(0xffffff, 1.6))
    const dl = new THREE.DirectionalLight(0xffffff, 1.2); dl.position.set(4, 6, 8); this.scene.add(dl)

    const rnd = mulberry(7)
    const panelCount = opts.mobile ? 5 : 8
    const grid: [number, number][] = [[-4.2, 2], [0, 2.6], [4.2, 2], [-4.6, -1.6], [4.6, -1.6], [-1.8, -2.9], [1.8, -2.9], [0, 0.2]]
    for (let i = 0; i < panelCount; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.6), new THREE.MeshBasicMaterial({ map: panelTexture(i % 4), side: THREE.DoubleSide, transparent: true }))
      const [gx, gy] = grid[i]
      const s = opts.mobile ? 0.62 : 1
      this.panels.push(this.add(m,
        new THREE.Vector3(opts.mobile ? (rnd() - 0.5) * 10 : 0.5 + rnd() * 6.5, (rnd() - 0.5) * 7.5, -rnd() * 6 - 1),
        new THREE.Vector3(gx * s, gy * (opts.mobile ? 1.2 : 1), i === 7 ? -0.5 : -1.2),
        new THREE.Euler((rnd() - 0.5) * 1.4, (rnd() - 0.5) * 1.8, (rnd() - 0.5) * 1.2),
        new THREE.Euler(0, -gx * 0.06, 0)))
    }
    const nodeCount = opts.mobile ? 8 : 14
    const nodeGeo = new THREE.IcosahedronGeometry(0.18, 1)
    for (let i = 0; i < nodeCount; i++) {
      const tier = i % 3
      const mat = new THREE.MeshStandardMaterial({ color: [C.forest, C.sage, C.charcoal][tier], roughness: 0.7, flatShading: true })
      const a = (i / nodeCount) * Math.PI * 2
      const r = 3.2 + tier * 0.9
      this.nodes.push(this.add(new THREE.Mesh(nodeGeo, mat),
        new THREE.Vector3(opts.mobile ? (rnd() - 0.5) * 8 : rnd() * 8 - 1, (rnd() - 0.5) * 8, (rnd() - 0.5) * 4),
        new THREE.Vector3(Math.cos(a) * r * (opts.mobile ? 0.6 : 1), Math.sin(a) * r * 0.62, 1 + tier * 0.4),
        new THREE.Euler(), new THREE.Euler()))
    }
    this.core = new THREE.Mesh(new THREE.OctahedronGeometry(0.75, 0), new THREE.MeshStandardMaterial({ color: C.forest, flatShading: true, roughness: 0.6 }))
    this.core.scale.setScalar(0.001); this.scene.add(this.core)
    this.ring = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.025, 8, 96), new THREE.MeshBasicMaterial({ color: C.sage }))
    this.ring.scale.setScalar(0.001); this.scene.add(this.ring)

    const pulseGeo = new THREE.SphereGeometry(0.07, 10, 10)
    const pulseMat = new THREE.MeshBasicMaterial({ color: C.forest })
    this.nodes.forEach((n, i) => {
      const targets = [this.nodes[(i + 1) % nodeCount], this.panels[i % panelCount]]
      targets.forEach((t) => {
        const mat = new THREE.LineBasicMaterial({ color: C.sage, transparent: true, opacity: 0 })
        const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]), mat)
        const pulse = new THREE.Mesh(pulseGeo, pulseMat); pulse.visible = false
        this.scene.add(line, pulse)
        this.links.push({ line, mat, a: n, b: t, pulse })
      })
    })
    // analytics bars (outcome)
    const barMat = new THREE.MeshStandardMaterial({ color: C.forest, roughness: 0.8 })
    const barMat2 = new THREE.MeshStandardMaterial({ color: C.soft, roughness: 0.8 })
    for (let i = 0; i < 6; i++) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.32, 1, 0.32), i % 2 ? barMat2 : barMat)
      b.position.set(-1 + i * 0.4, -1.2, 2.2); b.scale.y = 0.001; this.bars.push(b); this.scene.add(b)
    }
    this.resize()
    window.addEventListener('resize', this.resize)
    window.addEventListener('pointermove', this.onMove)
    document.addEventListener('visibilitychange', this.onVis)
    if (opts.reduced) { this.progress = this.target = 1; this.renderFrame(0) } else this.loop()
  }

  private add(obj: THREE.Object3D, from: THREE.Vector3, to: THREE.Vector3, rFrom: THREE.Euler, rTo: THREE.Euler): Item {
    this.scene.add(obj); return { obj, from, to, rFrom, rTo, phase: Math.random() * 6 }
  }
  private onMove = (e: PointerEvent) => { this.mouse.set(e.clientX / innerWidth - 0.5, e.clientY / innerHeight - 0.5) }
  private onVis = () => { this.running = !document.hidden; if (this.running && !this.opts.reduced) this.loop() }
  private resize = () => {
    const w = this.host.clientWidth || innerWidth, h = this.host.clientHeight || innerHeight
    this.renderer.setSize(w, h, false); this.camera.aspect = w / h
    this.camera.position.z = w / h < 0.8 ? 19 : 14
    this.camera.updateProjectionMatrix()
    if (this.opts.reduced) this.renderFrame(0)
  }
  setProgress(p: number) { this.target = clamp(p); if (this.opts.reduced) { this.progress = this.target; this.renderFrame(0) } }

  private loop = () => {
    if (!this.running) return
    cancelAnimationFrame(this.raf)
    this.raf = requestAnimationFrame(this.loop)
    this.progress += (this.target - this.progress) * 0.08
    this.renderFrame(this.clock.getElapsedTime())
  }

  private renderFrame(t: number) {
    const p = this.progress
    const order = seg(p, 0.12, 0.45)      // chaos -> structure
    const linkIn = seg(p, 0.45, 0.62)
    const flow = seg(p, 0.6, 0.75)
    const outcome = seg(p, 0.8, 0.97)
    const drift = this.opts.reduced ? 0 : 1
    for (const it of [...this.panels, ...this.nodes]) {
      it.obj.position.lerpVectors(it.from, it.to, order)
      it.obj.position.y += Math.sin(t * 0.6 + it.phase) * 0.12 * drift * (1 - order * 0.6)
      it.obj.rotation.set(lerp(it.rFrom.x, it.rTo.x, order), lerp(it.rFrom.y, it.rTo.y, order) + Math.sin(t * 0.3 + it.phase) * 0.04 * drift, lerp(it.rFrom.z, it.rTo.z, order))
    }
    this.panels.forEach((it, i) => {
      const mat = (it.obj as THREE.Mesh).material as THREE.MeshBasicMaterial
      mat.opacity = lerp(0.55, 1, order) * (1 - outcome * (i === 7 ? 1 : 0.35))
    })
    const cs = Math.max(0.001, seg(p, 0.3, 0.5))
    this.core.scale.setScalar(cs * (1 - outcome * 0.35))
    this.core.rotation.y = t * 0.4 * drift + p * 3
    this.ring.scale.setScalar(Math.max(0.001, linkIn))
    this.ring.rotation.set(1.2, 0, t * 0.2 * drift)
    this.links.forEach((l, i) => {
      const pa = l.a.obj.position, pb = l.b.obj.position
      const pos = l.line.geometry.attributes.position as THREE.BufferAttribute
      pos.setXYZ(0, pa.x, pa.y, pa.z); pos.setXYZ(1, pb.x, pb.y, pb.z); pos.needsUpdate = true
      l.mat.opacity = linkIn * 0.8
      l.pulse.visible = flow > 0.05
      const k = this.opts.reduced ? (i % 5) / 5 : (t * 0.35 + i * 0.13) % 1
      l.pulse.position.lerpVectors(pa, pb, k)
      l.pulse.scale.setScalar(flow)
    })
    this.bars.forEach((b, i) => { b.visible = outcome > 0.01; const hgt = (0.5 + i * 0.28) * outcome; b.scale.y = Math.max(0.001, hgt); b.position.y = -1.2 + hgt / 2 })
    this.scene.rotation.y = lerp(this.scene.rotation.y, this.mouse.x * 0.15 * drift, 0.05)
    this.scene.rotation.x = lerp(this.scene.rotation.x, this.mouse.y * 0.08 * drift, 0.05)
    this.camera.position.x = lerp(0, 0.6, outcome)
    this.renderer.render(this.scene, this.camera)
  }

  dispose() {
    this.running = false; cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.resize); window.removeEventListener('pointermove', this.onMove)
    document.removeEventListener('visibilitychange', this.onVis)
    this.scene.traverse((o) => { const m = o as THREE.Mesh; m.geometry?.dispose(); const mat = m.material as THREE.Material & { map?: THREE.Texture }; if (mat) { mat.map?.dispose(); mat.dispose() } })
    this.renderer.dispose(); this.renderer.domElement.remove()
  }
}

function mulberry(a: number) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296 } }
