import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";



const PRINCIPLES = [
  ["Discretion", "Treat sensitivity as the default posture, not a layered-on protection."],
  ["Proportion", "Match attention to purpose; reject capability collected for its own sake."],
  ["Transparency of intent", "Be clear about why a question is being asked, even when the method is private."],
  ["Reversibility", "Prefer approaches that can be unwound, paused, or refused."],
];

function GovernancePage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-[1400px] px-6 pb-24 pt-20 lg:px-12 lg:pb-40 lg:pt-28">
        <Reveal>
          <SectionLabel number="05" label="Governance & ethics" />
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1] tracking-tight text-ink-deep">
            Restraint, treated as a first-class commitment.
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-display text-2xl font-light leading-[1.4] tracking-tight text-ink-deep">
                Working with context means working with material that deserves
                care. URG-IS treats ethics not as a final checklist, but as the
                soil the framework is grown in.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 space-y-6 font-body text-base leading-relaxed text-ink">
              <p>
                A relationship-aware perspective only becomes valuable when it
                is paired with a disciplined sense of what should not be
                pursued, what should not be persisted, and what should not be
                inferred.
              </p>
              <p>
                The questions a framework refuses to ask are as definitive as
                the ones it embraces. URG-IS is shaped by both.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.2}>
              <div className="label-eyebrow border-t-2 border-ink-deep pt-6">
                Operating principles
              </div>
              <dl className="mt-8 space-y-8">
                {PRINCIPLES.map(([term, body]) => (
                  <div key={term} className="border-b hairline pb-6">
                    <dt className="font-display text-lg font-light text-ink-deep">
                      {term}
                    </dt>
                    <dd className="mt-2 font-body text-sm leading-relaxed text-ink-mute">
                      {body}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </article>
    </PageShell>
  );
}

export default GovernancePage;
