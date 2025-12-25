---
"@yuva-devlab/cli": minor
"@yuva-devlab/primitives": patch
"@yuva-devlab/colors": patch
"@yuva-devlab/tokens": patch
"@yuva-devlab/ui": patch
---

Migrate CLI to ESM, replace StyleX with Vanilla Extract, and standardize documentation

CLI now uses ES modules for better compatibility with modern tools like Chalk v5. Component templates have been updated to use Vanilla Extract instead of StyleX, matching the actual project implementation. All package READMEs now show consistent examples for npm, yarn, and pnpm.

Breaking: CLI requires Node.js 18+ for ESM support
