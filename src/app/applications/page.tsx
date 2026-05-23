import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";



const DOMAINS = [
  {
    num: "01",
    name: "Research & inquiry",
    body: "Framing complex questions where the interesting structure lives in associations rather than in any single datum.",
  },
  {
    num: "02",
    name: "Strategy & foresight",
    body: "Reasoning about evolving environments where shifts in relationship matter more than shifts in headline numbers.",
  },
  {
    num: "03",
    name: "Cultural & social study",
    body: "Treating communities and institutions as living webs of association, sensitive to context and to time.",
  },
  {
    num: "04",
    name: "Design & systems thinking",
    body: "Composing artefacts and environments that respect the relational fabric they are dropped into.",
  },
];

function ApplicationsPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-[1400px] px-6 pb-24 pt-20 lg:px-12 lg:pb-40 lg:pt-28">
        <Reveal>
          <SectionLabel number="04" label="Applications" />
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1] tracking-tight text-ink-deep">
            Where this way of looking changes the question.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl font-body text-base leading-relaxed text-ink-mute">
            These are conceptual domains, sketched at the level of intent. They
            describe the spaces where URG-IS feels most at home.
          </p>
        </Reveal>

        <div className="mt-20 space-y-px bg-rule">
          {DOMAINS.map((d, i) => (
            <Reveal key={d.num} delay={i * 0.08}>
              <div className="grid gap-8 bg-paper p-10 md:grid-cols-12 lg:p-14">
                <div className="md:col-span-2">
                  <div className="font-display text-4xl font-light text-ink-deep/30">
                    {d.num}
                  </div>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl font-light tracking-tight text-ink-deep">
                    {d.name}
                  </h3>
                </div>
                <div className="md:col-span-5 md:col-start-8">
                  <p className="font-body text-base leading-relaxed text-ink">
                    {d.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </article>
    </PageShell>
  );
}

export default ApplicationsPage;

