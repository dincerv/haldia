"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, User, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import type { Dictionary } from "@/i18n/tr";

const contacts = [
  {
    name: "Samet TAŞ",
    roleKey: "architect" as const,
    email: "samettas@haldiapeyzaj.com",
    phone: "0553 984 94 47",
    phoneHref: "tel:+905539849447",
  },
  {
    name: "Asım ÇAPKIN",
    roleKey: "sales" as const,
    email: "satis@haldiapeyzaj.com",
    phone: "0552 251 36 71",
    phoneHref: "tel:+905522513671",
  },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          phone: String(data.get("phone") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
          website: String(data.get("website") ?? "").trim(),
          locale: document.documentElement.lang === "en" ? "en" : "tr",
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        error?: string;
        referenceId?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(payload?.error ?? dict.contact.errors.generic);
        return;
      }

      form.reset();
      setReferenceId(payload?.referenceId ?? "");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(dict.contact.errors.network);
    }
  }

  return (
    <section id="iletisim" className="bg-forest-deep py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-mustard uppercase">
            {dict.contact.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            {dict.contact.title}
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            {dict.contact.subtitle}
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-5 lg:gap-14">
          <ScrollReveal className="space-y-4 lg:col-span-2">
            {contacts.map((person) => (
              <div
                key={person.email}
                className="border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-mustard/20 text-mustard-light">
                    <User size={18} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white">{person.name}</h3>
                    <p className="text-sm text-mustard-light">
                      {dict.contact.roles[person.roleKey]}
                    </p>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  <a
                    href={`mailto:${person.email}`}
                    className="flex min-h-11 items-center gap-2 break-all text-sm text-white/80 transition-colors hover:text-mustard-light"
                  >
                    <Mail size={16} className="shrink-0 text-mustard" />
                    {person.email}
                  </a>
                  <a
                    href={person.phoneHref}
                    className="flex min-h-11 items-center gap-2 text-sm text-white/80 transition-colors hover:text-mustard-light"
                  >
                    <Phone size={16} className="shrink-0 text-mustard" />
                    {person.phone}
                  </a>
                </div>
              </div>
            ))}
            <p className="text-xs text-white/45">
              {dict.contact.formNoteBefore}{" "}
              <a
                href="mailto:info@haldiapeyzaj.com"
                className="text-mustard-light hover:underline"
              >
                info@haldiapeyzaj.com
              </a>{" "}
              {dict.contact.formNoteAfter}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="border border-white/10 bg-white p-6 sm:p-8"
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 className="text-forest" size={48} />
                  <h3 className="mt-4 text-xl font-semibold text-forest">
                    {dict.contact.successTitle}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    {dict.contact.successBody}
                    {referenceId ? (
                      <>
                        <br />
                        {dict.contact.reference}:{" "}
                        <span className="font-semibold text-forest">
                          {referenceId}
                        </span>
                      </>
                    ) : null}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setReferenceId("");
                    }}
                    className="mt-6 text-sm font-medium text-forest underline-offset-4 hover:underline"
                  >
                    {dict.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <>
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute left-[-9999px] h-0 w-0 opacity-0"
                    aria-hidden="true"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block sm:col-span-1">
                      <span className="mb-1.5 block text-sm font-medium text-forest">
                        {dict.contact.name}
                      </span>
                      <input
                        required
                        name="name"
                        type="text"
                        autoComplete="name"
                        className="w-full border border-cream-dark bg-cream px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-forest"
                        placeholder={dict.contact.namePlaceholder}
                      />
                    </label>
                    <label className="block sm:col-span-1">
                      <span className="mb-1.5 block text-sm font-medium text-forest">
                        {dict.contact.email}
                      </span>
                      <input
                        required
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="w-full border border-cream-dark bg-cream px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-forest"
                        placeholder={dict.contact.emailPlaceholder}
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="mb-1.5 block text-sm font-medium text-forest">
                        {dict.contact.phone}
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="w-full border border-cream-dark bg-cream px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-forest"
                        placeholder={dict.contact.phonePlaceholder}
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="mb-1.5 block text-sm font-medium text-forest">
                        {dict.contact.message}
                      </span>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        className="w-full resize-y border border-cream-dark bg-cream px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-forest"
                        placeholder={dict.contact.messagePlaceholder}
                      />
                    </label>
                  </div>

                  {status === "error" && errorMessage ? (
                    <p
                      role="alert"
                      className="mt-4 text-sm font-medium text-red-700"
                    >
                      {errorMessage}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-forest px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-forest-light disabled:opacity-60 sm:w-auto"
                  >
                    <Send size={16} />
                    {status === "sending"
                      ? dict.contact.sending
                      : dict.contact.send}
                  </button>
                </>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
