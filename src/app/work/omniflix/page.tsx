import type { Metadata } from "next";
import Link from "next/link";
import { MetricSidebar } from "@/components/MetricSidebar";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "OmniFlix - Unified Recommendation System | Garv Danwani",
  description:
    "Hybrid recommendation system unifying IMDb, TMDB, and MyAnimeList into a multi-domain discovery platform.",
};

export default function OmniFlixPage() {
  const vitalsMetrics = [
    { value: "Hybrid", label: "Content + collaborative" },
    { value: "3", label: "Unified data sources" },
    { value: "LightFM", label: "Cold-start handling" },
  ];

  return (
    <article className="container container--editorial">
      {/* ─── Hero Header ─── */}
      <header className="editorial-hero">
        <div className="editorial-hero__top-bar">
          <Link href="/#work" className="editorial-hero__back">
            &larr; Back to Projects
          </Link>
          <span className="editorial-hero__eyebrow">Machine Learning &middot; Recommenders</span>
        </div>
        <h1 className="editorial-hero__title">
          OmniFlix - Unified Movie, TV &amp; Anime Recommendation System
        </h1>
        <p className="editorial-hero__subtitle">
          Hybrid recommendation system (content-based + collaborative filtering)
          unifying IMDb, TMDB, and MyAnimeList data into one multi-domain
          recommendation dataset.
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
                Entertainment recommendations are traditionally trapped in single-platform
                silos (IMDb for cinema, TMDB for streaming, MyAnimeList for anime). Users
                consume media across all three categories, but divergent metadata schemas
                and matrix sparsity make cross-domain discovery difficult.
              </p>
            </section>
          </ScrollReveal>

          {/* 2. What I built */}
          <ScrollReveal>
            <section aria-labelledby="section-built">
              <h3 id="section-built">2. What I built &middot; Architecture &amp; Modeling</h3>
              <p>
                Engineered a unified hybrid recommendation engine designed to overcome
                cold-start limitations and harmonize cross-media metadata:
              </p>
              <ul>
                <li>
                  <strong>Data Unification:</strong> Merged heterogeneous schemas, taggings,
                  and user feedback from IMDb, TMDB, and MyAnimeList into a structured
                  feature matrix.
                </li>
                <li>
                  <strong>Feature Pipelines:</strong> Developed high-throughput preprocessing
                  pipelines with Pandas and NumPy to transform implicit user interaction signals
                  into model-ready feature vectors.
                </li>
                <li>
                  <strong>Hybrid Recommendation Models:</strong> Implemented hybrid collaborative
                  and content-based algorithms via LightFM and Scikit-learn, pairing matrix
                  factorization with item metadata embeddings to resolve cold-start scenarios.
                </li>
              </ul>
            </section>
          </ScrollReveal>

          {/* 3. Outcome */}
          <ScrollReveal>
            <section aria-labelledby="section-outcome">
              <h3 id="section-outcome">3. Outcome &middot; Validation &amp; Impact</h3>
              <p>
                Achieved robust similarity scoring and ranking accuracy across diverse
                catalogs, validating that unified cross-domain embeddings significantly
                outperform isolated domain recommenders.
              </p>
            </section>
          </ScrollReveal>

          {/* Stack */}
          <ScrollReveal>
            <div className="editorial-stack">
              <h4 className="editorial-stack__title">Technologies &amp; Tooling</h4>
              <div className="editorial-stack__items">
                <span className="editorial-stack__item">Pandas</span>
                <span className="editorial-stack__item">NumPy</span>
                <span className="editorial-stack__item">Scikit-learn</span>
                <span className="editorial-stack__item">LightFM</span>
                <span className="editorial-stack__item">IMDb API</span>
                <span className="editorial-stack__item">TMDB API</span>
                <span className="editorial-stack__item">MyAnimeList</span>
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
