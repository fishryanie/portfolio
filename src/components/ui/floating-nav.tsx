"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type FloatingNavProps = {
  name: string;
  items: NavItem[];
  ctaHref: string;
  ctaLabel: string;
};

export function FloatingNav({ name, items, ctaHref, ctaLabel }: FloatingNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > 24);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`mx-auto mt-4 flex w-[min(1180px,95vw)] items-center justify-between gap-2 py-3 transition-all duration-300 ${
          isScrolled
            ? "rounded-full border border-[var(--border-soft)] bg-[color:var(--card)]/90 px-5 shadow-lg shadow-[color:var(--shadow)] backdrop-blur"
            : "px-1"
        }`}
      >
        <a
          href="#top"
          className="max-w-[42vw] truncate font-display text-[10px] uppercase tracking-[0.16em] text-[var(--ink)] sm:max-w-none sm:text-sm sm:tracking-[0.2em]"
        >
          {name}
        </a>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={ctaHref}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--accent)] px-3 py-2 text-[11px] font-semibold text-white transition-transform hover:-translate-y-0.5 sm:gap-2 sm:px-4 sm:text-xs"
        >
          <span className="sm:hidden">Liên hệ</span>
          <span className="hidden sm:inline">{ctaLabel}</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}
