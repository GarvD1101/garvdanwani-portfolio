"use client";

import { useState } from "react";
import Link from "next/link";
import { CONTACT_ENDPOINTS } from "@/lib/data";

export function ContactEndpoints() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (valueToCopy: string, key: string) => {
    navigator.clipboard.writeText(valueToCopy);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-8 space-y-4 font-mono pb-12">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-2 gap-2 text-xs">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-[#FF7E00] font-bold">// NETWORK_SOCKET_CONNECT</span>
          <span className="text-gray-600">[COMMUNICATION PORTS]</span>
        </div>
        <div className="text-[11px] text-gray-500">
          STATUS: LISTENING_ON_PORT_443
        </div>
      </div>

      <div className="border border-gray-800 bg-[#060606] p-6 md:p-8 relative">
        <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#FF7E00]" />

        <div className="max-w-3xl">
          <h2 className="text-xl md:text-2xl font-sans font-bold text-white mb-2">
            Open for Select AI Systems Roles &amp; Engineering Consultations
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed mb-6">
            Available for technical discussions regarding low-latency Voice AI pipelines, WebRTC media servers,
            computer vision physiological telemetry (rPPG), and production inference infrastructure.
          </p>

          {/* Endpoints Table */}
          <div className="border border-gray-850 bg-[#040404] divide-y divide-gray-850 mb-6">
            {CONTACT_ENDPOINTS.map((endpoint, idx) => (
              <div
                key={idx}
                className="p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs hover:bg-[#090909] transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
                  <span className="text-[10px] text-gray-500 font-mono shrink-0">
                    [{endpoint.protocol}]
                  </span>
                  <a
                    href={endpoint.href}
                    target={endpoint.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={endpoint.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="text-white hover:text-[#FF7E00] font-bold transition-colors break-all"
                  >
                    {endpoint.label}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const valueToCopy =
                        (endpoint as any).copyValue ||
                        endpoint.command.replace(/^(open|git clone)\s+/, "");
                      handleCopy(valueToCopy, endpoint.protocol);
                    }}
                    className={`text-[10px] border border-gray-800 hover:border-[#FF7E00] px-2 py-0.5 bg-black transition-colors ${
                      endpoint.protocol.includes("EMAIL")
                        ? "text-[#00FF41]"
                        : endpoint.protocol.includes("LINKEDIN")
                        ? "text-blue-400"
                        : endpoint.protocol.includes("GITHUB")
                        ? "text-fuchsia-400"
                        : "text-gray-400"
                    }`}
                  >
                    {copiedKey === endpoint.protocol ? "[COPIED]" : `$ ${endpoint.command}`}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Resume Download / Payload */}
          <div className="border border-gray-800 bg-[#080808] p-4 flex flex-wrap items-center justify-between gap-3 text-xs mb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-[#FF7E00]" />
              <span className="text-gray-300 font-bold">SYSTEM_PAYLOAD // RESUME</span>
              <span className="text-gray-500 text-[11px]">[PDF FORMAT AVAILABLE]</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-[#121004] border border-[#FF7E00] text-[#FF7E00] font-bold hover:bg-[#FF7E00] hover:text-black transition-colors text-xs flex items-center gap-1.5"
              >
                <span>VIEW_RESUME [PDF] ↗</span>
              </a>
              <a
                href="/resume.pdf"
                download="Garv_Danwani_Resume.pdf"
                className="px-3 py-1 bg-black border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-colors text-xs"
              >
                DOWNLOAD
              </a>
            </div>
          </div>

          {/* Separate Dedicated Reach Out CTA Module */}
          <div className="border border-[#FF7E00]/40 bg-[#0c0900] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative">
            <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#FF7E00]" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 bg-[#00FF41] animate-pulse" />
                <span className="text-white font-bold text-xs sm:text-sm">
                  INITIATE_PROJECT_ENGAGEMENT // DIRECT_CHANNEL
                </span>
                <span className="text-[10px] text-gray-500 font-mono hidden md:inline">
                  [DISPATCH_TO_INBOX]
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-400 font-sans leading-relaxed max-w-xl">
                Looking to bring me onto a project? Fill in your technical requirements, team timeline, and contact specifications to route directly to my personal email.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-4 py-2 bg-[#FF7E00] text-black font-bold hover:bg-[#e67200] transition-colors text-xs whitespace-nowrap text-center tracking-wider shrink-0"
            >
              REACH_OUT_TO_GARV &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Footer System Telemetry Status */}
      <div className="border-t border-gray-900 pt-6 flex flex-wrap items-center justify-between text-[11px] text-gray-600">
        <div>
          GARV_DANWANI_OS &copy; {new Date().getFullYear()} // ZERO_PHOTOGRAPHY_TYPOGRAPHIC_BRUTALISM
        </div>
        <div className="flex items-center gap-3">
          <span>LATENCY: &lt; 50ms</span>
          <span>LOCATION: NEW DELHI [IN]</span>
          <span className="text-[#FF7E00]">KERNEL_STATUS: NOMINAL</span>
        </div>
      </div>
    </section>
  );
}
