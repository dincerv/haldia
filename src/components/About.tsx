import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import type { Dictionary } from "@/i18n/tr";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="hakkimizda" className="bg-cream py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.3em] text-mustard uppercase">
              {dict.about.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-forest sm:text-3xl md:text-4xl">
              {dict.about.title}
            </h2>
            <div className="mt-5 h-1 w-16 bg-mustard sm:mt-6" />

            <div className="mt-8 flex justify-center rounded-sm bg-forest-deep p-6 sm:mt-10 sm:p-10 lg:justify-start">
              <Image
                src="/brand/logo-white.png"
                alt={dict.about.logoAlt}
                width={360}
                height={360}
                className="h-auto w-full max-w-[200px] object-contain mix-blend-screen sm:max-w-[280px]"
              />
            </div>

            <p className="mt-5 text-sm leading-relaxed text-earth sm:mt-6">
              {dict.about.aside}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-8">
            <div className="space-y-4 text-sm leading-relaxed text-muted sm:space-y-5 sm:text-lg">
              <p>{dict.about.p1}</p>
              <p>{dict.about.p2}</p>
              <p>{dict.about.p3}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
