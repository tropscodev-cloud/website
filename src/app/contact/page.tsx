"use client";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { useState, type FormEvent } from "react";



function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell>
      <article className="mx-auto max-w-[1400px] px-6 pb-24 pt-20 lg:px-12 lg:pb-40 lg:pt-28">
        <Reveal>
          <SectionLabel number="06" label="Contact" />
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1] tracking-tight text-ink-deep">
            A conversation, before anything else.
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-display text-xl font-light leading-relaxed text-ink-deep">
                URG-IS engages with a small number of partners, institutions,
                and independent thinkers. We prefer slow correspondence to fast
                pitches.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 font-body text-base leading-relaxed text-ink-mute">
                If your interest is research, strategy, or a careful
                collaboration, we would like to hear from you. Tell us, in your
                own words, what you are working on and what brought you here.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 border-t hairline pt-6">
                <div className="label-eyebrow">Direct</div>
                <a
                  href="mailto:hello@urg-is.org"
                  className="mt-3 inline-block font-display text-xl text-ink-deep underline-offset-4 hover:underline"
                >
                  hello@urg-is.org
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.15}>
              {sent ? (
                <div className="border-t-2 border-ink-deep pt-8">
                  <div className="label-eyebrow">Received</div>
                  <p className="mt-6 font-display text-2xl font-light leading-snug text-ink-deep">
                    Thank you. Your note has been registered. We respond with
                    intention, which sometimes means slowly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="border-t-2 border-ink-deep pt-8"
                >
                  <div className="grid gap-8">
                    <Field name="name" label="Your name" />
                    <Field name="organization" label="Organization" />
                    <Field name="email" label="Email" type="email" />
                    <Field
                      name="message"
                      label="What brought you here?"
                      textarea
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-12 inline-flex items-center gap-3 border-b border-ink-deep pb-2 font-display text-sm tracking-wide text-ink-deep transition-opacity hover:opacity-70"
                  >
                    Send inquiry <span aria-hidden>→</span>
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </article>
    </PageShell>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea = false,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "mt-3 w-full border-0 border-b hairline bg-transparent py-3 font-body text-base text-ink-deep placeholder:text-ink-mute/60 focus:border-ink-deep focus:outline-none";
  return (
    <label className="block">
      <span className="label-eyebrow">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} />
      ) : (
        <input name={name} type={type} className={cls} />
      )}
    </label>
  );
}

export default ContactPage;
