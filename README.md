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

## Base path & deployment
- `VITE_BASE` (or `BASE_PATH`) sets the base path; default `/shiva-ncr-vision/`. Use `/` for a custom domain.
- `VITE_SITE_URL` sets the absolute URL for canonical/OG/sitemap/robots; default `https://mayankog.github.io<base>`.
- `.github/workflows/deploy-redesign.yml`: push to `redesign` = typecheck + lint + build + artifact. Deploy to Pages only via **Run workflow** with `deploy` ticked (replaces the live Pages site).
- `.github/workflows/deploy.yml` only runs in `408walebhai-cpu/shiva-ncr-site` (preview).

## Placeholders to replace
Testimonials (`testimonials` array in `src/content/content.ts`; section + nav link hidden while empty), contact details, WhatsApp number, OG image (currently a hero screenshot), base path via `VITE_BASE` when moving to a custom domain.
