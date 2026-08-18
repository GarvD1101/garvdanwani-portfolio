import type { Metadata } from "next";
import Link from "next/link";
import { MetricSidebar } from "@/components/MetricSidebar";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "AI-Powered Personalized Learning System | Garv Danwani",
  description:
    "Data-driven learning recommendation platform personalizing study paths using predictive analytics and engagement metrics.",
};

export default function LearningSystemPage() {
  const vitalsMetrics = [
    { value: "ML", label: "Knowledge gap detection" },
    { value: "Power BI", label: "Learning analytics" },
  ];

  return (
    <article className="container container--editorial">
      {/* ─── Hero Header ─── */}
      <header className="editorial-hero">
        <div className="editorial-hero__top-bar">
          <Link href="/#work" className="editorial-hero__back">
            &larr; Back to Projects
          </Link>
          <span className="editorial-hero__eyebrow">Predictive Analytics &middot; EdTech</span>
        </div>
        <h1 className="editorial-hero__title">
          AI-Powered Personalized Learning System
        </h1>
        <p className="editorial-hero__subtitle">
          Data-driven learning recommendation platform that personalizes learning
          paths using student performance metrics and engagement analytics.
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
                Standard one-size-fits-all curricula fail to detect early student
                misconceptions. Without real-time learning diagnostics, unaddressed
                knowledge gaps compound over time, leading to lower completion rates
                in rigorous technical coursework.
              </p>
            </section>
          </ScrollReveal>

          {/* 2. What I built */}
          <ScrollReveal>
            <section aria-labelledby="section-built">
              <h3 id="section-built">2. What I built &middot; Predictive Modeling &amp; Analytics</h3>
              <p>
                Developed an analytical diagnosis and intervention pipeline:
              </p>
              <ul>
                <li>
                  <strong>Predictive Models:</strong> Trained Decision Tree and Random
                  Forest models to diagnose specific knowledge gaps and recommend
                  optimized remedial study modules based on historical quiz performance.
                </li>
                <li>
                  <strong>Data Preprocessing:</strong> Engineered feature pipelines in
                  Pandas and Scikit-learn to transform raw engagement telemetry and test
                  scores into structured inputs.
                </li>
                <li>
                  <strong>Analytics Dashboards:</strong> Designed interactive Power BI
                  dashboards for students and faculty, visualizing learning velocity,
                  concept mastery, and outcome predictions.
                </li>
              </ul>
            </section>
          </ScrollReveal>

          {/* 3. Outcome */}
          <ScrollReveal>
            <section aria-labelledby="section-outcome">
              <h3 id="section-outcome">3. Outcome &middot; Impact &amp; Adaptation</h3>
              <p>
                Enabled automated, personalized curriculum adjustments, providing
                clear visual feedback on student comprehension and validating predictive
                analytics as an effective educational intervention.
              </p>
            </section>
          </ScrollReveal>

          {/* Stack */}
          <ScrollReveal>
            <div className="editorial-stack">
              <h4 className="editorial-stack__title">Technologies &amp; Tooling</h4>
              <div className="editorial-stack__items">
                <span className="editorial-stack__item">Python</span>
                <span className="editorial-stack__item">Scikit-learn</span>
                <span className="editorial-stack__item">Decision Trees</span>
                <span className="editorial-stack__item">Random Forest</span>
                <span className="editorial-stack__item">Pandas</span>
                <span className="editorial-stack__item">Power BI</span>
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
