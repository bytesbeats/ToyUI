import "@app/globals.css";

import Footer from "@app/components/Footer";
import Mask from "@app/components/Mask";
import Nav from "@app/components/Nav";
import { PageProps } from "@constants/common.constant";
import { getLocalizations } from "@locales/localization";
import { type Metadata } from "next";
import localFont from "next/font/local";
import { use } from "react";

const zpix = localFont({
  src: "../../../public/fonts/zpix.ttf",
  display: "swap",
});

/**
 * @name Generate metadata for the page
 * @author ZiCun.guo
 * @param params - The parameters for the page
 * @returns The metadata for the page
 */
export async function generateMetadata(props: PageProps) {
  const { lang } = await props.params;
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
export default function RootLayout(props: PageProps) {
  const { children } = props;
  const params = use(props.params);
  const lang = params.lang;

  return (
    <html
      className={`${zpix.className} antialiased overflow-x-hidden`}
      data-theme="corporate"
      lang={lang}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="m-0 p-0 w-full h-full overflow-x-hidden overflow-y-scroll">
        <Mask />
        <Nav lang={lang} />
        <main className="relative px-6 pt-28 pb-60 z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
