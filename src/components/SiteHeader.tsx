"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/concept", label: "Concept" },
  { href: "/problem", label: "Problem" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/applications", label: "Applications" },
  { href: "/governance", label: "Governance" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b hairline bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
        <Link href="/" className="flex items-baseline gap-2 font-display">
          <span className="text-xl tracking-tight text-ink-deep">URG</span>
          <span className="h-1 w-1 rounded-full bg-ink-deep" />
          <span className="text-xl tracking-tight text-ink-deep">IS</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={isActive ? "label-eyebrow text-ink-deep" : "label-eyebrow transition-colors hover:text-ink-deep"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden"
        >
          <div className="flex h-6 w-6 flex-col justify-center gap-1.5">
            <span className="h-px w-full bg-ink-deep" />
            <span className="h-px w-full bg-ink-deep" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t hairline bg-paper md:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-6">
            {NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={isActive ? "label-eyebrow text-ink-deep" : "label-eyebrow"}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
