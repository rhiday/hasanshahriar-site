# hasanshahriar.com — North Star

*The one file everything else pulls from: site copy, essay selection, Substack, the About page. The personal-site analog to Makeshift-Positioning.md. Last built: 2026-06-30.*

---

## ✅ THE ANGLE (locked)

**A founder-as-peer reputation engine.** The site's job is to earn trust with other founders, operators, and builders by writing true, useful things about building — so that the people who matter (founders, agencies, partners, future clients of Makeshift/Flowtusk/Zipli) come to see Hasan as a peer worth following, hiring, and organizing around.

The writing is the product. Reputation is the outcome. Everything else — agency leads, product credibility, newsletter audience — is downstream of that and never the headline.

### The positioning, one line

> **A founder building far from the center — essays on shipping, instinct, and the outsider's edge.**

(Already live in the site header. Keep it. It's the personal-brand equivalent of the agency's "Webflow sites that convert.")

**Variants for different surfaces:**

- **Substack tagline:** Essays on building, shipping, and the immigrant founder's edge — from a founder in Helsinki, by way of Bangladesh.
- **LinkedIn bio line:** Founder (Makeshift, Flowtusk, CTO @ Zipli). I write about shipping over polishing and the outsider's advantage in tech.
- **One-sentence pitch to a stranger:** I build companies and write about what building actually feels like — especially for people who weren't handed the map.

---

## Who this is for (audience, ranked)

