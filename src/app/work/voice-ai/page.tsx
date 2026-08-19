import type { Metadata } from "next";
import Link from "next/link";
import { MetricSidebar } from "@/components/MetricSidebar";
import { PullQuote } from "@/components/PullQuote";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LatencyComparisonChart } from "@/components/LatencyComparisonChart";

export const metadata: Metadata = {
  title: "Multi-Provider Real-Time Voice AI Pipeline | Garv Danwani",
  description:
    "Real-time multilingual voice AI pipeline cutting end-to-end latency by 80%+ from baseline across Hindi, English, and Bhojpuri.",
};

export default function VoiceAIPage() {
  const vitalsMetrics = [
    { value: "2.1-2.7s", label: "Current average" },
    { value: "sub-4s", label: "Original target" },
    { value: "~80%", label: "Total reduction from baseline" },
  ];

  return (
    <article className="container container--editorial">
      {/* ─── Hero Header ─── */}
      <header className="editorial-hero">
        <div className="editorial-hero__top-bar">
          <Link href="/#work" className="editorial-hero__back">
            &larr; Back to Projects
          </Link>
          <span className="editorial-hero__eyebrow">Voice AI &middot; Real-Time Systems</span>
        </div>
        <h1 className="editorial-hero__title">
          Multi-Provider Real-Time Voice AI Pipeline
        </h1>
        <p className="editorial-hero__subtitle">
          Real-time voice AI pipeline (ASR &rarr; NMT &rarr; LLM &rarr; TTS) for
          low-latency, multilingual conversational systems across Hindi, English,
          and Bhojpuri, targeting sub-4-second end-to-end response times.
        </p>
      </header>

      {/* ─── Case Study Body ─── */}
      <div className="editorial-body">
        <div className="editorial-content">
          {/* 1. Overview */}
          <ScrollReveal>
            <section aria-labelledby="section-overview">
              <h3 id="section-overview">1. Overview</h3>
              <p>
                Natural conversational voice AI requires sub-second turn-taking
                latency. In multilingual setups (Hindi, Indian English, Bhojpuri),
                chaining sequential models for Automatic Speech Recognition (ASR),
                Neural Machine Translation (NMT), Large Language Model reasoning
                (LLM), and Text-to-Speech (TTS) compound inference delays.
              </p>
              <p>
                Unoptimized architectures suffered from 10-15 second end-to-end
                delays, single-provider rate-limit dependencies, and severe audio
                buffering artifacts on unstable network connections.
              </p>
            </section>
          </ScrollReveal>

          {/* 2. What I built - Stage 1 */}
          <ScrollReveal>
            <section aria-labelledby="section-built">
              <h3 id="section-built">Stage 1: Streaming Architecture &amp; Benchmarks</h3>
              <p>
                Re-engineered the conversational loop from sequential batch REST calls
                into a chunked bi-directional streaming pipeline:
              </p>
              <ul>
                <li>
                  <strong>Streaming Protocol Layer:</strong> Implemented WebRTC and
                  full-duplex WebSockets with Silero Voice Activity Detection (VAD)
                  for instantaneous speech segmentation and barge-in handling.
                </li>
                <li>
                  <strong>Model Benchmarking &amp; Selection:</strong> Conducted
                  rigorous latency/WER/MOS evaluations comparing open-weight models
                  (faster-whisper, Kokoro TTS, Qwen3-8B on vLLM) against commercial
                  APIs (Bhashini NMT, Sarvam AI, and NVIDIA Riva / NIM microservices).
                </li>
                <li>
                  <strong>Multi-Provider Routing:</strong> Built dynamic provider
                  failover and load balancing to eliminate single-point
                  bottlenecks and optimize Time-To-First-Token (TTFT).
                </li>
              </ul>
            </section>
          </ScrollReveal>

          {/* Latency Comparison Chart */}
          <ScrollReveal>
            <LatencyComparisonChart />
          </ScrollReveal>

          {/* Stage 2: Infrastructure and Model Optimization */}
          <ScrollReveal>
            <section aria-labelledby="section-stage-2">
              <h3 id="section-stage-2">Stage 2: Infrastructure and Model Optimization</h3>
              <p>
                Migrated from commercial API dependencies to local open-weight models deployed
                on dedicated GPU instances (RunPod A100, AWS EC2 with custom AMIs). Combined
                KV-cache optimisation and continuous batching on vLLM with agentic tool-call
                routing built directly into the LLM inference layer. This eliminated external
                API round-trip overhead and gave the pipeline native tool-calling capability
                without adding latency. Result: average end-to-end latency dropped from 5-8s
                to 2.1-2.7s, 46% below the original 4s target.
              </p>
            </section>
          </ScrollReveal>

          {/* 3. Outcome */}
          <ScrollReveal>
            <section aria-labelledby="section-outcome">
              <h3 id="section-outcome">3. Outcome &middot; Impact &amp; Reliability</h3>
              <p>
                Achieved an <strong>80%+ latency reduction from baseline</strong>,
                slashing end-to-end response times from ~10-15s down to 2.1-2.7s (46% below
                the original 4s target). The local open-weight architecture with native
                agentic tool routing provides natural multilingual conversational flow
                across Hindi, Bhojpuri, and English with 99.9% production reliability.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <PullQuote>
              Cut end-to-end pipeline latency by ~80% from baseline - dropping from ~10-15 seconds
              to 2.1-2.7s - by eliminating commercial API overhead and optimizing local open-weight inference on dedicated GPU infrastructure.
            </PullQuote>
          </ScrollReveal>

          {/* Stack */}
          <ScrollReveal>
            <div className="editorial-stack">
              <h4 className="editorial-stack__title">Technologies &amp; Tooling</h4>
              <div className="editorial-stack__items">
                <span className="editorial-stack__item">faster-whisper</span>
                <span className="editorial-stack__item">Qwen3-8B (vLLM)</span>
                <span className="editorial-stack__item">Kokoro TTS</span>
                <span className="editorial-stack__item">Silero VAD</span>
                <span className="editorial-stack__item">Bhashini NMT</span>
                <span className="editorial-stack__item">Sarvam AI APIs</span>
                <span className="editorial-stack__item">NVIDIA Riva / NIM</span>
                <span className="editorial-stack__item">WebRTC</span>
                <span className="editorial-stack__item">WebSockets</span>
                <span className="editorial-stack__item">AWS EC2 (Custom AMIs)</span>
                <span className="editorial-stack__item">RunPod</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Key Metrics Sidebar */}
        <MetricSidebar metrics={vitalsMetrics} />
      </div>
    </article>
  );
}
