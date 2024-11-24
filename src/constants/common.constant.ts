import { SearchParams } from "next/dist/server/request/search-params";
import { ReactNode } from "react";

import { Locale } from "../../next-i18next.config";

export type PageProps = {
  params: Promise<{ lang: Locale }>;
  searchParams?: SearchParams;
  children?: ReactNode;
};
