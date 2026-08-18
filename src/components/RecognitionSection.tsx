"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function RecognitionSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="container section" aria-label="Recognition and Education">
      <div className="section-heading-wrapper">
        {/* Small bold mark (rounded square, 32px) scales in from 0 with rotation & snap */}
        <motion.div
          className="recognition-badge-mark"
          initial={
            shouldReduceMotion
              ? { scale: 1, rotate: 0, opacity: 1 }
              : { scale: 0, rotate: -8, opacity: 0 }
          }
          whileInView={
            shouldReduceMotion
              ? { scale: 1, rotate: 0, opacity: 1 }
              : { scale: [0, 1.15, 1], rotate: [-8, 0], opacity: [0, 1, 1] }
          }
          viewport={{ once: true, margin: "-60px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
          }
          aria-hidden="true"
        >
          <span className="recognition-badge-mark__dot" />
        </motion.div>

        <motion.h2
          className="section-heading"
          style={{ marginBottom: 0 }}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.35, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
          }
        >
          Recognition &amp; Education
        </motion.h2>
      </div>

      <motion.div
        className="recognition-card"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.35, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
        }
      >
        <h3 className="recognition-card__title">B.Tech &middot; Computer Science &amp; Engineering</h3>
        <p className="recognition-card__institution">
          Greater Noida Institute of Technology (GNIOT), AKTU &middot; 2022 - 2026
        </p>
        <p className="recognition-card__meta">
          First Division &middot; Final Semester SGPA 8.25 &middot; Data Science Specialization
        </p>
        <p className="recognition-card__desc">
          Selected as a Beta Tester for Sarvam CODE under Sarvam AI&apos;s EPOCH program (2026).
          Conducted structured multi-session testing of the agentic coding CLI, identifying four
          reproducible bug classes including two critical trust-affecting failures. Isolated a
          model-dependent failure through controlled A/B testing and documented reproduction steps,
          root-cause hypotheses, and fix directions in a structured report for the product team.
        </p>
      </motion.div>
    </section>
  );
}
