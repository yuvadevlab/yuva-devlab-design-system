import { resolve } from "path";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    dts({
      include: ["src/**/*.ts"],
      exclude: ["src/**/*.test.ts"],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "YuvaDevlabTokens",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      external: ["@vanilla-extract/css"],
      output: {
        preserveModules: false,
        exports: "named",
      },
    },
  },
});
