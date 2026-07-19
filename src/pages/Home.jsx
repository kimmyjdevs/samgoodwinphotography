import { Link } from 'react-router-dom'
import { useSanityData } from '../hooks/useSanityData'
import { SITE_SETTINGS_QUERY } from '../lib/queries'
import { fallbackSiteSettings, homepagePortfolioTeasers } from '../lib/fallbackContent'
import SEO from '../components/SEO'
import './Home.css'

export default function Home() {
  const { data: settings } = useSanityData(SITE_SETTINGS_QUERY, fallbackSiteSettings)

  return (
    <>
      <SEO description="Landscape, seascape, astro, event and branding photography by Sam Goodwin, based in Christchurch, New Zealand." />

      <section className="hero">
        <img className="hero__image" src={settings.heroImage?.asset?.url} alt="" />
        <div className="hero__scrim" />
        <div className="container hero__content">
          <span className="eyebrow">{settings.heroEyebrow}</span>
          <h1 className="hero__title">{settings.heroTitle}</h1>
          <span className="hero__subtitle">{settings.heroSubtitle}</span>
          <p className="hero__tagline">{settings.heroTagline}</p>
          <Link to="/portfolio" className="btn hero__cta">
            View Portfolio &rsaquo;
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="teaser-grid">
            {homepagePortfolioTeasers.map((teaser) => (
              <Link to="/portfolio" key={teaser.category} className="teaser-card">
                <div className="teaser-card__media">
                  <img src={teaser.image?.asset?.url} alt={teaser.title} loading="lazy" />
                </div>
                <h3>{teaser.title}</h3>
                <p className="text-muted">{teaser.description}</p>
                <span className="link-arrow teaser-card__explore">Explore &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--panel">
        <div className="container about-teaser">
          <div className="about-teaser__media">
            <img src={settings.homepageAboutImage?.asset?.url} alt="Portrait of Sam Goodwin" loading="lazy" />
          </div>
          <div className="about-teaser__content">
            <h2>{settings.homepageAboutHeading}</h2>
            <p className="text-muted">{settings.homepageAboutText}</p>
            <Link to="/about" className="link-arrow">
              Learn More &rsaquo;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
