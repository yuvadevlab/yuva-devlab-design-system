# @yuva-devlab/ui

## 0.1.2

### Patch Changes

- 38c0267: Migrate CLI to ESM, replace StyleX with Vanilla Extract, and
  standardize documentation

  CLI now uses ES modules for better compatibility with modern tools like Chalk
  v5. Component templates have been updated to use Vanilla Extract instead of
  StyleX, matching the actual project implementation. All package READMEs now
  show consistent examples for npm, yarn, and pnpm.

  Breaking: CLI requires Node.js 18+ for ESM support

- Updated dependencies [38c0267]
  - @yuva-devlab/primitives@0.1.2
  - @yuva-devlab/colors@0.1.2
  - @yuva-devlab/tokens@0.1.2

## 0.1.1

### Patch Changes

- 2cc8dcf: Complete documentation rewrite with comprehensive examples and API
  reference
- Updated dependencies [2cc8dcf]
  - @yuva-devlab/primitives@0.1.1
  - @yuva-devlab/colors@0.1.1
  - @yuva-devlab/tokens@0.1.1

## 0.1.0

### Minor Changes

- 16c5cc8: Initial Alpha release of the complete Yuva Devlab UI Library
  ecosystem. Includes:
  - Headless Radix Primitives
  - Vanilla Extract Styling System
  - Comprehensive Design Tokens
  - Modern React Components
  - Scalable Monorepo Configuration
  - CLI tool for component scaffolding

### Patch Changes

- Updated dependencies [16c5cc8]
  - @yuva-devlab/tokens@0.1.0
  - @yuva-devlab/primitives@0.1.0
  - @yuva-devlab/colors@0.1.0
