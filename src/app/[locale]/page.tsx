import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale } from "@/i18n/config";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="flex-1">
        <Hero locale={locale} dict={dict} />
        <About dict={dict} />
        <Services dict={dict} />
        <Projects locale={locale} dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
