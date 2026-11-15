"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", email: "", subject: "", message: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) errors.subject = "Please enter a subject.";

  if (values.message.trim().length < 10) {
    errors.message = "Your message should be at least 10 characters long.";
  }

  return errors;
}

const inputClass = (hasError: boolean) =>
  [
    "w-full rounded-lg border bg-ink/60 px-4 py-3 text-sm text-slate-50",
    "placeholder:text-slate-600 transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-lime-400/20",
    hasError
      ? "border-red-400/60 focus:border-red-400/60"
      : "border-white/10 focus:border-lime-400/60",
  ].join(" ");

const labelClass = "block text-xs font-semibold uppercase tracking-wider text-slate-400";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-red-400">
      {message}
    </p>
  );
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Move focus to the preview when it appears (screen-reader + keyboard friendly).
  useEffect(() => {
    if (submitted) previewRef.current?.focus();
  }, [submitted]);

  const handleChange = (field: keyof FormValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((previous) => ({ ...previous, [field]: event.target.value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = (Object.keys(nextErrors) as (keyof FormValues)[])[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    // No backend is configured — this is a local preview only, never a real send.
    setSubmitted(values);
  };

  const hasContactChannels = Boolean(
    site.contact.email ?? site.contact.phone ?? site.contact.whatsapp,
  );

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact" />

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact information — verified channels only */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-slate-50">
              Let&apos;s connect
            </h3>
            <p className="max-w-md leading-relaxed text-slate-400">
              The best way to reach me is through GitHub or LinkedIn. I&apos;m
              open to collaborations, learning opportunities, and building
              real-world projects.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-white/10 bg-surface text-lime-400">
                  <MapPin size={18} aria-hidden />
                </div>
                <div>
                  <p className={labelClass}>Location</p>
                  <p className="text-sm font-semibold text-slate-200">{site.location}</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-white/10 bg-surface text-lime-400">
                  <FaGithub size={18} aria-hidden />
                </div>
                <div>
                  <p className={labelClass}>GitHub</p>
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-slate-200 transition-colors hover:text-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400/70"
                  >
                    github.com/Asrafuz01
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-white/10 bg-surface text-lime-400">
                  <FaLinkedinIn size={18} aria-hidden />
                </div>
                <div>
                  <p className={labelClass}>LinkedIn</p>
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-slate-200 transition-colors hover:text-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400/70"
                  >
                    Asrafuz Zaman
                  </a>
                </div>
              </li>
            </ul>

            {!hasContactChannels && (
              <p className="text-xs text-slate-500">
                Direct email and phone details will be added here once they are
                ready to be published.
              </p>
            )}
          </div>

          {/* Form / local preview */}
          <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
            {submitted ? (
              <div
                ref={previewRef}
                tabIndex={-1}
                aria-label="Message preview"
                className="rounded-xl border border-lime-400/30 bg-ink/60 p-6 focus:outline-none"
              >
                <h4 className="text-base font-bold text-slate-50">
                  Message preview — local demo only
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  No backend is configured yet, so nothing was sent anywhere.
                  This is only a preview of your message.
                </p>
                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className={labelClass}>Name</dt>
                    <dd className="mt-1 text-slate-200">{submitted.name}</dd>
                  </div>
                  <div>
                    <dt className={labelClass}>Email</dt>
                    <dd className="mt-1 text-slate-200">{submitted.email}</dd>
                  </div>
                  <div>
                    <dt className={labelClass}>Subject</dt>
                    <dd className="mt-1 text-slate-200">{submitted.subject}</dd>
                  </div>
                  <div>
                    <dt className={labelClass}>Message</dt>
                    <dd className="mt-1 whitespace-pre-line leading-relaxed text-slate-200">
                      {submitted.message}
                    </dd>
                  </div>
                </dl>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(null);
                    setValues(initialValues);
                    // Return keyboard focus to the first field once the form re-renders,
                    // instead of dropping focus to <body> when this button unmounts.
                    requestAnimationFrame(() => {
                      document.getElementById("contact-name")?.focus();
                    });
                  }}
                  className="mt-8 rounded-lg border border-white/10 bg-surface px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400/70"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange("name")}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={`mt-2 ${inputClass(Boolean(errors.name))}`}
                  />
                  <FieldError id="contact-name-error" message={errors.name} />
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={`mt-2 ${inputClass(Boolean(errors.email))}`}
                  />
                  <FieldError id="contact-email-error" message={errors.email} />
                </div>

                <div>
                  <label htmlFor="contact-subject" className={labelClass}>
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={values.subject}
                    onChange={handleChange("subject")}
                    placeholder="What is this about?"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                    className={`mt-2 ${inputClass(Boolean(errors.subject))}`}
                  />
                  <FieldError id="contact-subject-error" message={errors.subject} />
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange("message")}
                    placeholder="Write your message here..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    className={`mt-2 resize-none ${inputClass(Boolean(errors.message))}`}
                  />
                  <FieldError id="contact-message-error" message={errors.message} />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-ink transition-colors hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400/70"
                >
                  <Send size={15} aria-hidden />
                  Preview message
                </button>
                <p className="text-center text-xs text-slate-500">
                  No backend is connected yet — submitting shows a local preview
                  only and sends nothing.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
