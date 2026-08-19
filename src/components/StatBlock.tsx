"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion } from "motion/react";
import { springs, stagger } from "@/lib/motion-tokens";
import { RingChart } from "@/components/RingChart";

function AnimatedCounter({ value, duration = 1.2 }: { value: string; duration?: number }) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  // Parse numeric prefix/content
  if (value === "80%+") {
    return <NumberTicker target={80} suffix="%+" isInView={isInView} shouldReduceMotion={shouldReduceMotion} />;
  }
  if (value === "1 of 5") {
    return <NumberTicker target={1} suffix=" of 5" isInView={isInView} shouldReduceMotion={shouldReduceMotion} />;
  }

  // Text values (e.g. CDSCO, 2.4s avg)
  return (
    <motion.span
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: springs.ui.stiffness, damping: springs.ui.damping }
      }
    >
      {value}
    </motion.span>
  );
}

function NumberTicker({
  target,
  prefix = "",
  suffix = "",
  isInView,
  shouldReduceMotion,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  isInView: boolean;
  shouldReduceMotion: boolean;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      if (nodeRef.current) nodeRef.current.textContent = `${prefix}${target}${suffix}`;
      return;
    }

    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (latest) => {
        if (nodeRef.current) {
          nodeRef.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, target, prefix, suffix, shouldReduceMotion]);

  return (
    <span ref={nodeRef}>
      {prefix}0{suffix}
    </span>
  );
}

interface MetricItem {
  value: string;
  label: string;
  hasRing?: boolean;
}

const METRICS: MetricItem[] = [
  { value: "80%+", label: "Latency reduction", hasRing: true },
  { value: "1 of 5", label: "Founding engineers" },
  { value: "CDSCO", label: "Regulatory pathway" },
  { value: "avg. 2.4s", label: "End-to-end response time" },
];

export function StatBlock() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="stat-block" aria-label="Key Production Metrics">
      <div className="container container--wide">
        <motion.div
          className="stat-block__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ staggerChildren: shouldReduceMotion ? 0 : stagger.base }}
        >
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              className={`stat-block__item ${metric.hasRing ? "stat-block__item--with-ring" : ""}`}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: springs.ui.stiffness,
                      damping: springs.ui.damping,
                      delay: idx * stagger.base,
                    }
              }
            >
              {/* Optional Ring Chart accent behind the 80%+ figure ONLY */}
              {metric.hasRing && (
                <div className="stat-block__ring-bg" aria-hidden="true">
                  <RingChart
                    percentage={80}
                    size={88}
                    strokeWidth={5}
                    color="rgba(255, 153, 51, 0.45)"
                    bgColor="rgba(0, 0, 0, 0.05)"
                  />
                </div>
              )}

              <div className="stat-block__value">
                <AnimatedCounter value={metric.value} />
              </div>
              <div className="stat-block__label">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
