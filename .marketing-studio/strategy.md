# Marketing Strategy — joshboyer.ca (Personal Portfolio)

**Version:** 1.0 — 2026-07-12
**Product:** Personal portfolio site (this repo)
**Audience:** Insurance-tech hiring managers and recruiters (primary); developer/maker peers (secondary)
**Goal:** Be the best search result for "Josh Boyer" in a professional context, and convert visits into recruiter conversations, Forage waitlist signups, and Workshop 42 followers.

## Marketing Readiness Score: 38/100

| Category | Score | Notes |
|----------|-------|-------|
| Product/story | 8/10 | Strong, differentiated story (insurance-tech architect + local-first builder + maker) |
| Availability | 0/15 | Site is not live — branch unmerged, Pages not enabled, no domain attached |
| Technical SEO | 4/15 | Meta description only; no OG/Twitter cards, sitemap, robots.txt, or canonical URL |
| AI/AEO visibility | 2/10 | No structured data (JSON-LD Person schema); private repos are invisible to crawlers |
| Content engine | 4/15 | Good static content; no blog/notes section, no reason for repeat visits |
| Distribution | 8/20 | LinkedIn exists but likely doesn't link here; ws42.ca and goforage.ca live but not cross-linked |
| Measurement | 2/10 | No analytics (privacy-first constraint: use self-hosted Umami/Plausible on homelab) |
| Conversion | 10/15 | Clear contact CTAs; missing resume download and Forage waitlist cross-link |

## Priority actions

### P1 — This week (blocking everything else)
1. Merge to main, enable GitHub Pages, attach `joshboyer.ca` (or `portfolio.joshboyer.ca`) via CNAME. Nothing else matters while the site is unreachable.
2. Add OG + Twitter card meta tags and a real social preview image — every link share (especially LinkedIn) renders as a blank card until this is done.
3. Add JSON-LD Person schema (name, jobTitle, sameAs → LinkedIn/GitHub/ws42.ca/goforage.ca) — cheap, and it's what AI assistants and Google's knowledge panel read.
4. Update LinkedIn profile to link to the site (contact info + featured section).
5. Add robots.txt + sitemap.xml.

### P2 — This month
6. Resume: add a "Download resume" button (generalised PDF, not the Insurity-tailored one).
7. Cross-link the property network: ws42.ca and goforage.ca should link back to joshboyer.ca ("built by Josh Boyer") — three sites linking each other is a legitimate mini link network and the only backlinks that are free.
8. Self-hosted analytics (Umami or Plausible in the homelab Docker stack) — measure before optimizing further.
9. Make 1–2 flagship repos public (or publish READMEs as case studies) — private repos contribute nothing to GitHub-profile credibility. Candidates: lowkey-parakeet, Spark (Friday).
10. GitHub profile README for @JoshBoyer pointing at the site.

### P3 — Ongoing
11. Notes/blog section (one post per month is enough): takeover-migration war stories (sanitised), local-first AI builds, Forage engineering notes. Each post is LinkedIn material — that's the actual distribution channel for this audience.
12. LinkedIn cadence: 1 post per fortnight repurposing site content. Insurance-tech LinkedIn is low-volume; small consistent presence stands out.
13. Quarterly: re-run this audit; spot-check what ChatGPT/Perplexity say for "Josh Boyer insurance technology".

## What NOT to do
- No Twitter/X, TikTok, or Instagram — wrong audience, no time budget.
- No paid anything.
- No third-party analytics/trackers — conflicts with the local-first brand story the site itself tells.

## Cross-references
- `/seo-audit` — after the site is live, for a scored technical pass
- `/ai-citations` — after JSON-LD ships
- `/content-plan` — when ready to commit to the notes section
- Forage: run `/marketing-init` + `/launch-plan` in the goForage repo (separate product, separate funnel)
