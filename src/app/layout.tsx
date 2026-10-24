import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { fontSans, fontMono } from "@/lib/fonts";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { MainDisplay } from "@/components/layout/MainDisplay";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.garvdanwani.com"),
  title: {
    default: "Garv Danwani | AI Systems Engineer",
    template: "%s | Garv Danwani",
  },
  description:
    "AI Systems Engineer building real-time production infrastructure across low-latency Voice AI, rPPG physiological telemetry, and GPU-accelerated inference pipelines.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Garv Danwani | AI Systems Engineer",
    description:
      "Real-time production infrastructure, low-latency multilingual Voice AI, and computer vision telemetry.",
    url: "https://www.garvdanwani.com",
    siteName: "Garv Danwani Engineering Console",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garv Danwani | AI Systems Engineer",
    description:
      "AI Systems Engineer building real-time infrastructure that survives 2 AM production loads.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${fontSans.variable} ${fontMono.variable}`}
    >
      <body className="bg-black text-white antialiased font-sans overflow-hidden">
        <div className="flex flex-col md:grid md:grid-cols-[260px_1fr] h-screen w-screen overflow-hidden bg-black text-white">
          <SidebarNav />
          <MainDisplay>{children}</MainDisplay>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

