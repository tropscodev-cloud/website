import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";



function ProblemPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-[1400px] px-6 pb-24 pt-20 lg:px-12 lg:pb-40 lg:pt-28">
        <Reveal>
          <SectionLabel number="02" label="Problem space" />
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1] tracking-tight text-ink-deep">
            We have more observation than ever, and less context than ever.
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-display text-2xl font-light leading-[1.4] tracking-tight text-ink-deep">
                Observation has multiplied. Context has thinned. The two are
                drifting apart, and the gap between them is where understanding
                quietly disappears.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 space-y-6 font-body text-base leading-relaxed text-ink">
              <p>
                Records arrive in volume, but they arrive flat. Stripped of the
                situation that produced them, stripped of the neighbours they
                once stood beside, stripped of the time they belong to. What
                remains is information without grounding.
              </p>
              <p>
                Disconnected observations invite confident-sounding conclusions
                that are quietly untrue. The shape of the surrounding terrain —
                what was nearby, what was changing, what was absent — is rarely
                preserved.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.2} className="border-t-2 border-ink-deep pt-6">
              <div className="label-eyebrow">Three quiet losses</div>
              <ol className="mt-8 space-y-8">
                {[
                  ["The loss of adjacency", "What stood beside a fact is no longer recoverable."],
                  ["The loss of duration", "What it meant at the time has been collapsed into the present."],
                  ["The loss of silence", "What was absent goes unnoticed, and absence is information."],
                ].map(([title, body], i) => (
                  <li key={title} className="border-b hairline pb-6">
                    <div className="font-display text-xs text-ink-mute">
                      0{i + 1}
                    </div>
                    <div className="mt-2 font-display text-lg font-light text-ink-deep">
                      {title}
                    </div>
                    <div className="mt-2 font-body text-sm leading-relaxed text-ink-mute">
                      {body}
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </article>
    </PageShell>
  );
}

export default ProblemPage;
