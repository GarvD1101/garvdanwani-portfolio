"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

export function HeroPhoto() {
  const shouldReduceMotion = useReducedMotion();

  // Continuously track vertical scroll position
  const { scrollY } = useScroll();

  // Gentle mapping: complete within ~400px (roughly one hero/viewport transition into Vitals)
  const scale = useTransform(scrollY, [0, 400], [1.0, 0.85], { clamp: true });
  const rotate = useTransform(scrollY, [0, 400], [0, -3], { clamp: true });

  return (
    <div className="hero__photo-wrapper">
      <motion.div
        className="hero__photo-motion"
        style={
          shouldReduceMotion
            ? undefined
            : {
                scale,
                rotate,
              }
        }
      >
        <Image
          src="/photo.png"
          alt="Garv Danwani - AI Systems Engineer"
          width={180}
          height={180}
          className="hero__photo"
          priority
        />
      </motion.div>
    </div>
  );
}
