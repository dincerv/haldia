export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const localeCookie = "NEXT_LOCALE";

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function detectLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;

  let best: Locale | null = null;
  let bestQuality = -1;

  for (const part of header.split(",")) {
    const [range, ...params] = part.trim().split(";");
    const language = range.trim().toLowerCase().split("-")[0];
    if (!isLocale(language)) continue;

    const qParam = params.find((param) => param.trim().startsWith("q="));
    const quality = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;
    if (!Number.isFinite(quality) || quality <= bestQuality) continue;

    best = language;
    bestQuality = quality;
  }

  return best ?? defaultLocale;
}

export function isCrawler(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return /googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|facebookexternalhit|twitterbot|linkedinbot|embedly|applebot|semrush|ahrefs|dotbot|petalbot|bytespider|gptbot|claudebot|ia_archiver|crawler|spider/i.test(
    userAgent,
  );
}

export function localePrefix(locale: Locale) {
  return locale === defaultLocale ? "" : `/${locale}`;
}

export function localeHome(locale: Locale) {
  return localePrefix(locale) || "/";
}

/** Build a localized path. path should start with "/" (e.g. "/projeler/x" or "/#iletisim") */
export function localePath(locale: Locale, path = "/") {
  if (path.startsWith("/#") || path === "#") {
    const hash = path.startsWith("/#") ? path.slice(1) : path;
    return `${localeHome(locale)}${hash}`;
  }
  if (path.startsWith("#")) {
    return `${localeHome(locale)}${path}`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized === "" ? "/" : normalized;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function stripLocaleFromPathname(pathname: string) {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(locale.length + 1) || "/";
    }
  }
  return pathname;
}

export function htmlLang(locale: Locale) {
  return locale === "tr" ? "tr" : "en";
}

export function ogLocale(locale: Locale) {
  return locale === "tr" ? "tr_TR" : "en_US";
}
