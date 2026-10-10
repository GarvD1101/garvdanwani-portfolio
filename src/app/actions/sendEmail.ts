"use server";

import { Resend } from "resend";

export interface SendEmailPayload {
  name: string;
  email: string;
  organization?: string;
  contactHandle?: string;
  projectType: string;
  timeline: string;
  budget?: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  error?: string;
  data?: unknown;
}

export async function sendEmail(payload: SendEmailPayload): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing in environment variables.");
    return {
      success: false,
      error: "SERVER_CONFIG_ERROR: RESEND_API_KEY is not defined in environment.",
    };
  }

  const {
    name,
    email,
    organization,
    contactHandle,
    projectType,
    timeline,
    budget,
    message,
  } = payload;

  if (!name || typeof name !== "string" || !name.trim()) {
    return {
      success: false,
      error: "VALIDATION_FAILED: Name/Identity is required.",
    };
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return {
      success: false,
      error: "VALIDATION_FAILED: A valid email address is required for packet replies.",
    };
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return {
      success: false,
      error: "VALIDATION_FAILED: Message payload must be at least 10 characters.",
    };
  }

  const resend = new Resend(apiKey);
  const targetEmail = "garvd2005@gmail.com";
  const fromEmail = process.env.RESEND_FROM || "Portfolio Inquiry <onboarding@resend.dev>";
  const timestamp = new Date().toISOString();

  const formattedPayload = `
======================================================
NEW SYSTEM ENGAGEMENT TRANSMISSION // PORTFOLIO INQUIRY
======================================================
TIMESTAMP:           ${timestamp}
SENDER IDENTITY:     ${name.trim()}
ORGANIZATION:        ${organization ? organization.trim() : "N/A"}
REPLY EMAIL:         ${email.trim()}
DIRECT COMM CHANNEL: ${contactHandle ? contactHandle.trim() : "N/A"}

PROJECT SPECIFICATIONS:
------------------------------------------------------
PROJECT DOMAIN:      ${projectType || "General Systems Engineering"}
TARGET TIMELINE:     ${timeline || "Not Specified"}
BUDGET ESTIMATE:     ${budget || "Not Specified"}

MESSAGE PAYLOAD:
------------------------------------------------------
${message.trim()}

======================================================
DISPATCH ROUTE: Resend Server Action -> ${targetEmail}
======================================================
  `.trim();

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [targetEmail],
      replyTo: email.trim(),
      subject: `[SYSTEM_INQUIRY] ${name.trim()} // ${projectType || "New Project Transmission"}`,
      text: formattedPayload,
    });

    if (error) {
      console.error("Resend SDK dispatch error:", error);
      return {
        success: false,
        error: error.message || "Failed to dispatch email via Resend SDK.",
      };
    }

    return {
      success: true,
      data,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unexpected internal error during email dispatch.";
    console.error("Unexpected error in sendEmail action:", err);
    return {
      success: false,
      error: errorMsg,
    };
  }
}
