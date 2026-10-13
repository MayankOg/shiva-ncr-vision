import { Link } from 'react-router-dom'
import Logo from './Logo'
import { services } from '../content/content'
import { site } from '../content/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo light />
          <p className="footer-tag">{site.tagline}</p>
          <p className="footer-motto">Consult. Engineer. Integrate. Grow.</p>
        </div>
        <div>
          <h2 className="footer-h">Services</h2>
          <ul>{services.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="footer-h">Company</h2>
          <ul>
            <li><Link to="/#approach">How we work</Link></li>
            <li><Link to="/#work">Selected work</Link></li>
            <li><Link to="/#why">Why Shiva NCR</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Contact</h2>
          <ul className="footer-contact">
            <li>{site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : <span className="ph">[Email — to be added]</span>}</li>
            <li>{site.phone ? <a href={`tel:${site.phone}`}>{site.phone}</a> : <span className="ph">[Phone — to be added]</span>}</li>
            <li>{site.whatsapp ? <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp us</a> : <span className="ph">[WhatsApp — to be added]</span>}</li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} Shiva NCR Consultants. All rights reserved.</span>
        <a href="#main">Back to top ↑</a>
      </div>
    </footer>
  )
}
