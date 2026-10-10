import { RECOGNITIONS, COMPETITIONS } from "@/lib/data";

export function AcademicRecognition() {
  return (
    <section id="recognition" className="scroll-mt-8 space-y-6 font-mono">
      {/* ─── 1. Recognition & Education ─── */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-2 gap-2 text-xs">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-[#FF7E00] font-bold">// ACADEMICS_AND_RECOGNITION</span>
            <span className="text-gray-600">[DEGREE &amp; INDUSTRY BETA TESTING]</span>
          </div>
          <div className="text-[11px] text-gray-500">
            RECORD_ID: GNIOT_SARVAM_2026
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RECOGNITIONS.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-800 bg-[#060606] p-5 relative flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-[#FF7E00]" />

              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-gray-500 font-mono text-[11px]">{item.period}</span>
                  <span className="px-1.5 py-0.5 border border-[#FF7E00]/40 text-[#FF7E00] text-[9px] font-bold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-sans font-bold text-white mb-1">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 mb-3 font-mono">
                  {item.subtitle}
                </p>

                <p className="text-xs font-sans text-gray-300 leading-relaxed border-t border-gray-900 pt-3">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 2. Competitions & Leadership ─── */}
      <div className="space-y-4 pt-4">
        <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-2 gap-2 text-xs">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-[#FF7E00] font-bold">// COMPETITIONS_AND_LEADERSHIP</span>
            <span className="text-gray-600">[HACKATHONS &amp; TECH STRATEGY]</span>
          </div>
          <div className="text-[11px] text-gray-500">
            TOTAL_EVENTS: {COMPETITIONS.length}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {COMPETITIONS.map((comp, idx) => (
            <div
              key={idx}
              className="border border-gray-850 bg-[#050505] p-4 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-center justify-between text-[10px] text-gray-500 mb-1.5">
                <span>0{idx + 1} // {comp.category}</span>
                <span className="text-[#FF7E00] font-mono">{comp.meta}</span>
              </div>
              <h4 className="text-sm font-sans font-bold text-white mb-1.5">
                {comp.title}
              </h4>
              <p className="text-xs font-sans text-gray-400 leading-relaxed">
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

