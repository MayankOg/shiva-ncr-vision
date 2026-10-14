// Emits per-route entry pages (200 on GitHub Pages), 404.html, sitemap.xml and robots.txt using the configured site URL.
import fs from 'node:fs'
const html = fs.readFileSync('dist/index.html', 'utf8')
const site = (html.match(/rel="canonical" href="([^"]+)"/) || [])[1]
if (!site) throw new Error('canonical URL not found in dist/index.html')
const services = { 'it-consulting': 'IT consulting and transformation', 'software-engineering': 'Software engineering', 'ai-automation': 'AI and intelligent automation', 'it-infrastructure': 'IT infrastructure and engineering', 'digital-marketing': 'Digital marketing and visibility' }
for (const [slug, name] of Object.entries(services)) {
  fs.mkdirSync(`dist/services/${slug}`, { recursive: true })
  fs.writeFileSync(`dist/services/${slug}/index.html`, html.replace(/<title>.*?<\/title>/, `<title>${name} — Shiva NCR Consultants</title>`).replace(/(rel="canonical" href=")[^"]+"/, `$1${site}services/${slug}/"`))
}
fs.writeFileSync('dist/404.html', html)
fs.writeFileSync('dist/.nojekyll', '')
const urls = [site, ...Object.keys(services).map((s) => `${site}services/${s}/`)]
fs.writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`)
fs.writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${site}sitemap.xml\n`)
console.log('postbuild: site', site)
