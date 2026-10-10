import { EXPERIENCES } from "@/lib/data";

export function ExperienceTelemetry() {
  return (
    <section id="experience" className="scroll-mt-8 space-y-4 font-mono">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-2 gap-2 text-xs">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-[#FF7E00] font-bold">// PRODUCTION_TENURE_LOG</span>
          <span className="text-gray-600">[STARTUP &amp; SYSTEMS ROLES]</span>
        </div>
        <div className="text-[11px] text-[#00FF41] drop-shadow-[0_0_6px_rgba(0,255,65,0.6)] font-bold">
          STATUS: CURRENTLY_DEPLOYED
        </div>
      </div>

      <div className="space-y-4">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={idx}
            className="border border-gray-800 bg-[#060606] p-6 relative"
          >
            <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#FF7E00]" />

            {/* Role Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-850 pb-3 mb-4">
              <div>
                <span className="text-[10px] text-[#FF7E00] border border-[#FF7E00]/40 px-1.5 py-0.5 bg-[#171300] font-bold">
                  [{exp.tag}]
                </span>
                <h3 className="text-lg md:text-xl font-sans font-bold text-white mt-2">
                  {exp.role}
                </h3>
                <div className="text-xs text-gray-400 mt-0.5 flex flex-wrap items-center gap-2">
                  <span className="text-white font-bold">{exp.organization}</span>
                  <span className="text-gray-600">•</span>
                  <span>{exp.location}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-300 font-mono">{exp.period}</span>
                </div>
              </div>

              {/* Top Metrics pills */}
              <div className="flex flex-wrap gap-2">
                {exp.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="border border-gray-800 bg-[#090909] px-2.5 py-1 text-center"
                  >
                    <div className="text-[9px] text-gray-500">{m.label}</div>
                    <div className="text-xs font-bold text-[#FF7E00] mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities list */}
            <ul className="space-y-2.5">
              {exp.details.map((item, dIdx) => (
                <li
                  key={dIdx}
                  className="text-xs md:text-sm font-sans text-gray-300 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="text-[#FF7E00] font-mono text-xs mt-1 select-none">
                    ▪
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
