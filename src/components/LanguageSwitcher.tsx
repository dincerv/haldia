"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  localeCookie,
  localePath,
  localeNames,
  locales,
  stripLocaleFromPathname,
  type Locale,
} from "@/i18n/config";

function persistLocale(next: Locale) {
  document.cookie = `${localeCookie}=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

function Flag({ locale }: { locale: Locale }) {
  if (locale === "tr") {
    return (
      <svg
        viewBox="0 0 21 15"
        className="h-3.5 w-[1.15rem] rounded-[2px]"
        aria-hidden
      >
        <rect width="21" height="15" fill="#E30A17" />
        <circle cx="8.6" cy="7.5" r="3.6" fill="#fff" />
        <circle cx="9.8" cy="7.5" r="2.85" fill="#E30A17" />
        <path
          fill="#fff"
          d="M13.15 7.5 11.7 8.02l.72-1.4-.02 1.52 1.32-.76-1.32-.76.02 1.52-.72-1.4z"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 21 15"
      className="h-3.5 w-[1.15rem] rounded-[2px]"
      aria-hidden
    >
      <rect width="21" height="15" fill="#012169" />
      <path d="M0 0 21 15M21 0 0 15" stroke="#fff" strokeWidth="2.4" />
      <path d="M0 0 21 15M21 0 0 15" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M10.5 0v15M0 7.5h21" stroke="#fff" strokeWidth="4" />
      <path d="M10.5 0v15M0 7.5h21" stroke="#C8102E" strokeWidth="2.2" />
    </svg>
  );
}

export default function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const pathname = usePathname() || "/";
  const barePath = stripLocaleFromPathname(pathname);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-sm px-2 py-2 text-sm font-medium text-white/85 transition-colors hover:text-mustard-light"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <Flag locale={locale} />
        <span className="uppercase tracking-wide">{locale}</span>
        <svg
          viewBox="0 0 16 16"
          className={`h-3.5 w-3.5 text-white/50 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden
        >
          <path
            d="M3.5 6 8 10.5 12.5 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <ul
          id={menuId}
          role="listbox"
          aria-label={label}
          className="absolute right-0 top-[calc(100%+0.4rem)] z-50 min-w-[10.5rem] overflow-hidden border border-white/10 bg-forest-deep py-1 shadow-lg"
        >
          {locales.map((code) => {
            const active = code === locale;
            const href = localePath(code, barePath);
            return (
              <li key={code} role="option" aria-selected={active}>
                <a
                  href={href}
                  hrefLang={code}
                  lang={code}
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors ${
                    active
                      ? "bg-white/10 font-medium text-mustard-light"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    persistLocale(code);
                    window.location.assign(href);
                  }}
                >
                  <Flag locale={code} />
                  <span>{localeNames[code]}</span>
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
