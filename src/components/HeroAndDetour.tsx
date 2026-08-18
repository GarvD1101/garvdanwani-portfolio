"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { springs, stagger } from "@/lib/motion-tokens";

const FOCUS_AREAS = [
  "Applied AI Systems",
  "Real-Time System Design",
  "Computer Vision",
  "Voice AI Pipelines",
  "AI Infrastructure",
  "Regulatory & Compliance for Health AI",
];

const HERO_WORDS = "Too many AI demos. Not enough that survive production.".split(" ");

const DETOUR_SENTENCES_P1 = [
  "Garv didn't start in systems engineering. He started in data science - models, notebooks, the usual path into AI.",
  "But the deeper he got, the more he noticed a gap: the models that mattered weren't the cleverest ones, they were the ones that actually ran, reliably, for real people.",
  "So he stepped back - deliberately - into backend engineering.",
  "Not because he'd given up on ML, but because he wanted to understand what happens after the notebook: the workflows, the infrastructure, the parts that break at 2am.",
];

export function HeroAndDetour() {
  const heroRef = useRef<HTMLDivElement>(null);
  const photoContainerRef = useRef<HTMLDivElement>(null);
  const photoSlotDesktopRef = useRef<HTMLDivElement>(null);
  const photoSlotMobileRef = useRef<HTMLDivElement>(null);

  const shouldReduceMotion = useReducedMotion() ?? false;
  const [offsets, setOffsets] = useState({ x: 330, y: 640 });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const updateMeasurements = () => {
      const desktop = window.innerWidth >= 900;
      setIsDesktop(desktop);

      const container = photoContainerRef.current;
      const targetSlot = desktop ? photoSlotDesktopRef.current : photoSlotMobileRef.current;

      if (container && targetSlot) {
        const containerRect = container.getBoundingClientRect();
        const slotRect = targetSlot.getBoundingClientRect();
        const scrollY = window.scrollY;

        const containerCenterY = containerRect.top + scrollY + containerRect.height / 2;
        const containerCenterX = containerRect.left + containerRect.width / 2;

        const slotCenterY = slotRect.top + scrollY + slotRect.height / 2;
        const slotCenterX = slotRect.left + slotRect.width / 2;

        const deltaY = slotCenterY - containerCenterY;
        const deltaX = desktop ? (slotCenterX - containerCenterX) : 0;

        setOffsets({ x: deltaX, y: deltaY });
      }
    };

    updateMeasurements();
    const t1 = setTimeout(updateMeasurements, 100);
    const t2 = setTimeout(updateMeasurements, 400);

    window.addEventListener("resize", updateMeasurements);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", updateMeasurements);
    };
  }, []);

  const targetScale = isDesktop ? 1.35 : 1.12;

  // Track scroll specifically over the Hero section as it scrolls out of view
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Animation reaches 100% completion faster (at 55% scroll) so photo is fully docked by the time Detour heading hits top
  const progressEnd = 0.55;
  const rotateY = useTransform(scrollYProgress, [0, progressEnd], [0, 360], { clamp: true });
  const scale = useTransform(scrollYProgress, [0, progressEnd], [0.95, targetScale], { clamp: true });
  
  // Numerical grayscale interpolation for guaranteed browser rendering
  const grayscaleNum = useTransform(scrollYProgress, [0, 0.45], [100, 0], { clamp: true });
  const filter = useTransform(grayscaleNum, (v) => `grayscale(${Math.round(v)}%)`);

  const x = useTransform(scrollYProgress, [0, progressEnd], [0, offsets.x], { clamp: true });
  const y = useTransform(scrollYProgress, [0, progressEnd], [0, offsets.y], { clamp: true });

  return (
    <div className="hero-detour-wrapper">
      {/* ─── 1. Landing Hero (Parchment Background) ─── */}
      <section ref={heroRef} className="container section hero-centered" id="hero" aria-label="Hero">
        {/* Split/Word Reveal: Staggered rise for each word */}
        <h1 className="hero-centered__headline" aria-label="Too many AI demos. Not enough that survive production.">
          {HERO_WORDS.map((word, i) => (
            <motion.span
              key={i}
              style={{ display: "inline-block", marginRight: "0.26em" }}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: springs.ui.stiffness,
                      damping: springs.ui.damping,
                      delay: i * stagger.tight + 0.1,
                    }
              }
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* The Photo Anchor: starts centered, rotates, turns full color, scales, and glides down beside paragraph 1 */}
        <div className="hero-centered__photo-container" ref={photoContainerRef}>
          <motion.div
            className="hero-centered__photo-frame"
            style={
              shouldReduceMotion
                ? {
                    transform: "none",
                    scale: isDesktop ? 1.25 : 1.12,
                    filter: "grayscale(0%)",
                  }
                : {
                    x,
                    y,
                    rotateY,
                    scale,
                    filter,
                    transformStyle: "preserve-3d",
                    zIndex: 50,
                  }
            }
          >
            <Image
              src="/photo.png"
              alt="Garv Danwani - AI Systems Engineer"
              width={180}
              height={180}
              className="hero-centered__photo-img"
              priority
            />
          </motion.div>
        </div>

        {/* Name and Title Byline: Part of the Landing Hero on parchment */}
        <p className="hero-centered__byline">
          Garv Danwani - AI Systems Engineer &middot; Computer Vision &amp; Voice AI
        </p>
      </section>

      {/* 2. "The Detour into Systems" Section (id="detour") - Dark Editorial Block */}
      <section className="detour-section detour-section--dark" id="detour" aria-label="The Detour into Systems">
        <div className="container container--editorial">
          {/* Centered Heading across full editorial width */}
          <div className="detour-header">
            <h2 className="detour__heading">
              The Detour into Systems
            </h2>
          </div>

          {/* Narrative Content Container */}
          <div className="detour-narrative-container">
            {/* Mobile Reserved Photo Slot: sits below heading and above paragraph 1 */}
            <div className="detour-mobile-photo-slot" ref={photoSlotMobileRef} aria-hidden="true" />

            {/* Upper Section: Paragraph 1 on left, desktop photo dock on right */}
            <div className="detour-upper-grid">
              <div className="detour-narrative-p1">
                <p>
                  {DETOUR_SENTENCES_P1.map((sentence, idx) => (
                    <motion.span
                      key={idx}
                      style={{ display: "inline" }}
                      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : {
                              type: "spring",
                              stiffness: springs.gentle.stiffness,
                              damping: springs.gentle.damping,
                              delay: idx * stagger.relaxed,
                            }
                      }
                    >
                      {sentence}{" "}
                    </motion.span>
                  ))}
                </p>
              </div>

              {/* Reserved photo dock beside Paragraph 1 */}
              <div className="detour-photo-slot" ref={photoSlotDesktopRef} aria-hidden="true" />
            </div>

            {/* Lower Section: Paragraph 2 & Focus Tags span full editorial width */}
            <div className="detour-lower-full">
              <p>
                That detour is why BWell HealthTech works the way it does. He
                didn&apos;t just bring machine learning to a founding engineering
                seat - he brought a builder&apos;s instinct for the whole
                pipeline: computer vision running rPPG signal extraction, a voice
                AI stack streaming over WebRTC, and the frontend and backend wiring
                holding it all together in Next.js and React. Three disciplines that
                don&apos;t usually sit in one person&apos;s hands - until they
                had to.
              </p>

              <div className="detour__tags-row" aria-label="Focus Areas">
                {FOCUS_AREAS.map((tag) => (
                  <span key={tag} className="focus-tag focus-tag--dark">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
