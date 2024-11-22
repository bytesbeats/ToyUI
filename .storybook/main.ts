import type { StorybookConfig } from "@storybook/nextjs";
import * as path from "path";
const config: StorybookConfig = {
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-toolbars",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {},
      nextConfigPath: path.resolve(__dirname, "../next.config.js"),
    },
  },
  staticDirs: ["../public"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
};
export default config;
