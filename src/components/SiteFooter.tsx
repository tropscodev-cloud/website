import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto max-w-[1328px] px-6 py-16 lg:px-12 2xl:px-0">
        <div className="grid gap-x-12 gap-y-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="font-display text-2xl font-medium tracking-tight text-ink-deep">
              <span>URG . IS</span>
            </Link>
            <p className="mt-7 max-w-md font-body text-[15px] leading-relaxed text-ink-mute">
              A conceptual framework for relationship-awareness and contextual
              understanding across evolving environments.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-7">
            <div className="label-eyebrow mb-5">Navigate</div>
            <ul className="space-y-2.5 font-body text-[15px]">
              {[
                ["/concept", "Concept"],
                ["/problem", "Problem space"],
                ["/capabilities", "Capabilities"],
                ["/applications", "Applications"],
                ["/governance", "Governance"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link href={to} className="text-ink hover:text-ink-deep">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <div className="label-eyebrow mb-6">Inquire</div>
            <Link href="/contact"
              className="font-body text-[15px] text-ink-deep underline-offset-4 hover:underline"
            >
              Partnership & collaboration →
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t hairline pt-6 text-xs text-ink-mute md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} URG-IS. Conceptual framework.</div>
          <div className="label-eyebrow">Designed with restraint</div>
        </div>
      </div>
    </footer>
  );
}
