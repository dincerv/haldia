"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ProjectCarousel from "./ProjectCarousel";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "@/data/projects";
import { categoryLabel, localizeProject } from "@/data/localize-project";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/tr";

const SLIDE_MS = 4000;
/** px / saniye — sürekli akış */
const FLOW_SPEED = 38;
const RESUME_MS = 2200;

export default function Projects({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [filter, setFilter] = useState<ProjectCategory | "Tümü">("Tümü");
  const [slideIndex, setSlideIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const halfWidthRef = useRef(0);
  const pausedUntilRef = useRef(0);
  const interactingRef = useRef(false);
  const rafRef = useRef(0);

  const visible =
    filter === "Tümü"
      ? projects
      : projects.filter((p) => p.category === filter);

  const loopItems = [...visible, ...visible];

  function pauseFlow(ms = RESUME_MS) {
    pausedUntilRef.current = Date.now() + ms;
  }

  function measureHalf() {
    const el = scrollerRef.current;
    if (!el) return 0;
    const cards = el.querySelectorAll<HTMLElement>("[data-project-card]");
    const count = visible.length;
    if (count === 0 || cards.length < count) {
      halfWidthRef.current = el.scrollWidth / 2;
      return halfWidthRef.current;
    }

    const first = cards[0];
    const mid = cards[count];
    if (!first || !mid) {
      halfWidthRef.current = el.scrollWidth / 2;
      return halfWidthRef.current;
    }

    // İlk setin genişliği (gap dahil) — padding'den bağımsız sonsuz döngü
    halfWidthRef.current = mid.offsetLeft - first.offsetLeft;
    return halfWidthRef.current;
  }

  function normalizeScroll() {
    const el = scrollerRef.current;
    if (!el) return;
    const half = halfWidthRef.current || measureHalf();
    if (half <= 4) return;
    if (el.scrollLeft >= half) {
      el.scrollLeft -= half;
    } else if (el.scrollLeft < 0) {
      el.scrollLeft += half;
    }
  }

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((i) => i + 1);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    const id = window.requestAnimationFrame(() => measureHalf());
    return () => window.cancelAnimationFrame(id);
  }, [filter, visible.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || visible.length === 0) return;

    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.064);
      last = now;

      const canFlow =
        !interactingRef.current && Date.now() >= pausedUntilRef.current;

      if (canFlow) {
        if (!halfWidthRef.current) measureHalf();
        el.scrollLeft += FLOW_SPEED * dt;
        normalizeScroll();
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    const onResize = () => measureHalf();
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [visible.length, filter]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;
    let startScroll = 0;
    let axis: "x" | "y" | null = null;

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      interactingRef.current = true;
      pauseFlow(RESUME_MS);
      startX = t.clientX;
      startY = t.clientY;
      startScroll = el.scrollLeft;
      axis = null;
      measureHalf();
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;

      if (axis === null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
        axis = Math.abs(dx) >= Math.abs(dy) ? "x" : "y";
      }

      if (axis === "x") {
        e.preventDefault();
        el.scrollLeft = startScroll - dx;
        normalizeScroll();
      }
    };

    const onTouchEnd = () => {
      interactingRef.current = false;
      pauseFlow(RESUME_MS);
      axis = null;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      interactingRef.current = true;
      pauseFlow(RESUME_MS);
      startX = e.clientX;
      startScroll = el.scrollLeft;
      measureHalf();
      el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch" || !interactingRef.current) return;
      if ((e.buttons & 1) === 0) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
      normalizeScroll();
    };

    const onPointerUp = () => {
      interactingRef.current = false;
      pauseFlow(RESUME_MS);
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY) && Math.abs(e.deltaY) < 8) {
        return;
      }
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        pauseFlow(RESUME_MS);
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchEnd);
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("wheel", onWheel);
    };
  }, [visible.length, filter]);

  return (
    <section id="projeler" className="overflow-x-clip bg-cream py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-mustard uppercase">
            {dict.projects.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-forest sm:text-3xl md:text-4xl">
            {dict.projects.title}
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            {dict.projects.subtitlePrefix} {projects.length}{" "}
            {dict.projects.subtitleSuffix}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-8 sm:mt-10">
          <div className="-mx-4 flex justify-start gap-2 overflow-x-auto px-4 pb-1 scrollbar-none sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`shrink-0 px-3.5 py-2 text-xs font-semibold tracking-wide transition-colors sm:px-4 sm:text-sm ${
                  filter === cat
                    ? "bg-forest text-white"
                    : "bg-white text-forest/70 hover:bg-cream-dark hover:text-forest"
                }`}
              >
                {categoryLabel(cat, dict)}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="relative mt-10 sm:mt-12">
        <div
          ref={scrollerRef}
          className="flex touch-pan-x gap-4 overflow-x-auto overscroll-x-contain pb-2 scrollbar-none sm:gap-5 lg:gap-6"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollPaddingInline: "max(1rem, calc(50vw - min(42vw, 160px)))",
            paddingInline: "max(1rem, calc(50vw - min(42vw, 160px)))",
          }}
        >
          {loopItems.map((raw, i) => {
            const project = localizeProject(raw, locale);
            const key = `${project.slug}-${i}`;
            return (
              <div
                key={key}
                data-project-card
                className="w-[min(84vw,320px)] shrink-0 snap-center sm:w-[min(42vw,340px)] lg:w-[min(28vw,360px)]"
              >
                <Link
                  href={localePath(locale, `/projeler/${project.slug}`)}
                  className="group flex h-full flex-col overflow-hidden bg-white shadow-[0_4px_24px_-8px_rgba(26,60,42,0.12)] transition-shadow duration-300 hover:shadow-[0_16px_48px_-12px_rgba(43,72,39,0.22)]"
                  draggable={false}
                >
                  <ProjectCarousel
                    images={project.images}
                    alt={project.title}
                    slideIndex={slideIndex}
                    className="aspect-[4/3]"
                    sizes="(max-width: 640px) 84vw, (max-width: 1024px) 42vw, 28vw"
                  />

                  <div className="relative flex flex-1 flex-col p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold tracking-[0.18em] text-mustard uppercase">
                          {project.location}
                        </p>
                        <h3 className="mt-1.5 text-base font-semibold leading-snug text-forest sm:text-lg">
                          {project.title}
                        </h3>
                      </div>
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center bg-forest text-mustard-light transition-colors group-hover:bg-mustard group-hover:text-forest-deep">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>
                    <p className="mt-3 text-xs font-semibold tracking-wide text-forest/70 transition-colors group-hover:text-forest">
                      {project.images.length} {dict.projects.photosDetail}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
