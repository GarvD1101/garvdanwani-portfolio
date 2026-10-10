"use client";

import { CERTIFICATES_DATA, CertificateItem } from "@/lib/data";

export function CertificatesBentoGrid() {
  const getPdfUrl = (fileName: string) => `/certificates/${encodeURIComponent(fileName)}`;
  const getPreviewUrl = (fileName: string) => `/certificates/previews/${encodeURIComponent(fileName)}`;

  return (
    <section id="credentials" className="scroll-mt-8 space-y-4 font-mono">
      {/* ─── Telemetry Header ─── */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-2 gap-2 text-xs">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-[#FF7E00] font-bold">// CREDENTIALS_ACCREDITATIONS</span>
          <span className="text-gray-600">[UNIFIED_BENTO_MOSAIC]</span>
        </div>
        <div className="text-[11px] text-gray-500 flex items-center gap-3">
          <span className="text-gray-500">// ALL_RECORDS_VERIFIED</span>
          <span className="text-[#FF7E00]">11 CREDENTIALS</span>
        </div>
      </div>

      <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-3xl">
        Verified technical accreditations, research publications, competitive hackathons, and job simulations.
        Hover over any cell to project the full horizontal document view, or click to inspect the original PDF.
      </p>

      {/* ─── SINGLE UNIFIED BENTO GRID CONTAINER (2-Column Micro-Bento on mobile, 4-Column on desktop) ─── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] md:auto-rows-[250px] gap-3 md:gap-4 grid-flow-dense">
        {CERTIFICATES_DATA.map((cert) => (
          <BentoCertificateCard
            key={cert.id}
            cert={cert}
            getPdfUrl={getPdfUrl}
            getPreviewUrl={getPreviewUrl}
          />
        ))}
      </div>
    </section>
  );
}

interface BentoCertificateCardProps {
  cert: CertificateItem;
  getPdfUrl: (fileName: string) => string;
  getPreviewUrl: (fileName: string) => string;
}

function BentoCertificateCard({
  cert,
  getPdfUrl,
  getPreviewUrl,
}: BentoCertificateCardProps) {
  // 2-Column Micro-Bento Sizing:
  // High: col-span-2 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-2 (2x2 on mobile, 2x2 on desktop)
  // Medium: col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-1 (2x1 strip on mobile, 2x1 on desktop)
  // Low: col-span-1 md:col-span-1 lg:col-span-1 row-span-1 md:row-span-1 (1x1 square on mobile, 1x1 on desktop)
  const spanClasses =
    cert.weight === "high"
      ? "col-span-2 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-2"
      : cert.weight === "medium"
      ? "col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-1"
      : "col-span-1 md:col-span-1 lg:col-span-1 row-span-1 md:row-span-1";

  const handleCardClick = () => {
    window.open(getPdfUrl(cert.pdfFileName), "_blank");
  };

  return (
    <div
      onClick={handleCardClick}
      className={`group relative overflow-hidden border border-gray-800 bg-[#050505] cursor-pointer hover:border-[#FF7E00] transition-all duration-300 ${spanClasses}`}
    >
      {/* Top right corner notch */}
      <div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-transparent group-hover:border-[#FF7E00] transition-colors z-30" />

      {/* Top Right Quick Action */}
      <div className="absolute top-2 right-2 md:top-2.5 md:right-2.5 z-20 hidden group-hover:flex items-center gap-1 bg-[#151200] border border-[#FF7E00] px-1.5 py-0.5 text-[8px] md:text-[9px] font-mono text-[#FF7E00] transition-opacity">
        <span>[OPEN_PDF ↗]</span>
      </div>

      {/* ─── DOCUMENT PREVIEW (Top 50% visible by default, full horizontal view on hover) ─── */}
      <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getPreviewUrl(cert.previewFileName)}
          alt={cert.name}
          className={`w-full h-full object-contain filter brightness-95 group-hover:brightness-105 transition-all duration-500 ease-out origin-top ${
            // In default state: scaled up and aligned to top so top 50% is visible
            // On hover: scales to fit full horizontal view cleanly inside the card
            cert.weight === "high"
              ? "scale-[1.3] md:scale-[1.38] translate-y-[-2%] md:translate-y-[-4%] group-hover:scale-95 group-hover:translate-y-[-6%]"
              : cert.weight === "medium"
              ? "scale-[1.35] md:scale-[1.45] translate-y-[-4%] md:translate-y-[-6%] group-hover:scale-90 group-hover:translate-y-[-8%]"
              : "scale-[1.4] md:scale-[1.5] translate-y-[-3%] md:translate-y-[-4%] group-hover:scale-90 group-hover:translate-y-[-10%]"
          }`}
        />

        {/* Ambient Amber glow on hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_24px_rgba(255,126,0,0.12)]" />
      </div>

      {/* ─── BOTTOM 50% OPAQUE OVERLAY (Covers bottom half, slides down on hover) ─── */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 min-h-[50%] bg-zinc-950/95 border-t border-gray-800 p-2 sm:p-2.5 md:p-3.5 flex flex-col justify-between transition-transform duration-300 ease-out z-20 group-hover:translate-y-[calc(100%-28px)] md:group-hover:translate-y-[calc(100%-38px)]"
      >
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-gray-400 mb-0.5 md:mb-1 gap-1.5 md:gap-2 font-mono">
            <span className="truncate text-gray-400">{cert.category}</span>
            <span className="px-1 md:px-1.5 py-0 text-[7px] sm:text-[8px] font-mono border uppercase shrink-0 border-gray-800 text-[#00FF41] bg-[#0a0a0a]">
              {cert.badge}
            </span>
          </div>

          {/* Hardcoded display title */}
          <h4
            className={`font-sans font-bold text-white group-hover:text-[#FF7E00] transition-colors leading-tight line-clamp-1 sm:line-clamp-2 ${
              cert.weight === "high"
                ? "text-xs sm:text-sm md:text-base mt-0.5 md:mt-1"
                : cert.weight === "medium"
                ? "text-[11px] sm:text-xs md:text-sm mt-0.5"
                : "text-[10px] sm:text-xs mt-0.5"
            }`}
          >
            {cert.name}
          </h4>
        </div>

        {/* Bottom Details / Actions */}
        <div className="pt-1 md:pt-2 border-t border-gray-900 flex items-center justify-between text-[9px] md:text-[10px] text-gray-500 font-mono">
          <span className="truncate text-gray-400 mr-2 text-[8px] sm:text-[9px] md:text-[10px]">
            {cert.description}
          </span>
          <span className="text-gray-400 group-hover:text-[#FF7E00] font-bold shrink-0 transition-colors">
            PDF ↗
          </span>
        </div>
      </div>
    </div>
  );
}
