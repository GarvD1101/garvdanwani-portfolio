# Homepage Consolidation — Remove /about, Fold Into One Page

This supersedes the `/about` portion of `phase2-subpages.md` — that file's case-study page instructions (`/work/*`) still stand unchanged. This is homepage restructuring only.

**Why:** the separate About page reads as disconnected from the rest of the one-page experience. Its content moves into the homepage flow itself, in two places — right after the hero, and below Projects.

---

## 1. Remove the separate page

- Delete the `/about` route entirely.
- In `Nav.tsx`, change "About" from a route link (`/about`) to an anchor link pointing at the new in-page section described below: `/#detour` (use the full path with `/` prefix, not just `#detour`, so it still works correctly when clicked from a case-study page rather than only from the homepage itself).
- Remove any "Read background & full trajectory →" / "View full education & achievements →" links that currently point to `/about` — the content they linked to now lives directly on the page, no link needed.

## 2. New Hero — stripped down

Keep only the headline and the photo. Remove the byline, the bio paragraph, and the focus-area tag row from this section — they're relocating to the new Detour section below, not being deleted.

- Headline ("Too many AI demos. Not enough that survive production.") — center-aligned now, not left-aligned beside the photo.
- Photo — centered below the headline, not positioned beside it. Initial state: modest size (~140-160px), fully desaturated (grayscale 100%), no rotation yet.

## 3. New section — "The Detour into Systems" (id="detour")

Place this immediately after the Hero, before the Stat Block. Content:

1. Byline, near the top of this section: "Garv Danwani — AI Systems Engineer · Computer Vision & Voice AI" — this replaces the byline that was removed from the Hero. A fast-scanning recruiter should still hit his name/title early, just one scroll further than before.
2. The existing third-person narrative (already written, currently on the About page):

   > Garv didn't start in systems engineering. He started in data science — models, notebooks, the usual path into AI. But the deeper he got, the more he noticed a gap: the models that mattered weren't the cleverest ones, they were the ones that actually ran, reliably, for real people. So he stepped back — deliberately — into backend engineering. Not because he'd given up on ML, but because he wanted to understand what happens after the notebook: the workflows, the infrastructure, the parts that break at 2am.
   >
   > That detour is why BWell HealthTech works the way it does. He didn't just bring machine learning to a founding engineering seat — he brought a builder's instinct for the whole pipeline: computer vision running rPPG signal extraction, a voice AI stack streaming over WebRTC, and the frontend and backend wiring holding it all together in Next.js and React. Three disciplines that don't usually sit in one person's hands — until they had to.

   This replaces the shorter Hero bio paragraph entirely — don't keep both, they cover the same ground and the narrative does it better.
3. The focus-area tag row (Applied AI Systems, Real-Time System Design, Computer Vision, Voice AI Pipelines, AI Infrastructure, Regulatory & Compliance for Health AI) — moved here from the old Hero position, sitting below the narrative.

## 4. The photo transform — status: built, and more ambitious than this spec

**Update, post-build:** the live site now has the photo actually migrating position — grayscale and small in the Hero, flipping and flowing down into a color, settled position within the Detour section itself. That's more ambitious than the spec below recommended (it explicitly advised against moving the photo's layout position, as the more fragile option) — but it's live and working, so treat this section as superseded by the working result, not as a constraint for future prompts. Leave the current implementation alone; nothing here should be used to "correct" it back to the in-place-only version.

The original spec is kept below for reference only, in case the live version ever needs debugging and it helps to know what was originally asked for:

The photo physically stays in one place in the layout — do not attempt to move it to a new position on the page via the transform, that's a much more fragile problem than what this needs. Only its rotation, color, and scale change.

- Wrap the Hero section and the Detour section's top portion in one container and scope `useScroll`'s `target` to that specific wrapper, with `offset: ["start start", "end start"]` — the transform must complete within that specific region, not the whole page. This exact mistake (unscoped target) is why the first attempt at photo motion earlier in this project was imperceptible.
- Interpolate across that scroll range:
  - `rotateY`: 0deg → 360deg (a full spin — this requires `perspective: 1000px` on the parent wrapper and `transform-style: preserve-3d` for the rotation to render with actual depth rather than just squishing flat)
  - `filter: grayscale()`: 100% → 0%
  - `scale`: 0.9 → 1.15
- This must be clearly, obviously visible when actually tested by scrolling the live page — not just correct in the code. Confirm visually before calling this done, same requirement as last time.
- Respect `prefers-reduced-motion`: show the photo at its resolved end state (full color, no rotation, scale 1.15) statically for anyone with that preference.

## 5. Content consolidation below Projects

Everything else from the old About page moves here, alongside whatever Experience/Recognition content already exists on the homepage. Audit first — don't duplicate anything already present:

- **Experience** — current role at BWell HealthTech (likely already exists here; verify it matches the fuller detail the About page had, expand if the existing version is thinner).
- **Recognition & Education** — B.Tech degree (likely already exists) plus the full Sarvam CODE Beta detail (selected under Sarvam AI's EPOCH program, structured multi-session testing, four reproducible bug classes including two trust-affecting failures, A/B-tested root cause isolation, documented findings for the product team) — confirm this full detail is present, not just a summary.
- **NEW — Competitions & Leadership**: Google Hackathon (AI-based career advisory system mapping skills to career trajectories), Smart India Hackathon 2024 (participant), The Big Biz Theory 2025 (IIT Madras & TRAYA Innovation Competition), Design & Marketing Head at Manan Club, GNIOT.
- **NEW — Credentials & Certifications**: Programming with Generative AI (NPTEL), Data Analytics with Python (NPTEL), Microsoft AI Essentials, Deloitte Data Analytics Simulation, Tata Data Visualization Simulation. Style these as bold saffron-bordered badge pills, consistent with the Focus Area tags' treatment.

Both new sections get a simple fade-up reveal on scroll (`whileInView`, once, `prefers-reduced-motion` respected) — same restrained treatment as the rest of the below-the-fold content, not the Hero/Detour section's motion or the Projects' stacked-card pop.

## 6. Unchanged — do not touch

Stat Block, Projects (stacked-card reveal), Tech Stack & Tooling, Contact section, and the footer all stay exactly as already built. This pass is Hero, the new Detour section, page/nav restructuring, and the below-Projects content consolidation only.

---

## Verification

Confirm `/about` is fully removed and nothing 404s from the old nav link. Scroll-test the photo transform specifically — confirm it's clearly visible, completes at the right point, and works correctly with reduced motion enabled. Check for duplicate content between the old Experience/Recognition sections and anything newly pulled in from the About page. Run `design-auditor` and `web-design-guidelines` as the final step, same as every previous pass.
