"use client";

import { motion } from "motion/react";

export function VoiceAITopology() {
  return (
    <div className="border border-gray-800 bg-[#050505] font-mono p-4 md:p-6 space-y-6">
      {/* ─── Header ─── */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-850 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 bg-[#FF7E00] animate-pulse" />
          <span className="text-xs font-bold tracking-wider text-white uppercase">
            HIGH_LEVEL_PIPELINE_TOPOLOGY // PUBLIC ARCHITECTURE OVERVIEW
          </span>
          <span className="text-[10px] text-[#FF7E00] border border-[#FF7E00]/30 px-1.5 py-0.5">
            [END_TO_END_STREAM]
          </span>
        </div>
        <div className="text-[11px] text-gray-500 flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#00FF41] font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FF41] shadow-[0_0_6px_#00FF41]" />
            PIPELINE_STATE: ACTIVE
          </span>
          <span className="hidden sm:inline text-gray-600">DUPLEX_AUDIO_BUS</span>
        </div>
      </div>

      {/* ─── Topology Flow Graph ─── */}
      <div className="space-y-4 max-w-4xl mx-auto py-2">
        {/* Step 1: Ingress */}
        <div className="relative group">
          <div className="border border-[#FF7E00]/40 bg-[#0a0a07] p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left transition-all hover:border-[#FF7E00]">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#FF7E00]" />
              <div>
                <span className="text-[10px] text-[#FF7E00] tracking-wider block">STAGE 01 // TELEPHONY INGRESS</span>
                <span className="text-sm font-bold text-white font-sans">Telephony Ingress</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 border border-gray-800 px-2 py-1 bg-black">
              CARRIER_TRUNKS & WHATSAPP
            </span>
          </div>
          <div className="flex justify-center my-1.5 text-gray-600 font-mono text-xs">
            <span>↓</span>
          </div>
        </div>

        {/* Step 2: VAD */}
        <div className="relative group">
          <div className="border border-gray-800 bg-[#080808] p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left transition-all hover:border-gray-700">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gray-600" />
              <div>
                <span className="text-[10px] text-gray-400 tracking-wider block">STAGE 02 // AUDIO BUFFERING & VAD</span>
                <span className="text-sm font-bold text-white font-sans">VAD & Audio Processing</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 border border-gray-800 px-2 py-1 bg-black">
              BARGE-IN DETECTION
            </span>
          </div>
          <div className="flex justify-center my-1.5 text-gray-600 font-mono text-xs">
            <span>↓</span>
          </div>
        </div>

        {/* Step 3: STT */}
        <div className="relative group">
          <div className="border border-gray-800 bg-[#080808] p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left transition-all hover:border-gray-700">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gray-600" />
              <div>
                <span className="text-[10px] text-gray-400 tracking-wider block">STAGE 03 // SPEECH RECOGNITION</span>
                <span className="text-sm font-bold text-white font-sans">STT (Provider Factory)</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 border border-gray-800 px-2 py-1 bg-black">
              NATIVE TRANSCRIPT
            </span>
          </div>
          <div className="flex justify-center my-1.5 text-gray-600 font-mono text-xs">
            <span>↓</span>
          </div>
        </div>

        {/* Step 4: Language Detection & NMT */}
        <div className="relative group">
          <div className="border border-gray-800 bg-[#080808] p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left transition-all hover:border-gray-700">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gray-600" />
              <div>
                <span className="text-[10px] text-gray-400 tracking-wider block">STAGE 04 // LINGUISTIC NORMALIZATION</span>
                <span className="text-sm font-bold text-white font-sans">Language Detection & NMT</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 border border-gray-800 px-2 py-1 bg-black">
              12 INDIC LANGUAGES
            </span>
          </div>
          <div className="flex justify-center my-1.5 text-gray-600 font-mono text-xs">
            <span>↓</span>
          </div>
        </div>

        {/* Step 5: Intent Classifier (Branching Hub) */}
        <div className="relative group">
          <div className="border-2 border-[#FF7E00] bg-[#110d02] p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 shadow-[0_0_15px_rgba(255,126,0,0.12)]">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF7E00] animate-pulse" />
              <div>
                <span className="text-[10px] text-[#FF7E00] font-bold tracking-wider block">
                  STAGE 05 // ROUTING ENGINE
                </span>
                <span className="text-base font-bold text-white font-sans">Intent Classifier</span>
              </div>
            </div>
            <span className="text-[10px] text-[#FF7E00] border border-[#FF7E00]/40 px-2 py-1 bg-black/60 font-bold">
              DECISION FORK
            </span>
          </div>
        </div>

        {/* Forked Subsystems: QnA Fast-Path VS Agent Loop & Action Buffers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Branch A: Fast-Path */}
          <div className="border border-cyan-800/60 bg-[#020b0e] p-4 flex flex-col justify-between space-y-3 relative">
            <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-cyan-500" />
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-cyan-400 font-bold tracking-wider">BRANCH A // ZERO-LLM ROUTE</span>
                <span className="text-[9px] text-cyan-300 border border-cyan-700/50 px-1.5 py-0.2">FAST_PATH</span>
              </div>
              <h4 className="text-sm font-sans font-bold text-white">QnA Fast-Path / Response Cache</h4>
              <p className="text-[11px] text-gray-400 font-sans mt-1 leading-snug">
                Sub-second audio synthesis for pre-verified corporate and clinical FAQs.
              </p>
            </div>
            <div className="pt-2 border-t border-cyan-950 flex items-center justify-between text-[10px] text-cyan-400">
              <span>PATH: DIRECT CACHE</span>
              <span>~450–600ms</span>
            </div>
          </div>

          {/* Branch B: Agent Loop + Action Buffers */}
          <div className="border border-purple-800/60 bg-[#0a030f] p-4 flex flex-col justify-between space-y-3 relative">
            <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-purple-500" />
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-purple-400 font-bold tracking-wider">BRANCH B // MULTI-TURN ORCHESTRATION</span>
                <span className="text-[9px] text-purple-300 border border-purple-700/50 px-1.5 py-0.2">STATEFUL</span>
              </div>
              <h4 className="text-sm font-sans font-bold text-white">Agent Loop with Flow State Machine</h4>
              <div className="mt-2 p-2 bg-black/60 border border-purple-900/60 flex items-center justify-between text-xs">
                <span className="text-gray-300 font-sans text-[11px]">Action Buffers</span>
                <span className="text-[9px] text-purple-400">ZERO_LATENCY_MASKING</span>
              </div>
            </div>
            <div className="pt-2 border-t border-purple-950 flex items-center justify-between text-[10px] text-purple-400">
              <span>PATH: DECLARATIVE FLOW</span>
              <span>1.5s–1.8s</span>
            </div>
          </div>
        </div>

        {/* Downward Convergence Arrow */}
        <div className="flex justify-center my-1.5 text-gray-600 font-mono text-xs">
          <span>↓</span>
        </div>

        {/* Step 6: Verbalizer + Outbound NMT */}
        <div className="relative group">
          <div className="border border-gray-800 bg-[#080808] p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left transition-all hover:border-gray-700">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gray-600" />
              <div>
                <span className="text-[10px] text-gray-400 tracking-wider block">STAGE 06 // PHONETIC NORMALIZATION</span>
                <span className="text-sm font-bold text-white font-sans">Number Verbalizer + Outbound NMT</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 border border-gray-850 px-2 py-1 bg-black">
              SCRIPT TARGET TRANSLATION
            </span>
          </div>
          <div className="flex justify-center my-1.5 text-gray-600 font-mono text-xs">
            <span>↓</span>
          </div>
        </div>

        {/* Step 7: TTS */}
        <div className="relative group">
          <div className="border border-gray-800 bg-[#080808] p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left transition-all hover:border-gray-700">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gray-600" />
              <div>
                <span className="text-[10px] text-gray-400 tracking-wider block">STAGE 07 // NEURAL SPEECH SYNTHESIS</span>
                <span className="text-sm font-bold text-white font-sans">TTS (Provider Factory)</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 border border-gray-850 px-2 py-1 bg-black">
              STREAMED PCM AUDIO
            </span>
          </div>
          <div className="flex justify-center my-1.5 text-gray-600 font-mono text-xs">
            <span>↓</span>
          </div>
        </div>

        {/* Step 8: Telephony Egress */}
        <div className="relative group">
          <div className="border border-[#00FF41]/40 bg-[#001407] p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left transition-all hover:border-[#00FF41]">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#00FF41]" />
              <div>
                <span className="text-[10px] text-[#00FF41] tracking-wider block">STAGE 08 // CALL TERMINATION & EGRESS</span>
                <span className="text-sm font-bold text-white font-sans">Telephony Egress</span>
              </div>
            </div>
            <span className="text-[10px] text-[#00FF41] border border-[#00FF41]/30 px-2 py-1 bg-black">
              8kHz G.711u CARRIER STREAM
            </span>
          </div>
        </div>

        {/* Async Outbox & Observability Dual Output */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
          <div className="border border-gray-850 bg-[#060606] p-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <div>
                <span className="text-[10px] text-gray-400 block font-sans font-bold">Async Outbox (CRM/CMS push)</span>
                <span className="text-[9px] text-gray-600">POSTGRESQL TRANSACTIONAL QUEUE</span>
              </div>
            </div>
            <span className="text-[9px] text-amber-500 border border-amber-900/40 px-1.5 py-0.5">ASYNC_BUS</span>
          </div>

          <div className="border border-gray-850 bg-[#060606] p-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <div>
                <span className="text-[10px] text-gray-400 block font-sans font-bold">Observability</span>
                <span className="text-[9px] text-gray-600">REAL-TIME TELEMETRY & TURN LOGS</span>
              </div>
            </div>
            <span className="text-[9px] text-blue-400 border border-blue-900/40 px-1.5 py-0.5">METRICS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
