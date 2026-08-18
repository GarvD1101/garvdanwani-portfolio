"use client";

import { motion, useReducedMotion } from "motion/react";
import { springs, stagger } from "@/lib/motion-tokens";

const COMPETITIONS = [
  {
    title: "Google Hackathon",
    meta: "AI Career Advisory System",
    description: "Designed an AI-based career advisory system mapping dynamic skills to evolving industry career trajectories.",
  },
  {
    title: "Smart India Hackathon (SIH 2024)",
    meta: "National Level Participant",
    description: "Built scalable computational solutions addressing complex real-world challenges in healthcare and education.",
  },
  {
    title: "The Big Biz Theory 2025",
    meta: "IIT Madras & TRAYA Innovation Competition",
    description: "Presented end-to-end technical strategy and commercial viability for applied health telemetry platforms.",
  },
  {
    title: "Design & Marketing Head · Manan Club, GNIOT",
    meta: "Technical Leadership & Branding",
    description: "Led branding, visual communications, and marketing strategy for technical hackathons and student engineering initiatives.",
  },
];

export function CompetitionsSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="container section" aria-label="Competitions and Leadership">
      <motion.h2
        className="section-heading"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                type: "spring",
                stiffness: springs.ui.stiffness,
                damping: springs.ui.damping,
              }
        }
      >
        Competitions &amp; Leadership
      </motion.h2>

      <motion.div
        className="competitions-card"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                type: "spring",
                stiffness: springs.ui.stiffness,
                damping: springs.ui.damping,
                delay: 0.1,
              }
        }
      >
        <ul className="competitions-list">
          {COMPETITIONS.map((item, idx) => (
            <motion.li
              key={item.title}
              className="competitions-item"
              layout
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: springs.ui.stiffness,
                      damping: springs.ui.damping,
                      delay: 0.15 + idx * stagger.base,
                    }
              }
            >
              <h3 className="competitions-item__title">{item.title}</h3>
              <p className="competitions-item__meta">{item.meta}</p>
              <p className="competitions-item__desc">{item.description}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
