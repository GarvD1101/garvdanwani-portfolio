"use client";

import { useState } from "react";
import { TECH_STACK, StackCategory, StackItem } from "@/lib/data";

export function DiagnosticStackTable() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [filterQuery, setFilterQuery] = useState("");

  const filteredCategories = TECH_STACK.map((cat) => {
    if (selectedCategory !== "ALL" && cat.code !== selectedCategory) {
      return null;
    }
    const filteredItems = cat.items.filter(
      (item) =>
        item.tool.toLowerCase().includes(filterQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(filterQuery.toLowerCase()) ||
        item.flag.toLowerCase().includes(filterQuery.toLowerCase())
    );
    if (filteredItems.length === 0) return null;
    return { ...cat, items: filteredItems };
  }).filter(Boolean) as StackCategory[];

  const flagColors: Record<string, { badge: string; text: string }> = {
    "Primary tool": {
      badge: "border-[#FF7E00]/60 bg-[#161200] text-[#FF7E00]",
      text: "CORE_DAILY_SYSTEM",
    },
    "In production": {
      badge: "border-[#00FF41]/50 bg-[#001f08] text-[#00FF41]",
      text: "SHIPPED_LIVE",
    },
    "Comfortable": {
      badge: "border-sky-500/50 bg-[#00141f] text-sky-400",
      text: "PRODUCTION_CAPABLE",
    },
    "Learning": {
      badge: "border-purple-500/50 bg-[#14001f] text-purple-400",
      text: "ACTIVE_RESEARCH",
    },
  };

  return (
    <section id="tech-stack" className="scroll-mt-8 space-y-4 font-mono">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-2 gap-2 text-xs">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-[#FF7E00] font-bold">// DIAGNOSTIC_TECH_MATRIX</span>
          <span className="text-gray-600">[STRICT HONESTY SPECIFICATION]</span>
        </div>
        <div className="text-[11px] text-gray-500">
          SYSTEM_TOTAL: 23 REGISTERED_TOOLS
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="border border-gray-800 bg-[#060606] p-3 md:p-4 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 text-xs">
            <button
              onClick={() => setSelectedCategory("ALL")}
              className={`px-2.5 py-1 border transition-colors ${
                selectedCategory === "ALL"
                  ? "border-[#FF7E00] bg-[#141204] text-[#FF7E00] font-bold"
                  : "border-gray-800 bg-black text-gray-400 hover:text-white"
              }`}
            >
              [ALL_SYSTEMS]
            </button>
            {TECH_STACK.map((cat) => (
              <button
                key={cat.code}
                onClick={() => setSelectedCategory(cat.code)}
                className={`px-2.5 py-1 border transition-colors ${
                  selectedCategory === cat.code
                    ? "border-[#FF7E00] bg-[#141204] text-[#FF7E00] font-bold"
                    : "border-gray-800 bg-black text-gray-400 hover:text-white"
                }`}
              >
                [{cat.code}]
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-auto relative">
            <input
              type="text"
              placeholder="FILTER_MATRIX..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="bg-black border border-gray-800 text-xs px-2.5 py-1 text-white placeholder-gray-600 focus:outline-none focus:border-[#FF7E00] w-full md:w-48 font-mono"
            />
          </div>
        </div>
      </div>

      {/* High-Density Telemetry Matrix */}
      <div className="space-y-6">
        {filteredCategories.map((cat) => (
          <div key={cat.code} className="space-y-3">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-1.5 border-b border-gray-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#FF7E00] font-bold">&gt; [{cat.code}]</span>
                <span className="text-white font-sans font-semibold text-sm">{cat.category}</span>
              </div>
              <span className="text-gray-500 text-[10px] font-mono mt-0.5 md:mt-0">
                {cat.items.length} MODULES_REGISTERED
              </span>
            </div>

            {/* Tools Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {cat.items.map((item: StackItem, idx: number) => {
                const config = flagColors[item.flag] || {
                  badge: "border-gray-700 bg-gray-900 text-gray-300",
                  text: item.flag,
                };
                return (
                  <div
                    key={`${cat.code}-${idx}`}
                    className="border border-gray-800 bg-[#060606] p-3.5 flex flex-col justify-between hover:border-gray-700 hover:bg-[#080808] transition-colors relative group"
                  >
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-[#FF7E00] opacity-40 group-hover:opacity-100 transition-opacity" />

                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                        <span className="font-mono font-bold text-white group-hover:text-[#FF7E00] transition-colors text-xs truncate">
                          <span className="text-[#FF7E00] mr-1 select-none">&gt;</span>
                          {item.tool}
                        </span>
                        <span
                          className={`inline-block px-1.5 py-0.5 border text-[9px] font-mono uppercase tracking-wider shrink-0 self-start sm:self-auto ${config.badge}`}
                        >
                          [{item.flag}]
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 font-sans leading-relaxed break-words">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Table Footer Legend */}
      <div className="border border-gray-850 bg-[#040404] p-3 text-[10px] text-gray-500 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>FLAG_TAXONOMY:</span>
          <span className="text-[#FF7E00]">• Primary tool: Daily driver</span>
          <span className="text-[#00FF41]">• In production: Shipped in live clusters</span>
          <span className="text-sky-400">• Comfortable: Competent when required</span>
          <span className="text-purple-400">• Learning: Active deep dive</span>
        </div>
        <span className="text-gray-600 self-start md:self-auto">ZERO_BUZZWORD_TOLERANCE</span>
      </div>
    </section>
  );
}
