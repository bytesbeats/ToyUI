import "@app/globals.css";

import Footer from "@app/components/Footer";
import Mask from "@app/components/Mask";
import Nav from "@app/components/Nav";
import PixelLoading from "@components/PixelLoading";
import { PageProps } from "@constants/common.constant";
import { getLocalizations } from "@locales/localization";
import StoreInitializer from "@stores/initializer";
import { type Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";

const zpix = localFont({
  src: "../../../public/fonts/zpix.ttf",
  display: "swap",
});

export function generateViewport(): Viewport {
  // NOTE: 发现当我刷新时 如果不设置这个属性 在Server Router下会自动将 viewport 放大
  const viewport: Viewport = {
    viewportFit: "cover",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  };
  return viewport;
}

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
export default async function RootLayout(props: PageProps) {
  const { children } = props;
  const { lang } = await props.params;
  const currentLocalization = await getLocalizations(lang);

  return (
    <html
      className={`${zpix.className} antialiased overflow-x-hidden`}
      data-theme="light"
      lang={lang}
    >
      <body className="m-0 p-0 w-full h-full overflow-x-hidden overflow-y-scroll">
        <Suspense fallback={<PixelLoading />}>
          <StoreInitializer localization={currentLocalization} lang={lang} />
          <Mask />
          <Nav />
          <main className="relative px-6 pt-28 pb-60 z-10">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
