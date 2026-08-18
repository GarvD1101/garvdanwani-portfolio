"use client";

import { motion, useReducedMotion } from "motion/react";
import { springs, stagger } from "@/lib/motion-tokens";

const CONTACT_LINKS = [
  { label: "garvd2005@gmail.com →", href: "mailto:garvd2005@gmail.com", isPrimary: true },
  { label: "LinkedIn →", href: "https://linkedin.com/in/garvdanwaniofficial", isPrimary: false },
  { label: "GitHub →", href: "https://github.com/GarvD1101", isPrimary: false },
];

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="container section" id="contact" aria-label="Contact">
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
        Contact
      </motion.h2>

      {/* Clean Spring Entrance for Contact Card */}
      <motion.div
        className="contact-card"
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
        {/* Heading revealed via clean spring rise */}
        <motion.h3
          className="contact-card__title"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: springs.ui.stiffness,
                  damping: springs.ui.damping,
                  delay: 0.15,
                }
          }
        >
          Open for Select Engineering Roles &amp; Systems Consultation
        </motion.h3>

        <motion.p
          className="contact-card__desc"
          style={{ marginTop: "var(--sp-2)" }}
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
                  delay: 0.25,
                }
          }
        >
          Available for technical discussions, AI systems architecture consultations, and production
          engineering opportunities in computer vision, voice AI, and real-time infrastructure.
        </motion.p>

        <div className="tag-row" style={{ marginTop: "var(--sp-5)" }}>
          {CONTACT_LINKS.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="focus-tag"
              style={link.isPrimary ? { fontWeight: 600 } : undefined}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: springs.snap.stiffness,
                      damping: springs.snap.damping,
                      delay: 0.35 + idx * stagger.base,
                    }
              }
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
