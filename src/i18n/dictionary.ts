import { notFound } from "next/navigation";
import { isLocale } from "./config";
import { en } from "./en";
import { tr, type Dictionary } from "./tr";

export type { Dictionary };

export function getDictionary(locale: string): Dictionary {
  if (!isLocale(locale)) notFound();
  return locale === "en" ? en : tr;
}
