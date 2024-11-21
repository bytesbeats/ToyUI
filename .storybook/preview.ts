import React from "react";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
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
      description: "国际化",
      toolbar: {
        icon: "globe",
        items: [
          { value: "zh", right: "🇨🇳", title: "中文" },
          { value: "en", right: "🇺🇸", title: "English" },
        ],
      },
    },
  },
  initialGlobals: {
    locale: "zh",
  },
  tags: ["autodocs"],
};

export default preview;

// Wrap your stories in the I18nextProvider component
const withI18next = (Story) => (
  <Suspense fallback={<div>loading translations...</div>}>
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  </Suspense>
);

// export decorators for storybook to wrap your stories in
export const decorators = [withI18next];
