"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { springs, stagger } from "@/lib/motion-tokens";

interface Project {
  title: string;
  tag: string;
  description: string;
  metric: string;
  href: string;
}

const PROJECTS: Project[] = [
  {
    title: "BwellCheck - Contactless Physiological Monitoring",
    tag: "Flagship - Computer Vision",
    description:
      "AI-driven contactless physiological monitoring platform using rPPG algorithms (CHROM, POS) with MediaPipe FaceMesh to extract heart rate, respiratory signals, and HRV metrics from standard camera feeds.",
    metric: "~25-30% signal stability improvement",
    href: "/work/bwellcheck",
  },
  {
    title: "Multi-Provider Real-Time Voice AI Pipeline",
    tag: "Voice AI & Real-Time Systems",
    description:
      "Low-latency multilingual conversational pipeline (Hindi, English, Bhojpuri) across faster-whisper, Qwen3-8B/vLLM, and Kokoro TTS with WebRTC streaming and GPU orchestration.",
    metric: "40%+ pipeline latency reduction",
    href: "/work/voice-ai",
  },
  {
    title: "OmniFlix - Unified Recommendation System",
    tag: "Machine Learning & RecSys",
    description:
      "Hybrid content-based and collaborative filtering recommendation engine unifying IMDb, TMDB, and MyAnimeList datasets with cold-start resolution.",
    metric: "Multi-domain unified scoring",
    href: "/work/omniflix",
  },
  {
    title: "AI-Powered Personalized Learning System",
    tag: "Machine Learning & Analytics",
    description:
      "Data-driven learning recommendation platform analyzing student performance metrics and knowledge gaps to dynamically generate customized study modules.",
    metric: "Predictive gap analysis models",
    href: "/work/learning-system",
  },
  {
    title: "Financial Automation Platform Interface",
    tag: "Frontend Architecture",
    description:
      "High-performance frontend architecture for enterprise financial document workflows, with modular component-level rendering and state management.",
    metric: "Component-level rendering optimization",
    href: "/work/financial-platform",
  },
];

function StackedProjectCard({
  project,
  index,
  shouldReduceMotion,
}: {
  project: Project;
  index: number;
  shouldReduceMotion: boolean;
}) {
  // 1-based index alternation: 1, 3, 5 are odd; 2, 4 are even
  const isOdd = index % 2 === 0;

  return (
    <motion.div className="project-card-stacked" layout>
      {/* 1. Back Layer: Fades and scales in first */}
      <motion.div
        className={`project-card__back ${
          isOdd ? "project-card__back--black" : "project-card__back--saffron"
        }`}
        layout
        initial={
          shouldReduceMotion
            ? { scale: 1, opacity: 1 }
            : { scale: 0.9, opacity: 0 }
        }
        whileInView={{ scale: 1, opacity: 1 }}
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
        aria-hidden="true"
      />

      {/* 2. Front Layer: Follows with spring overshoot */}
      <motion.div
        className={`project-card__front ${
          isOdd ? "project-card__front--saffron" : "project-card__front--black"
        }`}
        layout
        initial={
          shouldReduceMotion
            ? { scale: 1, opacity: 1 }
            : { scale: 0.85, opacity: 0 }
        }
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                type: "spring",
                stiffness: springs.lively.stiffness,
                damping: springs.lively.damping,
                delay: 0.1,
              }
        }
      >
        <Link href={project.href} className="project-card__link">
          {/* 3. Front Layer Content: Fades up last */}
          <motion.div
            className="project-card__content"
            layout
            initial={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 10 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: springs.ui.stiffness,
                    damping: springs.ui.damping,
                    delay: 0.2,
                  }
            }
          >
            <div className="project-card__header">
              <span className="project-card__tag">{project.tag}</span>
            </div>

            <h3 className="project-card__title">{project.title}</h3>

            <p className="project-card__desc">{project.description}</p>

            <div className="project-card__footer">
              <span className="project-card__metric">
                <span className="project-card__metric-dot" aria-hidden="true" />
                {project.metric}
              </span>
              <span className="project-card__arrow" aria-hidden="true">
                Read case study &rarr;
              </span>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function ProjectShowcase() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <div className="project-showcase">
      {PROJECTS.map((project, index) => (
        <StackedProjectCard
          key={project.title}
          project={project}
          index={index}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
    </div>
  );
}
