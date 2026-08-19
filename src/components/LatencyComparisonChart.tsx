"use client";

import { motion, useReducedMotion } from "motion/react";
import { springs } from "@/lib/motion-tokens";

interface LatencyStage {
  stage: string;
  name: string;
  latency: string;
  reduction: string;
  architecture: string;
  x: number;
  y: number;
}

const STAGES: LatencyStage[] = [
  {
    stage: "Stage 1",
    name: "Batch REST APIs",
    latency: "9-15s",
    reduction: "Baseline (~12s)",
    architecture: "Sequential HTTP calls (ASR → NMT → LLM → TTS)",
    x: 55,
    y: 35,
  },
  {
    stage: "Stage 2",
    name: "Streaming Protocol",
    latency: "5-8s",
    reduction: "-46% cut (~6.5s)",
    architecture: "WebSockets + WebRTC chunked audio streaming",
    x: 195,
    y: 75,
  },
  {
    stage: "Stage 3",
    name: "Dedicated Serving",
    latency: "2-5s",
    reduction: "-71% cut (~3.5s)",
    architecture: "RunPod GPU clusters, local open-weight models",
    x: 335,
    y: 115,
  },
  {
    stage: "Stage 4",
    name: "AWS EC2 + Riva (Current)",
    latency: "1.5-2.1s (2.4s avg)",
    reduction: "-80% total cut",
    architecture: "Triton server, TensorRT FastConformer & sub-150ms Riva TTS",
    x: 475,
    y: 140,
  },
];

export function LatencyComparisonChart() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const pathD = "M 55,35 C 120,40 140,70 195,75 C 260,80 280,110 335,115 C 400,120 420,138 475,140";
  const areaD = "M 55,35 C 120,40 140,70 195,75 C 260,80 280,110 335,115 C 400,120 420,138 475,140 L 475,170 L 55,170 Z";

  return (
    <div className="latency-chart-wrapper" aria-label="End-to-End Latency Evolution (4-Stage Progression)">
      {/* Header */}
      <div className="latency-chart-card__header">
        <div>
          <h4 className="latency-chart-card__title">
            End-to-End Latency Evolution (Per Conversational Turn)
          </h4>
          <p className="latency-chart-subtitle">
            Four-stage architectural optimization: from ~12s batch baseline down to 2.4s production average
          </p>
        </div>
        <span className="latency-chart-card__badge">80%+ Total Reduction</span>
      </div>

      {/* SVG 4-Point Progression Line/Area Chart */}
      <div className="latency-svg-container" aria-hidden="true">
        <svg
          viewBox="0 0 530 185"
          className="latency-svg-chart"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="latencyAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--saffron)" stopOpacity="0.32" />
              <stop offset="100%" stopColor="var(--saffron)" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="latencyLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E2DBD0" />
              <stop offset="50%" stopColor="var(--saffron)" />
              <stop offset="100%" stopColor="#FFB366" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="40" y1="35" x2="490" y2="35" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
          <line x1="40" y1="75" x2="490" y2="75" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
          <line x1="40" y1="115" x2="490" y2="115" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
          <line x1="40" y1="140" x2="490" y2="140" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

          {/* Area Fill */}
          <motion.path
            d={areaD}
            fill="url(#latencyAreaGrad)"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
          />

          {/* Smooth Bezier Line */}
          <motion.path
            d={pathD}
            fill="none"
            stroke="url(#latencyLineGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }
            }
          />

          {/* 4 Data Points */}
          {STAGES.map((s, idx) => (
            <g key={s.stage}>
              <motion.circle
                cx={s.x}
                cy={s.y}
                r="5.5"
                fill={idx === 3 ? "var(--saffron)" : "#111111"}
                stroke={idx === 3 ? "#FFFFFF" : "var(--saffron)"}
                strokeWidth="2.5"
                initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        type: "spring",
                        stiffness: springs.ui.stiffness,
                        damping: springs.ui.damping,
                        delay: 0.3 + idx * 0.15,
                      }
                }
              />
              <text
                x={s.x}
                y={s.y - 12}
                textAnchor="middle"
                fill={idx === 3 ? "var(--saffron)" : "var(--parchment)"}
                fontSize="11"
                fontFamily="var(--ff-mono)"
                fontWeight="700"
              >
                {s.latency}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* 4-Stage Cards Grid */}
      <div className="latency-stages-grid">
        {STAGES.map((s, idx) => (
          <motion.div
            key={s.stage}
            className={`latency-stage-card ${idx === 3 ? "latency-stage-card--current" : ""}`}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: springs.ui.stiffness,
                    damping: springs.ui.damping,
                    delay: 0.1 + idx * 0.08,
                  }
            }
          >
            <div className="latency-stage-card__top">
              <span className="latency-stage-card__tag">{s.stage}</span>
              <span className="latency-stage-card__delta">{s.reduction}</span>
            </div>
            <div className="latency-stage-card__name">{s.name}</div>
            <div className="latency-stage-card__time">{s.latency}</div>
            <p className="latency-stage-card__arch">{s.architecture}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
