import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
    // Ensure resolve and alias objects exist
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};

    // Add workspace package aliases
    const aliases = {
      "@yuva-devlab/ui": path.resolve(workspaceRoot, "ui/src"),
      "@yuva-devlab/primitives": path.resolve(workspaceRoot, "primitives/src"),
      "@yuva-devlab/tokens": path.resolve(workspaceRoot, "tokens/src"),
    };

    // Merge aliases
    Object.assign(config.resolve.alias, aliases);

    return config;
  },
};

export default config;
