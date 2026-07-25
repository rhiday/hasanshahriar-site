# hasanshahriar.com

Personal essay site — built with Astro, deployed on Cloudflare Pages.

## Project links

- **Knowledge hub:** `/Users/rhiday/Documents/Claude/02 Work/Projects/Personal-Website/Personal Website Hub.md`
- **Implementation strategy:** `strategy/00-START-HERE.md`
- **Positioning source of truth:** `strategy/NORTH-STAR.md`

This repository is the source of truth for website code, implementation-specific strategy, shipped essays, build configuration, and deployment. The Claude knowledge hub holds cross-project context, research, and historical directions without duplicating the current implementation.

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
