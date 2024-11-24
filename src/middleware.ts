import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

import i18n from "../next-i18next.config";

const getLocale = (request: NextRequest) => {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = i18n.locales;

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = getLocale(request);

  const pathnameHasLocale = i18n.locales.some((locale: string) =>
    pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) return;

  const redirectUrl = new URL(
    `/${locale}${
      pathname === "/" || pathname === `/${locale}` ? "/home" : "/"
    }${pathname}`,
    request.url
  );
  request.nextUrl.pathname = redirectUrl.pathname;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)", "/"],
};
