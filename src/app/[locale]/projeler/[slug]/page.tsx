import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Images } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import { getProject, projects } from "@/data/projects";
import { categoryLabel, localizeProject } from "@/data/localize-project";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, localePath, locales, type Locale } from "@/i18n/config";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return { title: "Not found" };
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const raw = getProject(slug);
  if (!raw) return { title: dict.projectDetail.notFound };

  const project = localizeProject(raw, locale);
  const path = localePath(locale, `/projeler/${slug}`);
  const canonical = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title: `${project.title} | Haldia`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.image }],
      locale: locale === "en" ? "en_US" : "tr_TR",
    },
    alternates: {
      canonical,
      languages: {
        tr: `${siteConfig.url}/projeler/${slug}`,
        en: `${siteConfig.url}/en/projeler/${slug}`,
        "x-default": `${siteConfig.url}/projeler/${slug}`,
      },
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  const raw = getProject(slug);
  if (!raw) notFound();

  const project = localizeProject(raw, locale);

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3)
    .map((p) => localizeProject(p, locale));

  const paragraphs = project.description.split("\n").filter(Boolean);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="flex-1 bg-background">
        <section className="relative min-h-[42svh] overflow-hidden sm:min-h-[60vh]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/70 to-forest-deep/35" />

          <div className="relative z-10 mx-auto flex min-h-[42svh] max-w-7xl flex-col justify-end px-4 pb-8 pt-24 sm:min-h-[60vh] sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
            <Link
              href={localePath(locale, "/#projeler")}
              className="mb-4 inline-flex min-h-10 w-fit items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-mustard-light sm:mb-6"
            >
              <ArrowLeft size={16} />
              {dict.projectDetail.back}
            </Link>
            <p className="text-[10px] font-semibold tracking-[0.28em] text-mustard-light uppercase sm:text-xs">
              {categoryLabel(project.category, dict)}
            </p>
            <h1 className="mt-2 max-w-4xl text-2xl font-bold tracking-tight text-white sm:mt-3 sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/80 sm:mt-4">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} className="text-mustard" />
                {project.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Images size={15} className="text-mustard" />
                {project.images.length} {dict.projectDetail.photosCount}
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-[0.28em] text-mustard uppercase">
                {dict.projectDetail.summary}
              </p>
              <div className="mt-4 h-1 w-14 bg-mustard" />
              <p className="mt-5 text-sm leading-relaxed text-muted sm:mt-6 sm:text-lg">
                {project.summary}
              </p>
            </div>
            <div className="space-y-4 lg:col-span-8 sm:space-y-5">
              {paragraphs.slice(1).map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="text-sm leading-relaxed text-muted sm:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12 sm:mt-20">
            <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.28em] text-mustard uppercase">
                  {dict.projectDetail.gallery}
                </p>
                <h2 className="mt-2 text-xl font-bold text-forest sm:text-3xl">
                  {dict.projectDetail.photos}
                </h2>
              </div>
              <p className="text-sm text-muted">
                {project.images.length} {dict.projectDetail.imagesLabel}
              </p>
            </div>
            <ProjectGallery
              images={project.images}
              title={project.title}
              enlargeLabel={dict.projectDetail.enlarge}
              lightboxLabels={dict.lightbox}
            />
          </div>

          {related.length > 0 && (
            <div className="mt-14 border-t border-cream-dark pt-10 sm:mt-20 sm:pt-14">
              <h2 className="text-xl font-bold text-forest sm:text-2xl">
                {dict.projectDetail.related}
              </h2>
              <div className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-3 sm:gap-6">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={localePath(locale, `/projeler/${item.slug}`)}
                    className="group overflow-hidden bg-white shadow-[0_4px_24px_-8px_rgba(43,72,39,0.12)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[11px] font-semibold tracking-wider text-mustard uppercase">
                        {item.location}
                      </p>
                      <h3 className="mt-1 font-semibold text-forest">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
