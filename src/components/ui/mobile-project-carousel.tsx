"use client";

import { useId, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { PortfolioProject } from "@/data/portfolio";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

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
  const pathname = usePathname();
  const sliderId = useId().replace(/[:]/g, "");
  const prevClass = `mobile-project-prev-${sliderId}`;
  const nextClass = `mobile-project-next-${sliderId}`;
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale: AppLocale = routing.locales.includes(firstSegment as AppLocale)
    ? (firstSegment as AppLocale)
    : routing.defaultLocale;

  const cards = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        primaryLink: project.links[0] ?? null,
      })),
    [projects],
  );

  if (cards.length === 0) {
    return null;
  }

  const hasMultipleSlides = cards.length > 1;

  return (
    <section className="relative w-full min-w-0">
      <button
        type="button"
        className={`${prevClass} mobile-carousel-nav absolute left-2 top-[34%] z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[color:color-mix(in_oklab,var(--card)_84%,white)] text-[var(--ink)] shadow-lg shadow-[color:var(--shadow)]`}
        aria-label={t("previous")}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        className={`${nextClass} mobile-carousel-nav absolute right-2 top-[34%] z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[color:color-mix(in_oklab,var(--card)_84%,white)] text-[var(--ink)] shadow-lg shadow-[color:var(--shadow)]`}
        aria-label={t("next")}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <Swiper
        modules={[Autoplay, Navigation]}
        className="mobile-project-swiper w-full min-w-0"
        slidesPerView={1.08}
        slidesPerGroup={1}
        spaceBetween={16}
        grabCursor
        loop={false}
        rewind={hasMultipleSlides}
        watchOverflow
        observer
        observeParents
        autoplay={
          hasMultipleSlides
            ? {
                delay: 3200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                stopOnLastSlide: false,
              }
            : false
        }
        navigation={{
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }}
        breakpoints={{
          420: {
            slidesPerView: 1.16,
          },
          560: {
            slidesPerView: 1.32,
          },
          700: {
            slidesPerView: 1.55,
          },
        }}
      >
        {cards.map((project) => (
          <SwiperSlide key={project.id} className="!h-auto pb-2">
            <article className="overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--card)] shadow-xl shadow-[color:var(--shadow)]">
              <div className="relative aspect-[16/10] border-b border-[var(--border-soft)] bg-gradient-to-br from-white/70 via-[var(--accent-3)]/10 to-[var(--accent-2)]/10">
                <Image
                  src={project.image}
                  alt={`${project.title} cover`}
                  fill
                  sizes="84vw"
                  className="object-contain p-5"
                />
              </div>
              <div className="flex flex-col p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="min-h-[3.2rem] overflow-hidden font-display text-[clamp(1.15rem,5vw,1.45rem)] leading-tight text-[var(--ink)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                    {project.title}
                  </h3>
                  <span className="shrink-0 rounded-full border border-[var(--border-soft)] bg-white/75 px-2 py-0.5 text-[10px] text-[var(--muted)]">
                    {project.period}
                  </span>
                </div>
                <p className="mt-2 overflow-hidden text-sm leading-6 text-[var(--muted)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                  {project.type}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Link
                    href={`/${locale}/projects/${project.id}`}
                    className="inline-flex items-center rounded-full bg-[var(--ink)] px-3 py-1.5 text-xs font-semibold text-white"
                  >
                    {t("viewDetail")}
                  </Link>
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
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
