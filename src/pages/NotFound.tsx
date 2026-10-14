import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="svc-hero nf"><div className="wrap">
      <p className="eyebrow">404</p><h1>This page isn't connected.</h1>
      <p className="lead">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="btn btn-primary">Back to home</Link>
    </div></section>
  )
}
