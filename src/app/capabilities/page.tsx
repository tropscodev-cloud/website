import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";



const ITEMS = [
  {
    num: "01",
    title: "Contextual coherence",
    body: "Treat observations as positions within a wider field, not as isolated points to be tallied.",
  },
  {
    num: "02",
    title: "Relational legibility",
    body: "Make the structure of associations between entities visible as a subject in its own right.",
  },
  {
    num: "03",
    title: "Evolving understanding",
    body: "Acknowledge that environments change, and that meaning shifts as their internal geometry shifts.",
  },
  {
    num: "04",
    title: "Attention to absence",
    body: "Treat what is not present as information — silences shape the contour of what is.",
  },
  {
    num: "05",
    title: "Restraint as principle",
    body: "Refuse the temptation of premature conclusions; allow patterns the time they need to declare themselves.",
  },
];

function CapabilitiesPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-[1400px] px-6 pb-24 pt-20 lg:px-12 lg:pb-40 lg:pt-28">
        <Reveal>
          <SectionLabel number="03" label="Capabilities" />
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1] tracking-tight text-ink-deep">
            What a relationship-aware lens makes thinkable.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl font-body text-base leading-relaxed text-ink-mute">
            These are conceptual postures, not features. They describe the kinds
            of questions URG-IS is built to take seriously.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px bg-rule md:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.num} delay={i * 0.06}>
              <div className="flex h-full flex-col bg-paper p-10 lg:p-14">
                <div className="font-display text-5xl font-light text-ink-deep/30">
                  {item.num}
                </div>
                <h3 className="mt-10 font-display text-2xl font-light leading-snug tracking-tight text-ink-deep">
                  {item.title}
                </h3>
                <p className="mt-4 font-body text-base leading-relaxed text-ink">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
          {/* Fill the last cell with a quiet manifesto */}
          <Reveal delay={ITEMS.length * 0.06}>
            <div className="flex h-full flex-col justify-between bg-surface/50 p-10 lg:p-14">
              <div className="label-eyebrow">Note</div>
              <p className="mt-10 font-display text-xl font-light italic leading-snug text-ink-deep">
                None of these are claims about what the framework does. They are
                claims about what it is for.
              </p>
            </div>
          </Reveal>
        </div>
      </article>
    </PageShell>
  );
}

export default CapabilitiesPage;
