import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "@stylexjs/stylex",
    "@yuva-devlab/tokens",
    "@yuva-devlab/primitives",
  ],
});
