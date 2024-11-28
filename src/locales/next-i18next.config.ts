import { I18NConfig } from "next/dist/server/config-shared";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Localization = Record<string, any>;

// 定义所有支持的语言常量

export enum Locales {
  ZH = "zh",
  EN = "en",
}

const i18n: I18NConfig = {
  defaultLocale: Locales.ZH,
  locales: Object.values(Locales),
} as const;

// 类型检查辅助函数
export function isValidLocale(locale: Locales) {
  return Object.values(Locales).includes(locale);
}

export default i18n;
