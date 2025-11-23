import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  tsconfig: "tsconfig.json",
  external: [
    "react",
    "react-dom",
    "@stylexjs/stylex",
    "@yuva-devlab/tokens",
    "@yuva-devlab/primitives",
  ],
});
