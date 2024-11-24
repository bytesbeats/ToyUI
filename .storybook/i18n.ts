import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "zh", // 默认语言
  debug: false, // 调试模式
  lng: "zh",
  backend: {
    loadPath: "/src/locales/{{lng}}.json", // 指定资源文件路径
  },
  interpolation: {
    escapeValue: false,
  },
  ns: ["common"],
  defaultNS: "common",
});

export default i18n;
