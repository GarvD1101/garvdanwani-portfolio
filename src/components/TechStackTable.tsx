"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";

interface StackRow {
  tool: string;
  description: string;
  flag: "Primary tool" | "In production" | "Comfortable" | "Learning";
}

interface StackCategory {
  category: string;
  items: StackRow[];
}

const STACK_GROUPS: StackCategory[] = [
  {
    category: "Programming",
    items: [
      {
        tool: "Python",
        description: "Core AI/ML pipelines, signal processing, async APIs",
        flag: "Primary tool",
      },
      {
        tool: "SQL",
        description: "Relational schemas, query optimization, database design",
        flag: "Primary tool",
      },
      {
        tool: "JavaScript",
        description: "Frontend application logic, WebSockets client state",
        flag: "Comfortable",
      },
    ],
  },
  {
    category: "Voice AI & NLP",
    items: [
      {
        tool: "faster-whisper",
        description: "Low-latency Automatic Speech Recognition (ASR)",
        flag: "Primary tool",
      },
      {
        tool: "Qwen3-8B (vLLM)",
        description: "LLM reasoning with continuous batching & KV-cache",
        flag: "Primary tool",
      },
      {
        tool: "Kokoro TTS",
        description: "High-throughput neural text-to-speech synthesis",
        flag: "Primary tool",
      },
      {
        tool: "Silero VAD",
        description: "Voice activity detection & speech chunking",
        flag: "Primary tool",
      },
      {
        tool: "Bhashini NMT",
        description: "Indic neural machine translation (Hindi/Bhojpuri)",
        flag: "Primary tool",
      },
      {
        tool: "Sarvam AI APIs",
        description: "Indic voice & speech benchmark comparisons",
        flag: "Comfortable",
      },
      {
        tool: "NVIDIA Riva / NIM",
        description: "Enterprise real-time speech AI microservices",
        flag: "Comfortable",
      },
    ],
  },
  {
    category: "Computer Vision & Signal Processing",
    items: [
      {
        tool: "rPPG (CHROM & POS)",
        description: "Contactless blood volume pulse (BVP) extraction",
        flag: "Primary tool",
      },
      {
        tool: "MediaPipe FaceMesh",
        description: "Dynamic 468-point facial landmark tracking (~25-30% stability gain)",
        flag: "Primary tool",
      },
      {
        tool: "FFT Signal Analysis",
        description: "Frequency domain transformation & spectral power",
        flag: "Primary tool",
      },
      {
        tool: "HRV Metrics (RMSSD, LF/HF)",
        description: "Autonomic nervous system indicator calculation",
        flag: "Primary tool",
      },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      {
        tool: "Scikit-learn",
        description: "Regression modeling, evaluation & feature extraction",
        flag: "Primary tool",
      },
      {
        tool: "Random Forest",
        description: "Physiological proxy estimation (blood pressure, glucose trends)",
        flag: "Primary tool",
      },
      {
        tool: "Decision Trees",
        description: "Knowledge gap detection & curriculum branching",
        flag: "Primary tool",
      },
      {
        tool: "LightFM",
        description: "Hybrid matrix factorization & collaborative filtering",
        flag: "Primary tool",
      },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      {
        tool: "FastAPI",
        description: "High-performance asynchronous REST & WebSocket APIs",
        flag: "Primary tool",
      },
      {
        tool: "WebSockets",
        description: "Full-duplex live streaming data channels",
        flag: "Primary tool",
      },
      {
        tool: "WebRTC",
        description: "Real-time audio/video peer communication",
        flag: "Primary tool",
      },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      {
        tool: "React.js",
        description: "Component-level interface state & modular widgets",
        flag: "Primary tool",
      },
      {
        tool: "Next.js",
        description: "App Router architecture, static prerendering, SSR",
        flag: "Comfortable",
      },
      {
        tool: "Vanilla CSS",
        description: "Design tokens, CSS custom properties, zero-runtime",
        flag: "Learning",
      },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      {
        tool: "AWS EC2 (Custom AMIs)",
        description: "Custom GPU compute images for model deployment",
        flag: "In production",
      },
      {
        tool: "RunPod",
        description: "Serverless & on-demand GPU inference clusters",
        flag: "In production",
      },
      {
        tool: "Docker",
        description: "Containerization, environment isolation & testing",
        flag: "Learning",
      },
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      {
        tool: "Pandas",
        description: "Data cleaning, transformation, and feature engineering",
        flag: "Primary tool",
      },
      {
        tool: "NumPy",
        description: "Array manipulation & numerical signal operations",
        flag: "Primary tool",
      },
      {
        tool: "Power BI",
        description: "Interactive clinical telemetry & progress dashboards",
        flag: "Learning",
      },
      {
        tool: "PostgreSQL",
        description: "Structured relational storage for system entities",
        flag: "Primary tool",
      },
    ],
  },
];

