"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROJECTS, SYSTEM_METADATA } from "@/lib/data";

export function SidebarNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [uptimeSeconds, setUptimeSeconds] = useState(384920);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (totalSeconds: number) => {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${days}d ${hours.toString().padStart(2, "0")}h ${minutes
      .toString()
      .padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`;
  };

  const isLinkActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* ─── Mobile Header Bar (Visible on mobile only) ─── */}
      <div className="md:hidden flex items-center justify-between border-b border-gray-800 bg-black px-4 py-3 shrink-0 z-50">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-none bg-[#FF7E00] animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-wider text-white">
            GARV_DANWANI // OS
          </span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="font-mono text-xs border border-gray-800 px-2.5 py-1 text-gray-300 hover:text-[#FF7E00] hover:border-[#FF7E00] transition-colors"
        >
          {mobileMenuOpen ? "[CLOSE]" : "[SYS_NAV]"}
        </button>
      </div>

      {/* ─── Main Sidebar (Fixed 260px on desktop) ─── */}
      <aside
        className={`${
          mobileMenuOpen ? "flex" : "hidden"
        } md:flex flex-col h-full w-full md:w-[260px] bg-black border-r border-gray-800 font-mono text-xs text-gray-400 select-none overflow-y-auto shrink-0 z-40`}
      >
        {/* Terminal Header & ASCII Branding */}
        <div className="p-4 border-b border-gray-800 bg-[#040404]">
          <div className="flex items-center justify-between mb-3 text-[10px] text-gray-500 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 bg-[#FF7E00] animate-pulse" />
              STATUS: ONLINE
            </span>
            <span className="text-[#FF7E00]">v2.4.0-PROD</span>
          </div>

          <pre className="text-[10px] leading-[10px] text-gray-300 font-mono tracking-tighter select-none my-1">
{`   _____ _____ 
  / ____|  __ \\
 | |  __| |  | |
 | | |_ | |  | |
 | |__| | |__| |
  \\_____|_____/ `}
          </pre>

          <div className="mt-3">
            <div className="text-xs font-bold text-white tracking-wide">
              {SYSTEM_METADATA.engineer}
            </div>
            <div className="text-[10px] text-gray-500 leading-tight mt-0.5">
              AI SYSTEMS ENGINEER
            </div>
            <div className="text-[10px] text-[#FF7E00] leading-tight mt-0.5">
              FOUNDING TEAM (1 OF 5) @ NO. 21
            </div>
          </div>
        </div>

        {/* Live System Telemetry Strip */}
        <div className="px-4 py-3 border-b border-gray-800/80 bg-[#060606] text-[10px] space-y-1">
          <div className="flex justify-between items-center text-gray-500">
            <span>UPTIME:</span>
            <span className="text-white font-mono">{formatUptime(uptimeSeconds)}</span>
          </div>
          <div className="flex justify-between items-center text-gray-500">
            <span>CLUSTER:</span>
            <span className="text-[#00FF41] drop-shadow-[0_0_6px_rgba(0,255,65,0.6)] font-mono font-bold">
              DEL_IN_01 [OK]
            </span>
          </div>
          <div className="flex justify-between items-center text-gray-500">
            <span>COORDINATES:</span>
            <span className="text-gray-400 font-mono">28.61° N, 77.20° E</span>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 py-4 px-2 space-y-6 overflow-y-auto">
          {/* Section 1: System Views */}
          <div>
            <div className="px-2 text-[10px] tracking-wider text-gray-500 uppercase font-mono mb-2">
              // TELEMETRY_NAV
            </div>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-2.5 py-1.5 transition-all text-xs group ${
                    pathname === "/"
                      ? "text-[#FF7E00] bg-[#121004] border-l-2 border-[#FF7E00] font-bold"
                      : "text-gray-400 hover:text-[#FF7E00] hover:bg-[#080808]"
                  }`}
                >
                  <span className="text-[10px] text-gray-600 group-hover:text-[#FF7E00]">
                    [00]
                  </span>
                  <span>SYS_OVERVIEW</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 2: Projects Telemetry */}
          <div>
            <div className="px-2 text-[10px] tracking-wider text-gray-500 uppercase font-mono mb-2 flex items-center justify-between">
              <span>// PIPELINE_MODULES</span>
              <span className="text-gray-600 text-[9px]">{PROJECTS.length} ACTIVE</span>
            </div>
            <ul className="space-y-1">
              {PROJECTS.map((proj, idx) => {
                const active = isLinkActive(`/${proj.slug}`) || isLinkActive(`/work/${proj.slug}`);
                return (
                  <li key={proj.slug}>
                    <Link
                      href={`/${proj.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex flex-col px-2.5 py-1.5 transition-all group ${
                        active
                          ? "text-[#FF7E00] bg-[#121004] border-l-2 border-[#FF7E00] font-bold"
                          : "text-gray-400 hover:text-[#FF7E00] hover:bg-[#080808]"
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[10px] text-gray-600 group-hover:text-[#FF7E00]">
                          [0{idx + 1}]
                        </span>
                        <span className="truncate">{proj.slug.toUpperCase()}</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px] text-gray-500 pl-6 mt-0.5">
                        <span className="truncate">{proj.category.split("&")[0]}</span>
                        <span className="text-[8px] text-gray-600">
                          {proj.status === "PRODUCTION_ACTIVE"
                            ? "PROD"
                            : proj.status === "CDSCO_IN_REVIEW"
                            ? "CDSCO"
                            : "RUN"}
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Section 3: Diagnostic Jump Anchors (on main dashboard) */}
          <div>
            <div className="px-2 text-[10px] tracking-wider text-gray-500 uppercase font-mono mb-2">
              // TELEMETRY_LAYERS
            </div>
            <ul className="space-y-0.5 text-[11px]">
              <li>
                <Link
                  href="/#systems-detour"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2.5 py-1 text-gray-400 hover:text-[#FF7E00] hover:translate-x-1 transition-all"
                >
                  &gt; THE_DETOUR_LOG
                </Link>
              </li>
              <li>
                <Link
                  href="/#live-telemetry"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2.5 py-1 text-gray-400 hover:text-[#FF7E00] hover:translate-x-1 transition-all"
                >
                  &gt; REALTIME_WAVEFORMS
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2.5 py-1 text-gray-400 hover:text-[#FF7E00] hover:translate-x-1 transition-all"
                >
                  &gt; FOUNDING_ENGINEER
                </Link>
              </li>
              <li>
                <Link
                  href="/#tech-stack"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2.5 py-1 text-gray-400 hover:text-[#FF7E00] hover:translate-x-1 transition-all"
                >
                  &gt; DIAGNOSTIC_STACK
                </Link>
              </li>
              <li>
                <Link
                  href="/#recognition"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2.5 py-1 text-gray-400 hover:text-[#FF7E00] hover:translate-x-1 transition-all"
                >
                  &gt; RECOGNITION_ACADEMICS
                </Link>
              </li>
              <li>
                <Link
                  href="/#credentials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2.5 py-1 text-gray-400 hover:text-[#FF7E00] hover:translate-x-1 transition-all"
                >
                  &gt; CREDENTIALS_CERTS
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2.5 py-1 text-gray-400 hover:text-[#FF7E00] hover:translate-x-1 transition-all"
                >
                  &gt; NET_SOCKET_CONNECT
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-2.5 py-1 hover:translate-x-1 transition-all ${
                    pathname === "/contact"
                      ? "text-[#FF7E00] font-bold"
                      : "text-gray-400 hover:text-[#FF7E00]"
                  }`}
                >
                  &gt; REACH_OUT_DISPATCH [FORM]
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Network Link Ticker */}
        <div className="p-3 border-t border-gray-800 bg-[#050505] text-[10px] space-y-1.5">
          <div className="text-gray-500 font-mono text-[9px] uppercase tracking-wider mb-1">
            // TERMINAL_CONNECT
          </div>
          <div className="flex flex-col gap-1">
            <a
              href="mailto:garvd2005@gmail.com"
              className="text-gray-400 hover:text-[#FF7E00] transition-colors flex items-center justify-between"
            >
              <span>MAIL</span>
              <span className="text-gray-600">garvd2005@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/garvdanwaniofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF7E00] transition-colors flex items-center justify-between"
            >
              <span>LINKEDIN</span>
              <span className="text-gray-600">/in/garvdanwani</span>
            </a>
            <a
              href="https://github.com/GarvD1101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF7E00] transition-colors flex items-center justify-between"
            >
              <span>GITHUB</span>
              <span className="text-gray-600">@GarvD1101</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
