import { useState } from 'react'
import './ContactForm.css'

const PROJECT_TYPES = ['Corporate Photography', 'Event Coverage', 'Landscape / Fine Art', 'Other']

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.target
    setStatus('submitting')

    const data = Object.fromEntries(new FormData(form).entries())
    data['form-name'] = 'contact'

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(data),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form__message" role="status">
        <h3>Thank you</h3>
        <p className="text-muted">Your message has been sent. I'll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" name="contact" data-netlify="true" netlify-honeypot="botcheck" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot: real visitors never see or fill this in; Netlify silently
          rejects the submission if it's non-empty. */}
      <input type="checkbox" name="botcheck" className="visually-hidden" tabIndex={-1} autoComplete="off" />

      <div className="contact-form__field">
        <label className="label" htmlFor="name">
          Name
        </label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>

      <div className="contact-form__field">
        <label className="label" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="contact-form__field">
        <label className="label" htmlFor="projectType">
          Project Type
        </label>
        <select id="projectType" name="projectType" defaultValue="">
          <option value="" disabled>
            Select a project type
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label className="label" htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <button type="submit" className="btn" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message ›'}
      </button>

      {status === 'error' && (
        <p className="contact-form__error" role="alert">
          Something went wrong sending your message. Please email{' '}
          <a href="mailto:sam@samgoodwin.co.nz">sam@samgoodwin.co.nz</a> directly instead.
        </p>
      )}
    </form>
  )
}
