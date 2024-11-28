import { Locales } from "@locales/next-i18next.config";
import { SearchParams } from "next/dist/server/request/search-params";
import { ReactNode } from "react";

export type PageProps = Readonly<{
  params: Promise<{ lang: Locales }>;
  searchParams?: SearchParams;
  children?: ReactNode;
}>;
