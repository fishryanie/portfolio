"use client";

import { ExternalLink } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import type { ProjectLink } from "@/data/portfolio";

type ProjectLinkQrGridProps = {
  links: ProjectLink[];
};

function formatLinkText(link: string): string {
  try {
    const url = new URL(link);
    return `${url.hostname}${url.pathname === "/" ? "" : url.pathname}`;
  } catch {
    return link;
  }
}

export function ProjectLinkQrGrid({ links }: ProjectLinkQrGridProps) {
  if (links.length === 0) {
    return <p className="mt-2 text-sm text-[var(--muted)]">Internal project / private distribution (NDA).</p>;
  }

  return (
    <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {links.map((link) => (
        <article
          key={`${link.label}-${link.link}`}
          className="rounded-xl border border-[var(--border-soft)] bg-white/70 p-3"
        >
          <div className="flex items-start gap-3">
            <div className="shrink-0 rounded-lg border border-[var(--border-soft)] bg-white p-1">
              <QRCodeSVG value={link.link} size={64} level="M" includeMargin />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                {link.label}
              </p>
              <a
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex max-w-full items-center gap-1.5 text-xs font-medium text-[var(--ink)] hover:text-[var(--accent)]"
                title={link.link}
              >
                <span className="truncate">{formatLinkText(link.link)}</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
