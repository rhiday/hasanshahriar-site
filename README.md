# hasanshahriar.com

Personal essay site — built with Astro, deployed on Cloudflare Pages.

## Develop
    npm install
    npm run dev        # http://localhost:4321

## Build
    npm run build      # outputs to ./dist

## Structure
- `src/content/essays/*.md` — essays (frontmatter: title, description, pillar, pubDate, draft)
- `src/pages/` — home (essay list), essays/[slug], about, cv, rss.xml
- `src/layouts/Base.astro` — shell, meta, OG, nav
- `src/styles/global.css` — warm-paper serif theme

## Pillars
`outsiders-edge` · `sent-not-saved` · `ai-era`

## Deploy (Cloudflare Pages)
Framework preset: Astro · Build command: `npm run build` · Output dir: `dist`
