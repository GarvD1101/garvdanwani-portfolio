"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="container section hero-section" id="hero" aria-label="Hero">
      <div className="hero__layout">
        <div className="hero__content">
          <h1 className="hero__headline">
            Too many AI demos. Not enough that survive production.
          </h1>

          <p className="hero__byline">
            Garv Danwani - AI Systems Engineer &middot; Computer Vision &amp; Voice AI
          </p>

          <p className="hero__statement">
            He builds production AI, not proof-of-concepts. One of five founding
            engineers at Project No. 21, a government-incubated health-tech
            startup, where he owns systems end-to-end - from model selection
            and latency optimization to infrastructure and regulatory readiness.
          </p>
        </div>

        <div className="hero__visual">
          <motion.div
            className="hero__photo-frame"
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
            }
          >
            <Image
              src="/photo.png"
              alt="Garv Danwani - AI Systems Engineer"
              width={180}
              height={180}
              className="hero__photo-img"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
