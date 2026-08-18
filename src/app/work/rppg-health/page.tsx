import type { Metadata } from "next";
import Link from "next/link";
import { MetricSidebar } from "@/components/MetricSidebar";
import { PullQuote } from "@/components/PullQuote";
import { ScrollReveal } from "@/components/ScrollReveal";
import { RingChart } from "@/components/RingChart";

export const metadata: Metadata = {
  title: "rPPG Health - Contactless Physiological Monitoring | Garv Danwani",
  description:
    "AI-driven contactless physiological monitoring using rPPG to estimate cardiovascular indicators from a standard RGB camera - CDSCO regulatory pathway.",
};

export default function RppgHealthPage() {
  const vitalsMetrics = [
    { value: "~25-30%", label: "Signal stability gain" },
    { value: "CDSCO", label: "Regulatory pathway" },
    { value: "rPPG", label: "Remote photoplethysmography" },
  ];

  return (
    <article className="container container--editorial">
      {/* ─── Hero Header ─── */}
      <header className="editorial-hero">
        <div className="editorial-hero__top-bar">
          <Link href="/#work" className="editorial-hero__back">
            &larr; Back to Projects
          </Link>
          <span className="editorial-hero__eyebrow">
            Flagship &middot; Computer Vision &amp; Healthcare AI
          </span>
        </div>

        <h1 className="editorial-hero__title">
          rPPG Health - Contactless Physiological Monitoring
        </h1>

        <p className="editorial-hero__subtitle">
          AI-driven contactless physiological monitoring platform using rPPG
          (remote photoplethysmography) to estimate cardiovascular indicators from
          a standard RGB camera - moving through CDSCO regulatory clearance.
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
                Continuous cardiovascular and vitals monitoring has historically
                depended on contact-based sensors, pulse oximeters, and bulky
                cuffs. In telemedicine and rapid triaging, physical contact slows
                intake and limits continuous monitoring.
              </p>
              <p>
                Extracting clinical-grade pulsatile signals from consumer-grade
                RGB video feeds presents severe noise challenges: subtle facial
                micro-movements, non-uniform ambient illumination, and low
                signal-to-noise ratios in raw pixel values.
              </p>
            </section>
          </ScrollReveal>

          {/* 2. What I built */}
          <ScrollReveal>
            <section aria-labelledby="section-built">
              <h3 id="section-built">2. What I built &middot; Technical Architecture</h3>
              <p>
                Constructed an end-to-end signal processing and computer vision
                pipeline to extract clean blood volume pulse (BVP) waveforms
                directly from facial video streams:
              </p>
              <ul>
                <li>
                  <strong>rPPG Signal Extraction:</strong> Implemented CHROM
                  (Chrominance-based) and POS (Plane-Orthogonal-to-Skin)
                  algorithms in Python to isolate micro-color fluctuations caused by
                  cardiac cycles.
                </li>
                <li>
                  <strong>Frequency &amp; Noise Filtering:</strong> Deployed Fast
                  Fourier Transform (FFT) and Butterworth respiratory bandpass
                  filters to calculate heart rate, respiration rate, and HRV
                  metrics (RMSSD, LF/HF power spectral ratios).
                </li>
                <li>
                  <strong>Facial Landmark ROI Tracking:</strong> Integrated
                  MediaPipe FaceMesh to dynamically anchor regions of interest
                  across forehead and malar zones, yielding a{" "}
                  <strong>~25-30% improvement in signal stability</strong> across
                  head rotations.
                </li>
                <li>
                  <strong>Predictive Proxy Modeling:</strong> Trained and
                  integrated Random Forest regressors to estimate physiological
                  proxy trends (blood pressure and blood glucose indicators) from
                  extracted wave features.
                </li>
              </ul>
            </section>
          </ScrollReveal>

          {/* Radial Signal Stability Visual Accent */}
          <ScrollReveal>
            <div className="stability-chart-card" aria-label="Signal Stability Benchmark">
              <div className="stability-chart-card__graphic">
                <RingChart percentage={28} size={96} strokeWidth={8} color="var(--saffron)" bgColor="rgba(0,0,0,0.06)" />
                <span className="stability-chart-card__pct">+28%</span>
              </div>
              <div className="stability-chart-card__info">
                <h4 className="stability-chart-card__title">Signal Stability Improvement</h4>
                <p className="stability-chart-card__desc">
                  Dynamic MediaPipe FaceMesh ROI tracking anchors facial micro-regions across ±25° head movement, reducing motion artifacts over raw bounding box extraction.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Regulatory Note */}
          <ScrollReveal>
            <aside className="regulatory-note" aria-label="Regulatory Note: CDSCO Review">
              <div className="regulatory-note__eyebrow">Regulatory Note &middot; CDSCO Compliance</div>
              <h4 className="regulatory-note__title">CDSCO Medical Device Regulatory Pathway</h4>
              <div className="regulatory-note__body">
                Navigated the formal CDSCO regulatory pathway covering Health
                Technology Assessment (HTA), Quality Management Systems (QMS), and
                software and clinical evaluation test licences. Attended government
                regulatory sessions and converted the compliance notes into an
                actionable engineering framework for our clinical trial pipelines.
              </div>
            </aside>
          </ScrollReveal>

          {/* 3. Outcome */}
          <ScrollReveal>
            <section aria-labelledby="section-outcome">
              <h3 id="section-outcome">3. Outcome &middot; Validation &amp; Impact</h3>
              <p>
                rPPG Health transitioned contactless vitals monitoring from an
                unstable prototype into a validated clinical pipeline. The
                enhanced FaceMesh ROI tracking and frequency filtering deliver
                consistent signal fidelity under real-world ambient conditions.
              </p>
              <p>
                The platform is actively navigating CDSCO test licencing,
                providing Project No. 21 with a clear regulatory moat for
                contactless health telemetry.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <PullQuote>
              Most AI engineers build models. Few navigate the regulatory pathway
              that turns a model into a product patients can actually use.
            </PullQuote>
          </ScrollReveal>

          {/* Stack */}
          <ScrollReveal>
            <div className="editorial-stack">
              <h4 className="editorial-stack__title">Technologies &amp; Tooling</h4>
              <div className="editorial-stack__items">
                <span className="editorial-stack__item">Python</span>
                <span className="editorial-stack__item">rPPG</span>
                <span className="editorial-stack__item">MediaPipe FaceMesh</span>
                <span className="editorial-stack__item">FFT Signal Analysis</span>
                <span className="editorial-stack__item">Random Forest</span>
                <span className="editorial-stack__item">FastAPI</span>
                <span className="editorial-stack__item">WebSockets</span>
                <span className="editorial-stack__item">React.js / Next.js</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Key Metrics Sidebar (Right Column) */}
        <MetricSidebar metrics={vitalsMetrics} />
      </div>
    </article>
  );
}
