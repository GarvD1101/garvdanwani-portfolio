import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      organization,
      contactHandle,
      projectType,
      timeline,
      budget,
      message,
    } = body;

    // Strict validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "VALIDATION_FAILED: Name/Identity is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "VALIDATION_FAILED: A valid email address is required for packet replies." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "VALIDATION_FAILED: Message payload must be at least 10 characters." },
        { status: 400 }
      );
    }

    const targetInbox = "garvd2005@gmail.com";
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
PROJECT DOMAIN:      ${projectType || "General AI Systems Engineering"}
TARGET TIMELINE:     ${timeline || "Not Specified"}
BUDGET ESTIMATE:     ${budget || "Not Specified"}

MESSAGE PAYLOAD:
------------------------------------------------------
${message.trim()}

======================================================
DISPATCH ROUTE: /api/contact -> ${targetInbox}
======================================================
    `.trim();

    // 1. Try Web3Forms if configured (Zero domain verification needed, delivers straight to inbox)
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3FormsKey) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `[PORTFOLIO_INQUIRY] ${name} // ${projectType || "New Project Transmission"}`,
            from_name: name,
            replyto: email,
            name: name,
            email: email,
            organization: organization || "N/A",
            direct_channel: contactHandle || "N/A",
            project_type: projectType || "N/A",
            timeline: timeline || "N/A",
            budget: budget || "N/A",
            message: formattedPayload,
          }),
        });

        const data = await res.json();
        if (data.success) {
          return NextResponse.json({
            success: true,
            provider: "web3forms",
            target: targetInbox,
            timestamp,
          });
        } else {
          console.error("Web3Forms dispatch error:", data);
        }
      } catch (err) {
        console.error("Web3Forms network failure:", err);
      }
    }

    // 2. Try Resend if configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM || "onboarding@resend.dev",
            to: targetInbox,
            reply_to: email,
            subject: `[PORTFOLIO_INQUIRY] ${name} // ${projectType || "New Project"}`,
            text: formattedPayload,
          }),
        });

        if (res.ok) {
          return NextResponse.json({
            success: true,
            provider: "resend",
            target: targetInbox,
            timestamp,
          });
        }
      } catch (err) {
        console.error("Resend dispatch error:", err);
      }
    }

    // 3. Fallback / Local Development Mode:
    // Log the complete packet to the console so developers never lose a transmission
    console.log("\n[SYSTEM_INBOX_SIMULATION] Transmission logged to server:");
    console.log(formattedPayload);

    return NextResponse.json({
      success: true,
      simulation: true,
      target: targetInbox,
      timestamp,
      message:
        "Transmission recorded. To receive automatic delivery in your email, provide WEB3FORMS_ACCESS_KEY or RESEND_API_KEY in .env.local.",
    });
  } catch (error) {
    console.error("API /contact error:", error);
    return NextResponse.json(
      { error: "PACKET_DISPATCH_FAILED: Internal server transmission error." },
      { status: 500 }
    );
  }
}
