import { Locale } from "../../next-i18next.config";

const localizations: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in Locale]: () => Promise<Record<string, any>>;
} = {
  en: async () => import("./en.json").then((module) => module.default),
  zh: async () => import("./zh.json").then((module) => module.default),
};
export const getLocalizations = async (locale: Locale) => {
  return await localizations[locale || "en"]();
};
