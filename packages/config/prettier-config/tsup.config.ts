import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["esm", "cjs"],
  sourcemap: true,
  clean: true,
  dts: true,
  treeshake: true,
  splitting: false,
  external: ["prettier"],
});
