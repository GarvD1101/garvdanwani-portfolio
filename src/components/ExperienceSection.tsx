"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="container section" id="experience" aria-label="Experience">
      <motion.h2
        className="section-heading"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
        }
      >
        Experience
      </motion.h2>

      <div className="experience-card experience-card--animated">
        {/* Left accent bar grows from 0 to full height */}
        <motion.div
          className="experience-card__accent-bar"
          initial={shouldReduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
          }
          style={{ transformOrigin: "top" }}
          aria-hidden="true"
        />

        {/* Content fades up with a slight stagger starting partway through bar's growth */}
        <motion.div
          className="experience-card__body"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.35, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
          }
        >
          <h3 className="experience-card__role">AI &amp; ML Engineer</h3>
          <p className="experience-card__company">Project No. 21</p>
          <p className="experience-card__meta">
            Full-Time &middot; New Delhi &middot; Jan 2026 - Present &middot; Founding Team (1 of 5)
          </p>
          <p className="experience-card__desc">
            Founding team engineer (1 of 5) at a government-incubated health-tech startup.
            Owning end-to-end technical execution across computer vision, contactless
            physiological monitoring (rPPG), low-latency voice AI pipelines over WebRTC,
            and CDSCO regulatory pathway clearance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
