"use client";

import { motion, useReducedMotion } from "motion/react";
import { springs, stagger } from "@/lib/motion-tokens";

interface ComparisonPair {
  title: string;
  metricDelta: string;
  legacyLabel: string;
  legacyValue: string;
  legacyPercent: number; // 0-100 for bar width
  optimizedLabel: string;
  optimizedValue: string;
  optimizedPercent: number;
}

const COMPARISONS: ComparisonPair[] = [
  {
    title: "LLM Inference Latency (vLLM Qwen3-8B)",
    metricDelta: "-63% Latency Cut",
    legacyLabel: "Unoptimized Baseline",
    legacyValue: "~4 - 8s",
    legacyPercent: 100,
    optimizedLabel: "KV-Cache + Continuous Batching",
    optimizedValue: "~2.1 - 2.3s",
    optimizedPercent: 35,
  },
  {
    title: "Full Conversational Pipeline (ASR → NMT → LLM → TTS)",
    metricDelta: "-48% Pipeline Cut",
    legacyLabel: "Sequential Rest APIs",
    legacyValue: "~10 - 15s",
    legacyPercent: 100,
    optimizedLabel: "WebSockets + WebRTC Streaming",
    optimizedValue: "~5 - 8s",
    optimizedPercent: 48,
  },
];

export function LatencyComparisonChart() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <div className="latency-chart-wrapper" aria-label="Latency Benchmark Comparisons">
      <div className="latency-chart-grid">
        {COMPARISONS.map((item, idx) => (
          <motion.div
            key={item.title}
            className="latency-chart-card"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: springs.ui.stiffness,
                    damping: springs.ui.damping,
                    delay: idx * stagger.relaxed,
                  }
            }
          >
            <div className="latency-chart-card__header">
              <h4 className="latency-chart-card__title">{item.title}</h4>
              <span className="latency-chart-card__badge">{item.metricDelta}</span>
            </div>

            {/* Legacy Bar */}
            <div className="latency-bar-row">
              <div className="latency-bar-meta">
                <span className="latency-bar-label">{item.legacyLabel}</span>
                <span className="latency-bar-value latency-bar-value--legacy">{item.legacyValue}</span>
              </div>
              <div className="latency-bar-track">
                <motion.div
                  className="latency-bar-fill latency-bar-fill--legacy"
                  initial={shouldReduceMotion ? { width: `${item.legacyPercent}%` } : { width: "0%" }}
                  whileInView={{ width: `${item.legacyPercent}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.8, delay: 0.2 + idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
                  }
                />
              </div>
            </div>

            {/* Optimized Bar */}
            <div className="latency-bar-row">
              <div className="latency-bar-meta">
                <span className="latency-bar-label latency-bar-label--opt">{item.optimizedLabel}</span>
                <span className="latency-bar-value latency-bar-value--optimized">{item.optimizedValue}</span>
              </div>
              <div className="latency-bar-track">
                <motion.div
                  className="latency-bar-fill latency-bar-fill--optimized"
                  initial={shouldReduceMotion ? { width: `${item.optimizedPercent}%` } : { width: "0%" }}
                  whileInView={{ width: `${item.optimizedPercent}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.8, delay: 0.35 + idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
                  }
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
