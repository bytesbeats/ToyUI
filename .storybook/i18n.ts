import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import locale from "./locale";

i18n.use(initReactI18next).init({
  resources: locale,
  fallbackLng: "zh", // 默认语言
  lng: "zh",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
