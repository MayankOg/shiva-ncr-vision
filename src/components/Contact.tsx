import { useState, type FormEvent } from 'react'
import { services } from '../content/content'
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
    const text = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || '-'}\nInterest: ${data.service || '-'}\nTimeline: ${data.timeline || '-'}\n\n${data.message}`
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
          <p className="eyebrow light">Start a project</p>
          <h2 id="contact-title">Tell us about the problem. <em>We'll help you find the right solution.</em></h2>
          <p>Share a few details about your business and what you want to achieve. We'll come back with questions, an initial view and suggested next steps — no obligation.</p>
          <ul className="contact-list">
            <li><span>What happens next</span>An initial conversation to understand your goals</li>
            <li><span>Then</span>A short written recommendation and scope</li>
            <li><span>Reach us</span>{site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : <span className="ph">[Email — to be added]</span>}</li>
            {site.whatsapp && <li><span>WhatsApp</span><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></li>}
          </ul>
        </div>
        <form className="form" noValidate onSubmit={onSubmit} aria-describedby="form-status">
          <div className="row2">
            <div className="field"><label htmlFor="name">Name *</label><input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />{err('name')}</div>
            <div className="field"><label htmlFor="email">Work email *</label><input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />{err('email')}</div>
          </div>
          <div className="row2">
            <div className="field"><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" /></div>
            <div className="field"><label htmlFor="service">Area of interest</label>
              <select id="service" name="service" defaultValue=""><option value="">Not sure yet</option>{services.map((s) => <option key={s.slug}>{s.name}</option>)}</select></div>
          </div>
          <div className="field"><label htmlFor="timeline">Timeline</label>
            <select id="timeline" name="timeline" defaultValue=""><option value="">Flexible</option><option>As soon as possible</option><option>1–3 months</option><option>3–6 months</option></select></div>
          <div className="field"><label htmlFor="message">Project details *</label><textarea id="message" name="message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} placeholder="What challenge are you trying to solve?" />{err('message')}</div>
          <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div className="field check"><input id="consent" name="consent" type="checkbox" aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'consent-err' : undefined} /><label htmlFor="consent">I agree to be contacted about this enquiry.</label>{err('consent')}</div>
          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send enquiry'}</button>
          <div id="form-status" role="status" aria-live="polite">
            {status === 'sent' && <p className="note ok">Thank you — your enquiry was received. We'll be in touch soon.</p>}
            {status === 'error' && <p className="note bad">Sorry, your enquiry could not be sent. Please try again{site.email ? <> or email <a href={`mailto:${site.email}`}>{site.email}</a></> : ''}.</p>}
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
