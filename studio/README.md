# Sam Goodwin Photography — Sanity Studio

Schema for the four content types the site reads: `siteSettings` (singleton),
`portfolioItem`, `project`, `journalPost`.

## One-time setup (do this — it needs your Sanity account/browser login)

```bash
cd studio
npm install
npx sanity login          # opens a browser to authenticate
npx sanity init --env     # creates a NEW Sanity project, writes .env with the project ID
```

`sanity init --env` will prompt you to either create a new project or pick an
existing one — choose "create new project" since there's no access to any
prior project. When it asks about a dataset, use `production`. It will write
`SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` into `studio/.env` —
copy those same two values into the root app's `.env` as `VITE_SANITY_PROJECT_ID`
/ `VITE_SANITY_DATASET` (see root `.env.example`).

If you'd rather not run the wizard, copy `.env.example` to `.env` and fill in
`SANITY_STUDIO_PROJECT_ID` yourself from an existing project's dashboard at
sanity.io/manage, then run `npx sanity login` so the CLI is authenticated.

## Running locally

```bash
npm run dev
```

Opens the Studio at localhost:3333. Log in, add a "Site Settings" document
(the desk structure pins it above the other lists), then add some
`portfolioItem` / `journalPost` documents. The public site will start
reading real content immediately — no redeploy needed, it fetches from the
Sanity CDN at runtime.

## Deploying the Studio (optional but recommended)

```bash
npm run deploy
```

Hosts the Studio at `https://<your-project-name>.sanity.studio` so you (or
Sam) can edit content from a browser without running anything locally.

## Verifying before the site goes live

Confirm the free-tier project is active and images resolve:

```bash
curl -I "https://cdn.sanity.io/images/<projectId>/<dataset>/<some-asset-id>.jpg"
```

should return `200`. This is the check the root README's known-issue note
calls out — the previous build shipped with a broken/expired project
reference and never caught it before deploying.
