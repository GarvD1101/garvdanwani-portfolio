"use client";

import { motion, useReducedMotion } from "motion/react";
import { springs } from "@/lib/motion-tokens";

interface RingChartProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
  bgColor?: string;
}

export function RingChart({
  percentage,
  size = 120,
  strokeWidth = 10,
  className = "",
  color = "var(--saffron)",
  bgColor = "rgba(255, 255, 255, 0.08)",
}: RingChartProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (circumference * percentage) / 100;

  return (
    <div
      className={`ring-chart-container ${className}`}
      style={{ width: size, height: size, position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: "rotate(-90deg)", overflow: "visible" }}
        aria-hidden="true"
      >
        {/* Background Track Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={bgColor}
          strokeWidth={strokeWidth}
        />
        {/* Animated Active Arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={shouldReduceMotion ? { strokeDashoffset: targetOffset } : { strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: targetOffset }}
          viewport={{ once: true, margin: "-40px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }
          }
        />
      </svg>
    </div>
  );
}
