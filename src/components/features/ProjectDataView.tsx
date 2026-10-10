import Link from "next/link";
import { Project } from "@/lib/data";
import { MetricBlock } from "@/components/ui/MetricBlock";
import { PipelineGraph } from "@/components/features/PipelineGraph";
import { TechBadge } from "@/components/ui/TechBadge";

interface ProjectDataViewProps {
  project: Project;
}

export function ProjectDataView({ project }: ProjectDataViewProps) {
  // Convert architecture to JSON string for pre code block inspection
  const architectureJson = JSON.stringify(
    {
      project_id: project.slug,
      status: project.status,
      timeframe: project.timeframe,
      pipeline_stages: project.architecture,
      telemetry: project.metrics.reduce((acc, m) => {
        acc[m.label] = `${m.prefix || ""}${m.value}${m.unit}`;
        return acc;
      }, {} as Record<string, string>),
    },
    null,
    2
  );

  return (
    <article className="font-mono text-white max-w-6xl mx-auto space-y-8 pb-16">
      {/* ─── Top Telemetry Breadcrumb Bar ─── */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-3 gap-2 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-gray-400 hover:text-[#FF7E00] transition-colors flex items-center gap-1"
          >
            <span>&lt;</span>
            <span>SYS_RETURN // DASHBOARD</span>
          </Link>
          <span className="text-gray-700">/</span>
          <span className="text-white font-bold">{project.slug.toUpperCase()}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-600 font-mono text-[11px]">TIMEFRAME: {project.timeframe}</span>
          <span
            className={`px-2 py-0.5 border text-[11px] font-bold ${
              project.slug === "voice-ai"
                ? "border-[#00FF41]/40 bg-[#001708] text-[#00FF41]"
                : project.slug === "financial-platform"
                ? "border-zinc-800 bg-[#0c0c0c] text-zinc-500"
                : "border-[#FF7E00]/60 bg-[#171300] text-[#FF7E00]"
            }`}
          >
            {project.statusText}
          </span>
        </div>
      </div>

      {/* ─── 1. Header: Project Title + Subtitle ─── */}
      <div className="border border-gray-800 bg-[#060606] p-6 relative">
        <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#FF7E00]" />
        
        <div className="text-xs text-[#FF7E00] mb-2 font-mono flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 bg-[#FF7E00]" />
          TELEMETRY_RECORD_0x{project.slug.toUpperCase()}
          <span className="text-gray-600">::</span>
          <span className="text-gray-400">{project.category}</span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-tight text-white mb-4">
          {project.title}
        </h1>

        <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed max-w-4xl border-l-2 border-gray-800 pl-4 py-1">
          {project.summary}
        </p>

        {project.telemetryHighlights && (
          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-gray-900">
            {project.telemetryHighlights.map((hl, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-2.5 py-1 bg-[#0A0A0A] border border-gray-850 text-xs font-mono"
              >
                <span className="text-gray-400">{hl.label}:</span>
                <span className="text-white font-bold">{hl.value}</span>
                <span className="text-[10px] text-[#FF7E00] border border-[#FF7E00]/30 px-1 py-0 ml-1">
                  {hl.badge}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ─── 2. Telemetry Row: MetricBlocks in CSS Grid ─── */}
      <div>
        <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>// REAL-TIME PERFORMANCE METRICS</span>
          <span className="text-gray-600">REFRESH_RATE: 1000ms</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {project.metrics.map((metric, idx) => (
            <MetricBlock
              key={idx}
              label={metric.label}
              endValue={metric.value}
              unit={metric.unit}
              prefix={metric.prefix}
              description={metric.description}
            />
          ))}
        </div>
      </div>

      {/* ─── 3. Pipeline Architecture: Graph Visualizer ─── */}
      <div>
        <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
          // TOPOLOGICAL PIPELINE MAP
        </div>
        <PipelineGraph architecture={project.architecture} slug={project.slug} />
      </div>

      {/* ─── 4. Raw JSON / YAML Architecture Manifest ─── */}
      <div className="border border-gray-800 bg-[#050505] p-4 md:p-6">
        <div className="flex items-center justify-between border-b border-gray-850 pb-2 mb-4">
          <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
            <span className="text-[#FF7E00]">$</span> cat /etc/manifests/{project.slug}.json
          </div>
          <span className="text-[10px] text-gray-600 font-mono">ENCODING: UTF-8</span>
        </div>
        <pre className="overflow-x-auto text-xs text-gray-300 font-mono bg-[#000000] p-4 border border-gray-900 leading-relaxed max-h-[360px] scrollbar-thin">
          <code>{architectureJson}</code>
        </pre>
      </div>

      {/* ─── 5. System Logs (Narrative as Terminal Stream) ─── */}
      <div className="border border-gray-800 bg-[#040404] p-4 md:p-6">
        <div className="flex items-center justify-between border-b border-gray-850 pb-2 mb-4">
          <div className="text-xs text-[#FF7E00] font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#FF7E00] animate-pulse" />
            JOURNALCTL_OUTPUT_LOGS :: {project.slug.toUpperCase()}
          </div>
          <span className="text-[10px] text-gray-500">LEVEL: INFO / DIAGNOSTIC</span>
        </div>

        <div className="space-y-2 font-mono text-xs">
          {project.systemLogs.map((log, index) => (
            <div
              key={index}
              className="flex items-start gap-2 hover:bg-[#0c0c0c] py-1 px-1.5 transition-colors border-l border-transparent hover:border-[#FF7E00]"
            >
              <span className="text-gray-600 select-none text-[10px] mt-0.5">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span className="text-gray-300 leading-relaxed break-all">
                {log.startsWith("[") ? (
                  <>
                    <span className="text-[#FF7E00] mr-2">
                      {log.substring(0, log.indexOf("]") + 1)}
                    </span>
                    <span>{log.substring(log.indexOf("]") + 1)}</span>
                  </>
                ) : (
                  log
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 6. Engineering Deep Dive / Subsystems ─── */}
      {project.technicalBreakdown.length > 0 && (
        <div className="space-y-4">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">
            // SUBSYSTEM ENGINEERING SPECIFICATIONS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.technicalBreakdown.map((spec, i) => (
              <div
                key={i}
                className="border border-gray-800 bg-[#060606] p-5 relative"
              >
                <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-gray-700" />
                <h3 className="text-sm font-sans font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-[#FF7E00] font-mono text-xs">&gt;</span>
                  {spec.heading}
                </h3>
                <ul className="space-y-2">
                  {spec.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs font-sans text-gray-400 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-gray-600 mt-1 select-none font-mono">▪</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── Return Link Bar ─── */}
      <div className="pt-6 border-t border-gray-850 flex justify-between items-center text-xs">
        <Link
          href="/"
          className="text-gray-400 hover:text-[#FF7E00] transition-colors flex items-center gap-1 font-mono"
        >
          <span>&larr;</span> Return to System Dashboard
        </Link>
        <span className="text-gray-600 font-mono text-[11px]">
          TERMINAL_NODE: 0x{project.slug} [STABLE]
        </span>
      </div>
    </article>
  );
}
