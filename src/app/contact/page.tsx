"use client";

import { useState } from "react";
import Link from "next/link";
import { sendEmail } from "@/app/actions/sendEmail";

interface ContactFormState {
  name: string;
  organization: string;
  email: string;
  contactHandle: string;
  projectDomains: string[];
  otherDomainText: string;
  timeline: string;
  budget: string;
  message: string;
}

interface SubmittedPayload {
  name: string;
  organization?: string;
  email: string;
  contactHandle?: string;
  projectType: string;
  timeline: string;
  budget?: string;
  message: string;
}

const INITIAL_FORM: ContactFormState = {
  name: "",
  organization: "",
  email: "",
  contactHandle: "",
  projectDomains: ["Voice AI & Telephony"],
  otherDomainText: "",
  timeline: "Immediate (< 2 Weeks)",
  budget: "Open for Discussion",
  message: "",
};

const PROJECT_DOMAINS = [
  { id: "voice-ai", label: "Voice AI & Telephony", desc: "Riva, IndicTrans2, vLLM, WebRTC" },
  { id: "rppg", label: "Computer Vision & rPPG", desc: "Contactless Vitals, PyVHR, Next: CDSCO Track" },
  { id: "inference", label: "GPU Inference & Triton", desc: "TensorRT, Continuous Batching, KV-Cache" },
  { id: "rag-systems", label: "Full-Stack AI & RAG", desc: "Qdrant Vector DB, FastAPI, Event Streaming" },
  { id: "founding", label: "Founding / Full-Time Role", desc: "Core Engineering 0-to-1 Leadership" },
  { id: "advisory", label: "Architecture Advisory", desc: "Systems Audit, Code Review & Strategy" },
  { id: "other", label: "Other", desc: "Custom Architecture, R&D, or Specialized Scope" },
];

const TIMELINE_OPTIONS = [
  "Immediate (< 2 Weeks)",
  "1 - 2 Months",
  "Q3 / Q4 2026 Planning",
  "Exploratory / Advisory Discussion",
];

