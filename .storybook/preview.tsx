import React, { Suspense, useEffect } from "react";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },

  globalTypes: {
    locale: {
      description: "Language",
      toolbar: {
        title: "Language",
        icon: "globe",
        items: [
          { value: "zh", right: "🇨🇳", title: "中文" },
          { value: "en", right: "🇺🇸", title: "English" },
        ],
      },
    },
  },

  initialGlobals: {
    locale: "zh-CN",
  },

  tags: ["autodocs"],
};

// 装饰器设置语言
export const decorators = [
  (Story, context) => {
    const { locale } = context.globals;
    useEffect(() => {
      if (locale !== i18n.language) {
        i18n.changeLanguage(context.globals.locale);
      }
    }, [locale]);

    return (
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<i>Loading...</i>}>
          <Story />
        </Suspense>
      </I18nextProvider>
    );
  },
];

export default preview;
