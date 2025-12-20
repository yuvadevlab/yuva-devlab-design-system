import uiConfig from "./packages/ui/eslint.config.js";
import tokensConfig from "./packages/tokens/eslint.config.js";
import primitivesConfig from "./packages/primitives/eslint.config.js";
import colorsConfig from "./packages/colors/eslint.config.js";
import cliConfig from "./packages/cli/eslint.config.js";
import playgroundConfig from "./apps/playground/eslint.config.js";
import docsConfig from "./apps/docs/eslint.config.js";

/**
 * Root ESLint Configuration (Composition)
 * This file allows root-level tools (like lint-staged) to find the correct
 * rules for each package by importing their individual configurations.
 */
export default [
  // Aggregate individual configs and scope them by directory
  ...uiConfig.map((config) => ({ ...config, files: ["packages/ui/**/*"] })),
  ...tokensConfig.map((config) => ({
    ...config,
    files: ["packages/tokens/**/*"],
  })),
  ...primitivesConfig.map((config) => ({
    ...config,
    files: ["packages/primitives/**/*"],
  })),
  ...colorsConfig.map((config) => ({
    ...config,
    files: ["packages/colors/**/*"],
  })),
  ...cliConfig.map((config) => ({ ...config, files: ["packages/cli/**/*"] })),
  ...playgroundConfig.map((config) => ({
    ...config,
    files: ["apps/playground/**/*"],
  })),
  ...docsConfig.map((config) => ({ ...config, files: ["apps/docs/**/*"] })),

  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/.turbo/**",
      "**/storybook-static/**",
      "**/coverage/**",
    ],
  },
];