**1. Founders & indie builders who freeze at 95%** *(your sharpest wedge — you've lived it)*
The talented ones who stall because they can see the gap. *Sent, Not Saved* is the flagship for exactly this person. They share it because it names something they couldn't.

**2. Immigrants & outsiders in tech**
People running two cultures at once, performing for an audience that "emigrated with them." *Foreigners*, *Welcome to Finland*, *Unrelatable*. Underserved by the usual founder-content machine, and fiercely loyal when seen.

**3. Operators & founders thinking about the AI shift**
People asking what's still defensible when anyone can build. *The Moat Moved*, *Manage the Task*. This is the pillar that connects most directly to Makeshift/Flowtusk credibility.

**4. Peers, agencies & potential collaborators** *(the reputation payoff)*
Other founders and agency owners who, having read the work, treat Hasan as a known quantity — a warm intro, a partner, a referral. They don't subscribe to be sold to; they remember when it matters.

---

## The three pillars (keep — they're working)

1. **The Outsider's Edge** — the immigrant/founder double-vision; *lokey ki bolbe*; building far from the center. Your deepest, most-owned territory. *(Signature — 5 essays.)*
2. **Sent, Not Saved** — the freeze, the polish trap, shipping as the only real information. Your most *shareable* territory. *(3 essays.)*
3. **Building in the AI Era** — what's defensible when building is free; distribution, trust, orchestration over doing. The bridge to your product/agency credibility. *(2 essays — still the thinnest; feed it next.)*

Every essay declares its pillar in frontmatter and on the page. Don't add a fourth pillar without retiring one.

---

## AI-age storytelling (the format tweak)

Keep the long, deep essays — that's the moat; nobody out-skims their way to trust. But **add a scannable layer** so a low-attention reader still walks away with the payload:

- **A one-line "the point" / TL;DR** at the top of each essay (you already write killer description lines — promote them).
- **Pull-quotes** lifted from the strongest sentences, set large mid-essay (you have many: *"The work is not the thing you make. The work is the sending."*).
- **Subheads or section breaks** every few hundred words so the eye has rungs to climb.
- **A 2–4 line "if you only read one thing"** summary that doubles as the social/Substack hook.

The rule: the skimmer gets the idea in 20 seconds; the reader gets the essay. Never sacrifice the essay to serve the skimmer.

---

## The distribution loop (site-first → Substack)

**hasanshahriar.com is canonical.** It owns the design, the SEO, the archive, the full essay. Substack is the *email + distribution* layer, not the home.

The loop:
1. Essay published on the site (the review gate stays: `draft: true` → read → publish).
2. Cross-posted to Substack with a canonical link back to the site.
3. Substack drives the newsletter and the subscribe habit; the site captures email too (embedded subscribe).
4. Each new essay = one Substack send + one or two short social pulls (the pull-quotes).

Why this order: you own the asset and the SEO, but get Substack's native email, discovery, and recommendation engine for free. If Substack ever changes, the archive is still yours.

---

## Anti-positioning (what this site refuses)

- **No tips-and-tactics growth blog.** Not "7 ways to…". The value is honesty and lived experience, not hacks.
- **No LinkedIn-motivation voice.** No manufactured vulnerability, no humble-brag arcs.
- **Not anonymous, not safe.** The whole edge is that it's specifically Hasan — Bangladesh, Helsinki, the freeze, the six projects. Generic founder-wisdom is the competition; don't join it.
- **Don't lead with the projects.** Makeshift/Zipli/Flowtusk are proof and context, never the pitch. The About page says it best: "the projects aren't the point of this site. The writing is."

---

## Where we are (status, 2026-06-30)

- **Content: ~70%.** 6 essays live, 5 strong drafts awaiting your review, a third round of seams already mined in `CONTENT-QUEUE.md`. Voice is consistent and unmistakably yours.
- **Site shell: ~90%.** Astro on Cloudflare, warm-paper serif theme, Essays / About / CV / RSS, working review gate. Solid.
- **Positioning-as-a-document: now done.** This file.
- **Distribution loop: 0%.** No Substack, no subscribe capture, no syndication.
- **Format layer: 0%.** Essays are pure long-form; no TL;DR / pull-quotes / subheads yet.
- **Loose ends:** About page has a `[intro video goes here]` placeholder; OG image / Twitter card likely unset.

---

## The plan (phased — one chain)

### Phase 1 — Lock the foundation *(this week, low effort, high signal)*
- [ ] Ratify this North Star (you read it, you push back, we adjust the one-liner if needed).
- [ ] Review the 5 drafts using the gate. Suggested order from the queue: **Welcome to Finland** → **The Moat Moved** → the rest. Publish what's you; kill what isn't.
- [ ] Decide the AI-era pillar gets fed next (it's thinnest at 2).

### Phase 2 — Wire the distribution loop *(the real unlock)*
- [ ] Create the Substack (tagline above). Set canonical-link-back to hasanshahriar.com on every cross-post.
- [ ] Add an embedded **subscribe block** to the site — end of each essay + a slim one in the footer. Capture email on your own domain too.
- [ ] Define the publish ritual: site → Substack send → 1–2 social pulls (pull-quotes). Write it down so it's a checklist, not a decision each time.

### Phase 3 — Add the scannable layer *(format tweak)*
- [ ] Add a `tldr` / "the point" field to the essay frontmatter + render it at the top.
- [ ] Add pull-quote styling to `global.css`; drop 1–2 into each existing essay.
- [ ] Pass subheads through the longer essays so skimmers get rungs.

### Phase 4 — Polish & proof
- [ ] Replace the About intro-video placeholder (record a 60–90s intro, or cut it and let the prose carry).
- [ ] Set a default OG image + per-essay social cards so shares look intentional.
- [ ] Light SEO/AEO pass: titles, descriptions, sitemap (mirror what we did for the agency).

### Cadence after launch
One essay every 1–2 weeks, site-first, syndicated. Quality of trust over volume. The freeze rule applies to this project too: **sent, not saved** — publish the imperfect one, don't polish a seventh draft.

---

## Next action
Read this, react, and tell me where to start — I'd start by reviewing **Welcome to Finland** so we ship momentum, then stand up the Substack. Your call.

---

## Content phase (added 2026-06-30)

Plumbing is ~done; we're now in the **content & inspiration** phase. See `inspiration-sprint.md` for the benchmark study. Key decisions that came out of it:

- **Reachable target:** ~1,000 *true* readers in the outsider-builder niche — not a vanity number. (Anti-freeze: a target that can actually be hit and judged.)
- **Closest precedents to study:** Paul Millerd (*The Pathless Path*) and Visakan Veerasamy — niche, identity-first, builder-adjacent outsiders.
- **Visual signature:** adopt the **Tim Urban "napkin sketch"** — one deliberately-rough hand drawing per essay. Serves the "visuals that explain complex things simply" goal without needing design skills.
- **Whitespace we own:** *the founder still in the ring who tells the truth about it, from the edge not the center.* Tactical operators can't go there; pure essayists have no receipts. Hasan has both.
- **Format rules (from the benchmarks):** one idea + one story + plain words (Housel); concrete-or-cut (Harry Dry); name the unspoken thing (Ask Polly); own the phrase — *Sent, Not Saved* (Millerd).