const BUDGET_OPTIONS = [
  "Open for Discussion",
  "< $10,000 (Sprint / Audit)",
  "$10,000 - $30,000 (Production Pilot)",
  "$30,000+ (Full System Build)",
  "Full-Time Founding Role (Equity + Cash)",
];

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<SubmittedPayload | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleDomain = (domainLabel: string) => {
    setForm((prev) => {
      const exists = prev.projectDomains.includes(domainLabel);
      if (exists) {
        return {
          ...prev,
          projectDomains: prev.projectDomains.filter((d) => d !== domainLabel),
        };
      } else {
        return {
          ...prev,
          projectDomains: [...prev.projectDomains, domainLabel],
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!form.name.trim()) {
      setErrorMessage("Please enter your name or designation.");
      return;
    }
    if (!form.email.trim() || !form.email.includes("@")) {
      setErrorMessage("Please enter a valid reply email address.");
      return;
    }
    if (form.projectDomains.length === 0) {
      setErrorMessage("Please select at least one project domain (or choose 'Other').");
      return;
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      setErrorMessage("Please provide at least a few words describing your project.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formattedDomains = form.projectDomains
        .map((domain) => {
          if (domain === "Other" && form.otherDomainText.trim()) {
            return `Other (${form.otherDomainText.trim()})`;
          }
          return domain;
        })
        .join(", ");

      const payload: SubmittedPayload = {
        name: form.name,
        organization: form.organization,
        email: form.email,
        contactHandle: form.contactHandle,
        projectType: formattedDomains,
        timeline: form.timeline,
        budget: form.budget,
        message: form.message,
      };

      const result = await sendEmail(payload);

      if (result.success) {
        setSubmittedData(payload);
      } else {
        setErrorMessage(result.error || "Failed to dispatch transmission packet.");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setErrorMessage("Network error: Could not reach transmission gateway.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const constructMailtoBackup = (data: SubmittedPayload) => {
    const subject = encodeURIComponent(`[PROJECT_INQUIRY] ${data.name} // ${data.projectType}`);
    const body = encodeURIComponent(
      `SENDER: ${data.name}\nORGANIZATION: ${data.organization || "N/A"}\nEMAIL: ${data.email}\nDIRECT COMM: ${data.contactHandle || "N/A"}\n\nPROJECT DOMAINS: ${data.projectType}\nTIMELINE: ${data.timeline}\nBUDGET: ${data.budget || "N/A"}\n\nPROJECT OVERVIEW:\n${data.message}`
    );
    return `mailto:garvd2005@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-8 pb-16 font-mono text-white max-w-4xl mx-auto">
      {/* ─── Breadcrumb / Top Telemetry Strip ─── */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-3 gap-2 text-xs">
        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="text-gray-400 hover:text-[#FF7E00] flex items-center gap-1 transition-colors"
          >
            <span>&larr;</span>
            <span>[RETURN_TO_DASHBOARD]</span>
          </Link>
          <span className="text-gray-600">//</span>
          <span className="text-[#FF7E00] font-bold">DISPATCH_PROJECT_INQUIRY</span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-gray-500 hidden sm:inline">TARGET_INBOX: garvd2005@gmail.com</span>
          <span className="text-[#00FF41] font-bold border border-[#00FF41]/40 bg-[#001708] px-1.5 py-0.5">
            STATUS: PORT_443_ONLINE
          </span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <div className="space-y-2">
        <div className="text-xs text-[#FF7E00] uppercase tracking-wider flex items-center gap-1.5">
          <span>&gt;</span>
          <span>SYSTEMS_COMMUNICATION_PROTOCOL // DIRECT_TRANSMISSION</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-sans font-bold text-white tracking-tight">
          Initiate Project Engagement
        </h1>
        <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed max-w-2xl">
          Looking to bring me onto a project or engineering role? Fill in your project specifications,
          timeline, and contact details. Submissions route directly to my personal inbox.
        </p>
      </div>

      {/* ─── Success Confirmation Screen ─── */}
      {submittedData ? (
        <div className="border border-[#00FF41]/60 bg-[#001407] p-6 md:p-8 space-y-6 relative">
          <div className="absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-[#00FF41]" />

          <div className="flex items-center gap-2.5">
            <span className="h-3 w-3 bg-[#00FF41] animate-pulse" />
            <h2 className="text-lg md:text-xl font-bold text-[#00FF41] tracking-wide">
              TRANSMISSION_DELIVERED // STATUS: 200_OK
            </h2>
          </div>

          <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed">
            Your project brief has been captured and routed to{" "}
            <span className="text-white font-mono font-bold">garvd2005@gmail.com</span>. I review all technical
            inquiries personally and typically reply within 12–24 hours.
          </p>

          {/* Packet Summary Box */}
          <div className="border border-gray-800 bg-[#050505] p-4 text-xs font-mono space-y-2">
            <div className="text-gray-500 text-[10px] uppercase border-b border-gray-850 pb-1">
              // TRANSMITTED_PAYLOAD_SUMMARY
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-gray-300">
              <div>
                <span className="text-gray-500">SENDER:</span> {submittedData.name}
              </div>
              <div>
                <span className="text-gray-500">REPLY:</span> {submittedData.email}
              </div>
              <div className="sm:col-span-2">
                <span className="text-gray-500">DOMAINS:</span> {submittedData.projectType}
              </div>
              <div>
                <span className="text-gray-500">TIMELINE:</span> {submittedData.timeline}
              </div>
              <div>
                <span className="text-gray-500">BUDGET:</span> {submittedData.budget || "Open for Discussion"}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/"
              className="px-4 py-2 bg-[#FF7E00] text-black font-bold hover:bg-[#e67200] transition-colors text-xs"
            >
              &larr; BACK_TO_PORTFOLIO
            </Link>
            <a
              href={constructMailtoBackup(submittedData)}
              className="px-4 py-2 bg-black border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-colors text-xs"
            >
              OPEN_IN_MAIL_APP (BACKUP_COPY) ↗
            </a>
            <button
              onClick={() => {
                setSubmittedData(null);
                setForm(INITIAL_FORM);
              }}
              className="px-4 py-2 text-gray-400 hover:text-white text-xs underline"
            >
              SEND_ANOTHER_MESSAGE
            </button>
          </div>
        </div>
      ) : (
        /* ─── Form Container ─── */
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="p-3 border border-red-500/50 bg-red-950/40 text-red-400 text-xs flex items-center gap-2">
              <span className="font-bold">! [ERROR]:</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* 1. Identity Credentials */}
          <div className="border border-gray-800 bg-[#060606] p-5 md:p-6 space-y-4 relative">
            <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#FF7E00]" />
            <div className="text-xs font-bold text-gray-300 border-b border-gray-850 pb-2 flex items-center justify-between">
              <span className="text-[#FF7E00]">// 01_SENDER_IDENTITY</span>
              <span className="text-[10px] text-gray-500">[PRIMARY_CREDENTIALS]</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] text-gray-400 uppercase mb-1">
                  Your Name / Identity <span className="text-[#FF7E00]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Alexander Wright"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#030303] border border-gray-800 px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#FF7E00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] text-gray-400 uppercase mb-1">
                  Organization / Startup (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g., Stealth AI Labs / Enterprise"
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  className="w-full bg-[#030303] border border-gray-800 px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#FF7E00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] text-gray-400 uppercase mb-1">
                  Email Address <span className="text-[#FF7E00]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#030303] border border-gray-800 px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#FF7E00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] text-gray-400 uppercase mb-1">
                  Direct Channel (Phone / TG / LinkedIn)
                </label>
                <input
                  type="text"
                  placeholder="e.g., +1 555-0192 or linkedin.com/in/..."
                  value={form.contactHandle}
                  onChange={(e) => setForm({ ...form, contactHandle: e.target.value })}
                  className="w-full bg-[#030303] border border-gray-800 px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#FF7E00] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* 2. Target Project Domain */}
          <div className="border border-gray-800 bg-[#060606] p-5 md:p-6 space-y-4 relative">
            <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#FF7E00]" />
            <div className="text-xs font-bold text-gray-300 border-b border-gray-850 pb-2 flex items-center justify-between">
              <span className="text-[#FF7E00]">// 02_PROJECT_DOMAIN</span>
              <span className="text-[10px] text-gray-500">[SYSTEM_CLASSIFICATION // MULTI_SELECT]</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {PROJECT_DOMAINS.map((domain) => {
                const isSelected = form.projectDomains.includes(domain.label);
                return (
                  <button
                    type="button"
                    key={domain.id}
                    onClick={() => toggleDomain(domain.label)}
                    className={`p-3 text-left border transition-all text-xs flex flex-col justify-between ${
                      isSelected
                        ? "border-[#FF7E00] bg-[#161200] text-white"
                        : "border-gray-850 bg-[#030303] text-gray-400 hover:border-gray-700 hover:text-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[11px]">{domain.label}</span>
                      <span
                        className={`h-3 w-3 border flex items-center justify-center text-[9px] font-mono leading-none transition-colors ${
                          isSelected
                            ? "border-[#FF7E00] bg-[#FF7E00] text-black font-bold"
                            : "border-gray-700 bg-transparent text-transparent"
                        }`}
                      >
                        ✓
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-sans">{domain.desc}</span>
                  </button>
                );
              })}
            </div>

            {form.projectDomains.includes("Other") && (
              <div className="pt-2 border-t border-gray-850/60 space-y-1.5">
                <label className="block text-[11px] text-gray-400 uppercase">
                  Custom Domain / Project Scope Specification <span className="text-[#FF7E00]">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Autonomous Agents, Web3 Infra, Edge Hardware, Custom AI..."
                  value={form.otherDomainText}
                  onChange={(e) => setForm({ ...form, otherDomainText: e.target.value })}
                  className="w-full bg-[#030303] border border-gray-800 px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#FF7E00] transition-colors"
                />
              </div>
            )}
          </div>

          {/* 3. Timeline & Budget Parameters */}
          <div className="border border-gray-800 bg-[#060606] p-5 md:p-6 space-y-4 relative">
            <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#FF7E00]" />
            <div className="text-xs font-bold text-gray-300 border-b border-gray-850 pb-2 flex items-center justify-between">
              <span className="text-[#FF7E00]">// 03_ENGAGEMENT_PARAMETERS</span>
              <span className="text-[10px] text-gray-500">[RESOURCE_ALLOCATION]</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] text-gray-400 uppercase mb-1">
                  Expected Timeline / Urgency
                </label>
                <select
                  value={form.timeline}
                  onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                  className="w-full bg-[#030303] border border-gray-800 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF7E00] transition-colors"
                >
                  {TIMELINE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-black text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-gray-400 uppercase mb-1">
                  Budget / Scope Band (Optional)
                </label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full bg-[#030303] border border-gray-800 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF7E00] transition-colors"
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-black text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 4. Transmission Payload */}
          <div className="border border-gray-800 bg-[#060606] p-5 md:p-6 space-y-4 relative">
            <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#FF7E00]" />
            <div className="text-xs font-bold text-gray-300 border-b border-gray-850 pb-2 flex items-center justify-between">
              <span className="text-[#FF7E00]">// 04_PROJECT_OVERVIEW &amp; TECHNICAL_BRIEF</span>
              <span className="text-[10px] text-gray-500">
                {form.message.length} CHARS
              </span>
            </div>

            <div>
              <label className="block text-[11px] text-gray-400 uppercase mb-1">
                Project Scope, Challenges &amp; Goals <span className="text-[#FF7E00]">*</span>
              </label>
              <textarea
                required
                rows={6}
                placeholder="Detail what you're building, the core bottlenecks you need solved (e.g., latency reduction, audio streaming, rPPG signal filtering, GPU pipeline deployment), and the role you envision me taking..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#030303] border border-gray-800 p-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#FF7E00] transition-colors leading-relaxed"
              />
            </div>
          </div>

          {/* 5. Dispatch Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="text-[11px] text-gray-500 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00FF41]" />
              <span>TLS_1.3_ENCRYPTED // ROUTING_TO_GARVD2005@GMAIL.COM</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setForm(INITIAL_FORM)}
                className="px-3 py-2 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-colors text-xs"
              >
                [CLEAR_BUFFER]
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-[#FF7E00] text-black font-bold hover:bg-[#e67200] disabled:opacity-50 transition-colors text-xs tracking-wider flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-2 w-2 rounded-full bg-black animate-ping" />
                    <span>[DISPATCHING_PACKET...]</span>
                  </>
                ) : (
                  <span>DISPATCH_TRANSMISSION_PACKET &rarr;</span>
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
