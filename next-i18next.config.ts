export const i18n = {
  defaultLocale: "zh-CN",
  locales: ["zh-CN", "en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
