# Site Update — "The Chart"

This is an addendum to `AGENTS.md` and the existing `implementation_plan.md`. It doesn't replace the content already gathered (resume facts, case study details, typography/color locks) — it reframes the *structure* around a site-wide conceit, and folds in two outstanding fixes from earlier review (color presence, structural discipline).

## Why this conceit, specifically

You build systems that read other people's vitals — rPPG, HRV, signal extraction, a device going through actual CDSCO clearance. A portfolio framed as a chart isn't a borrowed costume the way a generic theme would be; it's the same lens you already apply professionally, turned on your own site. That's what makes it earned rather than gimmicky.

**Guardrail, up front:** commit to this in the *structure, labels, and section names* — not in every sentence. Running prose (case study bodies, the History narrative) should stay plainly written. Over-medicalizing the copy itself is the one way this becomes a parody instead of a device. Robert Tran's site (the reference point) works the same way — the bit lives in labels, stamps, and table shapes; the actual paragraphs are just well-written.

---

## Section-by-section reframe

| Current | Becomes | Notes |
|---|---|---|
| Hero | **Live Reading** | Status-line treatment, not a redesign of the whole hero |
| Metric strip | **Vitals** | Same 4 numbers, relabeled as readouts |
| Tech stack | **Diagnostic Panel** | Rebuilt as a genuine table, not a tag list |
| Case studies | **Charts** | Chart No. 01–05, new 4-part internal structure |
| About / journey | **History** | New page — the nav's existing `About` link finally gets a destination |
| Contact | **Request a Consult** | Light label change only — form itself stays plain and functional |
| Footer copyright | **"Chart closed 2026 · reviewed and signed, Garv Danwani"** | Mirrors a sign-off stamp |
| Primary nav | **Unchanged: Work · About · Contact** | Deliberate — see note below |

**Nav stays plain on purpose.** Robert Tran's own nav is just "Work / Stack / Contact" despite the full internal conceit — the theme lives inside pages, not in primary navigation, because recruiters skimming fast need to recognize where to click in under a second. Don't rename nav items into jargon.

---

## Hero — Live Reading

- Small eyebrow label above the name: `LIVE READING` (or similar), styled like a monitor status line — not a redesign, just a framing device.
- Positioning statement paragraph stays as already drafted in `AGENTS.md` — plain prose, no jargon injected here.
- Photo: add a thin colored ring around the headshot (`--accent`, ~3px, or a box-shadow ring) — this was already queued from the color-presence fix; now it also reads as a "reading" indicator, so implement it here specifically.

## Vitals (metric strip)

