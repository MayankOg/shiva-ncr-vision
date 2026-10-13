# Shiva NCR Consultants — website

Vite + React + TypeScript, vanilla Three.js scene (`src/three/Ecosystem.ts`), GSAP ScrollTrigger.

- Content: `src/content/content.ts` (stages, services, work, process) and `src/content/site.ts` (contact/config)
- Routes: `/`, `/services/:slug`; static route pages + 404 emitted by `scripts-postbuild.mjs`
- Fallbacks: `prefers-reduced-motion` renders a static final scene; no WebGL (or `?nowebgl`) shows an SVG illustration

## Commands
`npm run dev` · `npm run build` · `npm run lint` · `npm run typecheck`

## Integrations (unconfigured)
Set as GitHub Actions repository **variables** (or `.env`, see `.env.example`):
- `VITE_FORM_ENDPOINT` — JSON POST endpoint (e.g. Formspree). Without it, the form validates but clearly tells the visitor it was **not sent**.
- `VITE_CONTACT_EMAIL`, `VITE_CONTACT_PHONE`, `VITE_WHATSAPP_NUMBER` — shown as marked placeholders until set.

## Placeholders to replace
Testimonials (`testimonials` array in `src/content/content.ts`; section + nav link hidden while empty), contact details, WhatsApp number, OG image (currently a hero screenshot), base path `/shiva-ncr-site/` in `vite.config.ts`, `index.html`, `site.ts`, sitemap/robots when moving to a custom domain.
