import type { StorybookConfig } from "@storybook/nextjs";
import * as path from "path";
const config: StorybookConfig = {
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-toolbars",
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {},
      nextConfigPath: path.resolve(__dirname, "../next.config.js"),
    },
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  docs: {},
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../public"],
};

export default config;
