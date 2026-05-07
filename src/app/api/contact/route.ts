import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "wedorecover26@betterfuture26.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Brighter Futures <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !EMAIL_RE.test(email) ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Name, valid email, and message are required." },
      { status: 400 }
    );
  }

  const phoneText =
    typeof phone === "string" && phone.trim() ? phone.trim() : "(not provided)";

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `New contact form submission from ${name.trim()}`,
    text: [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Phone: ${phoneText}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
