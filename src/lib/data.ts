export interface ProjectMetric {
  label: string;
  value: number;
  unit: string;
  prefix?: string;
  description?: string;
}

export interface ProjectArchitecture {
  ingestion: string[];
  inference: string[];
  transport: string[];
  client: string[];
}

export interface TechnicalBreakdown {
  heading: string;
  points: string[];
}

export interface QnARoutingBand {
  band: string;
  threshold: string;
  destination: string;
  latency: string;
  description: string;
}

export interface QnARoutingSpec {
  overview: string;
  bands: QnARoutingBand[];
  safetyOverride: string;
  intentGate: string;
}

export interface KeyDesignDecision {
  title: string;
  pitch: string;
  rationale: string;
}

export interface ProductionChallenge {
  title: string;
  scenario: string;
  rootCause: string;
  fix: string;
}

export interface Project {
  slug: string;
  title: string;
  status: "PRODUCTION_ACTIVE" | "CDSCO_IN_REVIEW" | "DEPLOYED" | "BENCHMARK_PROD";
  statusText: string;
  category: string;
  timeframe: string;
  summary: string;
  metrics: ProjectMetric[];
  architecture: ProjectArchitecture;
  systemLogs: string[];
  technicalBreakdown: TechnicalBreakdown[];
  telemetryHighlights?: {
    label: string;
    value: string;
    badge: string;
  }[];
  qnaRouting?: QnARoutingSpec;
  designDecisions?: KeyDesignDecision[];
  productionChallenges?: ProductionChallenge[];
}

export interface StackItem {
  tool: string;
  description: string;
  flag: "Primary tool" | "In production" | "Comfortable" | "Learning";
}

