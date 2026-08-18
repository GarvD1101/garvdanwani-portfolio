interface DiagnosticRow {
  test: string;
  category: string;
  result: string;
  referenceRange: string;
  flag: "Primary tool" | "In production" | "Comfortable" | "Learning";
}

const DIAGNOSTIC_DATA: DiagnosticRow[] = [
  /* Programming */
  {
    test: "Python",
    category: "Programming",
    result: "Core AI/ML pipelines, signal processing, async APIs",
    referenceRange: "Primary language across all production systems",
    flag: "Primary tool",
  },
  {
    test: "SQL",
    category: "Programming",
    result: "Relational schemas, query optimization, database design",
    referenceRange: "Analytical data stores & telemetry",
    flag: "Primary tool",
  },
  {
    test: "JavaScript",
    category: "Programming",
    result: "Frontend application logic, WebSockets client state",
    referenceRange: "Browser-based interfaces & visualizations",
    flag: "Comfortable",
  },

  /* Voice AI & NLP */
  {
    test: "faster-whisper",
    category: "Voice AI & NLP",
    result: "Low-latency Automatic Speech Recognition (ASR)",
    referenceRange: "Streaming audio transcription",
    flag: "Primary tool",
  },
  {
    test: "Qwen3-8B (vLLM)",
    category: "Voice AI & NLP",
    result: "LLM reasoning with continuous batching & KV-cache",
    referenceRange: "2.1-2.3s inference latency",
    flag: "Primary tool",
  },
  {
    test: "Kokoro TTS",
    category: "Voice AI & NLP",
    result: "High-throughput neural text-to-speech synthesis",
    referenceRange: "Sub-second audio generation",
    flag: "Primary tool",
  },
  {
    test: "Silero VAD",
    category: "Voice AI & NLP",
    result: "Voice activity detection & speech chunking",
    referenceRange: "Millisecond turn-taking segmentation",
    flag: "Primary tool",
  },
  {
    test: "Bhashini NMT",
    category: "Voice AI & NLP",
    result: "Indic neural machine translation (Hindi/Bhojpuri)",
    referenceRange: "Multilingual translation layer",
    flag: "Primary tool",
  },
  {
    test: "Sarvam AI APIs",
    category: "Voice AI & NLP",
    result: "Indic voice & speech benchmark comparisons",
    referenceRange: "Regional language evaluation",
    flag: "Comfortable",
  },
  {
    test: "NVIDIA Riva / NIM",
    category: "Voice AI & NLP",
    result: "Enterprise real-time speech AI microservices",
    referenceRange: "High-concurrency benchmark testing",
    flag: "Comfortable",
  },

  /* Computer Vision & Signal Processing */
  {
    test: "rPPG (CHROM & POS)",
    category: "Computer Vision & Signal",
    result: "Contactless blood volume pulse (BVP) extraction",
    referenceRange: "Core physiological monitoring pipeline",
    flag: "Primary tool",
  },
  {
    test: "MediaPipe FaceMesh",
    category: "Computer Vision & Signal",
    result: "Dynamic 468-point facial landmark tracking",
    referenceRange: "~25-30% ROI stability improvement",
    flag: "Primary tool",
  },
  {
    test: "FFT Signal Analysis",
    category: "Computer Vision & Signal",
    result: "Frequency domain transformation & spectral power",
    referenceRange: "Heart & respiratory rate isolation",
    flag: "Primary tool",
  },
  {
    test: "HRV Metrics (RMSSD, LF/HF)",
    category: "Computer Vision & Signal",
    result: "Autonomic nervous system indicator calculation",
    referenceRange: "Time & frequency domain HRV analysis",
    flag: "Primary tool",
  },

  /* Machine Learning */
  {
    test: "Scikit-learn",
    category: "Machine Learning",
    result: "Regression modeling, evaluation & feature extraction",
    referenceRange: "Standard ML pipeline execution",
    flag: "Primary tool",
  },
  {
    test: "Random Forest",
    category: "Machine Learning",
    result: "Physiological proxy estimation (BP, glucose trends)",
    referenceRange: "Nonlinear biometric regression",
    flag: "Primary tool",
  },
  {
    test: "Decision Trees",
    category: "Machine Learning",
    result: "Knowledge gap detection & curriculum branching",
    referenceRange: "Transparent decision pathing",
    flag: "Primary tool",
  },
  {
    test: "LightFM",
    category: "Machine Learning",
    result: "Hybrid matrix factorization & collaborative filtering",
    referenceRange: "Cold-start recommendation handling",
    flag: "Primary tool",
  },

  /* Backend & APIs */
  {
    test: "FastAPI",
    category: "Backend & APIs",
    result: "High-performance asynchronous REST & WebSocket APIs",
    referenceRange: "Real-time bi-directional telemetry",
    flag: "Primary tool",
  },
  {
    test: "WebSockets",
    category: "Backend & APIs",
    result: "Full-duplex live streaming data channels",
    referenceRange: "Low-overhead waveform transmission",
    flag: "Primary tool",
  },
  {
    test: "WebRTC",
    category: "Backend & APIs",
    result: "Real-time audio/video peer communication",
    referenceRange: "Sub-second conversational streaming",
    flag: "Primary tool",
  },

  /* Frontend Development */
  {
    test: "React.js",
    category: "Frontend Development",
    result: "Component-level interface state & modular widgets",
    referenceRange: "UI chrome & clinical dashboard components",
    flag: "Primary tool",
  },
  {
    test: "Next.js",
    category: "Frontend Development",
    result: "App Router architecture, static prerendering, SSR",
    referenceRange: "Production application framework",
    flag: "Comfortable",
  },
  {
    test: "Vanilla CSS",
    category: "Frontend Development",
    result: "Design tokens, CSS custom properties, zero-runtime",
    referenceRange: "Performant, lightweight UI styling",
    flag: "Learning",
  },

  /* Cloud & Infrastructure */
  {
    test: "AWS EC2 (Custom AMIs)",
    category: "Cloud & Infrastructure",
    result: "Custom GPU compute images for model deployment",
    referenceRange: "Scalable inference environments",
    flag: "In production",
  },
  {
    test: "RunPod",
    category: "Cloud & Infrastructure",
    result: "Serverless & on-demand GPU inference clusters",
    referenceRange: "Dynamic workload scaling",
    flag: "In production",
  },
  {
    test: "Docker",
    category: "Cloud & Infrastructure",
    result: "Containerization, environment isolation & testing",
    referenceRange: "Local & remote container builds",
    flag: "Learning",
  },

  /* Data & Analytics */
  {
    test: "Pandas",
    category: "Data & Analytics",
    result: "Data cleaning, transformation, and feature engineering",
    referenceRange: "Tabular dataset preparation",
    flag: "Primary tool",
  },
  {
    test: "NumPy",
    category: "Data & Analytics",
    result: "Array manipulation & numerical signal operations",
    referenceRange: "Vectorized algorithmic computation",
    flag: "Primary tool",
  },
  {
    test: "Power BI",
    category: "Data & Analytics",
    result: "Interactive clinical telemetry & progress dashboards",
    referenceRange: "Academic & physiological reporting",
    flag: "Learning",
  },
  {
    test: "PostgreSQL",
    category: "Data & Analytics",
    result: "Structured relational storage for system entities",
    referenceRange: "ACID-compliant production database",
    flag: "Primary tool",
  },
];

