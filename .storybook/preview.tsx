import type { Preview } from "@storybook/react";
import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import "../src/app/globals.css";
import i18n from "./i18n";
import { ThemeProvider } from "@storybook/theming";

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
    theme: {
      description: "Theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", right: "🌞", title: "Light" },
          { value: "dark", right: "🌙", title: "Dark" },
        ],
        showName: true,
      },
    },
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
    theme: "light",
  },
  tags: [],
};

// 装饰器设置语言
export const decorators = [
  (Story, context) => {
    const { locale, theme } = context.globals;

    console.debug("🐛🐛🐛 ----------------------------🐛🐛🐛");
    console.debug("🐛🐛🐛 ::: theme:::", theme);
    console.debug("🐛🐛🐛 ----------------------------🐛🐛🐛");

    useEffect(() => {
      if (locale !== i18n.language) {
        i18n.changeLanguage(context.globals.locale);
      }
    }, [locale]);

    return (
      <I18nextProvider i18n={i18n}>
        <div
          data-theme={theme}
          style={{
            minHeight: "100vh",
            padding: "1rem",
          }}
        >
          <Suspense fallback={<i>Loading...</i>}>
            <Story />
          </Suspense>
        </div>
      </I18nextProvider>
    );
  },
];

export default preview;
