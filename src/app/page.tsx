import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { NodeField } from "@/components/NodeField";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";



function Index() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-69px)] overflow-hidden border-b hairline">
        <NodeField className="pointer-events-none absolute inset-0 h-full w-full" density={42} />
        <div className="relative mx-auto max-w-[1328px] px-6 pb-20 pt-36 lg:px-12 lg:pb-24 lg:pt-[148px] 2xl:px-0">
          <Reveal>
            <SectionLabel number="00" label="Index" />
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-12 max-w-[1030px] font-display text-[clamp(3.75rem,5.55vw,6.35rem)] font-light leading-[1.01] tracking-tight text-ink-deep">
              Context is the <em className="font-serif italic">unseen</em>{" "}
              architecture of meaning.
            </h1>
          </Reveal>

          <div className="mt-20 grid gap-10 md:grid-cols-12 lg:mt-[82px]">
            <Reveal delay={0.2} className="md:col-span-5">
              <p className="max-w-[540px] font-body text-[17px] leading-[1.55] text-ink">
                URG-IS is a conceptual framework exploring how observations,
                environments, and interactions form relationships across time —
                and how those relationships, once understood, become
                intelligence in themselves.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="md:col-span-4 md:col-start-8">
              <p className="max-w-[520px] font-body text-[15px] leading-[1.6] text-ink-mute">
                Not a product. Not a system. A way of perceiving the threads
                that already exist between things, and treating that fabric as
                the primary subject of inquiry.
              </p>
              <Link href="/concept"
                className="mt-8 inline-flex items-center gap-2 font-body text-[15px] text-ink-deep underline-offset-4 hover:underline"
              >
                Read the concept <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured / magazine grid */}
      <section>
        <div className="mx-auto max-w-[1328px] px-6 py-28 lg:px-12 lg:py-[124px] 2xl:px-0">
          <div className="grid gap-16 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <SectionLabel number="01" label="Premise" />
              <h2 className="mt-9 max-w-[540px] font-display text-[clamp(2.5rem,3.1vw,3.05rem)] font-light leading-[1.06] tracking-tight text-ink-deep">
                The world is not made of facts. It is made of the spaces
                between them.
              </h2>
            </Reveal>

            <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
              <p className="max-w-[620px] font-body text-[19px] leading-[1.55] text-ink">
                Every observation is incomplete on its own. What gives an
                observation weight is its position within a wider context — what
                surrounds it, what precedes it, what it quietly resembles.
              </p>
              <p className="mt-7 max-w-[620px] font-body text-[17px] leading-[1.55] text-ink-mute">
                URG-IS treats context not as decoration around data, but as the
                subject itself. The framework is concerned with the shape of
                connections, the texture of evolving environments, and the slow
                emergence of pattern.
              </p>
            </Reveal>
          </div>

          {/* Three editorial teasers */}
          <div className="mt-28 grid md:grid-cols-3 md:divide-x md:divide-rule">
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
                  className="group block h-full border-t hairline px-10 py-10 transition-colors hover:bg-surface/45 md:border-t-0"
                >
                  <SectionLabel number={item.num} label={item.label} />
                  <h3 className="mt-9 font-display text-[25px] font-light leading-snug tracking-tight text-ink-deep">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[360px] font-body text-[15px] leading-[1.55] text-ink-mute">
                    {item.body}
                  </p>
                  <div className="label-eyebrow mt-11 group-hover:text-ink-deep">
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
        <div className="mx-auto min-h-[660px] max-w-[1328px] px-6 py-24 lg:px-12 lg:py-[88px] 2xl:px-0">
          <Reveal>
            <SectionLabel number="05" label="Position" />
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-11 max-w-[1040px] font-display text-[clamp(2.6rem,3.3vw,3.45rem)] font-light leading-[1.05] tracking-tight text-ink-deep">
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
