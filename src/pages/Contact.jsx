import { useSanityData } from '../hooks/useSanityData'
import { SITE_SETTINGS_QUERY } from '../lib/queries'
import { fallbackSiteSettings } from '../lib/fallbackContent'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import './Contact.css'

export default function Contact() {
  const { data: settings } = useSanityData(SITE_SETTINGS_QUERY, fallbackSiteSettings)

  return (
    <div className="section">
      <SEO
        title="Contact"
        description="Get in touch with Sam Goodwin for landscape, seascape, astro, event and branding photography."
      />
      <div className="container contact-layout">
        <div>
          <span className="eyebrow">Contact</span>
          <h1>
            Get In Touch
            <br />
            <span className="contact-heading__sub">Let's create something exceptional.</span>
          </h1>

          <ContactForm />
        </div>

        <aside className="contact-info">
          <span className="label">Studio</span>
          <dl>
            <div>
              <dt className="label">Location</dt>
              <dd>{settings.contactLocation}</dd>
            </div>
            <div>
              <dt className="label">Email</dt>
              <dd>
                <a href={`mailto:${settings.contactEmail}`}>{settings.contactEmail}</a>
              </dd>
            </div>
            <div>
              <dt className="label">Available For</dt>
              <dd>{settings.availableFor}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  )
}
