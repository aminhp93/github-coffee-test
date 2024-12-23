import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import typescriptEngine from "typescript";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

export default defineConfig(
  {
    input: [
      "src/index.ts",
      "src/utils/index.ts",
      "src/components/index.ts",
      "src/data-test/index.ts",
      "src/events/index.ts",
      "src/hooks/index.ts",
      "src/services/index.ts",
      "src/stores/index.ts",
      "src/theme/index.ts",
      "src/types/index.ts"
    ],
    output: {
      dir: "dist",
      format: "esm",
      exports: "named",
      sourcemap: false,
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    plugins: [
      json(),
      postcss({
        plugins: [],
        minimize: true,
      }),
      external({ includeDependencies: true }),
      resolve(),
      commonjs(),
      terser(),
      typescript({
        tsconfig: "./tsconfig.json",
        typescript: typescriptEngine,
        declaration: true,
        declarationDir: "dist",
        sourceMap: false,
        exclude: [
          "coverage",
          ".storybook",
          "storybook-static",
          "config",
          "dist",
          "node_modules/**",
          "*.cjs",
          "*.mjs",
          "**/__snapshots__/*",
          "**/__tests__",
          "**/*.test.js+(|x)",
          "**/*.test.ts+(|x)",
          "**/*.mdx",
          "**/*.story.ts+(|x)",
          "**/*.story.js+(|x)",
          "**/*.stories.ts+(|x)",
          "**/*.stories.js+(|x)",
          "setupTests.ts",
        ],
      }),
    ],
    external: (id) => /node_modules/.test(id) || id === "tslib",
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.(sc|sa|c)ss$/],
    plugins: [dts()],
  }
);
