import { Link } from 'react-router-dom'
import './JournalCard.css'

const MONTH_LABEL = new Intl.DateTimeFormat('en-NZ', { month: 'short', year: 'numeric' })

export default function JournalCard({ post }) {
  const tag = post.date ? MONTH_LABEL.format(new Date(post.date)).toUpperCase() : ''

  return (
    <article className="journal-card">
      <span className="label">{tag}</span>
      <h3 className="journal-card__title">{post.title}</h3>
      <p className="text-muted">{post.excerpt}</p>
      <Link to={`/journal/${post.slug}`} className="link-arrow">
        Read More &rsaquo;
      </Link>
    </article>
  )
}
