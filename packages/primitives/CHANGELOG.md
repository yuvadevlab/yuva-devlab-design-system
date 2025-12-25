# @yuva-devlab/primitives

## 0.2.0

### Minor Changes

- 61f9888: Standardize form inputs & add semantic layout components.
  - Added new Divider component.
  - Added semantic layout components: Header, Footer, Main, Section, Nav, Aside,
    Article.
  - Standardized transitions and focus styles for Select, Checkbox, Radio,
    Switch, Input.

## 0.1.2

### Patch Changes

- 38c0267: Migrate CLI to ESM, replace StyleX with Vanilla Extract, and
  standardize documentation

  CLI now uses ES modules for better compatibility with modern tools like Chalk
  v5. Component templates have been updated to use Vanilla Extract instead of
  StyleX, matching the actual project implementation. All package READMEs now
  show consistent examples for npm, yarn, and pnpm.

  Breaking: CLI requires Node.js 18+ for ESM support

## 0.1.1

### Patch Changes

- 2cc8dcf: Complete documentation rewrite with comprehensive examples and API
  reference

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
