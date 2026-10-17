"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  localeHome,
  localePath,
  stripLocaleFromPathname,
  type Locale,
} from "@/i18n/config";
import type { Dictionary } from "@/i18n/tr";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const bare = stripLocaleFromPathname(pathname || "/");
  const isHome = bare === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: localePath(locale, "/#hakkimizda"), label: dict.nav.about },
    { href: localePath(locale, "/#hizmetler"), label: dict.nav.services },
    { href: localePath(locale, "/#projeler"), label: dict.nav.projects },
    { href: localePath(locale, "/#iletisim"), label: dict.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-forest-deep/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 md:h-24 lg:px-8">
        <Link
          href={localeHome(locale)}
          className="relative flex min-w-0 items-center py-1"
        >
          <Image
            src="/brand/logo-white.png"
            alt="Haldia Peyzaj ve Mimarlık"
            width={280}
            height={100}
            className="h-11 w-auto max-w-[160px] object-contain mix-blend-screen sm:h-14 sm:max-w-[200px] md:h-[4.25rem] md:max-w-none"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide whitespace-nowrap text-white/85 transition-colors hover:text-mustard-light"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} label={dict.nav.language} />
          <Link
            href={localePath(locale, "/#iletisim")}
            className="rounded-sm bg-mustard px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-forest-deep transition-colors hover:bg-mustard-light lg:px-5"
          >
            {dict.nav.quote}
          </Link>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher locale={locale} label={dict.nav.language} />
          <button
            type="button"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            aria-expanded={open}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/10 bg-forest-deep md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-5 pb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-3 py-3.5 text-base font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-mustard-light"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={localePath(locale, "/#iletisim")}
                onClick={() => setOpen(false)}
                className="mt-3 min-h-12 rounded-sm bg-mustard px-3 py-3.5 text-center text-base font-semibold text-forest-deep"
              >
                {dict.nav.quote}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
