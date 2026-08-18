import type { Metadata } from "next";
import Link from "next/link";
import { MetricSidebar } from "@/components/MetricSidebar";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Financial Automation Platform Interface | Garv Danwani",
  description:
    "Frontend architecture for enterprise financial automation platform with structured document workflows.",
};

export default function FinancialPlatformPage() {
  const vitalsMetrics = [
    { value: "React.js", label: "Modular component architecture" },
    { value: "Next.js", label: "Server-rendered dashboards" },
  ];

  return (
    <article className="container container--editorial">
      {/* ─── Hero Header ─── */}
      <header className="editorial-hero">
        <div className="editorial-hero__top-bar">
          <Link href="/#work" className="editorial-hero__back">
            &larr; Back to Projects
          </Link>
          <span className="editorial-hero__eyebrow">Frontend Systems &middot; Enterprise</span>
        </div>
        <h1 className="editorial-hero__title">
          Financial Automation Platform Interface
        </h1>
        <p className="editorial-hero__subtitle">
          Frontend architecture for an enterprise financial automation platform,
          enabling structured document workflows and streamlined user interaction.
        </p>
      </header>

      {/* ─── Case Study Body ─── */}
      <div className="editorial-body">
        <div className="editorial-content">
          {/* 1. Overview */}
          <ScrollReveal>
            <section aria-labelledby="section-overview">
              <h3 id="section-overview">1. Overview</h3>
              <p>
                Enterprise financial operations depend on dense document workflows,
                multi-party signoffs, and high-frequency data ingestion. Legacy tooling
                suffered from unoptimized rendering bottlenecks, complex state desynchronization,
                and opaque validation errors during critical financial transactions.
              </p>
            </section>
          </ScrollReveal>

          {/* 2. What I built */}
          <ScrollReveal>
            <section aria-labelledby="section-built">
              <h3 id="section-built">2. What I built &middot; Architecture &amp; Performance</h3>
              <p>
                Engineered a high-performance, modular frontend architecture integrated
                seamlessly with backend transaction APIs:
              </p>
              <ul>
                <li>
                  <strong>Component Architecture:</strong> Built modular React.js and
                  Next.js interfaces supporting dynamic dashboards, live document status
                  badges, and granular permission states.
                </li>
                <li>
                  <strong>System Integration:</strong> Established clean API contract
                  layers, ensuring dependable data validation and unified error boundaries
                  across frontend and backend services.
                </li>
                <li>
                  <strong>Render Optimization:</strong> Minimized re-render overhead in
                  heavy financial tables through component-level memoization, optimized
                  state slices, and lightweight vanilla CSS tokens.
                </li>
              </ul>
            </section>
          </ScrollReveal>

          {/* 3. Outcome */}
          <ScrollReveal>
            <section aria-labelledby="section-outcome">
              <h3 id="section-outcome">3. Outcome &middot; Impact &amp; Scale</h3>
              <p>
                Delivered a responsive and reliable financial interface that reduced workflow
                friction, accelerated document turnaround times, and supported dense
                operational analytics without performance degradation.
              </p>
            </section>
          </ScrollReveal>

          {/* Stack */}
          <ScrollReveal>
            <div className="editorial-stack">
              <h4 className="editorial-stack__title">Technologies &amp; Tooling</h4>
              <div className="editorial-stack__items">
                <span className="editorial-stack__item">React.js</span>
                <span className="editorial-stack__item">Next.js</span>
                <span className="editorial-stack__item">REST APIs</span>
                <span className="editorial-stack__item">HTML5</span>
                <span className="editorial-stack__item">Vanilla CSS</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Key Metrics Sidebar */}
        <MetricSidebar metrics={vitalsMetrics} />
      </div>
    </article>
  );
}
