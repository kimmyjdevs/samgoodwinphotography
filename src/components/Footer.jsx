import { useSanityData } from '../hooks/useSanityData'
import { SITE_SETTINGS_QUERY } from '../lib/queries'
import { fallbackSiteSettings } from '../lib/fallbackContent'
import './Footer.css'

export default function Footer() {
  const { data: settings } = useSanityData(SITE_SETTINGS_QUERY, fallbackSiteSettings)

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a
          href={settings.instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="site-footer__icon"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a href={`mailto:${settings.contactEmail}`} className="label site-footer__link">
          {settings.contactEmail}
        </a>
        <span className="label site-footer__location">{settings.contactLocation}</span>
      </div>
    </footer>
  )
}
