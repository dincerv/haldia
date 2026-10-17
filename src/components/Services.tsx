import {
  DraftingCompass,
  Landmark,
  Leaf,
  Droplets,
  Lightbulb,
  Sprout,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import type { Dictionary } from "@/i18n/tr";

const icons = [
  DraftingCompass,
  Landmark,
  Leaf,
  Droplets,
  Lightbulb,
  Sprout,
] as const;

export default function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="hizmetler" className="bg-background py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-mustard uppercase">
            {dict.services.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-forest sm:text-3xl md:text-4xl">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            {dict.services.subtitle}
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {dict.services.items.map((service, index) => {
            const Icon = icons[index] ?? Leaf;
            return (
              <ScrollReveal key={service.title} delay={index * 0.08}>
                <article className="group h-full border border-cream-dark bg-white p-5 transition-all duration-300 hover:border-forest/20 hover:shadow-[0_12px_40px_-12px_rgba(26,60,42,0.18)] sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center bg-forest text-mustard-light transition-colors group-hover:bg-mustard group-hover:text-forest-deep">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-forest">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
