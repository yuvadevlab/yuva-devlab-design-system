import { react, typescript } from "@yuva-devlab/eslint-config";

export default [
  ...react,
  ...typescript,
  {
    ignores: ["dist/", "node_modules/", ".turbo", "*.d.ts", "coverage/"],
  },
];
