# Sam Goodwin Photography

Editorial photography portfolio for Sam Goodwin (corporate, events, landscapes —
Queensland, Australia / New Zealand). React + Vite SPA, content from Sanity.io,
hosted on Netlify.

This is a from-scratch rebuild: the original project's Sanity connection was
returning 503s and referencing a broken/expired asset path, so the previous
live site silently fell back to stock photos. See "Design decision" below for
how this rebuild avoids repeating that.

## Stack

- **Frontend**: React 18 + Vite, React Router, plain CSS (design tokens as
  CSS custom properties in `src/styles/tokens.css`)
- **CMS**: Sanity.io (`/studio`) — brand-new project, not the old one
- **Fonts**: Cormorant Garamond (headings) + Jost (body/UI), via Google Fonts
- **Forms**: Netlify Forms
- **Hosting**: Netlify (site: `sam-goodwin-photography`)

## Design decision: graceful fallback

Every page fetches its content from Sanity, but if Sanity is unconfigured,
unreachable, or a document doesn't exist yet, it falls back to
`src/lib/fallbackContent.js` — real photography (bundled in `public/images/`)
and copy matching the brief, shaped exactly like the real Sanity documents.
This means:

- The site looks correct immediately, before any Sanity content exists.
- A future Sanity outage degrades to placeholder content instead of a blank
  page — the exact failure mode that broke the original site is now visible
  (check your browser console for `[sanity]` warnings) instead of silent.

Once real content is added in the Studio, the fallback for that field simply
stops being used — nothing to toggle.

## Local development

```bash
npm install
npm run dev
```

Runs immediately on fallback content — no Sanity project required to see the
whole site. Note: Netlify Forms only actually delivers submissions once the
site is deployed on Netlify (see below) — locally, submitting the contact
form will show the error state, which is expected.

## Setup you need to do (accounts this session couldn't create)

### 1. Sanity project

```bash
cd studio
npm install
npx sanity login
npx sanity init --env
```

See `studio/README.md` for details. Copy the resulting project ID into the
root `.env` (copy `.env.example` → `.env` first):

```
VITE_SANITY_PROJECT_ID=<from studio/.env>
VITE_SANITY_DATASET=production
```

Add content via `npm run dev` inside `/studio`, starting with the
`siteSettings` singleton (pinned at the top of the document list).

### 2. Netlify

A Netlify site (`sam-goodwin-photography`) and its env vars (Sanity project
ID/dataset/API version) are already created. What's left:

1. In the Netlify dashboard for this site: **Site configuration → Build &
   deploy → Continuous deployment**, click **Link repository**, and connect
   `kimmyjdevs/samgoodwinphotography` on GitHub.
2. Build command: `npm run build`. Publish directory: `dist`.
3. `public/_redirects` is already set up for SPA routing (`/* /index.html 200`)
   so deep links like `/portfolio` work on refresh — Netlify reads this
   format natively.
4. Forms are already enabled on the site. The contact form
   (`src/components/ContactForm.jsx`) submits via the standard Netlify Forms
   pattern for SPAs: a hidden static `<form name="contact" netlify ...>` in
   `index.html` lets Netlify's build-time bot detect the field schema, and
   the real React form posts to `/` with a matching `form-name`. Submissions
   show up under the site's **Forms** tab in the dashboard — no extra setup,
   no API key.

### 3. Verify before you consider it live

- Confirm the Sanity project is on an active plan and not paused (free tier
  is fine, just check it's not been auto-paused for inactivity).
- Load a Sanity image URL directly in a browser (or `curl -I`) and confirm
  it returns `200`, not a 401/404/503 — this is exactly what silently broke
  last time.
- Once deployed, add the live Netlify URL to Sanity's CORS origins
  (sanity.io/manage → project → API → CORS Origins) or the site won't be
  able to read content from Sanity in the browser.
- `npm run build && npm run preview` locally to sanity-check the production
  bundle before pushing.

## Project structure

```
/                   Vite React app (this is what Netlify builds)
  src/pages/        One file per route
  src/components/   Header, Footer, cards, ContactForm, etc.
  src/lib/          Sanity client, GROQ queries, fallback content
  src/hooks/        useSanityData (fetch + graceful fallback)
  public/images/    Real photography bundled as a Sanity-fallback stopgap
/studio             Sanity Studio v3 — separate app, separate package.json
```
