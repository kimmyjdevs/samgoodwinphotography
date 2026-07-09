import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSanityData } from '../hooks/useSanityData'
import { PORTFOLIO_ITEMS_QUERY } from '../lib/queries'
import { fallbackPortfolioItems, portfolioCategories } from '../lib/fallbackContent'
import FilterTabs from '../components/FilterTabs'
import GalleryCard from '../components/GalleryCard'
import './Portfolio.css'

const FILTER_OPTIONS = portfolioCategories.map((value) => ({ value, label: value }))

export default function Portfolio() {
  const { data: items } = useSanityData(PORTFOLIO_ITEMS_QUERY, fallbackPortfolioItems)
  const [active, setActive] = useState('landscapes')

  const filtered = useMemo(
    () => (active === 'all' ? items : items.filter((item) => item.category === active)),
    [items, active],
  )

  return (
    <div className="section">
      <div className="container">
        <span className="eyebrow">Portfolio</span>
        <h1>Landscapes</h1>
        <p className="portfolio-subtext text-muted">
          Exploring the beauty of the natural world. Moments of light, scale and perspective.
        </p>

        <FilterTabs options={FILTER_OPTIONS} active={active} onChange={setActive} />

        <div className="portfolio-grid">
          {filtered.map((item) => (
            <GalleryCard key={item._id} item={item} />
          ))}
        </div>

        <div className="portfolio-footer-cta">
          <Link to="/contact" className="link-arrow">
            Get In Touch &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
