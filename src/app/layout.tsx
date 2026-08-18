import type { Metadata } from "next";
import { fontDisplay, fontBody, fontMono } from "@/lib/fonts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garv Danwani - AI Systems Engineer",
  description:
    "Portfolio of Garv Danwani, AI Systems Engineer building production AI systems in computer vision, voice AI, and real-time infrastructure at Project No. 21.",
  openGraph: {
    title: "Garv Danwani - AI Systems Engineer",
    description:
      "Production AI systems in computer vision, voice AI, and real-time infrastructure.",
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
      data-scroll-behavior="smooth"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
