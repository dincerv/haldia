import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
  buildInboundAdminEmail,
  buildVisitorAutoReplyEmail,
  makeReferenceId,
} from "@/lib/email-templates";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/config";

const CONTACT_TO =
  process.env.CONTACT_TO_EMAIL ??
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
  "info@haldiapeyzaj.com";

const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL ?? "Haldia Peyzaj <onboarding@resend.dev>";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string;
  locale?: string;
};

function errorsFor(locale: Locale) {
  return getDictionary(locale).contact.errors;
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { error: errorsFor("tr").invalid },
      { status: 400 },
    );
  }

  const locale: Locale =
    body.locale && isLocale(body.locale) ? body.locale : "tr";
  const errors = errorsFor(locale);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: errors.config }, { status: 503 });
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: errors.required }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: errors.email }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: errors.tooLong }, { status: 400 });
  }

  const referenceId = makeReferenceId();
  const payload = { name, email, phone, message, referenceId };

  const adminMail = buildInboundAdminEmail(payload);
  const visitorMail = buildVisitorAutoReplyEmail(payload);
  const resend = new Resend(apiKey);

  const { error: adminError } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    replyTo: email,
    subject: adminMail.subject,
    text: adminMail.text,
    html: adminMail.html,
  });

  if (adminError) {
    console.error("Resend admin error:", adminError);
    return NextResponse.json({ error: errors.sendFailed }, { status: 502 });
  }

  const { error: visitorError } = await resend.emails.send({
    from: CONTACT_FROM,
    to: email,
    replyTo: CONTACT_TO,
    subject: visitorMail.subject,
    text: visitorMail.text,
    html: visitorMail.html,
  });

  if (visitorError) {
    console.error("Resend auto-reply error:", visitorError);
  }

  return NextResponse.json({ ok: true, referenceId });
}
