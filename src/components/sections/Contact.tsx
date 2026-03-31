"use client";

import { FormEvent, useState } from "react";
import { LoaderCircle, Mail, MapPin, MessageCircle, Phone, Send, UserRound } from "lucide-react";
import SectionIntro from "@/components/sections/SectionIntro";
import { siteConfig } from "@/lib/site";

type FormStatus =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const contactMethods = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    accent: "text-cyan-300",
    surface: "bg-cyan-400/12",
  },
  {
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: siteConfig.phoneLink,
    icon: Phone,
    accent: "text-emerald-300",
    surface: "bg-emerald-400/12",
  },
  {
    label: "WhatsApp",
    value: "Quick chat for fast questions",
    href: siteConfig.whatsappLink,
    icon: MessageCircle,
    accent: "text-amber-300",
    surface: "bg-amber-400/12",
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: undefined,
    icon: MapPin,
    accent: "text-rose-300",
    surface: "bg-rose-400/12",
  },
];

export default function Contact() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error || "The form could not be delivered right now. Please email or WhatsApp me instead.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Your message was sent successfully. I’ll get back to you as soon as possible.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message. Please use email or WhatsApp instead.",
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="hero-glow right-[-7rem] top-10 h-72 w-72 bg-cyan-400/12" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionIntro
            eyebrow="Contact"
            title="Ready to improve visibility, lead quality, or campaign performance?"
            description="If you already know the bottleneck, send a quick note. If you’re not sure where the leak is, I can help identify the next highest-value fix."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const content = (
                <div className="soft-panel subtle-ring flex h-full items-start gap-4 rounded-[1.6rem] p-5">
                  <div className={`rounded-2xl p-3 ${method.surface}`}>
                    <Icon className={`h-5 w-5 ${method.accent}`} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                      {method.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-100">{method.value}</p>
                  </div>
                </div>
              );

              if (!method.href) {
                return <div key={method.label}>{content}</div>;
              }

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              );
            })}
          </div>

          <div className="glass-panel subtle-ring mt-6 rounded-[1.8rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
              What to include
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
              <li>The channel or problem you want to improve</li>
              <li>Your business type, market, or target location</li>
              <li>What success should look like over the next few months</li>
            </ul>
          </div>
        </div>

        <div className="glass-panel subtle-ring rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-400/12 p-3 text-cyan-300">
              <Send className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                Send a message
              </h3>
              <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
                This form uses real validation and only confirms once delivery succeeds.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="input-field"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="input-field"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-slate-200">
                Company or brand
              </label>
              <div className="relative">
                <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted-foreground)]" />
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Optional"
                  className="input-field pl-11"
                />
              </div>
            </div>

            <div className="hidden">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-200">
                What do you need help with?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Share your goals, current challenges, and what you want to improve."
                className="input-field resize-none"
              />
            </div>

            {status.type !== "idle" ? (
              <div
                className={`rounded-[1.2rem] border px-4 py-3 text-sm leading-6 ${
                  status.type === "success"
                    ? "border-emerald-300/20 bg-emerald-400/10 text-emerald-100"
                    : "border-rose-300/20 bg-rose-400/10 text-rose-100"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={pending}
              className="primary-button w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {pending ? (
                <>
                  <LoaderCircle className="h-5 w-5 animate-spin" />
                  Sending message...
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-5 w-5" />
                </>
              )}
            </button>

            <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
              If the form is temporarily unavailable, the fastest fallback is{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-cyan-200 underline underline-offset-4">
                email
              </a>{" "}
              or{" "}
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-200 underline underline-offset-4"
              >
                WhatsApp
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
