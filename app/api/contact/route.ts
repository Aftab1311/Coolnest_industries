import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipient = process.env.CONTACT_EMAIL || "Coolnestindustries@gmail.com";
const productLabels: Record<string, string> = {
  "honeycomb-pad": "Honeycomb Cooling Pad",
  "air-cooler-pad": "Air Cooler Cooling Pad",
};

type EnquiryPayload = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  product?: string;
  application?: string;
  quantity?: string;
  message?: string;
  website?: string;
};

const clean = (value: unknown, maxLength = 500) => String(value ?? "").trim().slice(0, maxLength);

function getTransporter() {
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASS;

  if (!user || !password) return null;

  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: { user, pass: password },
    });
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass: password },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryPayload;

    // Honeypot field: silently accept automated submissions without sending mail.
    if (clean(body.website, 100)) return NextResponse.json({ ok: true });

    const enquiry = {
      name: clean(body.name, 120),
      company: clean(body.company, 160),
      phone: clean(body.phone, 60),
      email: clean(body.email, 160),
      product: clean(body.product, 120),
      application: clean(body.application, 120),
      quantity: clean(body.quantity, 100),
      message: clean(body.message, 1200),
    };

    if (!enquiry.name || !enquiry.phone || !enquiry.product || !enquiry.application || !enquiry.quantity) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (enquiry.email && !/^\S+@\S+\.\S+$/.test(enquiry.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const transporter = getTransporter();
    if (!transporter) {
      console.error("Contact form email is not configured. Set SMTP_USER and SMTP_PASS.");
      return NextResponse.json({ error: "Email service is not configured yet. Please call us or email Coolnestindustries@gmail.com." }, { status: 503 });
    }

    const lines = [
      "COOLNEST INDUSTRIES — QUOTE ENQUIRY",
      "",
      `Product: ${productLabels[enquiry.product] || enquiry.product}`,
      `Name: ${enquiry.name}`,
      `Company: ${enquiry.company || "Not provided"}`,
      `Phone: ${enquiry.phone}`,
      `Email: ${enquiry.email || "Not provided"}`,
      `Application: ${enquiry.application}`,
      `Quantity: ${enquiry.quantity}`,
      `Additional requirements: ${enquiry.message || "None"}`,
    ];

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipient,
      replyTo: enquiry.email || undefined,
      subject: `New cooling pad enquiry from ${enquiry.name}`,
      text: lines.join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed", error);
    return NextResponse.json({ error: "We could not send your enquiry right now. Please try again or email Coolnestindustries@gmail.com." }, { status: 500 });
  }
}
