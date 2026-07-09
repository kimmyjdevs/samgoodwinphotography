import { Link } from 'react-router-dom'
import { useSanityData } from '../hooks/useSanityData'
import { SITE_SETTINGS_QUERY } from '../lib/queries'
import { fallbackSiteSettings } from '../lib/fallbackContent'
import './About.css'

export default function About() {
  const { data: settings } = useSanityData(SITE_SETTINGS_QUERY, fallbackSiteSettings)

  return (
    <>
      <section className="about-hero">
        <img className="about-hero__image" src={settings.aboutHeroImage?.asset?.url} alt="" />
        <div className="about-hero__scrim" />
        <div className="container about-hero__content">
          <span className="eyebrow">About</span>
          <h1>{settings.aboutHeroHeading}</h1>
          <p className="about-hero__intro text-muted">{settings.aboutHeroIntro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-bio">
          <div className="about-bio__media">
            <img src={settings.aboutPortraitImage?.asset?.url} alt="" loading="lazy" />
          </div>
          <div className="about-bio__content">
            <span className="label">{settings.aboutSectionLabel}</span>
            <p>{settings.aboutBio}</p>
          </div>
        </div>
      </section>

      <section className="section section--panel about-quote">
        <img className="about-quote__image" src={settings.aboutQuoteImage?.asset?.url} alt="" loading="lazy" />
        <div className="about-quote__scrim" />
        <div className="container about-quote__content">
          <span className="label">Behind the Lens</span>
          <blockquote>{settings.aboutQuote}</blockquote>
        </div>
      </section>

      <section className="section about-cta">
        <img className="about-cta__image" src={settings.aboutCtaImage?.asset?.url} alt="" loading="lazy" />
        <div className="about-cta__scrim" />
        <div className="container about-cta__content">
          <h2>{settings.aboutCtaHeading}</h2>
          <p className="text-muted">{settings.aboutCtaText}</p>
          <Link to="/contact" className="link-arrow">
            Get In Touch &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
