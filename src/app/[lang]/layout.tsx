import localFont from "next/font/local";
import Head from "next/head";
import { ReactNode } from "react";
import { i18n, Locale } from "../../../next-i18next.config";
export const zpix = localFont({
  src: "../../../public/fonts/zpix.ttf",
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root(props: {
  children: ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { children } = props;
  return (
    <html
      className={`${zpix.className} antialiased`}
      data-theme="retro"
      lang={params.lang}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
