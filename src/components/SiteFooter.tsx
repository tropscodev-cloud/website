import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-baseline gap-2 font-display">
              <span className="text-2xl tracking-tight text-ink-deep">URG</span>
              <span className="h-1 w-1 rounded-full bg-ink-deep" />
              <span className="text-2xl tracking-tight text-ink-deep">IS</span>
            </Link>
            <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-ink-mute">
              A conceptual framework for relationship-awareness and contextual
              understanding across evolving environments.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-7">
            <div className="label-eyebrow mb-4">Navigate</div>
            <ul className="space-y-2 font-body text-sm">
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

          <div className="md:col-span-3">
            <div className="label-eyebrow mb-4">Inquire</div>
            <Link href="/contact"
              className="font-body text-sm text-ink underline-offset-4 hover:underline"
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
