# AquaMate website

Marketing site for AquaMate Inc. (custom pool liners), live at
[www.aquamatepool.com](https://www.aquamatepool.com).

It is a Next.js 15 App Router site written in TypeScript and styled with
Tailwind CSS and shadcn/ui components. There is no database and no login:
every page is rendered from files in this repo.

## Requirements

- Node.js 22 (the Vercel project is set to 22.x)
- pnpm 8 (`packageManager` is pinned to `pnpm@8.15.4`; run `corepack enable` to get it)
- The Vercel CLI for deploying (`npm i -g vercel`)

## Commands

| Command | What it does |
|---|---|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the dev server at http://localhost:3000 (`pnpm dev -p 3002` for another port) |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build locally |
| `pnpm exec tsc --noEmit --incremental false` | Type check |
| `vercel --prod` | Deploy this folder to production (see [Deploying](#deploying)) |

Two things to know about checks:

- `pnpm build` does **not** type check or lint. `next.config.mjs` sets
  `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds`, so run the
  type check command above before deploying.
- `pnpm test` fails: the script calls jest, but jest is not installed and the
  repo has no tests.

## Environment variables

Create `.env.local` in the repo root (it is git-ignored). These are the
variables the code reads:

| Variable | Required | Used for |
|---|---|---|
| `RESEND_API_KEY` | For the contact form | Sending contact form emails through [Resend](https://resend.com) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Google Search Console verification tag |
| `NEXT_PUBLIC_YANDEX_VERIFICATION` | No | Yandex verification tag |

The same variables must be set on the Vercel project for production.

## Project layout

```
app/
  layout.tsx, layout-client.tsx   Root layout, metadata, analytics
  page.tsx, home-client.tsx       Homepage
  about/  contact/  warranty/  our-facility/  order-forms/
  products/pool-liners/           Liner catalogue and [id] detail pages
  actions/contact.ts              Server action that emails the contact form
  components/                     Page sections and the liner data file
  sitemap.ts                      Generates /sitemap.xml
components/ui/                    shadcn/ui components
lib/                              Shared helpers
public/
  assets/gallery/<liner-id>/      Liner photos
  assets/brand/                   Finish logos and icons
  assets/forms/                   Order form PDFs
  assets/brochure/                Digital brochure PDF
  llms.txt, robots.txt, manifest.json
```

## Common content changes

### Add or edit a pool liner

All liner content lives in `app/components/pool-liner-data.ts`, in the
`poolLiners` array (35 liners across the Mosaic, Pebble, Water Scape, Natural
Stone and Terrazzo collections).

1. Add an entry to `poolLiners`. The `id` becomes the URL
   (`/products/pool-liners/<id>`).
2. Put the photos in `public/assets/gallery/<id>/` as `<id>-0.jpg`,
   `<id>-1.jpg` and so on, and reference them in `imageUrl` and
   `galleryImages`. Resize them to 2000px on the long edge first (for
   example `sips -Z 2000 -s format jpeg -s formatOptions 80 photo.jpg`).
3. Set `isNew: true` to list it under the "New" tab, `discontinued: true` to
   push it to the end of the listing, and `sortOrder` to position it within
   its collection.
4. Add the liner's URL to `public/llms.txt`. The sitemap picks it up
   automatically.

Detail pages are generated at build time, so a new liner appears after the
next build and deploy.

### Order forms and brochure

- Order form PDFs are in `public/assets/forms/` and listed in
  `app/order-forms/order-forms-client.tsx`.
- The brochure is `public/assets/brochure/2026-Aquamate-Digital-Brochure.pdf`,
  linked from `app/components/video-hero.tsx`.

### Contact form

`app/actions/contact.ts` validates the form and sends it with Resend from
`no-reply@aquamatepool.com` to `sales@aquamatepool.com`. Change the recipient
there. The sending domain `aquamatepool.com` has to stay verified in the
Resend account that owns `RESEND_API_KEY`.

## Deploying

The site is hosted on Vercel, in the **Aquamate Team** team, project
**`aquamatepools`**.

Pushing to GitHub does **not** deploy. `vercel.json` sets
`git.deploymentEnabled: false`, and there are no GitHub Actions workflows.
Deploy by hand from this folder:

```bash
vercel link          # first time only: pick Aquamate Team / aquamatepools
vercel               # preview deployment
vercel --prod        # production deployment
```

To turn automatic deploys back on, delete the `git` block from `vercel.json`
and make sure the GitHub repo is connected under the Vercel project's
Settings → Git.

## Known issues

### Images

All images are stored as ordinary files in git. Git LFS is not used, and a
fresh clone builds a complete site. The gallery photos were resized to 2000px
on the long edge (about 150 MB in total). Older commits still contain the
full-size camera originals, which is why a clone is about 900 MB. Rewriting
history would shrink it but is optional.

### Missing files referenced by the code

- `/assets/brand/aquasense-signature-logo.png` and
  `aquasense-signature-icon.png` (Carrara White Marble liner)
- `/assets/aquamate-warranty.webp` (warranty page)

### Smaller items

- Two liner ids are misspelled and are part of live URLs: `silver-antiqua` and
  `caterbury-antigua`. Renaming them changes the URLs, so add redirects if you
  fix them.
- `package.json` still lists packages from the starter template that the site
  does not use (`drizzle-orm`, `postgres`, `bcrypt-ts`).
- `.turbo/` and `memory/` contain tool cache files that were committed by
  mistake and can be removed.

## Third-party services

| Service | Where | Purpose |
|---|---|---|
| Vercel | Hosting, `@vercel/analytics` in `app/layout.tsx` | Hosting and page analytics |
| Resend | `app/actions/contact.ts` | Contact form email |
| ARW | `<script src="https://api.arw.dev/arw.js">` and the `arw-verification` meta tag in `app/layout.tsx` | Agent Ready Web: converts each page's content to markdown and uploads it so AI agents can read the site, and records page views (path, referrer, user agent). Run by the previous maintainer, not AquaMate. The script tag is currently commented out; the meta tag is still active |
| www.poolsidebycgt.com | `next.config.mjs` `images.remotePatterns` | Allowed remote image host |

## Transfer checklist

- [ ] Transfer the GitHub repo to the new owner (Settings → Danger Zone →
      Transfer).
- [ ] Confirm the new owner is an owner of the Aquamate Team on Vercel, and
      reconnect the GitHub repo under the project's Settings → Git if needed.
- [ ] Hand over, or re-create, the Resend account and set `RESEND_API_KEY` on
      Vercel.
- [ ] Decide whether to keep the ARW script.

## AI tooling files

`CLAUDE.md`, `AGENTS.md`, `.claude/`, `.claude-flow/`, `.agents/`, `.mcp.json`,
`.cursor/` and the `claude-flow*` launcher scripts configure AI coding
assistants (Claude Code with Ruflo, and Cursor). The site does not need them
to build or run, and they can be deleted if the new owner does not use those
tools.
