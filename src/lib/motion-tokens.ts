/**
 * Motion Tokens - Centralized physics-based spring presets and stagger timings
 * Based on motion.dev / Kokonut UI / Bklit UI architecture standards
 */

export const springs = {
  snap: { stiffness: 1200, damping: 70 }, // hover, micro-interactions
  ui: { stiffness: 300, damping: 33 }, // default: cards, reveals
  gentle: { stiffness: 110, damping: 20 }, // slow entrances (Detour narrative)
  lively: { stiffness: 620, damping: 17 }, // the Projects stacked-card pop / badge bounce
  ambient: { stiffness: 45, damping: 13 }, // background / decorative motion
};

export const stagger = {
  tight: 0.04,
  base: 0.08,
  relaxed: 0.15,
};
