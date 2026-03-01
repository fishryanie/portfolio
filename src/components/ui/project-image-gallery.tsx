"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useTranslations } from "next-intl";

type ProjectImageGalleryProps = {
  title: string;
  coverImage: string;
  galleryImages: string[];
};

export function ProjectImageGallery({
  title,
  coverImage,
  galleryImages,
}: ProjectImageGalleryProps) {
  const t = useTranslations("ProjectImageGallery");
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const thumbnailTrackRef = useRef<HTMLDivElement | null>(null);

  const imageList = useMemo(() => {
    const output: string[] = [];
    const seen = new Set<string>();

    for (const image of [coverImage, ...galleryImages]) {
      if (!seen.has(image)) {
        seen.add(image);
        output.push(image);
      }
    }

    return output;
  }, [coverImage, galleryImages]);

  const thumbnailImages = useMemo(
    () => imageList.filter((imagePath) => imagePath !== coverImage),
    [imageList, coverImage],
  );

  const wrapIndex = useCallback(
    (index: number) => {
      const total = imageList.length;
      if (total === 0) {
        return 0;
      }

      return (index % total + total) % total;
    },
    [imageList.length],
  );

  const openImage = useCallback(
    (imagePath: string) => {
      const index = imageList.indexOf(imagePath);
      if (index < 0) {
        return;
      }

      setDirection(0);
      setActiveIndex(index);
    },
    [imageList],
  );

  const closeViewer = useCallback(() => {
    setActiveIndex(null);
    setDirection(0);
  }, []);

  const paginate = useCallback(
    (step: number) => {
      setDirection(step);
      setActiveIndex((prev) => {
        if (prev === null) {
          return 0;
        }

        return wrapIndex(prev + step);
      });
    },
    [wrapIndex],
  );

  const scrollThumbnails = useCallback((step: number) => {
    const track = thumbnailTrackRef.current;
    if (!track) {
      return;
    }

    track.scrollBy({
      left: step * 280,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowRight") {
        paginate(1);
      }

      if (event.key === "ArrowLeft") {
        paginate(-1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeViewer, paginate]);

  const activeImage = activeIndex !== null ? imageList[activeIndex] : null;
  const visibleIndex = activeIndex ?? 0;

  return (
    <>
      <div className="min-w-0 border-b border-[var(--border-soft)] lg:border-b-0 lg:border-r">
        <button
          type="button"
          onClick={() => openImage(coverImage)}
          className="group relative block aspect-[4/3] min-h-[220px] w-full cursor-zoom-in bg-gradient-to-br from-white/70 via-[var(--accent-3)]/10 to-[var(--accent-2)]/15 text-left"
          aria-label={t("mainImage", { title })}
        >
          <Image
            src={coverImage}
            alt={`${title} image`}
            fill
            sizes="(max-width: 1024px) 100vw, 340px"
            className="object-contain p-6"
          />
          <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
            <ZoomIn className="h-3.5 w-3.5" />
            {t("view")}
          </span>
        </button>

        {thumbnailImages.length > 0 ? (
          <div className="relative border-t border-[var(--border-soft)] bg-white/55 px-3 py-2.5">
            <button
              type="button"
              onClick={() => scrollThumbnails(-1)}
              className="absolute left-3 top-1/2 z-10 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/90 text-[var(--ink)] shadow-sm"
              aria-label={t("previous")}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollThumbnails(1)}
              className="absolute right-3 top-1/2 z-10 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/90 text-[var(--ink)] shadow-sm"
              aria-label={t("next")}
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div
              ref={thumbnailTrackRef}
              className="no-scrollbar min-w-0 w-full max-w-full touch-pan-x overflow-x-auto overscroll-x-contain px-10 pb-0.5 pt-0.5 [-webkit-overflow-scrolling:touch]"
            >
              <div className="inline-flex snap-x gap-2">
                {thumbnailImages.map((imageSrc, index) => (
                  <button
                    key={`${title}-gallery-${imageSrc}`}
                    type="button"
                    onClick={() => openImage(imageSrc)}
                    className="group relative aspect-[9/16] w-[88px] shrink-0 snap-start overflow-hidden rounded-xl border border-[var(--border-soft)] bg-white text-left sm:w-[96px]"
                    aria-label={t("screenshot", { index: index + 1, title })}
                  >
                    <Image
                      src={imageSrc}
                      alt={`${title} screenshot ${index + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={closeViewer}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: "easeOut" }}
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeViewer}
                className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/65 text-white transition-colors hover:bg-black/80"
                aria-label={t("close")}
              >
                <X className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => paginate(-1)}
                className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
                aria-label={t("previous")}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => paginate(1)}
                className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
                aria-label={t("next")}
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="relative h-[70dvh] w-full overflow-hidden rounded-2xl border border-white/25 bg-[#f3efe8] sm:h-[78vh]">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={activeImage}
                    custom={direction}
                    variants={{
                      enter: (currentDirection: number) => ({
                        x: shouldReduceMotion
                          ? 0
                          : currentDirection > 0
                            ? 90
                            : currentDirection < 0
                              ? -90
                              : 0,
                        opacity: 0,
                      }),
                      center: {
                        x: 0,
                        opacity: 1,
                      },
                      exit: (currentDirection: number) => ({
                        x: shouldReduceMotion
                          ? 0
                          : currentDirection > 0
                            ? -90
                            : currentDirection < 0
                              ? 90
                              : 0,
                        opacity: 0,
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: "easeOut" }}
                    drag={shouldReduceMotion ? false : "x"}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={shouldReduceMotion ? 0 : 0.12}
                    className="absolute inset-0 cursor-grab active:cursor-grabbing"
                    onDragEnd={(_, dragInfo) => {
                      if (shouldReduceMotion) {
                        return;
                      }

                      if (dragInfo.offset.x <= -80) {
                        paginate(1);
                      } else if (dragInfo.offset.x >= 80) {
                        paginate(-1);
                      }
                    }}
                  >
                    <Image
                      src={activeImage}
                      alt={`${title} preview`}
                      fill
                      sizes="90vw"
                      className="object-contain p-4 sm:p-6"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-white/85">
                <span className="truncate">{title}</span>
                <span>
                  {visibleIndex + 1} / {imageList.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
