import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useSanityData } from '../hooks/useSanityData'
import { SITE_SETTINGS_QUERY } from '../lib/queries'
import { fallbackSiteSettings } from '../lib/fallbackContent'
import { InstagramIcon, MailIcon } from './icons'
import './Header.css'

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { data: settings } = useSanityData(SITE_SETTINGS_QUERY, fallbackSiteSettings)

  // Close the mobile menu on navigation so it never gets left open after a link click.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__logo">
          <img src="/images/logo/logo-white.png" alt="Sam Goodwin Photography" />
        </NavLink>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className={'site-header__toggle-icon' + (menuOpen ? ' site-header__toggle-icon--open' : '')} />
        </button>

        <nav
          id="primary-nav"
          className={'site-header__nav' + (menuOpen ? ' site-header__nav--open' : '')}
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                'site-header__link label' + (isActive ? ' site-header__link--active' : '')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__socials">
          <a href={settings.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon width={18} height={18} />
          </a>
          <NavLink to="/contact" aria-label="Contact">
            <MailIcon width={18} height={18} />
          </NavLink>
        </div>
      </div>
    </header>
  )
}
