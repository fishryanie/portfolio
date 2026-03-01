"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import type { PortfolioProject } from "@/data/portfolio";

type MobileProjectCarouselProps = {
  projects: PortfolioProject[];
};

function clampLinkLabel(link: string): string {
  try {
    const parsed = new URL(link);
    return `${parsed.hostname}${parsed.pathname === "/" ? "" : parsed.pathname}`;
  } catch {
    return link;
  }
}

export function MobileProjectCarousel({ projects }: MobileProjectCarouselProps) {
  const t = useTranslations("MobileProjectCarousel");
  const viewportRef = useRef<HTMLDivElement>(null);
  const autoPauseUntilRef = useRef(0);

  const cards = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        primaryLink: project.links[0] ?? null,
      })),
    [projects],
  );

  const getCardOffsets = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return [];
    }

    const cardsInDom = Array.from(
      viewport.querySelectorAll<HTMLElement>("[data-carousel-card]"),
    );
    return cardsInDom.map((card) => card.offsetLeft);
  }, []);

  const pauseAutoplay = useCallback((durationMs = 5500) => {
    autoPauseUntilRef.current = Date.now() + durationMs;
  }, []);

  const getClosestIndex = useCallback((scrollLeft: number, offsets: number[]) => {
    if (offsets.length === 0) {
      return 0;
    }

    let bestIndex = 0;
    let bestDistance = Math.abs(offsets[0] - scrollLeft);

    for (let index = 1; index < offsets.length; index += 1) {
      const distance = Math.abs(offsets[index] - scrollLeft);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    }

    return bestIndex;
  }, []);

  const paginateByCard = useCallback(
    (step: 1 | -1, isUserAction: boolean) => {
      const viewport = viewportRef.current;
      if (!viewport) {
        return;
      }

      const offsets = getCardOffsets();
      if (offsets.length < 2) {
        return;
      }

      const currentIndex = getClosestIndex(viewport.scrollLeft, offsets);
      const nextIndex =
        (currentIndex + step + offsets.length) % offsets.length;

      if (isUserAction) {
        pauseAutoplay();
      }

      viewport.scrollTo({
        left: offsets[nextIndex],
        behavior: "smooth",
      });
    },
    [getCardOffsets, getClosestIndex, pauseAutoplay],
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || cards.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (Date.now() < autoPauseUntilRef.current) {
        return;
      }

      paginateByCard(1, false);
    }, 3600);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [cards.length, paginateByCard]);

  if (cards.length === 0) {
    return null;
  }

  return (
    <section className="relative">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
          {t("label")}
        </p>
        <p className="text-xs text-[var(--muted)]">{t("hint")}</p>
      </div>

      <button
        type="button"
        onClick={() => paginateByCard(-1, true)}
        className="absolute left-2 top-[34%] z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[color:color-mix(in_oklab,var(--card)_84%,white)] text-[var(--ink)] shadow-lg shadow-[color:var(--shadow)]"
        aria-label={t("previous")}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={() => paginateByCard(1, true)}
        className="absolute right-2 top-[34%] z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[color:color-mix(in_oklab,var(--card)_84%,white)] text-[var(--ink)] shadow-lg shadow-[color:var(--shadow)]"
        aria-label={t("next")}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div
        ref={viewportRef}
        className="no-scrollbar -mx-[2.5vw] flex snap-x snap-mandatory gap-4 overflow-x-auto px-[2.5vw] pb-2"
        onTouchStart={() => pauseAutoplay()}
      >
        {cards.map((project) => (
          <article
            key={project.id}
            data-carousel-card
            className="w-[84vw] max-w-[352px] shrink-0 snap-center"
          >
            <div className="h-[500px] overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--card)] shadow-xl shadow-[color:var(--shadow)]">
              <div className="relative aspect-[16/10] border-b border-[var(--border-soft)] bg-gradient-to-br from-white/70 via-[var(--accent-3)]/10 to-[var(--accent-2)]/10">
                <Image
                  src={project.image}
                  alt={`${project.title} cover`}
                  fill
                  sizes="84vw"
                  className="object-contain p-5"
                />
              </div>
              <div className="flex h-[280px] flex-col p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="min-h-[3.2rem] overflow-hidden font-display text-[clamp(1.15rem,5vw,1.45rem)] leading-tight text-[var(--ink)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                    {project.title}
                  </h3>
                  <span className="shrink-0 rounded-full border border-[var(--border-soft)] bg-white/75 px-2 py-0.5 text-[10px] text-[var(--muted)]">
                    {project.period}
                  </span>
                </div>
                <p className="mt-2 min-h-[3rem] overflow-hidden text-sm leading-6 text-[var(--muted)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                  {project.type}
                </p>
                <p className="mt-2 min-h-[5.25rem] overflow-hidden text-[15px] leading-7 text-[var(--muted)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                  {project.description}
                </p>

                <div className="mt-auto pt-4">
                  {project.primaryLink ? (
                    <a
                      href={project.primaryLink.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[var(--border-soft)] bg-white/85 px-3 py-1.5 text-xs font-semibold text-[var(--ink)]"
                      title={project.primaryLink.link}
                    >
                      <span className="truncate">{clampLinkLabel(project.primaryLink.link)}</span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  ) : (
                    <p className="text-xs text-[var(--muted)]">{t("privateProject")}</p>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
