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
    title: "Multi-Tenant Real-Time Voice AI + RAG Telephony Pipeline",
    status: "PRODUCTION_ACTIVE",
    statusText: "[PRODUCTION // ACTIVE_TRAFFIC]",
    category: "Real-Time Telephony & Voice AI",
    timeframe: "2025 - 2026",
    summary:
      "Enterprise voice telephony platform handling real inbound/outbound PSTN calls over Exotel IVR, streaming vector knowledge retrieval with Qdrant, and executing sub-second conversational turns with an 80%+ reduction in end-to-end latency.",
    metrics: [
      { label: "AVG_TURN_LATENCY", value: 2.4, unit: "s", description: "Down from ~12s legacy pipeline, 1.5s best case" },
      { label: "LATENCY_REDUCTION", value: 80, prefix: "-", unit: "%", description: "Aggressive async streaming & TensorRT optimizations" },
      { label: "FIRST_CHUNK_ASR", value: 150, unit: "ms", description: "NVIDIA Riva FastConformer TensorRT engine" },
      { label: "CONCURRENT_STREAMS", value: 128, unit: "ch", description: "Full-duplex WebRTC & Exotel telephony trunks" },
    ],
    architecture: {
      ingestion: [
        "Unstructured.io Doc Parsers (PDF/OCR/DOCX)",
        "Dense BGE-Small/Base Multi-Tenant Embeddings",
        "Qdrant Vector Cluster (Collection-Isolated)",
        "PostgreSQL Metadata & ACL Ledger",
      ],
      inference: [
        "NVIDIA Riva FastConformer TensorRT ASR (~150ms)",
        "IndicTrans2 1B (Hindi ↔ English Bidirectional)",
        "Qwen2.5-7B-Instruct-GPTQ-Int4 (vLLM Engine)",
        "Continuous Batching & PagedAttention KV-Cache",
        "FastPitch / Tacotron2 Low-Latency Neural TTS",
      ],
      transport: [
        "Exotel PSTN Telephony Trunk (8kHz µ-law audio)",
        "Full-Duplex WebRTC & Fast Binary WebSockets",
        "FastAPI Async Event Gateway & Health Monitors",
        "Redis Session Store & Conversation Turn Buffers",
      ],
      client: [
        "LiveKit WebRTC Agent Integration Layer",
        "Real-Time Telephony Diagnostic Stream Dashboard",
        "IVR Automated Action Dispatcher (Calendaring/CRM)",
        "Bhashini Cloud API Automated Failover Router",
      ],
    },
    systemLogs: [
      "[2026-01-14 09:22:10.104] TELEPHONY_INGEST: Exotel PSTN trunk connected (8kHz µ-law audio payload)",
      "[2026-01-14 09:22:10.252] RIVA_ASR: FastConformer transcribed first chunk in 148ms [LANG: HINDI/HIN_ENG]",
      "[2026-01-14 09:22:10.364] NMT_TRANSLATE: IndicTrans2-1B translated inbound utterance to EN (112ms)",
      "[2026-01-14 09:22:10.402] VECTOR_SEARCH: Qdrant retrieved top-3 corpus contexts (score: 0.912, 38ms)",
      "[2026-01-14 09:22:10.567] VLLM_CORE: Qwen2.5-7B TTFT reached 165ms; first token streamed to TTS buffer",
      "[2026-01-14 09:22:10.747] TTS_SYNTH: FastPitch generated 24kHz synthesized audio frame (180ms)",
      "[2026-01-14 09:22:10.748] AUDIO_OUT: Full turn completed in 644ms (Well within 1.5s real-time target)",
      "[2026-01-14 09:22:11.002] TOOL_DISPATCH: CRM appointment confirmed & WhatsApp notification queued",
    ],
    technicalBreakdown: [
      {
        heading: "1. Elimination of Sequential REST Latency",
        points: [
          "Replaced multi-hop third-party HTTP endpoints with colocated self-hosted Docker containers on AWS EC2 GPU instances.",
          "Implemented pipelined streaming: TTS synthesis begins streaming audio chunks before LLM completes the full sentence.",
          "Migrated from faster-whisper (~400ms) to TensorRT-optimized NVIDIA Riva (~150ms).",
        ],
      },
      {
        heading: "2. Multilingual Telephony Optimization",
        points: [
          "Standardized Exotel IVR 8kHz audio resampled in memory for Riva ASR with zero file-system writes.",
          "Integrated IndicTrans2 with Bhashini API failover for robust Hindi and Indian English translation.",
          "Qdrant collection isolation ensuring multi-tenant data privacy across medical and commercial clients.",
        ],
      },
    ],
    telemetryHighlights: [
      { label: "Telephony Protocol", value: "SIP / WebSockets (8kHz G.711u)", badge: "CARRIER_GRADE" },
      { label: "TTS Generation Speed", value: "12x Real-Time Factor (RTF)", badge: "GPU_ACCELERATED" },
      { label: "VLLM PagedAttention", value: "Active (Zero OOM in peak loads)", badge: "STABLE" },
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
      { tool: "Exotel Telephony", description: "Carrier-grade PSTN trunks, SIP gateways, 8kHz µ-law streams", flag: "Primary tool" },
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
      "Architected carrier-grade real-time Voice AI conversational pipeline streaming over Exotel PSTN telephony and WebRTC with sub-second turn latency.",
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
