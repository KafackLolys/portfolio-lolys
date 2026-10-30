import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { setStaticParamsLocale } from "next-international/server";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Supported locales for the dynamic [locale] segment.
// Must match `locales` in middleware.ts and the files in /locales.
const locales = ["en", "fr"] as const;
type Locale = (typeof locales)[number];

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Lolys Kafack",
};

// Statically generate the /en and /fr routes instead of rendering them dynamically.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>) {
  const { locale } = await params;

  // Fall back to a supported locale if an unknown one is requested.
  const resolvedLocale: Locale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : "en";

  // Inform next-international of the locale being statically pre-rendered.
  setStaticParamsLocale(resolvedLocale);

  return (
    <html lang={resolvedLocale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers locale={resolvedLocale}>{children}</Providers>
      </body>
    </html>
  );
}
