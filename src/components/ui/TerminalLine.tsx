"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface TerminalLineProps {
  text: string;
  delay?: number;
  isInput?: boolean;
  prefix?: string;
  className?: string;
  speed?: number; // ms per char
}

export function TerminalLine({
  text,
  delay = 0,
  isInput = false,
  prefix = "$ ",
  className = "",
  speed = 18,
}: TerminalLineProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay * 1000);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [hasStarted, text, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className={`font-mono text-xs md:text-sm tracking-tight leading-relaxed flex items-baseline flex-wrap ${className}`}
    >
      {prefix && (
        <span className="text-[#FF7E00] font-semibold mr-2 select-none">
          {prefix}
        </span>
      )}
      <span className="text-gray-200">{displayedText}</span>
      {isInput && (
        <span className="inline-block w-2 text-[#FF7E00] font-bold animate-pulse ml-0.5">
          _
        </span>
      )}
    </motion.div>
  );
}
