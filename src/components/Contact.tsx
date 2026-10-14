import { useState, type FormEvent } from 'react'
const serviceOptions = ['Software development', 'AI and automation', 'IT consulting or integrations', 'Infrastructure and engineering', 'Digital marketing', 'Multiple services', 'Other']
import { site } from '../content/site'

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unconfigured'
type Errors = Partial<Record<'name' | 'email' | 'message' | 'consent', string>>

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [summary, setSummary] = useState('')
  const [copied, setCopied] = useState(false)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const data = Object.fromEntries(f.entries()) as Record<string, string>
    const er: Errors = {}
    if (!data.name?.trim()) er.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '')) er.email = 'Please enter a valid email address.'
    if ((data.message || '').trim().length < 20) er.message = 'Please describe your project in at least 20 characters.'
    if (!data.consent) er.consent = 'Please confirm we may contact you about this enquiry.'
    setErrors(er)
    if (Object.keys(er).length) {
      const first = e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(er)[0]}"]`); first?.focus(); return
    }
    if (data.website) return // honeypot
    const text = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || '-'}\nInterest: ${data.service || '-'}\nBudget: ${data.budget || '-'}\nPreferred contact: ${data.contactMethod || '-'}\nPhone: ${data.phone || '-'}\n\n${data.message}`
    setSummary(text)
    if (!site.formEndpoint) { setStatus('unconfigured'); return }
    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) (e.target as HTMLFormElement).reset()
    } catch { setStatus('error') }
  }

  const mailto = site.email ? `mailto:${site.email}?subject=${encodeURIComponent('Project enquiry')}&body=${encodeURIComponent(summary)}` : ''
  const err = (k: keyof Errors) => errors[k] ? <p className="field-err" id={`${k}-err`}>{errors[k]}</p> : null

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <p className="eyebrow light">Discuss your project</p>
          <h2 id="contact-title">Let’s solve the <em>right problem first.</em></h2>
          <p>Tell us what you are trying to build, improve, or automate. We’ll start with the challenge and explore the right way forward.</p>
          <div className="hero-ctas cta-dark">
            <a href="#name" className="btn btn-light">Discuss your project</a>
            {site.whatsapp && <a className="btn btn-ghost-light" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Contact us on WhatsApp</a>}
          </div>
          <ul className="contact-list">
            <li><span>Contact</span>{site.contactPerson} · <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>
            <li><span>Email</span>{site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : <span className="ph">[Email — to be added]</span>}</li>
            <li><span>Location</span>{site.location}</li>
          </ul>
        </div>
        <form className="form" noValidate onSubmit={onSubmit} aria-describedby="form-status">
          <div className="row2">
            <div className="field"><label htmlFor="name">Name *</label><input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />{err('name')}</div>
            <div className="field"><label htmlFor="email">Work email *</label><input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />{err('email')}</div>
          </div>
          <div className="row2">
            <div className="field"><label htmlFor="company">Company (optional)</label><input id="company" name="company" autoComplete="organization" /></div>
            <div className="field"><label htmlFor="service">Area of interest</label>
              <select id="service" name="service" defaultValue=""><option value="">Select…</option>{serviceOptions.map((o) => <option key={o}>{o}</option>)}</select></div>
          </div>
          <div className="row2">
            <div className="field"><label htmlFor="budget">Budget (optional)</label>
              <select id="budget" name="budget" defaultValue=""><option value="">Prefer not to say</option><option>Under ₹1 lakh</option><option>₹1–5 lakh</option><option>₹5–15 lakh</option><option>Above ₹15 lakh</option><option>Not sure yet</option></select></div>
            <div className="field"><label htmlFor="contactMethod">Preferred contact method</label>
              <select id="contactMethod" name="contactMethod" defaultValue="Email"><option>Email</option><option>Phone</option><option>WhatsApp</option></select></div>
          </div>
          <div className="field"><label htmlFor="phone">Phone (optional)</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
          <div className="field"><label htmlFor="message">Project details *</label><textarea id="message" name="message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} placeholder="What challenge are you trying to solve?" />{err('message')}</div>
          <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div className="field check"><input id="consent" name="consent" type="checkbox" aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'consent-err' : undefined} /><label htmlFor="consent">I agree to be contacted about this enquiry.</label>{err('consent')}</div>
          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send enquiry'}</button>
          <div id="form-status" role="status" aria-live="polite">
            {status === 'sent' && <p className="note ok">Thank you — your enquiry was received. We'll be in touch soon.</p>}
            {status === 'error' && <div className="note bad"><p>Sorry, your enquiry could not be sent. Please try again or send it by email.</p>{mailto && <div className="note-actions"><a className="btn btn-ghost" href={mailto}>Send via email instead</a></div>}</div>}
            {status === 'unconfigured' && (
              <div className="note warn">
                <p><strong>Your enquiry has not been sent.</strong> Online submission isn't connected on this preview yet.</p>
                <div className="note-actions">
                  {mailto && <a className="btn btn-ghost" href={mailto}>Send via email instead</a>}
                  <button type="button" className="btn btn-ghost" onClick={() => { navigator.clipboard?.writeText(summary).then(() => setCopied(true)) }}>{copied ? 'Copied' : 'Copy my enquiry'}</button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
