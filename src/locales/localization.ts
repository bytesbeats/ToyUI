import "server-only";
import { Locale } from "../../next-i18next.config";

const localizations: {
  [key in Locale]: () => Promise<Record<string, string>>;
} = {
  en: () => import("./en.json").then((module) => module.default),
  zh: () => import("./zh.json").then((module) => module.default),
};
export const getLocalizations = async (locale: Locale) => {
  return localizations[locale]();
};
