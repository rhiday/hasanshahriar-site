# Renewed homepage — proposal

*From "an essay list" to "a founder who writes." Adapts the Guillaume Moubeche / Ali Abdaal authority-landing structure to your founder-essayist brand. Pairs with NORTH-STAR.md. Built: 2026-06-30. A visual version is in `homepage-mockup.html`.*

---

## The angle

> **Founder in the arena, writing from the edge.**

When someone lands, they should grasp three things in ten seconds:

1. **He builds real things.** (Authority — KONE, Zipli with City of Helsinki, Makeshift, Flowtusk.)
2. **He has a distinct voice and story.** (Personality — the outsider's edge, sent-not-saved.)
3. **I can follow along.** (Newsletter — the email capture.)

Today the homepage answers only #2, and only for people who already scroll. Guillaume's page answers all three before you've scrolled once. That's the upgrade.

**The guardrail that keeps you *you*:** Guillaume's page works because of big SaaS numbers ($150M, 7000+ subscribers, media wall). You don't have those yet, and faking that energy would torch the exact thing your brand is built on — honesty. So we borrow his *structure* (layered proof, journey, clear funnel) and keep *your* tone (literary, specific, no guru gloss). Authority comes from **concrete specifics** (a furniture configurator that killed manual quoting; a food-rescue platform in pilot with a city government), not vanity metrics. Specifics are more credible than numbers anyway.

---

## Section-by-section map

### 1. Hero — identity + personality + capture
The single most important change. Replace the bare tagline with a real introduction.

- **Photo** of you (left or right). Faces build trust instantly; this is the biggest single lift to "feels like a real, experienced person."
- **Headline:** *I'm Hasan — a founder who builds companies in Helsinki and writes about what building actually feels like.*
- **Sub:** *CTO and founder, by way of Bangladesh. Eight years shipping product — from KONE's enterprise tools to a food-rescue platform now piloting with the City of Helsinki. This is where I think out loud about shipping over polishing, and the outsider's edge.*
- **Dual CTA:** primary `Read the essays` · secondary inline `Subscribe` (email field).

*Borrows from:* Guillaume's "Hey, I'm… Founder & CEO of…" hero with inline newsletter.

### 2. Proof strip — "what I've built"
A quiet horizontal band right under the hero. Names/logos, no hype:

> **Building & shipped:** Makeshift · Zipli (CTO) · Flowtusk — earlier: KONE · TietoEVRY · Nordea

*Borrows from:* Guillaume's product logos + Ali's "as featured in." Yours is an *operator* proof strip, which is more honest and more interesting than press logos.

### 3. What I'm building now — 3 cards
Brings your experience to the front page as living work, not a CV.

- **Makeshift** — Digital studio. Webflow + AI + automation for B2B teams across the Nordics and UK.
- **Zipli** — Food-rescue platform where I'm CTO. In pilots with Sodexo and the City of Helsinki.
- **Flowtusk** — Automation for Webflow. The "Zapier-for-Webflow" wedge.

*Borrows from:* Guillaume's product grid — but framed as "what I'm in the arena on," which feeds the angle.

### 4. Featured writing — 3 hand-picked essays
The writing stays central (per North Star), but *curated*, not a raw list. Pick the three that best show range:

- **Sent, Not Saved** *(sent-not-saved)* — your most shareable.
- **We Used to Just Move** *(outsider's edge)* — your origin idea.
- **The Moat Moved** *(AI era)* — your operator brain.

Ends with `Read all essays →` linking to the full **/essays** index (the current homepage list moves there).

### 5. What I write about — the three pillars
A short block naming your three themes so a newcomer instantly gets the personality and range:

> **The Outsider's Edge** — building far from the center, two cultures at once.
> **Sent, Not Saved** — the freeze, the polish trap, shipping as the only proof.
> **Building in the AI Era** — what's still defensible when anyone can build.

### 6. The short story — a light journey
The Guillaume timeline move, but literary and brief — 4–5 beats, not a metrics ladder:

> Dhaka → arrived in Finland, 2016 → Nordea & TietoEVRY → founded Makeshift → CTO at Zipli, building in public.

Keep it human. This is where the "by way of Bangladesh" story earns its place on the front page.

### 7. Newsletter CTA — the conversion block
A dedicated band near the bottom:

> **Get the essays in your inbox.** Honest writing on building from the edge — shipping, instinct, and the outsider's advantage. No spam, no growth-hacks.
> [ email field ] [ Subscribe ]

*Borrows from:* Guillaume's "Join 7000+ founders" — but no inflated count until you have one worth stating. Until then, lead with the *promise*, not the number.

### 8. Footer
Socials (LinkedIn, GitHub, X if you want), RSS, contact. Unchanged in spirit.

---

## What moves where

- **Homepage** becomes the authority + personality landing above.
- **/essays** becomes the full chronological essay index (your current homepage).
- **/about**, **/cv** stay; About gets the real intro (replace the video placeholder, or record the 60–90s intro — it would sit perfectly in the hero or About).
- **Topic newsletters** (the Copyblogger-style vertical SS) — later. Park them; don't dilute the launch.

---

## Open decisions (your calls)

1. **Photo or no photo in the hero?** I strongly recommend yes — it's the fastest authority+personality signal. (Need a good headshot, ideally one with warmth, not a corporate stiff.)
2. **Primary CTA — `Read the essays` or `Subscribe`?** I lean *Read* primary, *Subscribe* secondary: let the writing earn the email. Guillaume does the reverse because he's selling SaaS.
3. **Surface a "Work with me / Makeshift" link?** I'd keep it subtle — one quiet line in the proof strip or footer — so the personal site stays a reputation engine, not an agency funnel. (Per North Star anti-positioning: don't lead with the projects.)
4. **How much commercial vs. literary?** My recommendation is the mockup's balance: ~60% personality/writing, ~40% authority/proof. Dial it whichever way feels like you.

---

## Next step
Open `homepage-mockup.html` to see it. Tell me what to push warmer or more authoritative, and I'll implement the winning version in Astro (it's a clean swap: new `index.astro` hero + sections, move the list to `essays/index.astro`).
