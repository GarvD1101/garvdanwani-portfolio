# Final Pass — Professional Animation Upgrade

Visual-only pass. No content, copy, layout structure, or color changes — everything specified elsewhere (`pivot.md`, `phase2-subpages.md`, `homepage-consolidation.md`) stays as-is. This replaces the current simple fades/pops with named, tested motion patterns, cited to source.

**Sources studied:** [motion.dev](https://motion.dev) (the animation library already powering this site, rebranded from Framer Motion — same package, `motion/react`), [motion.dev/ui](https://motion.dev/ui) (Motion's own catalogue of pre-built, performance-graded sections — paid, used here as a **named reference catalogue**, not an install target), [Kokonut UI](https://kokonutui.com) (open-source, MIT-licensed React components built on Motion), and [Bklit UI](https://bklit.com) ([github.com/bklit/bklit-ui](https://github.com/bklit/bklit-ui), MIT-licensed chart components).

**Stack compatibility note, read first:** Kokonut UI, Bklit UI, and Motion UI are all built for Tailwind + shadcn/ui conventions. This project uses vanilla CSS (`AGENTS.md`'s explicit `--no-tailwind` choice). Every technique below is achievable with the free base Motion library already installed in this project (`motion/react`) — treat all three sites as **design and technique references to hand-build**, not packages to install, unless you'd rather add Tailwind + shadcn to the project as a separate decision (not made here).

---

## 0. Foundation — one shared motion config, before touching any section

Motion UI's own architecture is worth copying regardless of using their paid components: a single theme file defines named spring presets, and every component references them instead of hardcoding transition values. Create `src/lib/motion-tokens.ts`:

```ts
export const springs = {
  snap: { stiffness: 1200, damping: 70 },   // hover, micro-interactions
  ui: { stiffness: 300, damping: 33 },       // default: cards, reveals
  gentle: { stiffness: 110, damping: 20 },   // slow entrances (Detour narrative)
  lively: { stiffness: 620, damping: 17 },   // the Projects stacked-card pop
  ambient: { stiffness: 45, damping: 13 },   // background/decorative motion
}
export const stagger = { tight: 0.04, base: 0.08, relaxed: 0.15 }
```

Every animation spec below should pull from this file, not define its own numbers. This is also what keeps 10 different sections from feeling like 10 different websites — same physics, different choreography.

**Free verification tool, add to the audit step:** [MotionScore](https://score.motion.dev) grades any live site's animation performance S–F with agent-ready fixes. Run it alongside `design-auditor` and `web-design-guidelines` once this is built.

---

## 1. Hover effect — LOCKED: Border beam, used everywhere (cards, links, buttons)

Decision revised from Magnetic Pull: **Border beam** — [BorderBeam](https://motion.dev/ui/components/border-beam). A thin arc of light (saffron) sweeps a panel's rounded border, built from a rotating conic-gradient masked to the border's rim, driven by a plain CSS `rotate()` transform — not pointer-tracking. This is the reason it was chosen over Magnetic Pull: it doesn't need continuous cursor coordinates, so it survives contact with touch devices without becoming dead code.

Cross-device implementation:
- Use `@media (hover: hover) and (pointer: fine)` to detect true pointer devices. On those, trigger the beam on hover.
- On touch/coarse-pointer devices, trigger the same beam on `:active` (tap) instead of hover — same visual effect, same meaning ("engaging with this element"), different trigger event. Do not fall back to an always-on ambient loop — that changes the effect's meaning from "responding to you" to "just decorative," which isn't the same interaction language as the desktop version.
- Apply consistently to project cards, buttons, nav links, and badge pills, same `snap` spring token governing the beam's speed from Section 0's motion-tokens file.

## 2. Section-by-section

### Hero
**LOCKED: Split/word reveal** — [SplitReveal](https://motion.dev/ui/components/split-reveal): the headline "Too many AI demos. Not enough that survive production." reveals word-by-word with a staggered rise (each word: opacity 0→1, translateY ~14px→0, staggered `tight` 0.04-0.08s apart). Matches Motion's own showcased ["Editorial stagger hero"](https://motion.dev/ui/hero-sections). Not scramble, not a flat fade — this is the only Hero text treatment.

### The Detour into Systems (photo flip section)
**LOCKED.** Keep the flip+grayscale transform already specified — don't replace it. Pair the narrative paragraph's entrance with **SplitReveal** (line-by-line, not word-by-word — reads better for a full paragraph than the Hero's word-level version) instead of a flat fade.

### Stat Block
**LOCKED: Scroll-in counters + ring chart accent on one figure.** All four numbers count up from 0 to their final value as the section enters view — Motion's own ["Stats: Scroll-in counters"](https://motion.dev/ui/stats-sections) pattern (reference only per the compatibility note — replicate with `useMotionValue` + `useTransform`, not the paid install). Additionally, add a small [Ring chart](https://bklit.com) (Bklit UI's ring-chart pattern — animated progress arc) behind the "40%+" figure ONLY — the other three (1 of 5, CDSCO, <4s) stay as counting numbers only, no ring, they aren't percentages so a ring chart wouldn't make sense on them. The sparkline option was considered and dropped — don't build it.

### Featured Projects
**LOCKED — no change.** Keep the stacked-card reveal as-is, validated by Motion's own ["CardStack"](https://motion.dev/ui/components/card-stack) existing as a named pattern. One technical (non-visual) refinement: implement the stack/pop using Motion's native `layout` prop ([layout animations](https://motion.dev/docs/react-layout-animations)) under the hood instead of manually-tuned keyframes — same visual result, more physically consistent motion, less magic-number tuning.

### Tech Stack & Tooling
**LOCKED: Staggered row reveal only, no chart.** [StaggerReveal](https://motion.dev/ui/components/stagger-reveal) applied per category — rows fade/rise in sequence after their header's color wipe, referencing Motion's ["Bento grids"](https://motion.dev/ui/bento-grids) staggered-reveal pattern. The radar chart option was considered and declined — don't add one here.

### Experience
**LOCKED — no change.** Keep the vertical accent bar already specified. Reference: conceptually similar to Motion's [ProgressBar](https://motion.dev/ui/components/progress-bar) component (a value growing along an axis), applied here decoratively rather than as a literal progress value.

### Recognition & Education
**LOCKED — no change.** Keep the stamp/seal scale+rotate already specified.

### Competitions & Leadership (new section)
**LOCKED: Staggered list reveal** — [Lists](https://motion.dev/ui/lists) category: "layout-animated add" pattern, applied here to each hackathon/leadership item appearing in sequence as the section scrolls into view, each with a small delay after the previous.

### Credentials & Certifications (new section)
**LOCKED: Spring-bounce badge pop** — badges scale in from 0 with a slight overshoot (using the `lively` spring token), staggered `tight` (0.04s) apart. General pattern inspired by [Kokonut UI](https://kokonutui.com)'s badge/pill components, not one specific named example.

### Contact
**LOCKED: MaskWipe + PageCurtain, both included.** Keep the **MaskWipe** headline reveal already specified — [MaskWipe](https://motion.dev/ui/components/mask-wipe). Additionally apply [PageCurtain](https://motion.dev/ui/components/page-curtain)'s curtain-style reveal technique to how the section's background transitions in as it scrolls into view — both confirmed, build both, neither is optional anymore.

---

## 3. Data visualization — CONFIRMED, build all three

Using [Bklit UI](https://github.com/bklit/bklit-ui) (MIT-licensed; free tier covers line, area, ring, and radar charts) as the reference for chart type and interaction, hand-built with SVG + Motion. All three below are confirmed for this pass — none are optional:

1. **Voice AI Pipeline case study page** — both before/after pairs (LLM latency ~4-8s → ~2.1-2.3s; pipeline latency ~10-15s → ~5-8s) become a simple bar or area comparison chart instead of stated text.
2. **BwellCheck case study page** — the ~25-30% signal stability improvement as a ring/radial chart (single animated arc, Bklit's Ring chart pattern).
3. **Homepage Stat Block** — small ring accent behind the "40%+" figure specifically (see Section 2, Stat Block) — additive to the bold numeral treatment, not a replacement.

**Declined: Tech Stack radar chart.** Not part of this pass — Tech Stack keeps the staggered row reveal only, no chart.

---

## 4. Explicitly out of scope for this pass

No changes to color tokens, copy, section order, or the page/nav structure established in `pivot.md` and `homepage-consolidation.md`. This is motion and (optionally) chart visualization only.

## 5. Verification

Build (`npm run build`), then `design-auditor`, `web-design-guidelines`, and [MotionScore](https://score.motion.dev) against the live site. Confirm every animation respects `prefers-reduced-motion` — this applies to every new technique introduced here, not just the ones carried over from earlier passes.
