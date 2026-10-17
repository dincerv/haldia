"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
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
/** px / saniye — sürekli akış hızı */
const FLOW_SPEED = 42;
const MANUAL_PAUSE_MS = 5000;

export default function Projects({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [filter, setFilter] = useState<ProjectCategory | "Tümü">("Tümü");
  const [slideIndex, setSlideIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const pausedUntilRef = useRef(0);
  const hoveringRef = useRef(false);
  const rafRef = useRef(0);

  const visible =
    filter === "Tümü"
      ? projects
      : projects.filter((p) => p.category === filter);

  /** Sonsuz döngü için iki kez tekrar */
  const loopItems = [...visible, ...visible];

  function pauseFlow(ms = MANUAL_PAUSE_MS) {
    pausedUntilRef.current = Date.now() + ms;
  }

  function measureHalf() {
    const track = trackRef.current;
    if (!track) return 0;
    halfWidthRef.current = track.scrollWidth / 2;
    return halfWidthRef.current;
  }

  function applyOffset() {
    const track = trackRef.current;
    if (!track) return;
    const half = halfWidthRef.current || measureHalf();
    if (half <= 0) return;
    let x = offsetRef.current;
    while (x >= half) x -= half;
    while (x < 0) x += half;
    offsetRef.current = x;
    track.style.transform = `translate3d(${-x}px, 0, 0)`;
  }

  function nudge(direction: -1 | 1) {
    pauseFlow();
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-project-card]");
    const step = card ? card.offsetWidth + 24 : 280;
    offsetRef.current += direction * step;
    measureHalf();
    applyOffset();
  }

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((i) => i + 1);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    offsetRef.current = 0;
    const id = window.requestAnimationFrame(() => {
      measureHalf();
      applyOffset();
    });
    return () => window.cancelAnimationFrame(id);
  }, [filter, visible.length]);

  useEffect(() => {
    if (visible.length === 0) return;

    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const flowing =
        !hoveringRef.current && Date.now() >= pausedUntilRef.current;

      if (flowing) {
        if (!halfWidthRef.current) measureHalf();
        offsetRef.current += FLOW_SPEED * dt;
        applyOffset();
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    const onResize = () => {
      measureHalf();
      applyOffset();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [visible.length, filter]);

  return (
    <section id="projeler" className="bg-cream py-14 sm:py-24 lg:py-32">
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
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-none sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
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

        <div className="relative mt-10 sm:mt-12">
          <div className="mb-4 flex justify-end gap-2 sm:mb-5">
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label={dict.projects.prev}
              className="flex h-10 w-10 items-center justify-center border border-forest/15 bg-white text-forest transition-colors hover:border-forest/40 hover:bg-cream-dark"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label={dict.projects.next}
              className="flex h-10 w-10 items-center justify-center border border-forest/15 bg-white text-forest transition-colors hover:border-forest/40 hover:bg-cream-dark"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <div
            ref={viewportRef}
            onPointerDown={() => pauseFlow()}
            onMouseEnter={() => {
              hoveringRef.current = true;
            }}
            onMouseLeave={() => {
              hoveringRef.current = false;
            }}
            className="-mx-4 overflow-hidden sm:-mx-6 lg:-mx-8"
          >
            <div
              ref={trackRef}
              className="flex w-max gap-4 px-4 will-change-transform sm:gap-5 sm:px-6 lg:gap-6 lg:px-8"
            >
              {loopItems.map((raw, i) => {
                const project = localizeProject(raw, locale);
                const key = `${project.slug}-${i}`;
                return (
                  <div
                    key={key}
                    data-project-card
                    className="w-[78vw] max-w-[320px] shrink-0 sm:w-[42vw] sm:max-w-none md:w-[34vw] lg:w-[28vw] lg:max-w-[360px]"
                  >
                    <Link
                      href={localePath(locale, `/projeler/${project.slug}`)}
                      className="group flex h-full flex-col overflow-hidden bg-white shadow-[0_4px_24px_-8px_rgba(26,60,42,0.12)] transition-shadow duration-300 hover:shadow-[0_16px_48px_-12px_rgba(43,72,39,0.22)]"
                    >
                      <ProjectCarousel
                        images={project.images}
                        alt={project.title}
                        slideIndex={slideIndex}
                        className="aspect-[4/3]"
                        sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 28vw"
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
        </div>
      </div>
    </section>
  );
}
