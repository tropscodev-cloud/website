import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { NodeField } from "@/components/NodeField";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";



function Index() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <NodeField className="pointer-events-none absolute inset-0 h-full w-full" />
        <div className="relative mx-auto max-w-[1400px] px-6 pb-28 pt-24 lg:px-12 lg:pb-40 lg:pt-36">
          <Reveal>
            <SectionLabel number="00" label="Index" />
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-10 max-w-5xl font-display text-[clamp(2.75rem,7vw,6.5rem)] font-light leading-[0.98] tracking-tight text-ink-deep">
              Context is the <em className="font-serif italic">unseen</em>{" "}
              architecture of meaning.
            </h1>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-12">
            <Reveal delay={0.2} className="md:col-span-5">
              <p className="font-body text-base leading-relaxed text-ink">
                URG-IS is a conceptual framework exploring how observations,
                environments, and interactions form relationships across time —
                and how those relationships, once understood, become
                intelligence in themselves.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="md:col-span-4 md:col-start-8">
              <p className="font-body text-sm leading-relaxed text-ink-mute">
                Not a product. Not a system. A way of perceiving the threads
                that already exist between things, and treating that fabric as
                the primary subject of inquiry.
              </p>
              <Link href="/concept"
                className="mt-8 inline-flex items-center gap-2 font-display text-sm text-ink-deep underline-offset-4 hover:underline"
              >
                Read the concept <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured / magazine grid */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <SectionLabel number="01" label="Premise" />
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.05] tracking-tight text-ink-deep md:text-5xl">
                The world is not made of facts. It is made of the spaces
                between them.
              </h2>
            </Reveal>

            <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
              <p className="font-body text-lg leading-relaxed text-ink">
                Every observation is incomplete on its own. What gives an
                observation weight is its position within a wider context — what
                surrounds it, what precedes it, what it quietly resembles.
              </p>
              <p className="mt-6 font-body text-base leading-relaxed text-ink-mute">
                URG-IS treats context not as decoration around data, but as the
                subject itself. The framework is concerned with the shape of
                connections, the texture of evolving environments, and the slow
                emergence of pattern.
              </p>
            </Reveal>
          </div>

          {/* Three editorial teasers */}
          <div className="mt-24 grid gap-px bg-rule md:grid-cols-3">
            {[
              {
                num: "02",
                label: "Concept",
                title: "A philosophy of association.",
                body: "Read the high-level perspective behind URG-IS — relationships, contextual layers, evolving environments.",
                href: "/concept",
              },
              {
                num: "03",
                label: "Capabilities",
                title: "What it makes thinkable.",
                body: "Broad, conceptual benefits — the kinds of questions a relationship-aware lens helps frame.",
                href: "/capabilities",
              },
              {
                num: "04",
                label: "Governance",
                title: "Restraint by design.",
                body: "How responsibility, ethics, and discretion are treated as foundational, not afterthought.",
                href: "/governance",
              },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 0.1}>
                <Link href={item.href}
                  className="group block h-full bg-paper p-10 transition-colors hover:bg-surface/60"
                >
                  <SectionLabel number={item.num} label={item.label} />
                  <h3 className="mt-8 font-display text-2xl font-light leading-snug tracking-tight text-ink-deep">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-ink-mute">
                    {item.body}
                  </p>
                  <div className="mt-10 font-display text-xs uppercase tracking-[0.22em] text-ink-mute group-hover:text-ink-deep">
                    Continue →
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pullquote */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-32 lg:px-12 lg:py-40">
          <Reveal>
            <SectionLabel number="05" label="Position" />
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-10 max-w-5xl font-display text-3xl font-light leading-[1.15] tracking-tight text-ink-deep md:text-5xl">
              <span className="text-ink-mute">“</span>To understand a thing is
              to understand its neighbours — and the silences between them.
              <span className="text-ink-mute">”</span>
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="label-eyebrow mt-10">URG-IS — Founding note</div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

export default Index;
