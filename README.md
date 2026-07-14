# Sam Goodwin Photography

Editorial photography portfolio for Sam Goodwin (corporate, events, landscapes —
Queensland, Australia / New Zealand). React + Vite SPA, content from Sanity.io,
hosted on Cloudflare Pages.

This is a from-scratch rebuild: the original project's Sanity connection was
returning 503s and referencing a broken/expired asset path, so the previous
live site silently fell back to stock photos. See "Design decision" below for
how this rebuild avoids repeating that.

## Stack

- **Frontend**: React 18 + Vite, React Router, plain CSS (design tokens as
  CSS custom properties in `src/styles/tokens.css`)
- **CMS**: Sanity.io (`/studio`) — brand-new project, not the old one
- **Fonts**: Cormorant Garamond (headings) + Jost (body/UI), via Google Fonts
- **Forms**: Web3Forms
- **Hosting**: Cloudflare Pages + Cloudflare Web Analytics

## Design decision: graceful fallback

Every page fetches its content from Sanity, but if Sanity is unconfigured,
unreachable, or a document doesn't exist yet, it falls back to
`src/lib/fallbackContent.js` — copy and Unsplash imagery matching the brief,
shaped exactly like the real Sanity documents. This means:

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
whole site.

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

### 2. Web3Forms (contact form)

1. Go to web3forms.com, enter the email address that should receive
   submissions, and confirm it — no account/password needed.
2. Copy the access key it emails you into `.env` as `VITE_WEB3FORMS_KEY`.
3. Until this is set, the contact form shows an error state and points
   visitors to `sam@samgoodwin.co.nz` directly instead of failing silently.
4. The form includes a honeypot field (`botcheck`) Web3Forms uses to
   silently drop bot submissions — no action needed, it's already wired up.

### 3. Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: Pages → Create project → connect the repo.
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Add the same env vars from `.env` in the Pages project's environment
   variables settings (Sanity + Web3Forms).
4. `public/_redirects` is already set up for SPA routing (`/* /index.html 200`)
   so deep links like `/portfolio` work on refresh.
5. Enable **Web Analytics** for the Pages project in the Cloudflare dashboard,
   then uncomment the analytics `<script>` in `index.html` and paste in the
   generated beacon token.

### 4. Verify before you consider it live

- Confirm the Sanity project is on an active plan and not paused (free tier
  is fine, just check it's not been auto-paused for inactivity).
- Load a Sanity image URL directly in a browser (or `curl -I`) and confirm
  it returns `200`, not a 401/404/503 — this is exactly what silently broke
  last time.
- `npm run build && npm run preview` locally to sanity-check the production
  bundle before pushing.

## Project structure

```
/                   Vite React app (this is what Cloudflare Pages builds)
  src/pages/        One file per route
  src/components/   Header, Footer, cards, ContactForm, etc.
  src/lib/          Sanity client, GROQ queries, fallback content
  src/hooks/        useSanityData (fetch + graceful fallback)
/studio             Sanity Studio v3 — separate app, separate package.json
```
