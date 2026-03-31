import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: string | undefined) {
  return (value || "").replace(/\s+/g, " ").trim();
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const company = sanitize(body.company);
    const message = sanitize(body.message);
    const website = sanitize(body.website);

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (name.length < 2) {
      return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (message.length < 20) {
      return NextResponse.json(
        { error: "Please share a bit more detail so I can understand the request." },
        { status: 400 },
      );
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured yet on this site. Please use direct email or WhatsApp for now.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(resendKey);
    const fromAddress = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
    const toAddress = process.env.CONTACT_TO_EMAIL || siteConfig.email;
    const subject = `New portfolio enquiry from ${name}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const { data } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject,
      text,
    });

    if (!data?.id) {
      return NextResponse.json(
        { error: "The message could not be delivered right now. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while sending the message. Please try again later." },
      { status: 500 },
    );
  }
}
