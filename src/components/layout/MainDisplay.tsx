import { ReactNode } from "react";

interface MainDisplayProps {
  children: ReactNode;
}

export function MainDisplay({ children }: MainDisplayProps) {
  return (
    <main className="flex-1 h-full overflow-y-auto bg-black text-white px-4 py-6 md:px-8 md:py-8 lg:px-10 relative scrollbar-thin overflow-x-hidden">
      {/* Background subtle telemetry grid pattern */}
      <div className="absolute inset-0 telemetry-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 telemetry-radar-glow pointer-events-none" />

      {/* Main Content Viewport */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">{children}</div>
    </main>
  );
}
