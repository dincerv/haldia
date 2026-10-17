"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function Projects({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [filter, setFilter] = useState<ProjectCategory | "Tümü">("Tümü");
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((i) => i + 1);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, []);

  const visible =
    filter === "Tümü"
      ? projects
      : projects.filter((p) => p.category === filter);

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

        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((raw) => {
              const project = localizeProject(raw, locale);
              return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
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
                    />

                    <div className="relative flex flex-1 flex-col p-4 sm:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold tracking-[0.18em] text-mustard uppercase">
                            {project.location}
                          </p>
                          <h3 className="mt-1.5 text-base font-semibold leading-snug text-forest sm:text-xl">
                            {project.title}
                          </h3>
                        </div>
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center bg-forest text-mustard-light transition-colors group-hover:bg-mustard group-hover:text-forest-deep">
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted sm:line-clamp-3">
                        {project.summary}
                      </p>
                      <p className="mt-3 text-xs font-semibold tracking-wide text-forest/70 transition-colors group-hover:text-forest sm:mt-4">
                        {project.images.length} {dict.projects.photosDetail}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
