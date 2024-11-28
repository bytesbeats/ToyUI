import { Locales, Localization } from "./next-i18next.config";

const localizations: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in Locales]: () => Promise<Localization>;
} = {
  en: async () =>
    import("./en.json").then((module) => module.default as unknown as Localization),
  zh: async () =>
    import("./zh.json").then((module) => module.default as unknown as Localization),
};
export const getLocalizations = async (locale: Locales) => {
  return await localizations[locale || Locales.ZH]();
};
