import Image from "next/image";
import { setStaticParamsLocale } from "next-international/server";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Inform next-international of the locale being statically pre-rendered.
  // Required because Main/Footer are server components that use `getI18n()`.
  const { locale } = await params;
  setStaticParamsLocale(locale);

  return (
    <div className="flex flex-col items-center bg-[#121e28}">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}