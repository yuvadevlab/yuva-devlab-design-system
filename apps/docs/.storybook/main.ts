import path from "node:path";
import { fileURLToPath } from "node:url";

import type { StorybookConfig } from "@storybook/react-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workspaceRoot = path.resolve(__dirname, "../../../packages");

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.@(ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return {
      ...config,
      plugins: [...(config.plugins || []), vanillaExtractPlugin()],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@yuva-devlab/ui": path.resolve(workspaceRoot, "ui/src"),
          "@yuva-devlab/primitives": path.resolve(
            workspaceRoot,
            "primitives/src",
          ),
          // Point the built CSS to dist to avoid ENOENT in Storybook build
          "@yuva-devlab/tokens/tokens.css": path.resolve(
            workspaceRoot,
            "tokens/dist/tokens.css",
          ),
          "@yuva-devlab/tokens": path.resolve(workspaceRoot, "tokens/src"),
        },
      },
    };
  },
};

export default config;
