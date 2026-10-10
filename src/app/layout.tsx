import type { Metadata } from "next";
import { fontSans, fontMono } from "@/lib/fonts";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { MainDisplay } from "@/components/layout/MainDisplay";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garv Danwani // System Telemetry Monitor",
  description:
    "Production Telemetry Dashboard & AI Systems Portfolio of Garv Danwani — Founding Engineer at Project No. 21. Real-time voice AI, computer vision, rPPG vitals, and GPU inference systems.",
  openGraph: {
    title: "Garv Danwani // System Telemetry Monitor",
    description:
      "Production Telemetry Dashboard: Computer Vision, Real-Time Voice AI, and Inference Infrastructure.",
    type: "website",
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
      </body>
    </html>
  );
}
