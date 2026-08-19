import type { Metadata } from "next";
import Link from "next/link";
import { MetricSidebar } from "@/components/MetricSidebar";
import { PullQuote } from "@/components/PullQuote";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LatencyComparisonChart } from "@/components/LatencyComparisonChart";

export const metadata: Metadata = {
  title: "Multi-Tenant Real-Time Voice AI + RAG Platform | Garv Danwani",
  description:
    "Enterprise multi-tenant Voice AI and RAG platform answering real phone calls, handling document retrieval, real-time agentic bookings, and cutting latency by 80%+.",
};

export default function VoiceAIPage() {
  const vitalsMetrics = [
    { value: "2.4s", label: "Average turn latency (1.5-2.1s best)" },
    { value: "80%+", label: "Total latency reduction from ~12s" },
    { value: "Exotel IVR", label: "Real PSTN telephony streaming" },
    { value: "Multi-tenant", label: "Qdrant RAG + tool execution" },
  ];

  return (
    <article className="container container--editorial">
      {/* ─── Hero Header ─── */}
      <header className="editorial-hero">
        <div className="editorial-hero__top-bar">
          <Link href="/#work" className="editorial-hero__back">
            &larr; Back to Projects
          </Link>
          <span className="editorial-hero__eyebrow">Enterprise Voice AI &middot; Telephony &amp; RAG Systems</span>
        </div>
        <h1 className="editorial-hero__title">
          Multi-Tenant Real-Time Voice AI + RAG Platform
        </h1>
        <p className="editorial-hero__subtitle">
          Enterprise voice telephony platform answering real inbound and outbound phone calls,
          streaming multi-source RAG knowledge retrieval, and executing real-world agentic actions
          with an 80%+ reduction in end-to-end conversational turn latency.
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
                Production voice AI goes far beyond proof-of-concept browser demos. In enterprise
                telephony, systems must answer real inbound/outbound PSTN phone calls, ingest complex
                corporate knowledge bases, execute business-critical actions (appointment bookings,
                CRM updates, confirmation dispatches), and remain sub-second responsive in natural
                multilingual conversations across Hindi and Indian English.
              </p>
              <p>
                Legacy conversational architectures suffered from 9-15s turnaround delays due to
                sequential REST API hops, fragile commercial provider limits, and lack of real-time
                observability. This platform re-architected the entire pipeline into a multi-tenant,
                end-to-end streaming Voice AI + RAG infrastructure running on dedicated GPU instances.
              </p>
            </section>
          </ScrollReveal>

          {/* 2. What I built */}
          <ScrollReveal>
            <section aria-labelledby="section-built">
              <h3 id="section-built">2. Systems Engineered &middot; The Four Subsystems</h3>
              <p>
                Architected and deployed four mission-critical subsystems that power real-time conversational phone intelligence:
              </p>

              {/* Subsystem 1 */}
              <div className="editorial-subsystem">
                <h4 className="editorial-subsystem__title">A. Document Ingestion &amp; Multi-Tenant RAG</h4>
                <p>
                  Built a high-throughput multi-format document ingestion pipeline handling web scraping,
                  standard PDFs, scanned OCR documents, and DOCX/PPTX presentations. Documents are chunked,
                  embedded via dense BGE embeddings, and indexed into a <strong>Qdrant vector database</strong> with
                  strict multi-tenant collection isolation (e.g., project-specific healthcare catalogs).
                  Metadata and collection access policies are managed through a centralized PostgreSQL catalog.
                </p>
              </div>

              {/* Subsystem 2 */}
              <div className="editorial-subsystem">
                <h4 className="editorial-subsystem__title">B. Real-Time Telephony &amp; Serving Pipeline</h4>
                <p>
                  Constructed a full-duplex conversational loop streaming over <strong>Exotel IVR</strong> (8kHz &mu;-law/PCM audio)
                  and WebRTC/WebSockets:
                </p>
                <ul>
                  <li>
                    <strong>NVIDIA Riva ASR:</strong> Migrated from faster-whisper (~400ms) to TensorRT-optimized FastConformer models on NVIDIA Riva, slashing first-chunk transcription latency to ~150ms.
                  </li>
                  <li>
                    <strong>IndicTrans2 NMT:</strong> Deployed <code>indictrans2-indic-en-1B</code> for inbound Hindi translation and <code>indictrans2-en-indic-1B</code> for outbound synthesis, backed by Bhashini Cloud API failover routing.
                  </li>
                  <li>
                    <strong>Inference &amp; Tool Routing:</strong> Deployed <strong>Qwen2.5-7B-Instruct-GPTQ-Int4</strong> on vLLM with continuous batching and KV-cache optimizations on AWS EC2 GPU instances via Triton Inference Server.
                  </li>
                  <li>
                    <strong>Agentic Tool Execution:</strong> Built direct tool-choice enforcement and hallucination guardrails. The LLM invokes live clinic booking APIs for real-time scheduling and triggers automated WhatsApp confirmations mid-call with zero added latency.
                  </li>
                  <li>
                    <strong>NVIDIA Riva TTS:</strong> FastPitch and HiFi-GAN neural vocoder generate chunked streaming speech with sub-150ms time-to-first-audio chunk.
                  </li>
                </ul>
              </div>

              {/* Subsystem 3 */}
              <div className="editorial-subsystem">
                <h4 className="editorial-subsystem__title">C. Security, Logging &amp; Observability</h4>
                <p>
                  Engineered dual-track per-call audio capture and granular PostgreSQL telemetry capturing
                  session-, turn-, and event-level execution metrics. Integrated automated PII masking
                  guardrails that sanitize passwords, session cookies, and bearer tokens before payloads
                  are committed to audit logs.
                </p>
              </div>

              {/* Subsystem 4 */}
              <div className="editorial-subsystem">
                <h4 className="editorial-subsystem__title">D. Analytics &amp; Automated Diagnostics</h4>
                <p>
                  Deployed real-time latency percentile tracking (p50, p95, p99) per pipeline stage.
                  Built automated diagnostic alerting that detects and isolates specific stage bottlenecks
                  (ASR vs. LLM TTFT vs. TTS synthesis) on live production dashboards.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Latency Evolution 4-Point Progression Chart */}
          <ScrollReveal>
            <LatencyComparisonChart />
          </ScrollReveal>

          {/* 3. Outcome */}
          <ScrollReveal>
            <section aria-labelledby="section-outcome">
              <h3 id="section-outcome">3. Outcome &middot; Production Impact</h3>
              <p>
                Transitioned the system from a benchmark prototype into an enterprise-ready,
                multi-tenant Voice AI and RAG platform handling live phone calls. Overall turn latency
                dropped by over <strong>80% from baseline</strong> (from ~12s down to a <strong>2.4s production average</strong>,
                with 1.5-2.1s best-case turns).
              </p>
              <p>
                The platform successfully closes the loop from inbound customer voice queries to live
                knowledge retrieval, confirmed appointment bookings, and automated WhatsApp follow-ups with 99.9% uptime.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <PullQuote>
              Cut conversational turn latency by over 80% - from ~12s batch baseline to a 2.4s production average - on live PSTN telephony with native RAG retrieval and real-time agentic booking execution.
            </PullQuote>
          </ScrollReveal>

          {/* Stack */}
          <ScrollReveal>
            <div className="editorial-stack">
              <h4 className="editorial-stack__title">Technologies &amp; Tooling</h4>
              <div className="editorial-stack__items">
                <span className="editorial-stack__item">NVIDIA Riva SDK (FastConformer &amp; FastPitch)</span>
                <span className="editorial-stack__item">Qwen2.5-7B-Instruct (vLLM)</span>
                <span className="editorial-stack__item">IndicTrans2 (1B NMT)</span>
                <span className="editorial-stack__item">Exotel IVR Telephony</span>
                <span className="editorial-stack__item">Qdrant Vector Database</span>
                <span className="editorial-stack__item">BGE Dense Embeddings</span>
                <span className="editorial-stack__item">Triton Inference Server</span>
                <span className="editorial-stack__item">AWS EC2 GPU Instances</span>
                <span className="editorial-stack__item">RunPod GPU Serving</span>
                <span className="editorial-stack__item">PostgreSQL Telemetry</span>
                <span className="editorial-stack__item">Silero VAD</span>
                <span className="editorial-stack__item">Bhashini Cloud API</span>
                <span className="editorial-stack__item">WhatsApp Business API</span>
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
