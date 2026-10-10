"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ProjectArchitecture } from "@/lib/data";

interface PipelineGraphProps {
  architecture: ProjectArchitecture;
  slug?: string;
  className?: string;
}

export function PipelineGraph({ architecture, slug, className = "" }: PipelineGraphProps) {
  const [activeStage, setActiveStage] = useState<string>("inference");

  const stages = [
    { key: "ingestion", label: "01 // INGESTION", items: architecture.ingestion, badge: "SENSOR / INFLOW" },
    { key: "inference", label: "02 // INFERENCE & PROCESSING", items: architecture.inference, badge: "ACCELERATED_CORE" },
    { key: "transport", label: "03 // TRANSPORT & BUS", items: architecture.transport, badge: "LOW_LATENCY" },
    { key: "client", label: "04 // CLIENT & INTERFACES", items: architecture.client, badge: "TELEMETRY_OUT" },
  ];

  return (
    <div className={`border border-gray-800 bg-[#050505] font-mono p-4 md:p-6 ${className}`}>
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-850 pb-3 mb-6 gap-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 bg-[#FF7E00] animate-pulse" />
          <span className="text-xs font-bold tracking-wider text-white uppercase">
            SYSTEM_PIPELINE_ARCHITECTURE_GRAPH
          </span>
          {slug && (
            <span className="text-[10px] text-[#FF7E00] border border-[#FF7E00]/30 px-1.5 py-0.5">
              [{slug.toUpperCase()}_TOPOLOGY]
            </span>
          )}
        </div>
        <div className="text-[11px] text-gray-500 flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#00FF41] drop-shadow-[0_0_6px_rgba(0,255,65,0.6)] font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FF41] shadow-[0_0_6px_#00FF41]" />
            NODES: ONLINE
          </span>
          <span className="hidden sm:inline text-gray-600">FLOW: DUPLEX_STREAM</span>
        </div>
      </div>

      {/* SVG Pipeline Trace Bar */}
      <div className="relative mb-6 hidden md:block">
        <div className="h-0.5 w-full bg-gray-800 relative">
          {/* Animated amber pulse packet moving across the pipeline */}
          <motion.div
            className="absolute top-[-2px] h-1.5 w-12 bg-[#FF7E00] shadow-[0_0_8px_#FF7E00]"
            animate={{ left: ["0%", "92%"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* 4-Stage Bento Column Flow */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stages.map((stage, sIdx) => {
          const isSelected = activeStage === stage.key;
          return (
            <div
              key={stage.key}
              onClick={() => setActiveStage(stage.key)}
              className={`border p-3.5 transition-all duration-200 cursor-pointer relative ${
                isSelected
                  ? "border-[#FF7E00] bg-[#0c0c08]"
                  : "border-gray-850 bg-[#080808] hover:border-gray-700 hover:bg-[#0a0a0a]"
              }`}
            >
              {/* Stage Header */}
              <div className="flex items-center justify-between text-[11px] border-b border-gray-800/80 pb-2 mb-3">
                <span className={isSelected ? "text-[#FF7E00] font-bold" : "text-gray-400"}>
                  {stage.label}
                </span>
                <span className="text-[9px] text-gray-600 font-mono">
                  STEP_{sIdx + 1}
                </span>
              </div>

              {/* Items List */}
              <ul className="space-y-2">
                {stage.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-gray-300 flex items-start gap-2 leading-snug group"
                  >
                    <span className="text-[#FF7E00]/70 group-hover:text-[#FF7E00] text-[10px] mt-0.5 select-none">
                      →
                    </span>
                    <span className="group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom stage tag */}
              <div className="mt-4 pt-2 border-t border-gray-900 flex items-center justify-between text-[9px] text-gray-500">
                <span>{stage.badge}</span>
                <span className={isSelected ? "text-[#FF7E00]" : "text-gray-600"}>
                  {isSelected ? "ACTIVE_NODE" : "STANDBY"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Signal flow legend */}
      <div className="mt-5 pt-3 border-t border-gray-900 flex flex-wrap items-center justify-between text-[11px] text-gray-500">
        <div className="flex items-center gap-3">
          <span className="text-gray-400">DATA_BUS:</span>
          <span className="text-white font-mono">G.711u / WebSocket / Async Event Loop</span>
        </div>
        <div className="text-[10px] text-gray-600">
          CLICK_NODE_TO_INSPECT_VECTOR_STATE
        </div>
      </div>
    </div>
  );
}
