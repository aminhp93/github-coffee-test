import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    if (!config.resolve) {
      config.resolve = {};
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      "@emotion/react": path.resolve(
        __dirname,
        "../node_modules/@emotion/react"
      ),
      "@": path.resolve(__dirname, "../src"),
    };

    // Ensure TypeScript loader is configured
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            transpileOnly: true,
          },
        },
      ],
    });

    config.resolve.extensions?.push(".ts", ".tsx");

    return config;
  },
};
export default config;