- Wrap in a full-bleed section using `--accent-subtle` as background (color-presence fix, now with a clear reason: it's the "readout panel").
- Keep the same four numbers, relabel lightly:
  - `40%+` — Latency reduction
  - `1 of 5` — Founding engineers
  - `CDSCO` — Regulatory pathway
  - `<4s` — Target response time
- Numbers in `--metric-highlight`, using IBM Plex Mono. Labels in `--accent`, IBM Plex Sans.
- Optional (nice-to-have, not required for v1): a faint waveform/pulse-line SVG motif running behind the numbers at low opacity, in `--metric-highlight`. Skip if it adds real build time — the full-bleed tint alone already solves the "feels empty" problem.

## Diagnostic Panel (tech stack)

Rebuild as an actual table, not a grouped tag list — this is also the fix for "everything is the same component type." Columns:

| Test | Result | Reference Range | Flag |
|---|---|---|---|
| e.g. Next.js / React | what you actually use it for | — | Primary tool |
| e.g. Docker / infra tooling | — | — | Comfortable / Learning (be honest) |

- Group rows by the existing resume categories (Programming, Voice AI & NLP, Computer Vision & Signal Processing, Machine Learning, Backend & APIs, Frontend, Cloud & Infrastructure, Data & Analytics) or flatten — your call on granularity.
- The "Flag" column is where honesty matters most — Robert Tran's version literally says "Docker — Trace amount — Learning" and it reads as more credible, not less, for saying so. Don't mark everything "Primary tool."
- Typography: IBM Plex Mono for the table data, reinforcing the instrument-readout feel.

## Charts (case study pages)

Rename each from "Case study" to `Chart No. 01 — BwellCheck`, etc. New internal structure, replacing the current problem/approach/outcome shape:

1. **Presenting complaint** — the problem/context (what `implementation_plan.md` currently calls "Context")
2. **Findings** — what you built, full technical narrative
3. **Vitals** — the metric sidebar, already planned as sticky — just relabeled
4. **Prognosis** — outcome, impact, what it means

No new research needed — this is a relabel and reorder of content already gathered in `AGENTS.md` Section 5. For BwellCheck specifically, keep the regulatory callout box, but consider styling it as a **"Chart note"** — a highlighted aside, which fits naturally since a regulatory review genuinely resembles an annotated note on a chart.

Order: BwellCheck (Chart 01), Voice AI Pipeline (Chart 02), OmniFlix (Chart 03), Learning System (Chart 04), Financial Platform (Chart 05) — unchanged from the existing plan.

## History (new page, /about)

This is where the third-person narrative goes — the draft already written:

> Garv didn't start in systems engineering. He started in data science — models, notebooks, the usual path into AI. But the deeper he got, the more he noticed a gap: the models that mattered weren't the cleverest ones, they were the ones that actually ran, reliably, for real people. So he stepped back — deliberately — into backend engineering. Not because he'd given up on ML, but because he wanted to understand what happens after the notebook: the workflows, the infrastructure, the parts that break at 2am.
>
> That detour is why BWell HealthTech works the way it does. He didn't just bring machine learning to a founding engineering seat — he brought a builder's instinct for the whole pipeline: computer vision running rPPG signal extraction, a voice AI stack streaming over WebRTC, and the frontend and backend wiring holding it all together in Next.js and React. Three disciplines that don't usually sit in one person's hands — until they had to.

Treat this as a starting draft — refine tone once you see it live. Section labels on this page can carry the theme (e.g. "Background" as a header), but keep the narrative prose itself plain, per the guardrail above.

**Architecture change from `AGENTS.md`:** move Education, Certifications, and Hackathons/Leadership off the landing page and onto this History page in full. Landing keeps only a one-line "Experience Snapshot" with a "Read the full history →" link here. This also resolves the two open items from the original plan (hackathon subsection, certification badges) more comfortably than fitting them into landing-page whitespace.

## Request a Consult (contact)

Label change only. Keep the form itself plain and functional — email, LinkedIn, GitHub, a simple message field. Don't extend the joke into the form's actual function (Robert Tran's "Letters & Commissions" is themed in name only; the form behind it is a normal contact form).

## Footer

Replace the plain copyright line with: **"Chart closed 2026 · reviewed and signed, Garv Danwani."**

---

## Carried over from earlier review (still required)

**Typography:** Newsreader for headlines (unchanged). IBM Plex Sans for body, IBM Plex Mono for data/metrics — replacing Geist Sans/Mono.

**Color:** two swappable theme presets via CSS custom properties, Forest active by default:

```
Forest (default):
  --accent: #23553F
  --accent-subtle: #E9F1EC
  --metric-highlight: #101C16

Sage:
  --accent: #4F5C50
  --accent-subtle: #EEF1EE
  --metric-highlight: #1E241E
```

Keep `--surface`, `--ink`, `--border` as already defined. Verify both presets pass WCAG AA for text/link contrast — Sage is lighter, flag if it falls short.

**Color presence (give accent real surface area, not just text):**
1. Vitals section: full-bleed `--accent-subtle` background (specified above).
2. Photo: colored ring (specified above).
3. Section headings: short colored rule (~28px × 3px, `--accent`) beneath each, replacing plain gray hairlines.
4. Chart cards: `--accent-subtle` fill on hover, not just a border change.
5. Section eyebrow labels: `--accent` instead of gray.
6. One more full-bleed `--accent-subtle` band somewhere besides Vitals — the History page intro is a good candidate now that it exists.

**Structural discipline:** Diagnostic Panel and Vitals must be genuinely distinct component types (a real table, a readout band) — not the same card/paragraph component restyled. The Chart conceit mostly enforces this naturally; call it out explicitly so it doesn't get flattened back into generic cards during implementation.

---

## Explicitly do not do

- Don't turn running prose into medical-jargon pastiche — only labels and structure carry the theme.
- Don't rename primary nav items into jargon — keep Work / About / Contact.
- Don't lose decisions already locked in `AGENTS.md`: phone number excluded, Next.js + Vercel hosting, domain target, photo/resume paths.

## Two small calls left for you

1. Diagnostic Panel column names — happy with `Test / Result / Reference Range / Flag`, or want different labels?
2. Confirm the Education/Certifications/Hackathons move from landing to the new History page (recommended above) — or keep them on landing as originally planned?
