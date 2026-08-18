# Pivot — Bold Minimalist, One-Page, Saffron/Parchment/Black

This supersedes `update.md` entirely and overrides the Forest/Sage color section of `AGENTS.md`. The Chart concept (Vitals, Diagnostic Panel, Chart No. 0X, Presenting complaint, History, Request a Consult, the chart-paper grid texture) is dropped — reason: the theme leaned too heavily on the rPPG/health-tech project specifically, and the portfolio shouldn't read as dependent on one project.

**Scope of this pass:** rebuild the homepage as a bold, single-page experience. Do NOT touch the existing case-study pages or the About page's routing — they stay as separate pages, reachable via nav, for anyone who wants to go deeper. This pass is the homepage only.

---

## Color system (replaces Forest/Sage entirely)

```
--saffron: #F4C430
--parchment: #F6F1E4   (unchanged — keep this one)
--ink: #111111
--ink-true-black: #000000   (reserved for full-bleed bold blocks only)
--saffron-wash: color-mix(in srgb, #F4C430 15%, transparent)   (hover/subtle states only)
```

**Hard rule:** saffron is never used as small text on the parchment background — contrast fails there. Saffron's job is large fields: full-bleed color-blocked sections, big numerals, tags/badges, underlines, and black-background pairings (saffron text/numbers on a black section reads great). Body text stays `--ink` on `--parchment`.

## Background

Drop the chart-paper grid texture completely — that was theme-specific. New treatment: mostly flat `--parchment`, punctuated by deliberate full-bleed `--ink-true-black` sections used as rhythm/pause points (not textured, just a confident solid field) — Swiss-poster style, not decorative.

---

## One-page structure (homepage only)

1. **Hero** — keep the existing bold headline ("Too many AI demos. Not enough that survive production.") and byline structure, that copy still works fine here. Drop the "LIVE READING · TELEMETRY ACTIVE" eyebrow — that was Chart-specific. Photo: drop the continuous scroll-linked transform entirely — replace with a simple one-time entrance (fade in + scale 0.95 → 1, triggered via whileInView, not tracked to scroll position). Reliable over clever.

2. **Stat block** — full-bleed `--ink-true-black` section, same four metrics as before (40%+ latency cut, 1 of 5 founding engineers, CDSCO regulatory pathway, <4s target latency), set large in `--saffron` against the black field. This is a good "field coming up" reveal moment — numbers fade/slide up as the section enters view.

3. **Projects — the core animation.** Each of the five projects (BwellCheck, Voice AI Pipeline, OmniFlix, Learning System, Financial Platform) gets its own full-width reveal as the user scrolls, one at a time, alternating slide-in direction (odd ones from the left, even ones from the right). Trigger via IntersectionObserver/whileInView per project — NOT a continuous scroll-linked transform, a simple triggered-once slide+fade, same technique family as the existing ScrollReveal component, extended with horizontal offset and per-project stagger. Drop "Chart No. 0X" numbering and "Presenting complaint" framing — back to plain project titles and category tags. Each still links through to its full case-study page for depth.

4. **Practice/experience summary** — bold treatment, links through to the About page. Drop "Clinical & Systems Practice" framing, back to plain "Experience" or similar neutral label.

5. **Tech stack** — drop "Diagnostic Panel" framing and its clinical column names. Keep the actual content (including the honest Flag values already set) but relabel columns to something plain: `Tool / What it's for / Flag`. Keep it bold-styled (confident type, maybe a saffron rule or tag per category), not a return to a generic tag cloud.

6. **Recognition/education summary** — bold treatment, links through to About for the full detail.

7. **Contact** — plain "Contact," drop "Request a Consult."

8. **Footer** — plain. Drop "Chart closed 2026 · reviewed and signed" — a simple, confident copyright line is enough here; theme-driven signoff no longer fits.

9. **Nav** — plain: Work · About · Contact. (About was renamed to History for the Chart concept specifically — revert that now that the concept's gone.)

---

## Explicitly do not carry forward

- Forest/Sage green tokens, the theme-switcher
- Any "Chart," "Vitals," "Diagnostic," "Reading," "Consult" language on the homepage
- The chart-paper grid background texture
- The continuous scroll-linked photo transform

## Not in scope for this pass (flagging, not asking you to do it now)

The case-study pages and the About/History page still carry full Chart branding and the old green palette — they'll look inconsistent with the new homepage until a follow-up pass re-skins them to match. Worth doing once you're happy with how the homepage lands, not before.
