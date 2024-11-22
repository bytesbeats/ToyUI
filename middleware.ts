import { NextRequest, NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "./next-i18next.config";

const getLocale = (request: NextRequest) => {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = i18n.locales as unknown as string[];

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  console.debug("🐛🐛🐛 ------------------------------🐛🐛🐛");
  console.debug("🐛🐛🐛 ::: locale:::", locale);
  console.debug("🐛🐛🐛 ------------------------------🐛🐛🐛");

  return locale;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.debug("🐛🐛🐛 ----------------------------------🐛🐛🐛");
  console.debug("🐛🐛🐛 ::: pathname:::", pathname);
  console.debug("🐛🐛🐛 ----------------------------------🐛🐛🐛");

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
