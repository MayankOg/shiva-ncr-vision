// Emit static entry points for each route so GitHub Pages returns 200 (and per-page titles for crawlers).
import fs from 'node:fs'
const html = fs.readFileSync('dist/index.html', 'utf8')
const services = { 'it-consulting': 'IT consulting and transformation', 'software-engineering': 'Software engineering', 'ai-automation': 'AI and intelligent automation', 'it-infrastructure': 'IT infrastructure and engineering', 'digital-marketing': 'Digital marketing and visibility' }
for (const [slug, name] of Object.entries(services)) {
  fs.mkdirSync(`dist/services/${slug}`, { recursive: true })
  const t = `${name.replace('&', '&amp;')} — Shiva NCR Consultants`
  fs.writeFileSync(`dist/services/${slug}/index.html`, html.replace(/<title>.*?<\/title>/, `<title>${t}</title>`).replace(/(rel="canonical" href="[^"]+)"/, `$1services/${slug}/"`))
}
fs.writeFileSync('dist/404.html', html)
fs.writeFileSync('dist/.nojekyll', '')
console.log('postbuild: route pages + 404 written')
