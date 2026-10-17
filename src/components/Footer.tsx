import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { localeHome, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/tr";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const links = [
    { href: localePath(locale, "/#hakkimizda"), label: dict.nav.about },
    { href: localePath(locale, "/#hizmetler"), label: dict.nav.services },
    { href: localePath(locale, "/#projeler"), label: dict.nav.projects },
    { href: localePath(locale, "/#iletisim"), label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-white/10 bg-forest-deep">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image
              src="/brand/logo-white.png"
              alt="Haldia Peyzaj ve Mimarlık"
              width={240}
              height={90}
              className="h-16 w-auto object-contain mix-blend-screen sm:h-20"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              {dict.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-mustard-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              {dict.footer.contact}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:samettas@haldiapeyzaj.com"
                  className="flex items-start gap-2 break-all text-sm text-white/60 transition-colors hover:text-mustard-light"
                >
                  <Mail size={14} className="mt-0.5 shrink-0 text-mustard" />
                  samettas@haldiapeyzaj.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:satis@haldiapeyzaj.com"
                  className="flex items-start gap-2 break-all text-sm text-white/60 transition-colors hover:text-mustard-light"
                >
                  <Mail size={14} className="mt-0.5 shrink-0 text-mustard" />
                  satis@haldiapeyzaj.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+905539849447"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-mustard-light"
                >
                  <Phone size={14} className="text-mustard" />
                  0553 984 94 47
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="max-w-md text-xs leading-relaxed text-white/40">
            {dict.footer.rights}
            <br className="sm:hidden" />{" "}
            <a
              href="https://marassanet.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 transition-colors hover:text-mustard-light"
            >
              MarassaNet
            </a>
          </p>
          <Link
            href={localeHome(locale)}
            className="text-xs text-white/40 transition-colors hover:text-mustard-light"
          >
            {dict.footer.top}
          </Link>
        </div>
      </div>
    </footer>
  );
}
