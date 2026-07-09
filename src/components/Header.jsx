import { NavLink } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Projects', to: '/projects' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__logo">
          Sam Goodwin
        </NavLink>
        <nav className="site-header__nav" aria-label="Primary">
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
      </div>
    </header>
  )
}
