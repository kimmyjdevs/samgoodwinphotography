import { Link, useParams } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { useSanityData } from '../hooks/useSanityData'
import { JOURNAL_POST_BY_SLUG_QUERY } from '../lib/queries'
import { fallbackJournalPosts } from '../lib/fallbackContent'
import SEO from '../components/SEO'
import './JournalPost.css'

const DATE_LABEL = new Intl.DateTimeFormat('en-NZ', { month: 'short', year: 'numeric' })

export default function JournalPost() {
  const { slug } = useParams()
  const fallback = fallbackJournalPosts.find((post) => post.slug === slug) ?? null
  const { data: post } = useSanityData(JOURNAL_POST_BY_SLUG_QUERY, fallback, { slug })

  if (!post) {
    return (
      <div className="section">
        <SEO title="Post Not Found" />
        <div className="container">
          <h1>Post not found</h1>
          <Link to="/journal" className="link-arrow">
            &larr; Back to Journal
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="section">
      <SEO title={post.title} description={post.excerpt} />
      <div className="container journal-post">
        <Link to="/journal" className="link-arrow journal-post__back">
          &larr; Back to Journal
        </Link>

        <span className="label">{post.date ? DATE_LABEL.format(new Date(post.date)).toUpperCase() : ''}</span>
        <h1>{post.title}</h1>

        {post.coverImage?.asset?.url && (
          <div className="journal-post__media">
            <img src={post.coverImage.asset.url} alt={post.title} />
          </div>
        )}

        <div className="journal-post__body">
          <p className="journal-post__excerpt">{post.excerpt}</p>
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p className="text-muted">
              The full article will appear here once it's added in the Studio.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
