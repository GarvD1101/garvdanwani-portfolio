"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface PipelineHop {
  name: string;
  streamingMs: number;
  legacyMs: number;
  provider: string;
  protocol: string;
  status: string;
}

const PIPELINE_HOPS: PipelineHop[] = [
  {
    name: "01. ASR (Speech-to-Text)",
    streamingMs: 148,
    legacyMs: 2400,
    provider: "NVIDIA Riva FastConformer TensorRT",
    protocol: "8kHz PCM WebSocket",
    status: "OPTIMIZED",
  },
  {
    name: "02. NMT (Indic Translation)",
    streamingMs: 112,
    legacyMs: 1850,
    provider: "IndicTrans2-1B (Hindi ↔ English)",
    protocol: "PyTorch vLLM Inter-Process",
    status: "CACHED",
  },
  {
    name: "03. RAG Retrieval",
    streamingMs: 38,
    legacyMs: 950,
    provider: "Qdrant Vector Cluster (Dense BGE)",
    protocol: "gRPC Vector Search",
    status: "INDEXED",
  },
  {
    name: "04. LLM Reasoning (TTFT)",
    streamingMs: 165,
    legacyMs: 4200,
    provider: "Qwen2.5-7B-GPTQ (vLLM PagedAttention)",
    protocol: "Async Token Stream",
    status: "STREAMING",
  },
  {
    name: "05. Neural TTS (First Audio)",
    streamingMs: 180,
    legacyMs: 2600,
    provider: "FastPitch / Tacotron2 TensorRT",
    protocol: "Audio Chunk Buffering",
    status: "STREAMED",
  },
];

export function VoiceTelemetryVisualizer() {
  const [mode, setMode] = useState<"streaming" | "legacy">("streaming");

  const totalStreaming = PIPELINE_HOPS.reduce((acc, h) => acc + h.streamingMs, 0);
  const totalLegacy = PIPELINE_HOPS.reduce((acc, h) => acc + h.legacyMs, 0);

  const currentTotal = mode === "streaming" ? totalStreaming : totalLegacy;

  return (
    <div className="border border-gray-800 bg-[#050505] p-4 md:p-6 font-mono text-white relative">
      <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#FF7E00]" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-850 pb-3 mb-6 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#FF7E00]">
            <span className="h-1.5 w-1.5 bg-[#FF7E00] animate-pulse" />
            TELEMETRY_BENCHMARK // VOICE_AI_PIPELINE
          </div>
          <h3 className="text-sm md:text-base font-sans font-bold text-white mt-1">
            Real-Time Turn Latency Waterfall Breakdown
          </h3>
        </div>

        {/* Toggle Mode */}
        <div className="flex items-center border border-gray-800 bg-black p-0.5 text-xs">
          <button
            onClick={() => setMode("streaming")}
            className={`px-3 py-1 text-xs transition-colors ${
              mode === "streaming"
                ? "bg-[#FF7E00] text-black font-bold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            [PROD_STREAMING: 643ms]
          </button>
          <button
            onClick={() => setMode("legacy")}
            className={`px-3 py-1 text-xs transition-colors ${
              mode === "legacy"
                ? "bg-red-500/20 text-red-400 font-bold border border-red-500/40"
                : "text-gray-400 hover:text-white"
            }`}
          >
            [LEGACY_BASELINE: 12.0s]
          </button>
        </div>
      </div>

      {/* Latency Comparison Summary Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        <div className="border border-gray-850 bg-[#080808] p-3">
          <div className="text-[10px] text-gray-500 uppercase">ACTIVE_TURN_LATENCY</div>
          <div className="text-xl md:text-2xl font-bold text-[#FF7E00] tabular-nums mt-0.5">
            {mode === "streaming" ? `${currentTotal}ms` : `${(currentTotal / 1000).toFixed(1)}s`}
          </div>
          <div className="text-[9px] text-gray-400 mt-1">
            {mode === "streaming" ? "Sub-second turnaround" : "Unacceptable telephony delay"}
          </div>
        </div>

        <div className="border border-gray-850 bg-[#080808] p-3">
          <div className="text-[10px] text-gray-500 uppercase">LATENCY_DELTA</div>
          <div className="text-xl md:text-2xl font-bold text-[#00FF41] drop-shadow-[0_0_6px_rgba(0,255,65,0.6)] tabular-nums mt-0.5">
            -81.4%
          </div>
          <div className="text-[9px] text-gray-400 mt-1">Total runtime reduction</div>
        </div>

        <div className="border border-gray-850 bg-[#080808] p-3">
          <div className="text-[10px] text-gray-500 uppercase">TRANSPORT_PROTOCOL</div>
          <div className="text-sm font-bold text-white mt-1">WebRTC / Exotel SIP</div>
          <div className="text-[9px] text-gray-400 mt-1">Full-duplex 8kHz µ-law</div>
        </div>

        <div className="border border-gray-850 bg-[#080808] p-3">
          <div className="text-[10px] text-gray-500 uppercase">GPU_ACCELERATION</div>
          <div className="text-sm font-bold text-white mt-1">NVIDIA TensorRT</div>
          <div className="text-[9px] text-gray-400 mt-1">FastConformer + vLLM</div>
        </div>
      </div>

      {/* Telemetry Waterfall Bars */}
      <div className="space-y-3">
        {PIPELINE_HOPS.map((hop, idx) => {
          const latency = mode === "streaming" ? hop.streamingMs : hop.legacyMs;
          const maxScale = mode === "streaming" ? 220 : 4500;
          const percentage = Math.min(Math.max((latency / maxScale) * 100, 8), 100);

          return (
            <div
              key={idx}
              className="border border-gray-850/80 bg-[#060606] p-3 hover:border-gray-700 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between text-xs mb-1.5 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-[10px]">0{idx + 1}</span>
                  <span className="font-sans font-semibold text-white">{hop.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-gray-400">{hop.provider}</span>
                  <span className="text-xs font-bold font-mono text-[#FF7E00] tabular-nums">
                    {mode === "streaming" ? `${latency}ms` : `${(latency / 1000).toFixed(2)}s`}
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2 w-full bg-gray-900 overflow-hidden relative">
                <motion.div
                  className={`h-full ${
                    mode === "streaming" ? "bg-[#FF7E00]" : "bg-red-500"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              <div className="flex justify-between items-center text-[9px] text-gray-500 font-mono mt-1.5">
                <span>CHANNEL: {hop.protocol}</span>
                <span
                  className={
                    mode === "streaming"
                      ? "text-[#00FF41] drop-shadow-[0_0_6px_rgba(0,255,65,0.6)] font-bold"
                      : "text-red-400"
                  }
                >
                  {hop.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-900 flex justify-between items-center text-[10px] text-gray-500">
        <span>OBSERVABILITY_SOURCE: Exotel PSTN Call Recording &amp; vLLM Tracing</span>
        <span className="text-[#FF7E00]">TARGET_SLA: &lt; 1000ms TURNAROUND</span>
      </div>
    </div>
  );
}