export function DiagnosticTable() {
  return (
    <div className="diagnostic-panel">
      <div className="diagnostic-table-wrapper">
        <table className="diagnostic-table" role="table" aria-label="Diagnostic Panel of Technical Skills">
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader">Test</th>
              <th scope="col" role="columnheader">Result / Application</th>
              <th scope="col" role="columnheader">Reference Range</th>
              <th scope="col" role="columnheader">Flag</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {DIAGNOSTIC_DATA.map((row) => (
              <tr key={row.test} role="row">
                <td role="cell" className="cell-test-td">
                  <span className="cell-test">{row.test}</span>
                  <span className="cell-category">{row.category}</span>
                </td>
                <td role="cell" data-label="Result / Application" className="cell-result">
                  {row.result}
                </td>
                <td role="cell" data-label="Reference Range" className="cell-ref">
                  {row.referenceRange}
                </td>
                <td role="cell" data-label="Flag" className="cell-flag">
                  <span
                    className={`flag-pill ${
                      row.flag === "Primary tool"
                        ? "flag-pill--primary"
                        : row.flag === "In production"
                        ? "flag-pill--production"
                        : row.flag === "Comfortable"
                        ? "flag-pill--comfortable"
                        : "flag-pill--learning"
                    }`}
                  >
                    {row.flag}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
