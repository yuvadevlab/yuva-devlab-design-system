import { react, typescript } from "@yuva-devlab/eslint-config";

export default [
  ...react,
  ...typescript,
  {
    ignores: ["node_modules", "dist", ".turbo", "*.d.ts"],
  },
];
