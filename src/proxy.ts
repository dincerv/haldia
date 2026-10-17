import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  defaultLocale,
  detectLocaleFromAcceptLanguage,
  isCrawler,
  isLocale,
  localeCookie,
  locales,
  type Locale,
} from "@/i18n/config";

function pathnameHasLocale(pathname: string) {
  return locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

function withLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set(localeCookie, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookie)?.value;
  if (saved && isLocale(saved)) return saved;
  return detectLocaleFromAcceptLanguage(request.headers.get("accept-language"));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === `/${defaultLocale}` ||
    pathname.startsWith(`/${defaultLocale}/`)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return withLocaleCookie(NextResponse.redirect(url), defaultLocale);
  }

  if (pathnameHasLocale(pathname)) {
    const locale = pathname.split("/")[1] ?? "";
    const response = NextResponse.next();
    if (isLocale(locale)) withLocaleCookie(response, locale);
    return response;
  }

  const crawler = isCrawler(request.headers.get("user-agent"));
  const locale = crawler ? defaultLocale : preferredLocale(request);

  if (locale !== defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return withLocaleCookie(NextResponse.redirect(url), locale);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.rewrite(url);
  return crawler ? response : withLocaleCookie(response, defaultLocale);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
