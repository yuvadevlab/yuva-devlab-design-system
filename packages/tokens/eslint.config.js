import { typescript } from "@yuva-devlab/eslint-config";

export default [
  ...typescript,
  {
    ignores: ["node_modules", "dist", ".turbo"],
  },
];
