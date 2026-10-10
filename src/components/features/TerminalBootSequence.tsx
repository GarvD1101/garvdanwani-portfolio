"use client";

import { useState } from "react";
import { TerminalLine } from "@/components/ui/TerminalLine";
import { SYSTEM_METADATA } from "@/lib/data";

export function TerminalBootSequence() {
  const [copied, setCopied] = useState(false);

  const copyQuickCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-gray-800 bg-[#040404] font-mono text-xs relative overflow-hidden">
      {/* Top Terminal Bar */}
      <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2.5 bg-[#080808]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-none bg-[#FF7E00] animate-pulse" />
          <span className="text-gray-300 font-bold tracking-wider text-[11px]">
            GARV_DANWANI_ENGINEERING_CONSOLE :: [PROD_SHELL]
          </span>
        </div>

        <div className="flex items-center gap-3 text-[10px] text-gray-500">
          <span className="hidden sm:inline">ARCH: x86_64 / NVIDIA CUDA 12.4</span>
          <span className="text-[#00FF41] drop-shadow-[0_0_6px_rgba(0,255,65,0.6)] font-mono font-bold">STATUS: 200_OK</span>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div className="p-4 md:p-6 space-y-2 bg-[#000000]">
        <TerminalLine
          prefix="SYS_INIT >"
          text="Initializing Garv Danwani AI Systems Node [DEL_IN_01]..."
          delay={0.1}
          speed={12}
        />
        <TerminalLine
          prefix="RUNTIMES >"
          text="Binding Python 3.12 / vLLM 0.6.2 / NVIDIA Riva Speech Engine / WebRTC Audio Proxy..."
          delay={0.6}
          speed={10}
        />
        <TerminalLine
          prefix="AFFILIATION >"
          text="Role: Founding AI Systems Engineer (1 of 5) @ Project No. 21 (Govt-incubated Healthtech)..."
          delay={1.2}
          speed={10}
        />
        <TerminalLine
          prefix="REGULATORY >"
          text="Next Stage: CDSCO Medical Device Regulatory compliance & telemetry audit preparation..."
          delay={1.8}
          speed={10}
        />
        <TerminalLine
          prefix="READY >"
          text="System ready. Type 'help' or explore project telemetry modules below."
          delay={2.4}
          isInput={true}
          speed={12}
        />

        {/* Quick Shell Action Chips */}
        <div className="pt-4 mt-4 border-t border-gray-900 flex flex-wrap items-center gap-2 text-[11px]">
          <span className="text-gray-500 select-none">QUICK_EXEC:</span>
          <button
            onClick={() => copyQuickCommand("curl -s https://garvdanwani.dev/resume")}
            className="px-2 py-0.5 border border-gray-800 bg-[#080808] text-gray-300 hover:text-[#FF7E00] hover:border-[#FF7E00] transition-colors"
          >
            $ curl resume
          </button>
          <button
            onClick={() => copyQuickCommand("mail -s 'Inquiry' garvd2005@gmail.com")}
            className="px-2 py-0.5 border border-gray-800 bg-[#080808] text-gray-300 hover:text-[#FF7E00] hover:border-[#FF7E00] transition-colors"
          >
            $ mail garvd2005@gmail.com
          </button>
          <button
            onClick={() => copyQuickCommand("git clone https://github.com/GarvD1101")}
            className="px-2 py-0.5 border border-gray-800 bg-[#080808] text-gray-300 hover:text-[#FF7E00] hover:border-[#FF7E00] transition-colors"
          >
            $ git clone /GarvD1101
          </button>

          {copied && (
            <span className="text-[#FF7E00] font-mono text-[10px] ml-2 animate-pulse">
              [COMMAND_COPIED_TO_CLIPBOARD]
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
