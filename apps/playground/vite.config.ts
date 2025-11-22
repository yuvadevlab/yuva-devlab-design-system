import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@yuva-devlab/ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@yuva-devlab/tokens": path.resolve(
        __dirname,
        "../../packages/tokens/src"
      ),
      "@yuva-devlab/primitives": path.resolve(
        __dirname,
        "../../packages/primitives/src"
      ),
    },
  },
});
