import { defineConfig } from "vite";
import { resolve } from "path";
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
        base: resolve(__dirname, "src/base.ts"),
        node: resolve(__dirname, "src/node.ts"),
        react: resolve(__dirname, "src/react.ts"),
        typescript: resolve(__dirname, "src/typescript.ts"),
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
      external: [
        "eslint",
        "@eslint/js",
        "eslint-plugin-react",
        "eslint-plugin-react-hooks",
        "eslint-plugin-jsx-a11y",
        "eslint-plugin-import",
        "globals",
        "typescript-eslint",
      ],
      output: {
        preserveModules: false,
        exports: "named",
      },
      treeshake: true,
    },
  },
});
