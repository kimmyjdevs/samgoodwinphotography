import { useSanityData } from '../hooks/useSanityData'
import { SITE_SETTINGS_QUERY } from '../lib/queries'
import { fallbackSiteSettings } from '../lib/fallbackContent'
import { InstagramIcon } from './icons'
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
          <InstagramIcon width={20} height={20} />
        </a>
        <a href={`mailto:${settings.contactEmail}`} className="label site-footer__link">
          {settings.contactEmail}
        </a>
        <span className="label site-footer__location">{settings.contactLocation}</span>
      </div>
    </footer>
  )
}
