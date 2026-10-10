import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  variant?: "default" | "active" | "amber" | "outline" | "dim";
  flag?: string;
  className?: string;
}

export function TechBadge({
  label,
  variant = "default",
  flag,
  className = "",
}: TechBadgeProps) {
  const variantStyles = {
    default: "bg-[#0A0A0A] border-gray-800 text-gray-300 hover:border-gray-600 hover:text-white",
    active: "bg-[#141204] border-[#FF7E00]/60 text-[#FF7E00]",
    amber: "bg-[#171300] border-[#FF7E00] text-[#FF7E00]",
    outline: "bg-transparent border-gray-800 text-gray-400 hover:text-gray-200",
    dim: "bg-[#080808] border-gray-900 text-gray-500",
  };

  const flagColors: Record<string, string> = {
    "Primary tool": "text-[#FF7E00] border-[#FF7E00]/40",
    "In production": "text-[#00FF41] border-[#00FF41]/40",
    "Comfortable": "text-sky-400 border-sky-500/40",
    "Learning": "text-purple-400 border-purple-500/40",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 border font-mono text-[11px] leading-tight transition-colors duration-150 select-none",
        variantStyles[variant],
        className
      )}
    >
      <span className="text-gray-500">&gt;</span>
      <span>{label}</span>
      {flag && (
        <span
          className={cn(
            "text-[9px] uppercase px-1 py-0 border ml-1 font-mono tracking-wider",
            flagColors[flag] || "text-gray-400 border-gray-800"
          )}
        >
          {flag}
        </span>
      )}
    </span>
  );
}
