import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionary";
import {
  defaultLocale,
  htmlLang,
  isLocale,
  locales,
  ogLocale,
} from "@/i18n/config";
import { siteConfig } from "@/lib/site";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a2e18",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const canonical =
    locale === defaultLocale ? siteConfig.url : `${siteConfig.url}/${locale}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.meta.title,
      template: `%s | Haldia`,
    },
    description: dict.meta.description,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32" },
        { url: "/icon.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      type: "website",
      locale: ogLocale(locale),
      url: canonical,
      siteName: siteConfig.name,
      title: dict.meta.title,
      description: dict.meta.description,
      images: [{ url: "/brand/logo.png" }],
    },
    alternates: {
      canonical,
      languages: {
        tr: siteConfig.url,
        en: `${siteConfig.url}/en`,
        "x-default": siteConfig.url,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={htmlLang(locale)} className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