export interface StackCategory {
  category: string;
  code: string;
  items: StackItem[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  tag: string;
  details: string[];
  metrics: { label: string; value: string }[];
}

export interface RecognitionItem {
  title: string;
  subtitle: string;
  period: string;
  badge: string;
  details: string;
}

export interface CompetitionItem {
  title: string;
  meta: string;
  category: string;
  description: string;
}

export const SYSTEM_METADATA = {
  engineer: "GARV DANWANI",
  callsign: "SYSTEM_MONITOR // PROD_NODE_01",
  role: "AI Systems Engineer · Real-Time Infrastructure",
  currentRole: "Founding Engineer (1 of 5) @ Project No. 21",
  status: "SYSTEMS_OPERATIONAL",
  location: "New Delhi, IN [28.6139° N, 77.2090° E]",
  nodeUptime: "99.98%",
  kernelVersion: "Next.js 16.3 / React 19 / vLLM 0.6.2",
  stackFocus: ["Computer Vision", "Real-Time Voice AI", "Inference Systems", "Healthcare Regulatory (CDSCO)"],
  bio: "AI Systems Engineer specializing in low-latency real-time voice pipelines, computer vision physiological telemetry, and production machine learning systems that withstand 2 AM production loads.",
  detourNarrative: [
    "Garv didn't start in systems engineering. He started in data science - models, notebooks, loss curves, the typical path into AI.",
    "The deeper he went, the clearer the bottleneck became: the models that change outcomes aren't just the theoretically clever ones; they are the ones that run deterministically, sub-second, and reliably for real users under unstable network conditions.",
    "He made a deliberate detour into backend infrastructure, WebRTC media servers, GPU inference batching, and low-level signal processing.",
    "Today, as a founding engineer at a government-incubated healthtech venture (Project No. 21), he owns systems end-to-end: from camera sensor ingestion to preparing for the next stage in CDSCO regulatory compliance."
  ],
};

export const PROJECTS: Project[] = [
  {
    slug: "voice-ai",
    title: "Multi-Vertical Multilingual Real-Time Voice AI Telephony Platform (Project 21)",
    status: "PRODUCTION_ACTIVE",
    statusText: "[PRODUCTION // 4_VERTICALS_LIVE]",
    category: "Real-Time Telephony & Multi-Vertical Voice AI",
    timeframe: "2025 - Present",
    summary:
      "We built Project 21 as a real-time, multilingual conversational voice agent platform engineered for production deployment across multiple industry verticals — healthcare (maternal IVR and hospital appointment booking), hospitality (hotel reservations), corporate health (employee wellness checkups), and real estate (CRM lead capture and site visit scheduling). The platform operates over standard 2G/feature-phone PSTN telephony via dual gateways (PSTN IVR trunks) and WhatsApp API channels, communicating fluidly across 12 Indian languages under a strict sub-2.0s conversational Time-To-First-Audio (TTFA) latency constraint, zero transactional hallucination tolerance, and resilient audio processing for low-bitrate 8kHz carrier streams.",
    metrics: [
      { label: "TTFA_LATENCY", value: 1.6, unit: "s", description: "Sub-2.0s hard SLA target (1.5s–1.8s achieved across PSTN audio)" },
      { label: "QNA_DIRECT_BAND", value: 480, unit: "ms", description: "Direct audio return for pre-verified FAQs bypassing LLM & RAG (~450–600ms)" },
      { label: "INDIC_LANGUAGES", value: 12, unit: "langs", description: "Hindi, Bhojpuri, Bengali, Marathi, Telugu, Tamil, Gujarati, Kannada, etc." },
      { label: "LIVE_VERTICALS", value: 4, unit: "sectors", description: "Healthcare, Hospitality, Corporate Health, and Real Estate" },
      { label: "HALLUCINATED_BOOKINGS", value: 0, unit: "errors", description: "Zero fabricated appointments post-completion guard deployment" },
      { label: "CONCURRENT_CHANNELS", value: 128, unit: "ch", description: "Full-duplex telephony and WebSocket concurrent sessions" },
      { label: "LATENCY_REDUCTION", value: 80, prefix: "-", unit: "%", description: "Drop from ~12s legacy pipeline to sub-2s streaming turns" },
    ],
    architecture: {
      ingestion: [
        "Telephony Ingress (Carrier PSTN Dual Gateways)",
        "Scipy Energy Pre-Filter & Silero Dual-Layer VAD (16kHz window)",
        "Barge-In Interrupt Controller with WebSocket Buffer Flushing",
        "Omnichannel Meta WhatsApp API Messaging Integration",
      ],
      inference: [
        "STT Provider Factory (NVIDIA Riva FastConformer / Sarvam Saaras:v3)",
        "Language Detection & 3-Turn Temporal Smoothing (12 Indic Languages)",
        "Inbound & Outbound NMT (IndicTrans2-1B / Sarvam Translate:v1)",
        "Single-Token Intent Classifier with Per-Vertical Scopes",
        "QnA Fast-Path & Semantic Response Cache (Qdrant Cosine)",
        "Agent Loop with Declarative Flow State Machine (vLLM Qwen2.5-7B)",
      ],
      transport: [
        "Full-Duplex Telephony WebSockets (8kHz G.711u / 16kHz PCM)",
        "FastAPI Async Event Gateway & Route Dispatcher",
        "Redis In-Memory Session Cache & Hysteresis Buffers",
        "PostgreSQL Flow State Persistence & Recovery Ledger",
      ],
      client: [
        "Zero-LLM Action Buffers (Pre-localized Audio in 12 Languages)",
        "Indic Number Verbalizer & Neural TTS (Riva FastPitch / Bulbul:v3)",
        "PostgreSQL Async Outbox Queue for External CRM Synchronization",
        "Real-Time Observability & Diagnostic Telemetry SSE Stream",
      ],
    },
    systemLogs: [
      "[2026-03-04 14:10:01.018] TELEPHONY_INGRESS: Dual carrier trunk connected via PSTN SIP [STREAM: 8kHz G.711u]",
      "[2026-03-04 14:10:01.122] VAD_ENGINE: Speech detected (prob: 0.89); ambient noise dropped via Scipy pre-filter",
      "[2026-03-04 14:10:01.270] STT_FACTORY: Provider factory transcribed native audio chunk in 148ms [LANG: BHOJPURI]",
      "[2026-03-04 14:10:01.385] LANG_DETECTOR: Temporal smoother confirmed Bhojpuri (Hysteresis margin >0.20, N=3)",
      "[2026-03-04 14:10:01.442] NMT_TRANSLATE: Inbound query normalized to English via NMT provider in 57ms",
      "[2026-03-04 14:10:01.498] INTENT_CLASSIFIER: Single-token evaluation completed (intent: booking, scope: hospital)",
      "[2026-03-04 14:10:01.502] QNA_GATE: Intent flagged needs_agent=true; QnA fast-path bypassed directly into agent flow",
      "[2026-03-04 14:10:01.520] AGENT_FLOW: Declarative state machine advanced to step 'collect' [SLOTS: doctor, patient, date, slot]",
      "[2026-03-04 14:10:01.525] ACTION_BUFFER: Dispatched pre-localized transition audio in Bhojpuri (0ms LLM latency)",
      "[2026-03-04 14:10:01.810] TOOL_EXEC: book_appointment returned success; completion message locked verbatim",
      "[2026-03-04 14:10:01.812] GUARD_CHECK: Two-tier hallucination guard verified valid completion tool execution",
      "[2026-03-04 14:10:01.940] VERBALIZER_TTS: Number verbalizer normalized confirmation ID; audio stream queued to egress",
      "[2026-03-04 14:10:01.945] ASYNC_OUTBOX: Queued transactional record to PostgreSQL crm_push_queue in 2ms",
      "[2026-03-04 14:10:02.110] EGRESS_STREAM: First audio frame delivered to caller handset (TTFA: 1.62s) // TURN_COMPLETE",
    ],
    technicalBreakdown: [
      {
        heading: "1. High-Concurrency Telephony Ingress & Dual-Layer VAD",
        points: [
          "Unified support for dual carrier-grade PSTN telephony trunks streaming 8kHz G.711u audio over bidirectional WebSockets.",
          "Dual-layer voice activity detection (Scipy energy pre-filter + Silero VAD at 16kHz) with instant barge-in interruptibility that flushes playback buffers when the caller speaks.",
          "Omnichannel accessibility supporting both real-time voice telephony trunks and asynchronous Meta WhatsApp messaging endpoints.",
        ],
      },
      {
        heading: "2. Linguistic Normalization Across 12 Indic Languages",
        points: [
          "Deterministic language identification with a 3-turn sliding window smoother and hysteresis margins (>0.20) to prevent loanword flapping on code-switched phrases.",
          "Inbound NMT translates regional dialects into normalized English representations, improving dense vector retrieval recall by +40%.",
          "Phonetic number verbalization converts numerals and dates into phonetic native script prior to neural TTS synthesis.",
        ],
      },
      {
        heading: "3. Sub-Second Streaming Inference & PagedAttention",
        points: [
          "TensorRT-optimized speech recognition and continuous batching with vLLM PagedAttention KV-caching ensuring zero out-of-memory errors during peak loads.",
          "Sentence-boundary pipelining begins neural audio synthesis before the language model finishes token generation.",
          "Zero-LLM action buffers mask external API latency, maintaining sub-2.0s conversational responsiveness without dead air.",
        ],
      },
      {
        heading: "4. Transactional Integrity & Fault Tolerance",
        points: [
          "Dual-tier hallucination guard enforcing completion-tool verification and verbatim confirmation readouts with zero hallucinated reference codes.",
          "Dual-layer session flow state persistence (in-memory dict + PostgreSQL upsert) enabling seamless mid-call recovery if a worker restarts.",
          "Asynchronous PostgreSQL outbox queue isolating the real-time audio pipeline from external CRM/CMS webhook latency spikes.",
        ],
      },
    ],
    telemetryHighlights: [
      { label: "Primary Telephony Trunks", value: "Dual Carrier Gateways (PSTN)", badge: "CARRIER_GRADE" },
      { label: "Omnichannel Endpoints", value: "PSTN Voice + Meta WhatsApp API", badge: "DUAL_CHANNEL" },
      { label: "Linguistic Coverage", value: "12 Indic Languages & Dialects", badge: "MULTILINGUAL" },
      { label: "Transactional Integrity", value: "0 Hallucinated Confirmations", badge: "ZERO_HALLUCINATION" },
    ],
    qnaRouting: {
      overview:
        "To achieve sub-second conversational latency on routine inquiries without burning GPU compute or risking hallucinations, queries immediately enter a dense vector fast-path indexing pre-verified clinical and corporate FAQs in Qdrant (using BAAI/bge-m3 embeddings). Queries are routed into three strict confidence bands with deterministic emergency and transactional gates.",
      bands: [
        {
          band: "Direct Band",
          threshold: "Score ≥ 0.88 (Non-Emergency)",
          destination: "Direct Audio Return (Bypasses LLM, NMT & RAG)",
          latency: "~450–600ms",
          description: "Instantly plays pre-verified audio responses directly to the telephony trunk without invocation of language models or translation layers.",
        },
        {
          band: "Grounded Band",
          threshold: "0.65 ≤ Score < 0.88 (OR Emergency Flag)",
          destination: "Grounded LLM Synthesis (Single FAQ Context)",
          latency: "~1100–1400ms",
          description: "Injects a single verified FAQ chunk into the LLM context as a strict factual anchor, synthesizing natural spoken phrasing without hallucination risk.",
        },
        {
          band: "Miss Band",
          threshold: "Score < 0.65",
          destination: "Semantic Response Cache & Agent / RAG Loop",
          latency: "~1600–2100ms",
          description: "Falls back to semantic response cache (Qdrant cosine ≥ 0.92) or initiates multi-turn declarative agent loop with contextual vector retrieval.",
        },
      ],
      safetyOverride:
        "High-risk clinical and obstetric danger signs bypass open-ended generation entirely. Utterances matching emergency criteria trigger deterministic grounded safety responses or immediate human escalation, strictly prohibiting loose conversational chit-chat.",
      intentGate:
        "An upstream intent classifier serves as a strict gateway. Transactional and scheduling intents (e.g., booking an appointment) bypass the QnA fast-path entirely regardless of similarity scores, preventing a caller seeking a doctor from colliding with a general FAQ about appointment guidelines.",
    },
    designDecisions: [
      {
        title: "Provider Factory (Self-Hosted GPU vs. Cloud API Toggle)",
        pitch:
          "A unified lazy-singleton provider factory enables zero-code toggling between on-premise GPU inference and cloud APIs without altering the core real-time WebSocket router.",
        rationale:
          "Self-hosted NVIDIA Riva and IndicTrans2 on EC2 GPUs deliver 1.5s–1.8s TTFA with zero external network hops. When cloud elasticity or specialized Indic regional dialects are needed, switching to Sarvam AI takes an environment toggle (`PIPELINE_MODE=sarvam`) while retaining identical turn-logging, VAD, and RAG logic. Lazy singletons ensure the per-turn hot path remains branch-free and sub-millisecond.",
      },
      {
        title: "Declarative Flow State Machine + Intent Classification",
        pitch:
          "Replaced fragile procedural keyword matching with single-token LLM intent classification and declarative state machines defined as data.",
        rationale:
          "Keyword matching routinely broke when Indian callers politely addressed the agent as 'doctor' (a cultural greeting), triggering unwanted appointment booking routines. The single-token intent classifier features per-vertical intent scopes and flow-aware asymmetric fallback: mid-flow callers remain locked in their active booking flow, while out-of-flow queries smoothly navigate between FAQs and workflows. Separating step ordering and slot requirements into declarative schemas allows new verticals (hotel, real estate) to launch in hours without touching agent core code.",
      },
      {
        title: "Action Buffers (Zero-LLM Latency Masking Across 12 Indic Languages)",
        pitch:
          "Pre-localized transition audio phrases dispatched immediately on tool calls eliminate perceived dead air during 2–4s external API executions.",
        rationale:
          "When the voice agent executes an external database query or hospital calendar lookup, callers on feature phones often assume a dropped call if there is silence for >2.5s. We engineered pre-computed localized transition phrases ('Checking available slots for you...') across all 12 supported Indic languages. Dispatched immediately via tool callbacks to the TTS engine, this masks API latency with 0ms LLM overhead and zero prompt bloat.",
      },
      {
        title: "Asynchronous Outbox Queue for External CRM Synchronization",
        pitch:
          "Decoupled the synchronous telephony audio pipeline from external CRM/CMS webhooks using a resilient PostgreSQL transactional outbox pattern.",
        rationale:
          "External enterprise CRM and hospital management endpoints regularly experience p99 latency spikes of 2–5 seconds. Synchronous calls inside the telephony WebSocket handler stalled audio streaming frames and caused packet drops. The handler now commits outbox records (`crm_push_queue`) in ~2ms, while an asynchronous background worker handles polling, deduplication, and exponential backoff (up to 8 retries) to downstream CRM systems and the Meta WhatsApp API.",
      },
    ],
    productionChallenges: [
      {
        title: "Qdrant Cosine vs. ChromaDB L2 Threshold Inversion",
        scenario:
          "Following a vector database migration from ChromaDB to Qdrant, callers asking basic, pre-verified clinical FAQs suddenly received 'no information found' fallbacks.",
        rootCause:
          "ChromaDB evaluated distance via Euclidean L2 distance (where lower values represent higher similarity, requiring `distance <= threshold`). Qdrant Cosine returns similarity scores (where higher values represent closer matches). The ported code retained `score <= 0.35`, actively rejecting every high-confidence match in the corpus.",
        fix:
          "Inverted the comparator to `score >= threshold` and introduced automated ascending/descending invariant assertions in continuous integration test suites.",
      },
      {
        title: "The 'Doctor' Cultural Greeting False Positive",
        scenario:
          "Callers opening an inquiry with 'Doctor, I have a question about prenatal diet' were immediately hijacked into the appointment booking loop, which queried available physician slots.",
        rootCause:
          "Procedural keyword-based routing matched the word 'doctor' and tripped `use_agent=true`. In Indian conversational culture, 'doctor' or 'doctorji' is frequently used as a polite honorific address rather than a scheduling request.",
        fix:
          "Replaced keyword matching with single-token LLM intent classification featuring an explicit cultural addressee disambiguation guideline. This eliminated ~40% of false booking triggers in live production traffic.",
      },
      {
        title: "The Hallucinated Booking Confirmation",
        scenario:
          "A caller asked about availability. The agent invoked `get_available_doctors`, retrieved doctor names, and immediately told the caller: 'Your appointment with Dr. Ritu Sharma is confirmed! Reference number GMS-4782'—even though `book_appointment` was never executed.",
        rootCause:
          "Under unconstrained auto tool selection (`tool_choice='auto'`), 7B instruction-tuned LLMs conflate read-only informational search results with finalized transactional actions, fabricating reference codes out of thin air.",
        fix:
          "Engineered a two-tier hallucination guard. Tier 1 scans LLM drafts for confirmation language and rejects any turn without an executed completion tool, retrying with `tool_choice='required'`. Tier 2 bypasses LLM narration on tool completion entirely, returning the verified booking payload message verbatim to the caller with zero chance of fabricated reference numbers.",
      },
    ],
  },
  {
    slug: "rppg-health",
    title: "rPPG Health - Contactless Physiological Telemetry Engine",
    status: "CDSCO_IN_REVIEW",
    statusText: "[NEXT_STAGE // CDSCO_REGULATORY]",
    category: "Computer Vision & Medical AI",
    timeframe: "2026 - Present",
    summary:
      "AI-driven contactless physiological monitoring platform using remote photoplethysmography (rPPG) to extract blood volume pulse (BVP) waveforms directly from standard RGB webcams, with the next stage focused on CDSCO regulatory compliance.",
    metrics: [
      { label: "VIDEO_SAMPLING_RATE", value: 30, unit: "fps", description: "Standard consumer webcam compatibility" },
      { label: "SIGNAL_STABILITY_GAIN", value: 28, prefix: "+", unit: "%", description: "FaceMesh dynamic ROI auto-reanchoring" },
      { label: "PHYSICAL_CONTACT", value: 0, unit: "sensors", description: "100% optical contactless diagnostic" },
      { label: "HEART_RATE_MAE", value: 1.8, unit: "bpm", description: "Benchmarked against FDA-approved pulse oximeters" },
    ],
    architecture: {
      ingestion: [
        "Uncompressed 30 FPS RGB Camera Stream",
        "MediaPipe FaceMesh 468-Point Mesh Tracker",
        "Dynamic Forehead & Malar ROI Auto-Cropper",
        "Ambient Illumination & Motion Normalizer",
      ],
      inference: [
        "Plane-Orthogonal-to-Skin (POS) Algorithm",
        "Chrominance-Based (CHROM) Pulse Decomposition",
        "4th Order Butterworth Bandpass Filter (0.75-2.5Hz)",
        "Fast Fourier Transform (FFT) Power Peak Locator",
        "Random Forest Blood Pressure / Vitals Proxy Regressors",
      ],
      transport: [
        "FastAPI Streaming WebSocket Interface",
        "NumPy In-Memory High-Speed Circular Ring Buffer",
        "ZeroMQ IPC Data Bus for Multi-Process Isolation",
        "Encrypted SQLite Clinical Audit Log Ledger",
      ],
      client: [
        "Pure Canvas High-Performance BVP Waveform Renderer",
        "Live HRV Spectral Power Tachogram (RMSSD, LF/HF)",
        "Real-Time Systolic Peak Marker & Quality Indicator",
        "Audit-Grade Telemetry Inspector (Prep for CDSCO Track)",
      ],
    },
    systemLogs: [
      "[2026-02-02 11:04:01.012] OPTICAL_FEED: Camera locked @ 1920x1080 30.00 FPS (Lighting: 420 Lux)",
      "[2026-02-02 11:04:01.120] FACEMESH: 468 facial landmarks detected (Confidence: 0.984)",
      "[2026-02-02 11:04:01.185] ROI_ISOLATION: Forehead (P70-P107) + Dual Malar cheeks isolated",
      "[2026-02-02 11:04:01.300] POS_ENGINE: Skin reflection orthogonal projections calculated",
      "[2026-02-02 11:04:01.350] BANDPASS_FILTER: Butterworth [0.75Hz - 2.5Hz] attenuated high-freq motion noise",
      "[2026-02-02 11:04:01.420] SPECTRAL_FFT: Dominant pulse peak locked @ 1.216Hz -> Pulse: 73.0 BPM",
      "[2026-02-02 11:04:01.460] HRV_ESTIMATE: RMSSD: 41.8ms | LF/HF Ratio: 1.12 (Parasympathetic nominal)",
      "[2026-02-02 11:04:01.500] AUDIT_TELEMETRY: Frame signed with SHA-256 in prep for CDSCO review [VALIDATED]",
    ],
    technicalBreakdown: [
      {
        heading: "1. Solving Motion Artifacts & Ambient Noise",
        points: [
          "Developed dynamic ROI tracking using MediaPipe FaceMesh to maintain accurate malar/forehead spatial anchors through ±25° head yaw/pitch.",
          "Combined POS and CHROM algorithms with temporal smoothing to eliminate lighting flicker and low-frequency motion drift.",
          "Benchmarked against gold-standard clinical pulse oximeters, achieving Mean Absolute Error under 2.0 BPM across diverse skin tones.",
        ],
      },
      {
        heading: "2. Next Stage: CDSCO Regulatory Preparation",
        points: [
          "Structuring the data acquisition pipeline in alignment with upcoming CDSCO medical device regulatory standards.",
          "Implementing deterministic latency, SHA-256 frame signing, and immutable audit logs required for the CDSCO regulatory phase.",
        ],
      },
    ],
    telemetryHighlights: [
      { label: "Milestone", value: "Next Stage: CDSCO Regulatory", badge: "REGULATORY" },
      { label: "Hardware Requirement", value: "720p/1080p Standard Webcams", badge: "ZERO_COST_HW" },
      { label: "HRV Metric Output", value: "RMSSD, SDNN, LF/HF Power Ratio", badge: "CLINICAL_GRADE" },
    ],
  },
  {
    slug: "omniflix",
    title: "OmniFlix - Unified Cross-Domain Recommendation System",
    status: "DEPLOYED",
    statusText: "[PROTOTYPE // LOCAL_EVALUATION]",
    category: "Machine Learning & Recommenders",
    timeframe: "2025",
    summary:
      "Hybrid recommendation architecture unifying IMDb, TMDB, and MyAnimeList datasets into a multi-domain discovery engine using LightFM hybrid collaborative filtering and TF-IDF content similarity.",
    metrics: [
      { label: "DATA_SOURCES_MERGED", value: 3, unit: "domains", description: "IMDb, TMDB, and MyAnimeList schemas harmonized" },
      { label: "CATALOG_RECORDS", value: 140, unit: "k+", description: "Cleaned, deduplicated multimedia items" },
      { label: "INFERENCE_P99", value: 42, unit: "ms", description: "Sub-50ms recommendation response time" },
      { label: "RECOMMENDATION_HITRATE", value: 89, unit: "%", description: "Evaluated on Top-10 recall benchmarks" },
    ],
    architecture: {
      ingestion: [
        "IMDb Official TSV Dataset Dumps",
        "TMDB API Real-Time Metadata Synchronization",
        "MyAnimeList Comprehensive Profile Scrapers",
        "Cross-Domain Entity Disambiguation Pipeline",
      ],
      inference: [
        "LightFM Hybrid Matrix Factorization (WARP Loss)",
        "TF-IDF Vectorized Item Attribute Embeddings",
        "Cosine Similarity In-Memory Matrix Index",
        "Cold-Start Fallback Ranking Engine",
      ],
      transport: [
        "FastAPI High-Throughput REST Gateway",
        "Redis High-Speed Recommendations Cache",
        "Async Batch Score Evaluator",
        "Dockerized Scalable Deployment Pods",
      ],
      client: [
        "Unified Web Discovery Interface",
        "Cross-Domain Attribute Weight Inspector",
        "Interactive Latent Factor Explorer",
      ],
    },
    systemLogs: [
      "[2025-10-18 16:30:12.110] DATA_INGEST: Merging 142k items across Cinema, TV, and Anime taxonomies",
      "[2025-10-18 16:30:15.340] ENTITY_RESOLVE: Resolved 99.4% cross-platform title collisions",
      "[2025-10-18 16:30:18.890] MATRIX_BUILD: Constructed 140k x 85k user-item interaction sparse matrix",
      "[2025-10-18 16:30:20.450] MODEL_TRAIN: LightFM WARP optimization converged with precision@k = 0.892",
      "[2025-10-18 16:30:22.010] REDIS_CACHE: Pre-warmed top recommendations cluster (Latency: 12ms)",
      "[2025-10-18 16:30:24.000] HYBRID_ENGINE: Operational for cross-domain queries [STATUS: HEALTHY]",
    ],
    technicalBreakdown: [
      {
        heading: "1. Resolving Multi-Source Schema Sparsity",
        points: [
          "Developed custom normalization mappings across diverse rating scales (IMDb 1-10, TMDB percentage, MAL 1-10).",
          "Used LightFM hybrid factorization to incorporate metadata item features alongside interaction data, overcoming cold-start problems.",
        ],
      },
    ],
    telemetryHighlights: [
      { label: "Algorithm", value: "LightFM + TF-IDF (WARP Loss)", badge: "HYBRID_ML" },
      { label: "Matrix Sparsity", value: "99.82% Sparse Coo-Matrix", badge: "OPTIMIZED" },
    ],
  },
  {
    slug: "learning-system",
    title: "AI-Powered Personalized Learning & Mastery Platform",
    status: "DEPLOYED",
    statusText: "[DEVELOPMENT // v2.0_BUILD]",
    category: "Predictive Analytics & EdTech",
    timeframe: "2025",
    summary:
      "Data-driven learning recommendation engine that analyzes student performance metrics and real-time interaction telemetry to personalize study sequences and preempt knowledge drop-offs.",
    metrics: [
      { label: "MASTERY_ACCURACY", value: 94, unit: "%", description: "BKT knowledge state prediction accuracy" },
      { label: "DIAGNOSTIC_LATENCY", value: 1.2, unit: "s", description: "Real-time prerequisite path remediation" },
      { label: "COHORT_STUDENTS", value: 1200, unit: "users", description: "Evaluated in academic trial cohorts" },
      { label: "CURRICULUM_NODES", value: 24, unit: "nodes", description: "Interconnected knowledge graph topics" },
    ],
    architecture: {
      ingestion: [
        "Assessment Event Stream Telemetry (Time-to-Answer)",
        "Step-Level Error Code Ingestion Workers",
        "Knowledge Graph Curriculum Ontology",
      ],
      inference: [
        "Bayesian Knowledge Tracing (BKT) Engine",
        "Random Forest Early Drop-Out Classifier",
        "Dynamic Prerequisite Path Optimization Algorithm",
      ],
      transport: [
        "FastAPI Microservice Architecture",
        "PostgreSQL Analytics Event Ledger",
        "Power BI Embedded Real-Time Dashboards",
      ],
      client: [
        "Interactive Student Mastery Progression Tree",
        "Educator Diagnostic Telemetry Console",
        "Adaptive Quiz Question Injection Pipeline",
      ],
    },
    systemLogs: [
      "[2025-08-05 10:11:00.040] INGEST: Student assessment stream active (Cohort: CS_2026)",
      "[2025-08-05 10:11:01.210] BKT_EVAL: Knowledge mastery updated for Recursion: P(L)=0.78",
      "[2025-08-05 10:11:02.150] PREDICTIVE_ML: Identified risk of drop-off in Dynamic Programming module",
      "[2025-08-05 10:11:03.020] REPAIR_PATH: Injected micro-intervention into curriculum queue (3 review steps)",
      "[2025-08-05 10:11:04.100] TELEMETRY_DISPATCH: Educator dashboard updated via WebSocket [OK]",
    ],
    technicalBreakdown: [
      {
        heading: "1. Granular Knowledge Tracing",
        points: [
          "Calculated student mastery probabilities over time using Bayesian Knowledge Tracing with slip/guess probability modeling.",
          "Correlated response time and revision frequency to isolate superficial guessing from authentic conceptual understanding.",
        ],
      },
    ],
  },
  {
    slug: "financial-platform",
    title: "Financial Automation & Ledger Verification Engine",
    status: "DEPLOYED",
    statusText: "[ARCHITECTURE // PHASE_HANDOFF]",
    category: "Enterprise Systems & Financial Workflows",
    timeframe: "2024 - 2025",
    summary:
      "Enterprise frontend architecture and document pipeline for automated financial document processing, multi-party ledger approvals, and transaction validation.",
    metrics: [
      { label: "DOC_PARSE_SPEED", value: 450, unit: "ms", description: "Per-page structured extraction latency" },
      { label: "ERROR_RATE_CUT", value: 99.2, unit: "%", description: "Automated debit/credit consistency balance check" },
      { label: "AUDIT_COMPLIANCE", value: 100, unit: "%", description: "Immutable tamper-proof event logging" },
      { label: "BATCH_THROUGHPUT", value: 50, unit: "doc/s", description: "Parallel ingestion throughput" },
    ],
    architecture: {
      ingestion: [
        "Multi-Format PDF/TIFF Invoice Ingestion",
        "AWS S3 Secure Document Vault",
        "OCR LayoutLM Table & Entity Extractor",
      ],
      inference: [
        "Ledger Balance Rule Consistency Verifier",
        "Regular Expression & NER Entity Matcher",
        "Anomaly Detection for Duplicate Invoices",
      ],
      transport: [
        "Next.js Server Actions & Edge Middleware",
        "Apache Kafka High-Throughput Event Queue",
        "PostgreSQL Strict Foreign-Key Ledger DB",
      ],
      client: [
        "High-Density Data Grid with Keyboard Shortcuts",
        "Side-by-Side OCR Visual Bounding-Box Overlay",
        "Multi-Stage Approval State Machine",
      ],
    },
    systemLogs: [
      "[2025-06-12 14:02:10.050] DOC_RECV: Received 18-page multi-entity invoice package",
      "[2025-06-12 14:02:10.510] OCR_PARSE: LayoutLM extracted 142 line items with 99.91% confidence",
      "[2025-06-12 14:02:10.820] BALANCE_VERIFY: Debits == Credits verified against tax registry ($2,140,290.00)",
      "[2025-06-12 14:02:11.100] STATE_TRANSITION: Approval status updated: AWAITING_CONTROLLER_SIGN",
      "[2025-06-12 14:02:11.450] AUDIT_LEDGER: Immutable record cryptographic hash persisted to PostgreSQL [OK]",
    ],
    technicalBreakdown: [
      {
        heading: "1. Zero-Friction High-Density UI Architecture",
        points: [
          "Constructed high-density React data grids with virtualization to render thousands of financial records without frame drops.",
          "Built a synchronized side-by-side OCR bounding-box viewer allowing operators to audit parsed fields against raw scanned receipts in real time.",
        ],
      },
    ],
  },
];

export const TECH_STACK: StackCategory[] = [
  {
    category: "Languages & Core Runtimes",
    code: "RUNTIME_01",
    items: [
      { tool: "Python", description: "Core AI/ML pipelines, signal processing, FastAPI async APIs", flag: "Primary tool" },
      { tool: "TypeScript", description: "Next.js App Router, strict types, real-time client state", flag: "Primary tool" },
      { tool: "SQL", description: "Relational modeling, query optimization, high-throughput indexes", flag: "Primary tool" },
      { tool: "C++ (Basic)", description: "Low-level signal compute & CUDA kernel understanding", flag: "Comfortable" },
    ],
  },
  {
    category: "Voice AI & Audio Infrastructure",
    code: "VOICE_02",
    items: [
      { tool: "NVIDIA Riva Speech SDK", description: "TensorRT FastConformer ASR & low-latency neural TTS", flag: "Primary tool" },
      { tool: "IndicTrans2", description: "Bidirectional Hindi ↔ English translation (1B param models)", flag: "Primary tool" },
      { tool: "PSTN Telephony", description: "Carrier-grade SIP trunks, telephony gateways, 8kHz µ-law streams", flag: "Primary tool" },
      { tool: "LiveKit WebRTC", description: "Full-duplex real-time WebRTC audio streaming & room agents", flag: "Primary tool" },
      { tool: "faster-whisper", description: "Quantized Whisper models for edge/fallback transcription", flag: "Comfortable" },
      { tool: "Bhashini APIs", description: "Government Indian language API gateway failover", flag: "Comfortable" },
    ],
  },
  {
    category: "Inference Systems & LLMs",
    code: "INFERENCE_03",
    items: [
      { tool: "vLLM", description: "Continuous batching, PagedAttention, multi-GPU LLM serving", flag: "Primary tool" },
      { tool: "Qwen2.5-7B (GPTQ-Int4)", description: "Ultra-fast instruction following & JSON tool calling", flag: "Primary tool" },
      { tool: "Triton Inference Server", description: "Dynamic model batching & concurrent model orchestration", flag: "In production" },
      { tool: "Qdrant Vector DB", description: "Collection-isolated multi-tenant dense vector search & RAG", flag: "Primary tool" },
      { tool: "Ollama / llama.cpp", description: "Local prototyping & GGUF quantized model evaluation", flag: "Comfortable" },
    ],
  },
  {
    category: "Computer Vision & Medical Telemetry",
    code: "VISION_04",
    items: [
      { tool: "OpenCV", description: "Video frame processing, color space conversions, optical flow", flag: "Primary tool" },
      { tool: "MediaPipe FaceMesh", description: "468-point 3D facial landmark mesh tracking & dynamic ROI", flag: "Primary tool" },
      { tool: "rPPG Algorithms (POS / CHROM)", description: "Optical blood volume pulse extraction from RGB pixels", flag: "Primary tool" },
      { tool: "SciPy Signal Processing", description: "Butterworth bandpass filters, FFT peak analysis, HRV RMSSD", flag: "Primary tool" },
      { tool: "Scikit-Learn", description: "Random Forest physiological proxy regression & feature scoring", flag: "Primary tool" },
    ],
  },
  {
    category: "Backend, Infrastructure & Data",
    code: "INFRA_05",
    items: [
      { tool: "FastAPI", description: "Asynchronous REST endpoints, WebSockets, background task workers", flag: "Primary tool" },
      { tool: "PostgreSQL", description: "Multi-tenant schemas, connection pooling, ACID audit records", flag: "Primary tool" },
      { tool: "Redis", description: "In-memory caching, pub/sub event distribution, rate limiting", flag: "Primary tool" },
      { tool: "Docker", description: "Containerized GPU deployments, multi-stage reproducible builds", flag: "Primary tool" },
      { tool: "AWS (EC2 GPU, S3)", description: "GPU inference instances (G5/A10G), secure blob stores", flag: "In production" },
      { tool: "Linux / Bash", description: "Systemd services, NVIDIA driver management, shell automation", flag: "Primary tool" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "AI & ML Systems Engineer (Founding Team - 1 of 5)",
    organization: "Project No. 21 (Govt-Incubated HealthTech)",
    period: "Jan 2026 - Present",
    location: "New Delhi, India",
    tag: "FOUNDING_ENGINEER",
    details: [
      "One of five founding team engineers at a high-velocity government-incubated health-tech startup.",
      "Engineered contactless cardiovascular vitals pipeline using rPPG (remote photoplethysmography) to extract pulse waveforms from standard RGB cameras, achieving ~28% gain in signal stability.",
      "Architected carrier-grade real-time Voice AI conversational pipeline streaming over carrier PSTN telephony and WebRTC with sub-second turn latency.",
      "Hardening the physiological telemetry pipeline and audit logs as the next stage advances toward CDSCO regulatory compliance.",
    ],
    metrics: [
      { label: "TEAM_SIZE", value: "1 of 5 Engineers" },
      { label: "NEXT_STAGE", value: "CDSCO Regulatory" },
      { label: "SYSTEM_IMPACT", value: "Real-Time Health AI" },
    ],
  },
];

export const RECOGNITIONS: RecognitionItem[] = [
  {
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Greater Noida Institute of Technology (GNIOT), AKTU",
    period: "2022 - 2026",
    badge: "SGPA: 8.25 // FIRST_CLASS",
    details:
      "Specialization in Data Science & Machine Learning. Graduating First Division with deep focus on systems programming, data structures, and applied AI infrastructure.",
  },
  {
    title: "Sarvam CODE Beta Tester",
    subtitle: "Sarvam AI EPOCH Program (2026)",
    period: "2026",
    badge: "SECURITY_AND_QA",
    details:
      "Selected as specialized Beta Tester for Sarvam CODE CLI under Sarvam AI's EPOCH initiative. Executed rigorous multi-session stress testing, isolated 4 reproducible bug classes including 2 critical trust-affecting failures, and provided structured reproduction reports and fix patches.",
  },
];

export const COMPETITIONS: CompetitionItem[] = [
  {
    title: "Google Hackathon",
    meta: "AI Career Advisory Engine",
    category: "HACKATHON",
    description: "Architected dynamic skill-to-career trajectory recommendation graphs using graph neural structures.",
  },
  {
    title: "Smart India Hackathon (SIH 2024)",
    meta: "National Level Finalist",
    category: "NATIONAL_HACKATHON",
    description: "Built scalable computational solutions addressing complex real-world distributed challenges in health telemetry.",
  },
  {
    title: "The Big Biz Theory 2025",
    meta: "IIT Madras & TRAYA Innovation Summit",
    category: "INNOVATION_SUMMIT",
    description: "Defended commercial viability and technical scalability for computer vision diagnostic pipelines.",
  },
  {
    title: "Technical Design & Branding Head",
    meta: "Manan Club, GNIOT",
    category: "LEADERSHIP",
    description: "Directed branding, visual communications, and technical execution for college hackathons and engineering societies.",
  },
];

export interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  category: string;
  weight: "high" | "medium" | "low";
  pdfFileName: string;
  previewFileName: string;
  badge: string;
  description: string;
}

export const CERTIFICATES_DATA: CertificateItem[] = [
  // 1. Azure AI Essentials
  {
    id: "CERT_MSFT_AZURE_AI",
    name: "Microsoft Azure AI Essentials Workloads and Machine Learning",
    issuer: "Microsoft",
    category: "CLOUD_AI",
    weight: "high",
    pdfFileName: "CertificateOfCompletion_Microsoft Azure AI Essentials Workloads and Machine Learning on Azure.pdf",
    previewFileName: "CertificateOfCompletion_Microsoft Azure AI Essentials Workloads and Machine Learning on Azure.webp",
    badge: "MICROSOFT",
    description: "Enterprise machine learning workloads, cloud inference & AI systems architecture.",
  },

  // 2. The Big Biz Theory
  {
    id: "CERT_BIG_BIZZ_THEORY",
    name: "The Big Biz Theory 2025",
    issuer: "IIT Madras & Traya (Unstop)",
    category: "INNOVATION",
    weight: "medium",
    pdfFileName: "Big Bizz Theory [traya and unstop].pdf",
    previewFileName: "Big Bizz Theory [traya and unstop].webp",
    badge: "IIT_MADRAS",
    description: "Commercial strategy and technical viability defense for medical telemetry.",
  },

  // 3. Tata Job Simulation
  {
    id: "CERT_TATA_SIM",
    name: "Tata Job Simulation",
    issuer: "Tata / Forage",
    category: "SIMULATION",
    weight: "low",
    pdfFileName: "TATA Data Visualisation_MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_oKP9jfGd2Hvu9rmZS_1751890209686_completion_certificate.pdf",
    previewFileName: "TATA Data Visualisation_MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_oKP9jfGd2Hvu9rmZS_1751890209686_completion_certificate.webp",
    badge: "FORAGE",
    description: "Data visualization and executive insights simulation conducted on Forage.",
  },

  // 4. Programming with GenAI
  {
    id: "CERT_NPTEL_GENAI",
    name: "Programming with Generative AI",
    issuer: "NPTEL",
    category: "GENERATIVE_AI",
    weight: "low",
    pdfFileName: "Programming with Generative AI.pdf",
    previewFileName: "Programming with Generative AI.webp",
    badge: "NPTEL",
    description: "Foundational prompt programming and generative model architectures.",
  },

  // 5. IRE Journals Research
  {
    id: "CERT_IRE_JOURNALS",
    name: "IRE Journals Research Publication",
    issuer: "IRE Journals (ANG Publishing)",
    category: "RESEARCH",
    weight: "high",
    pdfFileName: "IRE Journals ANG Publishing.pdf",
    previewFileName: "IRE Journals ANG Publishing.webp",
    badge: "PEER_REVIEWED",
    description: "Published research contribution in peer-reviewed engineering journal.",
  },

  // 6. Google Hackathon
  {
    id: "CERT_GOOGLE_HACKATHON",
    name: "Google Hackathon (Hack2Skill)",
    issuer: "Google / Hack2Skill",
    category: "HACKATHON",
    weight: "medium",
    pdfFileName: "H2S Google Hackathon.pdf",
    previewFileName: "H2S Google Hackathon.webp",
    badge: "GOOGLE",
    description: "AI-based career advisory system using dynamic skill mapping.",
  },

  // 7. IITK DSA
  {
    id: "CERT_IITK_DSA",
    name: "Student Development Program on DSA",
    issuer: "E&ICT Academy, IIT Kanpur",
    category: "ALGORITHMS",
    weight: "medium",
    pdfFileName: "Student Development Program on DSA Certificate - E&ICT Academy, IIT Kanpur.pdf",
    previewFileName: "Student Development Program on DSA Certificate - E&ICT Academy, IIT Kanpur.webp",
    badge: "IIT_KANPUR",
    description: "Data structures, computational complexity, and algorithmic optimization.",
  },

  // 8. NPTEL Python Analytics
  {
    id: "CERT_NPTEL_PY_ANALYTICS",
    name: "Data Analytics with Python",
    issuer: "NPTEL / IIT",
    category: "DATA_SCIENCE",
    weight: "high",
    pdfFileName: "Data Analytics with Python.pdf",
    previewFileName: "Data Analytics with Python.webp",
    badge: "NPTEL_IIT",
    description: "Advanced computational data analytics, statistical modeling, and Python pipelines.",
  },

  // 9. IITK Data Science
  {
    id: "CERT_IITK_DATA_SCIENCE",
    name: "Data Science with Python",
    issuer: "E&ICT Academy, IIT Kanpur",
    category: "DATA_SCIENCE",
    weight: "medium",
    pdfFileName: "Data SCience with Python Certificate - E&ICT Academy, IIT Kanpur.pdf",
    previewFileName: "Data SCience with Python Certificate - E&ICT Academy, IIT Kanpur.webp",
    badge: "IIT_KANPUR",
    description: "Applied machine learning workflows, model evaluation, and feature engineering.",
  },

  // 10. IITK C/C++
  {
    id: "CERT_IITK_CPP",
    name: "C & C++ Systems Training",
    issuer: "IFACET, IIT Kanpur",
    category: "SYSTEMS",
    weight: "medium",
    pdfFileName: "C & C++ Training Certificate - IFACET IITK.pdf",
    previewFileName: "C & C++ Training Certificate - IFACET IITK.webp",
    badge: "IFACET_IITK",
    description: "Low-level systems programming, pointer management, and memory safety.",
  },

  // 11. Deloitte Job Simulation
  {
    id: "CERT_DELOITTE_SIM",
    name: "Deloitte Job Simulation",
    issuer: "Deloitte / Forage",
    category: "SIMULATION",
    weight: "low",
    pdfFileName: "DELOITTE Data Analytics_io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_oKP9jfGd2Hvu9rmZS_1751185110259_completion_certificate.pdf",
    previewFileName: "DELOITTE Data Analytics_io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_oKP9jfGd2Hvu9rmZS_1751185110259_completion_certificate.webp",
    badge: "FORAGE",
    description: "Data analytics forensic & audit telemetry simulation conducted on Forage.",
  },
];

export const CREDENTIALS = CERTIFICATES_DATA.map((c) => ({
  name: c.name,
  issuer: c.issuer,
  id: c.id,
}));


export const CONTACT_ENDPOINTS = [
  {
    protocol: "SMTP / EMAIL",
    label: "garvd2005@gmail.com",
    href: "mailto:garvd2005@gmail.com",
    type: "direct",
    command: "mail -s 'Engineering Inquiry' garvd2005@gmail.com",
    copyValue: "garvd2005@gmail.com",
    cmdColor: "text-[#00FF41]",
  },
  {
    protocol: "NET / LINKEDIN",
    label: "linkedin.com/in/garvdanwaniofficial",
    href: "https://linkedin.com/in/garvdanwaniofficial",
    type: "social",
    command: "open https://linkedin.com/in/garvdanwaniofficial",
    copyValue: "https://linkedin.com/in/garvdanwaniofficial",
    cmdColor: "text-blue-400",
  },
  {
    protocol: "GIT / GITHUB",
    label: "github.com/GarvD1101",
    href: "https://github.com/GarvD1101",
    type: "code",
    command: "git clone https://github.com/GarvD1101",
    copyValue: "https://github.com/GarvD1101",
    cmdColor: "text-fuchsia-400",
  },
];
