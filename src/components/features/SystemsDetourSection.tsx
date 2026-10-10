import { SYSTEM_METADATA } from "@/lib/data";

export function SystemsDetourSection() {
  return (
    <section id="systems-detour" className="scroll-mt-8 space-y-6">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-2 gap-2 text-xs font-mono">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-[#FF7E00] font-bold">// SYSTEMS_MANIFESTO</span>
          <span className="text-gray-600">[PHILOSOPHY &amp; ENGINEERING TRAJECTORY]</span>
        </div>
        <div className="text-[11px] text-gray-500">
          DOCUMENT_REF: DETOUR_2024_2026.LOG
        </div>
      </div>

      <div className="border border-gray-800 bg-[#060606] p-6 md:p-8 relative">
        <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#FF7E00]" />

        {/* Primary Brutalist Heading */}
        <div className="max-w-4xl">
          <div className="text-xs font-mono text-[#FF7E00] tracking-wider uppercase mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#FF7E00]" />
            THE DETOUR INTO SYSTEMS ENGINEERING
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-tight text-white mb-6 leading-tight">
            Too many AI demos. <br className="hidden sm:inline" />
            <span className="text-gray-400">Not enough that survive 2 AM production.</span>
          </h2>

          <div className="space-y-4 font-sans text-sm md:text-base text-gray-300 leading-relaxed border-l-2 border-gray-800 pl-4 md:pl-6 my-6">
            {SYSTEM_METADATA.detourNarrative.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Three Core Systems Tenets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-900 font-mono text-xs">
            <div className="border border-gray-850 bg-[#040404] p-4">
              <div className="text-[#FF7E00] font-bold mb-1">01. STREAMING OVER REST</div>
              <p className="text-gray-400 font-sans text-xs leading-normal">
                Avoid sequential network hops. Stream first tokens, synthesize audio in memory, and cut turn latency by 80%+.
              </p>
            </div>

            <div className="border border-gray-850 bg-[#040404] p-4">
              <div className="text-[#FF7E00] font-bold mb-1">02. SIGNAL NOISE ISOLATION</div>
              <p className="text-gray-400 font-sans text-xs leading-normal">
                FaceMesh 468-point dynamic ROI tracking and bandpass filters yield clinical signal stability from 30 FPS RGB webcams.
              </p>
            </div>

            <div className="border border-gray-850 bg-[#040404] p-4">
              <div className="text-[#FF7E00] font-bold mb-1">03. REGULATORY INTEGRITY</div>
              <p className="text-gray-400 font-sans text-xs leading-normal">
                Every calculation, timestamp, and inference run must be immutable and audit-grade as next stage enters CDSCO regulatory evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
