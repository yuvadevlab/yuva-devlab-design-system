import js from "@eslint/js";
import type { Linter } from "eslint";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export const base: Linter.Config[] = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      //
      // Core strict JS rules
      //
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": [
        "error",
        {
          destructuring: "all",
          ignoreReadBeforeAssign: false,
        },
      ],
      "prefer-template": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-eval": "error",
      "no-alert": "error",
      "no-debugger": "error",
      "no-console": [
        "error",
        {
          allow: ["warn", "error"],
        },
      ],
      curly: ["error", "all"],
      "dot-notation": "error",
      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: ["draft"],
        },
      ],
      "no-shadow": "off",

      //
      // Base no-unused-vars (overridden by TS version for TS files)
      //
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      //
      // Import hygiene
      //
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
        },
      ],
      "import/no-unresolved": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",

      //
      // Misc
      //
      "no-restricted-syntax": [
        "error",
        {
          selector: "TSEnumDeclaration",
          message:
            "Avoid TypeScript enums; prefer union types or const objects.",
        },
      ],
    },
  },
  // Disable ESLint rules that conflict with Prettier
  prettier,
];
