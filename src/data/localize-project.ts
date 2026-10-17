import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/tr";
import type { Project, ProjectCategory } from "./projects";
import { projectEn } from "./projects-en";

export function categoryLabel(
  category: ProjectCategory | "Tümü",
  dict: Dictionary,
): string {
  if (category === "Tümü") return dict.projects.categories.all;
  return dict.projects.categories[category];
}

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale !== "en") return project;
  const en = projectEn[project.slug];
  if (!en) return project;
  return {
    ...project,
    title: en.title,
    summary: en.summary,
    description: en.description,
  };
}
