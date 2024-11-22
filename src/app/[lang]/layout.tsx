import i18n, { Locale } from "../../../next-i18next.config";

import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";

export const zpix = localFont({
  src: "../../../public/fonts/zpix.ttf",
  display: "swap",
});

export const metadata = {
  title: "Bill Generator App",
  description: "Bill Generator App",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(props: {
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
