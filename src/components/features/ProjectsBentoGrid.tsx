import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { TechBadge } from "@/components/ui/TechBadge";

export function ProjectsBentoGrid() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-2 gap-2 text-xs font-mono">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-[#FF7E00] font-bold">// FEATURED_SYSTEM_PROJECTS</span>
          <span className="text-gray-600">[{PROJECTS.length} PRODUCTION_MODULES]</span>
        </div>
        <div className="text-[11px] text-gray-500">
          SELECT_PANEL_TO_DRILLDOWN_TELEMETRY
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {PROJECTS.map((proj, idx) => {
          const isLarge = idx === 0 || idx === 1;
          return (
            <div
              key={proj.slug}
              className={`border border-gray-800 bg-[#060606] p-5 md:p-6 transition-all duration-200 hover:border-gray-700 hover:bg-[#080808] relative group flex flex-col justify-between ${
                isLarge ? "lg:col-span-1" : "lg:col-span-1"
              }`}
            >
              {/* Top Accent notch */}
              <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#FF7E00] opacity-40 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Module Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 font-bold">MOD_0{idx + 1}</span>
                    <span className="text-gray-500">::</span>
                    <span className="text-gray-400 font-mono text-[11px]">
                      {proj.category}
                    </span>
                  </div>

                  <span
                    className={`px-2 py-0.5 border text-[10px] font-bold ${
                      proj.slug === "voice-ai"
                        ? "border-[#00FF41]/40 bg-[#001708] text-[#00FF41]"
                        : proj.slug === "financial-platform"
                        ? "border-zinc-800 bg-[#0c0c0c] text-zinc-500"
                        : "border-[#FF7E00]/40 bg-[#121004] text-[#FF7E00]"
                    }`}
                  >
                    {proj.statusText}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg md:text-xl font-sans font-bold text-white group-hover:text-[#FF7E00] transition-colors mb-2">
                  <Link href={`/${proj.slug}`} className="focus:outline-none">
                    {proj.title}
                  </Link>
                </h3>

                {/* Summary */}
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans mb-5 line-clamp-3">
                  {proj.summary}
                </p>

                {/* Inline Metrics Bento Strip */}
                <div className="grid grid-cols-2 gap-2 mb-5 font-mono">
                  {proj.metrics.slice(0, 2).map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="border border-gray-850 bg-[#040404] p-2.5"
                    >
                      <div className="text-[10px] text-gray-500 uppercase truncate">
                        {m.label}
                      </div>
                      <div className="text-lg md:text-xl font-bold text-[#FF7E00] tabular-nums mt-0.5">
                        {m.prefix || ""}
                        {m.value}
                        <span className="text-xs font-medium text-gray-400 ml-1">
                          {m.unit}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.architecture.inference.slice(0, 3).map((item, tIdx) => {
                    const shortName = item.split(" ")[0].replace(/[\(\)]/g, "");
                    return (
                      <TechBadge
                        key={tIdx}
                        label={shortName}
                        variant="default"
                      />
                    );
                  })}
                  {proj.architecture.transport.slice(0, 1).map((item, tIdx) => (
                    <TechBadge
                      key={tIdx}
                      label={item.split(" ")[0]}
                      variant="outline"
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-3 border-t border-gray-900 flex items-center justify-between font-mono text-xs">
                <span className="text-gray-500 text-[11px]">
                  TIMEFRAME: {proj.timeframe}
                </span>

                <Link
                  href={`/${proj.slug}`}
                  className="text-white group-hover:text-[#FF7E00] flex items-center gap-1 text-xs font-bold transition-colors"
                >
                  <span>[INSPECT_TELEMETRY</span>
                  <span>&rarr;]</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
