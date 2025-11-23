import { resolve } from "path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      include: ["src"],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => {
        return `${entryName}.${format === "es" ? "js" : "cjs"}`;
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    outDir: "dist",
    rollupOptions: {
      external: ["prettier"],
      output: {
        preserveModules: false,
        exports: "named",
      },
      treeshake: true,
    },
  },
});
