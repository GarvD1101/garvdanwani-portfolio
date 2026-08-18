"use client";

import { motion, useReducedMotion } from "motion/react";
import { springs, stagger } from "@/lib/motion-tokens";

const CERTIFICATIONS = [
  "Programming with Generative AI (NPTEL)",
  "Data Analytics with Python (NPTEL)",
  "Microsoft AI Essentials",
  "Deloitte Data Analytics Simulation",
  "Tata Data Visualization Simulation",
];

export function CredentialsSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="container section" aria-label="Credentials and Certifications">
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
        Credentials &amp; Certifications
      </motion.h2>

      <motion.div
        className="credentials-card"
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
        <p className="credentials-card__subtitle">
          Specialized Technical Accreditations &amp; Industry Simulations
        </p>
        <div className="credentials-pills-row">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.span
              key={cert}
              className="cert-pill"
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: springs.lively.stiffness,
                      damping: springs.lively.damping,
                      delay: 0.15 + idx * stagger.tight,
                    }
              }
            >
              {cert}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
