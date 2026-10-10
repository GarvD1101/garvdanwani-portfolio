"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface MetricBlockProps {
  label: string;
  endValue: number;
  unit: string;
  prefix?: string;
  description?: string;
  decimals?: number;
  className?: string;
}

export function MetricBlock({
  label,
  endValue,
  unit,
  prefix = "",
  description,
  decimals,
  className = "",
}: MetricBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [currentValue, setCurrentValue] = useState(0);

  // Auto-detect decimals if not provided
  const targetDecimals =
    decimals !== undefined
      ? decimals
      : endValue.toString().includes(".")
      ? endValue.toString().split(".")[1].length
      : 0;

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1200; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = eased * endValue;
      setCurrentValue(val);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrentValue(endValue);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, endValue]);

  return (
    <div
      ref={ref}
      className={`relative border border-gray-800 bg-[#060606] p-4 font-mono transition-colors duration-200 hover:border-gray-700 ${className}`}
    >
      {/* Brutalist corner notch indicator */}
      <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-[#FF7E00]" />

      <div className="flex items-center justify-between text-xs tracking-wider text-gray-400 uppercase mb-2">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1 w-1 bg-[#FF7E00]" />
          {label}
        </span>
        <span className="text-[10px] text-gray-600 font-mono">LIVE_TELEMETRY</span>
      </div>

      <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#FF7E00] font-mono tabular-nums">
        {prefix}
        {currentValue.toFixed(targetDecimals)}
        <span className="text-xl md:text-2xl font-medium text-gray-300 ml-1">
          {unit}
        </span>
      </div>

      {description && (
        <div className="mt-2 text-[11px] text-gray-500 font-mono border-t border-gray-900 pt-2 leading-relaxed">
          {description}
        </div>
      )}
    </div>
  );
}
