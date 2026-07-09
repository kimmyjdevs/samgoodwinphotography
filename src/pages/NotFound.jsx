import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div className="section">
      <SEO title="Page Not Found" />
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page Not Found</h1>
        <p className="text-muted" style={{ margin: '1rem 0 2rem' }}>
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="link-arrow">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  )
}
