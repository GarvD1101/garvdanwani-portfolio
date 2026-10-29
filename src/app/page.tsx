import { MetricBlock } from "@/components/ui/MetricBlock";
import { TerminalBootSequence } from "@/components/features/TerminalBootSequence";
import { VoiceTelemetryVisualizer } from "@/components/features/VoiceTelemetryVisualizer";
import { RppgWaveformVisualizer } from "@/components/features/RppgWaveformVisualizer";
import { ProjectsBentoGrid } from "@/components/features/ProjectsBentoGrid";
import { SystemsDetourSection } from "@/components/features/SystemsDetourSection";
import { ExperienceTelemetry } from "@/components/features/ExperienceTelemetry";
import { DiagnosticStackTable } from "@/components/features/DiagnosticStackTable";
import { AcademicRecognition } from "@/components/features/AcademicRecognition";
import { CertificatesBentoGrid } from "@/components/features/CertificatesBentoGrid";
import { ContactEndpoints } from "@/components/features/ContactEndpoints";
import { SYSTEM_METADATA } from "@/lib/data";

export default function Home() {
  return (
    <div className="space-y-12 pb-16 font-mono text-white max-w-6xl mx-auto">
      {/* ─── 1. System Telemetry Hero ─── */}
      <section className="space-y-6">
        {/* Top Node Indicator Strip */}
        <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-3 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-none bg-[#FF7E00] animate-pulse" />
            <span className="text-[#FF7E00] font-bold">NODE_01_OPERATIONAL</span>
            <span className="text-gray-600">//</span>
            <span className="text-gray-400">{SYSTEM_METADATA.location}</span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-gray-500">
            <span>ROLE: FOUNDING_ENG_01_OF_05</span>
            <span className="px-2 py-0.5 border border-[#FF7E00]/40 text-[#FF7E00] bg-[#121004]">
              [PROJECT_NO_21]
            </span>
          </div>
        </div>

        {/* Hero Title & Mission Statement (Typographic Brutalism) */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-[#FF7E00] tracking-wider uppercase flex flex-wrap items-center gap-2">
            <span>&gt;</span>
            <span>SYSTEMS_ENGINEERING // REAL_TIME_INFRASTRUCTURE</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-sans font-bold tracking-tight text-white leading-none break-words">
            Garv Danwani
          </h1>

          <p className="text-sm md:text-lg text-gray-400 font-sans max-w-3xl leading-relaxed pt-1">
            AI Systems Engineer building real-time production infrastructure across low-latency
            multilingual Voice AI, computer vision physiological telemetry (rPPG), and GPU-accelerated
            inference pipelines that survive 2 AM production loads.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {SYSTEM_METADATA.stackFocus.map((focus, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 border border-gray-800 bg-[#060606] text-gray-400 text-[11px] font-mono hover:text-[#FF7E00] hover:border-gray-700 transition-colors"
              >
                &gt; {focus}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Terminal Boot Shell */}
        <TerminalBootSequence />

        {/* Core System Telemetry Vitals Bar */}
        <div>
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>// CLUSTER_TELEMETRY_VITALS</span>
            <span className="text-gray-600">SAMPLING: CONTINUOUS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <MetricBlock
              label="AVG_VOICE_TURN"
              endValue={2.4}
              unit="s"
              description="Down from ~12s baseline across carrier PSTN"
            />
            <MetricBlock
              label="OPTICAL_SAMPLING"
              endValue={30}
              unit="fps"
              description="Webcam contactless BVP pulse extraction"
            />
            <MetricBlock
              label="LATENCY_CUT"
              endValue={80}
              prefix="-"
              unit="%"
              description="Streaming TensorRT & vLLM optimizations"
            />
            <MetricBlock
              label="REGULATORY_SLA"
              endValue={100}
              unit="%"
              description="Audit prep for next stage: CDSCO compliance"
            />
          </div>
        </div>
      </section>

      {/* ─── 2. Real-Time Telemetry Visualizers (Live Oscilloscope & Latency Waterfall) ─── */}
      <section id="live-telemetry" className="scroll-mt-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-2 gap-2 text-xs">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-[#FF7E00] font-bold">// REAL_TIME_TELEMETRY_STREAM</span>
            <span className="text-gray-600">[LIVE PIPELINE MONITORS]</span>
          </div>
          <div className="text-[11px] text-gray-500">
            REFRESH: 60FPS_CANVAS
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Voice AI Waterfall Latency Breakdown */}
          <VoiceTelemetryVisualizer />

          {/* rPPG Contactless Optical Pulse Oscilloscope */}
          <RppgWaveformVisualizer />
        </div>
      </section>

      {/* ─── 3. Featured Projects Bento Grid ─── */}
      <section id="work" className="scroll-mt-8">
        <ProjectsBentoGrid />
      </section>

      {/* ─── 4. The Detour into Systems (Paco Coursey Typographic Brutalism) ─── */}
      <SystemsDetourSection />

      {/* ─── 5. Founding Engineer Experience Telemetry ─── */}
      <ExperienceTelemetry />

      {/* ─── 6. Diagnostic Tech Stack Matrix (Strict Honesty Flags) ─── */}
      <DiagnosticStackTable />

      {/* ─── 7. Academics, Sarvam Beta Testing & Competitions ─── */}
      <AcademicRecognition />

      {/* ─── 8. Credentials & Accredited Certificates Bento ─── */}
      <CertificatesBentoGrid />

      {/* ─── 9. Network Socket Connect & Communications ─── */}
      <ContactEndpoints />
    </div>
  );
}
