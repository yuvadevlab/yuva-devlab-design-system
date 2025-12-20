import { typescript } from "@yuva-devlab/eslint-config";

export default [
  ...typescript,
  {
    ignores: ["dist/", "node_modules/", ".turbo"],
  },
];
