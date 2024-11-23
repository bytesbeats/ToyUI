import "../globals.css";

import Cloud from "@app/components/Cloud";
import Footer from "@app/components/Footer";
import { type Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

import i18n, { Locale } from "../../../next-i18next.config";
import { getLocalizations } from "../../locales/localization";

const zpix = localFont({
  src: "../../../public/fonts/zpix.ttf",
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

/**
 * @name Generate metadata for the page
 * @author ZiCun.guo
 * @param params - The parameters for the page
 * @returns The metadata for the page
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const currentLocalization = await getLocalizations(lang);

  return {
    title: currentLocalization.title,
    description: currentLocalization.description,
    authors: [{ name: "ZiCun.guo", url: "guotingchaopr@gmail.com" }],
  } as Metadata;
}

/**
 * @name Root layout for the app
 * @author ZiCun.guo
 * @param props - The props for the layout
 * @returns The layout for the app
 */
export default async function RootLayout(props: {
  children: ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { children } = props;
  const { lang } = await props.params;

  return (
    <html
      className={`${zpix.className} antialiased overflow-x-hidden`}
      data-theme="corporate"
      lang={lang}
    >
      <body className="h-full w-full flex flex-col">
        <Cloud />
        {children}
        <Footer />
      </body>
    </html>
  );
}
