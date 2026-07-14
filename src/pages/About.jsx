import { Link } from 'react-router-dom'
import { useSanityData } from '../hooks/useSanityData'
import { SITE_SETTINGS_QUERY } from '../lib/queries'
import { fallbackSiteSettings } from '../lib/fallbackContent'
import { TrophyIcon, PinIcon, CameraIcon, PlaneIcon, StarIcon } from '../components/icons'
import SEO from '../components/SEO'
import './About.css'

export default function About() {
  const { data: settings } = useSanityData(SITE_SETTINGS_QUERY, fallbackSiteSettings)

  const bioParagraphs = (settings.aboutBio || '').split('\n').filter(Boolean)

  const quickFacts = [
    { icon: PinIcon, label: 'Based In', value: settings.contactLocation },
    { icon: CameraIcon, label: 'Specialties', value: settings.aboutSpecialties },
    { icon: PlaneIcon, label: 'Available For', value: settings.availableFor },
    { icon: CameraIcon, label: 'Equipment', value: settings.aboutEquipment },
    { icon: StarIcon, label: 'Published / Featured', value: settings.aboutPublished },
  ]

  return (
    <>
      <SEO title="About" description={settings.aboutHeroIntro} />

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
            <img src={settings.aboutPortraitImage?.asset?.url} alt="Portrait of Sam Goodwin" loading="lazy" />
          </div>
          <div className="about-bio__content">
            <span className="section-label">{settings.aboutSectionLabel}</span>
            {bioParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {settings.awards?.length > 0 && (
        <section className="section section--panel about-awards">
          <div className="container">
            <span className="section-label about-awards__label">Awards &amp; Recognition</span>
            <div className="about-awards__grid">
              {settings.awards.map((award, index) => (
                <div className="award-card" key={index}>
                  <TrophyIcon className="award-card__icon" />
                  <h3 className="award-card__title">{award.title}</h3>
                  <p className="text-muted">{award.category}</p>
                  <span className="award-card__year">{award.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section about-quote">
        <div className="container about-quote__inner">
          <div className="about-quote__media">
            <img src={settings.aboutQuoteImage?.asset?.url} alt="" loading="lazy" />
          </div>
          <div className="about-quote__content">
            <span className="section-label">Behind the Lens</span>
            <blockquote>{settings.aboutQuote}</blockquote>
          </div>
        </div>
      </section>

      <section className="section section--panel about-facts">
        <div className="container">
          <span className="section-label about-facts__label">Quick Facts</span>
          <div className="about-facts__grid">
            {quickFacts.map(
              (fact) =>
                fact.value && (
                  <div className="fact-card" key={fact.label}>
                    <fact.icon className="fact-card__icon" />
                    <span className="label">{fact.label}</span>
                    <p className="fact-card__value">{fact.value}</p>
                  </div>
                ),
            )}
          </div>
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
