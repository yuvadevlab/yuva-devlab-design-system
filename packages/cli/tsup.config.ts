import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"],
  target: "node18",
  sourcemap: true,
  clean: true,
  treeshake: true,
  tsconfig: "tsconfig.json",
  dts: false,
  shims: false,
  outDir: "dist",
  outExtension: () => ({ js: ".js" }),
  banner: {
    js: "#!/usr/bin/env node",
  },
});
