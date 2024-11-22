import { I18NConfig } from "next/dist/server/config-shared";

// 定义所有支持的语言常量
const LOCALES: string[] = ["zh", "en"] as const;
type LocaleTuple = typeof LOCALES;
export type Locale = LocaleTuple[number];

const i18n: I18NConfig = {
  defaultLocale: "zh" as Locale,
  locales: LOCALES,
} as const;

// 类型检查辅助函数
export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export default i18n;