export function TechStackTable() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <div className="tech-stack-section">
      {/* ─── Desktop Table View (>= 640px) ─── */}
      <div className="tech-stack-desktop">
        <div className="tech-stack-table-wrapper">
          <table className="tech-stack-table" role="table" aria-label="Technical Stack and Tooling">
            <colgroup>
              <col style={{ width: "28%" }} />
              <col style={{ width: "52%" }} />
              <col style={{ width: "20%" }} />
            </colgroup>
            <thead role="rowgroup">
              <tr role="row">
                <th scope="col" role="columnheader">Tool</th>
                <th scope="col" role="columnheader">What it&apos;s for</th>
                <th scope="col" role="columnheader">Flag</th>
              </tr>
            </thead>
            <tbody role="rowgroup">
              {STACK_GROUPS.map((group, groupIdx) => {
                // 1-based alternation: 1, 3, 5, 7 = Black wipe; 2, 4, 6, 8 = Saffron wipe
                const isBlackWipe = groupIdx % 2 === 0;

                return (
                  <Fragment key={group.category}>
                    {/* Category Banner Wipe Row */}
                    <tr className="tech-stack-group-row" role="row">
                      <td colSpan={3} className="tech-stack-group-cell" role="cell">
                        <div className="category-wipe-box">
                          {/* Left-to-right solid color block wipe */}
                          <motion.div
                            className={`category-wipe-bg ${
                              isBlackWipe
                                ? "category-wipe-bg--black"
                                : "category-wipe-bg--saffron"
                            }`}
                            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={
                              shouldReduceMotion
                                ? { duration: 0 }
                                : { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
                            }
                            style={{ transformOrigin: "left" }}
                            aria-hidden="true"
                          />

                          <span
                            className={`category-wipe-title ${
                              isBlackWipe
                                ? "category-wipe-title--saffron"
                                : "category-wipe-title--black"
                            }`}
                          >
                            {group.category}
                          </span>
                        </div>
                      </td>
                    </tr>

                    {/* Sibling Tool Rows */}
                    {group.items.map((row, rowIdx) => (
                      <motion.tr
                        key={row.tool}
                        role="row"
                        initial={
                          shouldReduceMotion
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 8 }
                        }
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : {
                                duration: 0.28,
                                delay: 0.15 + rowIdx * 0.04,
                                ease: [0.25, 0.46, 0.45, 0.94],
                              }
                        }
                      >
                        <td className="cell-tool-td" role="cell">
                          <span className="cell-tool">{row.tool}</span>
                        </td>
                        <td
                          data-label="What it's for"
                          className="cell-desc"
                          role="cell"
                        >
                          {row.description}
                        </td>
                        <td
                          data-label="Flag"
                          className="cell-flag"
                          role="cell"
                        >
                          <span
                            className={`flag-pill ${
                              row.flag === "Primary tool"
                                ? "flag-pill--primary"
                                : row.flag === "In production"
                                ? "flag-pill--production"
                                : row.flag === "Comfortable"
                                ? "flag-pill--comfortable"
                                : "flag-pill--learning"
                            }`}
                          >
                            {row.flag}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ─── Mobile Horizontal Scroll View (< 640px) ─── */}
      <div className="tech-stack-mobile" aria-label="Technical Stack and Tooling">
        {STACK_GROUPS.map((group, groupIdx) => {
          const isBlackWipe = groupIdx % 2 === 0;

          return (
            <div key={group.category} className="tech-stack-mobile-group">
              {/* Category Header Banner */}
              <div className="category-wipe-box category-wipe-box--mobile">
                <motion.div
                  className={`category-wipe-bg ${
                    isBlackWipe
                      ? "category-wipe-bg--black"
                      : "category-wipe-bg--saffron"
                  }`}
                  initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
                  }
                  style={{ transformOrigin: "left" }}
                  aria-hidden="true"
                />
                <span
                  className={`category-wipe-title ${
                    isBlackWipe
                      ? "category-wipe-title--saffron"
                      : "category-wipe-title--black"
                  }`}
                >
                  {group.category}
                </span>
              </div>

              {/* Horizontal Scroll Track with Visible Scrollbar */}
              <div
                className="tech-stack-mobile-track"
                tabIndex={0}
                role="region"
                aria-label={`${group.category} tools`}
              >
                {group.items.map((row) => (
                  <div key={row.tool} className="tech-stack-mobile-card">
                    <div className="tech-stack-mobile-card__header">
                      <span className="tech-stack-mobile-card__tool">{row.tool}</span>
                      <span
                        className={`flag-pill ${
                          row.flag === "Primary tool"
                            ? "flag-pill--primary"
                            : row.flag === "In production"
                            ? "flag-pill--production"
                            : row.flag === "Comfortable"
                            ? "flag-pill--comfortable"
                            : "flag-pill--learning"
                        }`}
                      >
                        {row.flag}
                      </span>
                    </div>
                    <p className="tech-stack-mobile-card__desc">{row.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
