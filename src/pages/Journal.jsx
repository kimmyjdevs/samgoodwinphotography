import { useSanityData } from '../hooks/useSanityData'
import { JOURNAL_POSTS_QUERY } from '../lib/queries'
import { fallbackJournalPosts } from '../lib/fallbackContent'
import JournalCard from '../components/JournalCard'
import SEO from '../components/SEO'
import './Journal.css'

export default function Journal() {
  const { data: posts } = useSanityData(JOURNAL_POSTS_QUERY, fallbackJournalPosts)

  return (
    <div className="section">
      <SEO title="Journal" description="Field notes, reflections and stories from behind the lens." />
      <div className="container">
        <span className="eyebrow">Journal</span>
        <h1>Journal</h1>
        <p className="journal-subtext text-muted">
          Field notes, reflections and stories from behind the lens.
        </p>

        <div className="journal-list">
          {posts.map((post) => (
            <JournalCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
