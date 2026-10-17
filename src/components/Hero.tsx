"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/tr";

export default function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section
      id="anasayfa"
      className="relative flex min-h-[100svh] items-end overflow-hidden sm:items-center"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/75 to-forest-deep/45 sm:bg-gradient-to-r sm:from-forest-deep/88 sm:via-forest-deep/60 sm:to-forest-deep/35" />
      <div className="absolute inset-0 bg-forest-deep/30 sm:bg-gradient-to-t sm:from-forest-deep/75 sm:via-transparent sm:to-forest-deep/25 sm:bg-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-3xl"
        >
          <Image
            src="/brand/logo-white.png"
            alt="Haldia Peyzaj ve Mimarlık"
            width={720}
            height={280}
            className="h-28 w-auto max-w-[min(100%,360px)] object-contain object-left mix-blend-screen drop-shadow-[0_8px_32px_rgba(0,0,0,0.45)] sm:h-44 sm:max-w-[min(100%,520px)] md:h-56 md:max-w-none lg:h-64"
            priority
          />

          <h1 className="sr-only">Haldia Peyzaj ve Mimarlık</h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/92 sm:mt-8 sm:text-xl md:text-2xl md:leading-snug"
          >
            {dict.hero.slogan}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-7 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
          >
            <Link
              href={localePath(locale, "/#projeler")}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-mustard px-8 py-3.5 text-sm font-semibold tracking-wide text-forest-deep transition-colors hover:bg-mustard-light sm:w-auto"
            >
              {dict.hero.ctaProjects}
            </Link>
            <Link
              href={localePath(locale, "/#iletisim")}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-sm border border-white/45 bg-white/10 px-8 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/15 sm:w-auto sm:bg-white/8"
            >
              {dict.hero.ctaContact}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#hakkimizda"
        aria-label={dict.hero.scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 text-white/60 transition-colors hover:text-mustard-light sm:bottom-6 sm:flex"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex"
        >
          <ArrowDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}
