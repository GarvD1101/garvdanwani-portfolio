# Phase 2 — Re-skin Case Study & About Pages

Scope: `/work/bwellcheck`, `/work/voice-ai`, `/work/omniflix`, `/work/learning-system`, `/work/financial-platform`, and `/about`. The homepage is already done — this brings the rest of the site in line with it. This overrides any remaining Forest/Sage color references in `AGENTS.md` and all Chart-theme language in `update.md` — treat both as superseded on these pages, same as the homepage.

**Why labels are included, not just color:** these pages still carry Chart-specific vocabulary — "Chart No. 0X," "Presenting complaint," "Vitals," "Prognosis," "History." Recoloring around those labels without renaming them would leave orphaned jargon with no theme left to explain it. Both have to happen together here.

---

## 1. Color & texture migration

Replace all Forest/Sage tokens with the existing Saffron/Parchment/Black system from `pivot.md`:
```
--saffron: #F4C430
--parchment: #F6F1E4
--ink: #111111
--ink-true-black: #000000
--saffron-wash: color-mix(in srgb, #F4C430 15%, transparent)
```
Remove the chart-paper grid texture from every instance on these pages (the Vitals sidebar background, any full-bleed accent-subtle bands). No grid texture survives the pivot anywhere on the site.

## 2. Label renames (all five case study pages)

| Current | New |
|---|---|
| "Chart No. 0X — [Project]" title prefix | Drop the prefix entirely — just the project name |
| "Presenting complaint" | "Overview" |
| "Findings" | "What I built" |
| "Vitals" (metric sidebar) | "Key metrics" |
| "Prognosis" | "Outcome" |
| "Chart note" (BwellCheck regulatory callout) | "Regulatory note" |

## 3. Label renames (/about page)

| Current | New |
|---|---|
| Nav: "History" | "About" (should already be fixed sitewide via `Nav.tsx` — confirm it's actually reflected on this page, not just the homepage) |
| Page H1: "History · The Detour into Systems" | "The Detour into Systems" (drop "History" as a label — keep the rest, it's good copy) |
| "Current Practice · Founding Team" | "Current Role · Founding Team" |

Leave "Academic Foundation," "Recognition · Sarvam CODE Beta," "Competitions & Leadership," and "Credentials & Certifications" as-is — none of that is Chart-specific language.

## 4. Visual consistency with the homepage system

- **Numbers get the black+saffron treatment everywhere, not just the Stat Block.** Apply the same visual logic — saffron numerals on a black field — to the case study pages' metric sidebar, at a smaller sidebar-appropriate scale. This makes it a recognizable site-wide motif rather than a homepage-only trick.
- **The About page's narrative intro** (currently a full-bleed accent-subtle green wash) becomes a full-bleed `--ink-true-black` section, matching the homepage's Stat Block treatment — parchment or saffron text on black, not green-on-green. This establishes one consistent rule sitewide: black = the deliberate pause/spotlight moment.
- **The regulatory note callout** (BwellCheck) gets a bold saffron or black border treatment, not a soft tint — consistent with "color used as real fields/edges, not thin washes" established on the homepage.
- Pull quotes (Newsreader italic) can keep their existing treatment — that wasn't Chart-specific, no change needed.

## 5. Animation — deliberately lighter than the homepage

These are long-form reading pages, not the landing experience — do not bring over the stacked-card pop, the clip-path text wipe, or the color-block header wipes from the homepage. That much motion on a page someone is trying to actually read would fight the content rather than support it.

Use one consistent treatment across all six pages: a simple fade-up reveal on each section as it scrolls into view (the same `ScrollReveal` pattern already built and used elsewhere), `whileInView`, triggered once, respecting `prefers-reduced-motion`. Quiet and uniform is the right choice here — save the bold motion vocabulary for the homepage where it's already established.

## 6. While you're in there — check for the font-inheritance bug

The homepage had headline elements silently falling back to a default sans because they were wrapped in `<a>` tags without an explicit `font-family`. Case study titles and the About page's H1 may have the same pattern (back-links, "read more" wrappers). Check computed styles on each page's headline elements and confirm Newsreader is actually rendering, not just declared.

---

## Verification

Run `design-auditor` and `web-design-guidelines` against all six pages once built, same as every previous pass — fix anything flagged before calling this done. Confirm visually on the live server that no green (Forest/Sage) or grid texture remains anywhere on the site.
