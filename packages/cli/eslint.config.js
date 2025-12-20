import { node, typescript } from "@yuva-devlab/eslint-config";

export default [
  ...node,
  ...typescript,
  {
    ignores: ["node_modules", "dist", ".turbo"],
  },
];
