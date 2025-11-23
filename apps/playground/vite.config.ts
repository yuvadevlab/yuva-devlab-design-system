import path from "node:path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@yuva-devlab/ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@yuva-devlab/tokens": path.resolve(
        __dirname,
        "../../packages/tokens/src",
      ),
      "@yuva-devlab/primitives": path.resolve(
        __dirname,
        "../../packages/primitives/src",
      ),
    },
  },
});
