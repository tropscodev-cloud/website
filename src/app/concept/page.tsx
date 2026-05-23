import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";



function ConceptPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-[1400px] px-6 pb-24 pt-20 lg:px-12 lg:pb-40 lg:pt-28">
        <Reveal>
          <SectionLabel number="01" label="Concept" />
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1] tracking-tight text-ink-deep">
            A relationship-centric way of perceiving the world.
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-3">
            <Reveal>
              <div className="label-eyebrow">Reading</div>
              <p className="mt-3 font-body text-xs text-ink-mute">
                Approx. four minutes
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <Reveal>
              <p className="font-display text-2xl font-light leading-[1.4] tracking-tight text-ink-deep">
                URG-IS begins with a quiet observation: meaning rarely sits
                inside a single fact. It accumulates between facts, in the
                geometry of how they sit beside one another.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 space-y-6 font-body text-base leading-relaxed text-ink">
              <p>
                Where conventional approaches treat observations as discrete
                points to be collected, URG-IS treats them as positions within
                an evolving terrain — defined as much by their neighbours, their
                history, and their absences as by themselves.
              </p>
              <p>
                The framework is interested in three things: the contextual
                layers that surround an observation, the associations that bind
                observations to one another, and the slow rhythms by which
                those associations change.
              </p>
              <p>
                From this perspective, intelligence is less about gathering and
                more about listening — to the structure that already exists
                between things, and to the way that structure breathes.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-16 border-l-2 border-ink-deep pl-6">
              <p className="font-display text-xl font-light italic leading-snug text-ink-deep">
                Contextual awareness is not a feature. It is a stance.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="mt-16 space-y-6 font-body text-base leading-relaxed text-ink">
              <p>
                URG-IS is presented here as a conceptual framework — a way of
                framing inquiry rather than a system to be operated. Its purpose
                is to clarify what becomes thinkable when relationships, rather
                than records, are placed at the centre of attention.
              </p>
            </Reveal>
          </div>
        </div>
      </article>
    </PageShell>
  );
}

export default ConceptPage;
