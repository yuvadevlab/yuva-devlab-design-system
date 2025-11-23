import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    base: "src/base.ts",
    node: "src/node.ts",
    react: "src/react.ts",
    typescript: "src/typescript.ts",
  },
  format: ["esm", "cjs"],
  sourcemap: true,
  clean: true,
  tsconfig: "tsconfig.json",
  dts: true,
  treeshake: true,
  splitting: false,
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
});
