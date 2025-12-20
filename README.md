# 🧩 yuva-devlab-workspace

A fully–modular, scalable monorepo powering the **Yuva Devlab UI Library** — including tokens, primitives, styled components, theming, CLI tools, docs, and sandbox apps.

This workspace is built with:

- **pnpm workspaces** (Package management)
- **Turborepo** (Task orchestration & caching)
- **TypeScript** (Type safety)
- **Vanilla Extract** (Zero-runtime CSS-in-TS)
- **Radix UI** (Headless, accessible primitives)
- **Storybook** (Component documentation)
- **Vite** (Fast dev server and bundling)
- **Husky & lint-staged** (Git hooks for quality)
- **Strict architecture** (Tokens → Primitives → Components)

---

## 📁 Project Structure

```bash
yuva-devlab-workspace/
├── .husky/             # Git hooks configuration
├── .vscode/            # Shared editor settings
├── apps/               # Consumer applications
│   ├── docs/           # Storybook documentation app
│   └── playground/     # Vite React sandbox for testing
├── packages/           # Core library packages
│   ├── cli/            # `yuva` CLI for scaffolding/tooling
│   ├── colors/         # HSL-based palette generation
│   ├── config/         # Shared linter (ESLint) and prettier configs
│   ├── primitives/     # Headless logic components (Radix)
│   ├── tokens/         # Design system tokens (Vanilla Extract)
│   └── ui/             # Premium UI components (styled)
├── .gitignore          # Git ignore patterns
├── .nvmrc              # Node.js version locking
├── .prettierignore     # Prettier ignore patterns
├── README.md           # Root documentation (this file)
├── commitlint.config.js # Commit message validation rules
├── eslint.config.js    # Global ESLint (Flat Config)
├── package.json        # Root workspace configuration
├── pnpm-lock.yaml      # pnpm dependency lock file
├── pnpm-workspace.yaml # pnpm workspace definition
├── tsconfig.json       # Root TypeScript configuration
└── turbo.json          # Turborepo pipeline settings
```

---

## 🚀 Workspace Scripts

These commands use **Turborepo** to execute tasks across the entire monorepo with intelligent caching.

### Primary Workflows

| Command         | Description                                             |
| :-------------- | :------------------------------------------------------ |
| `pnpm build`    | Build all packages and apps                             |
| `pnpm dev`      | Start development servers for all apps/packages         |
| `pnpm test`     | Run unit tests across the whole workspace               |
| `pnpm validate` | Comprehensive check: Format + Lint + Type-check + Build |
| `pnpm fix`      | Automatically fix formatting and linting issues         |

### Targeted Commands

| Command               | Description                                        |
| :-------------------- | :------------------------------------------------- |
| `pnpm build:packages` | Build only the library packages                    |
| `pnpm build:apps`     | Build only the applications (`docs`, `playground`) |
| `pnpm lint`           | Check for linting errors                           |
| `pnpm lint:fix`       | Fix linting errors automatically                   |
| `pnpm format`         | Reformat all code using Prettier                   |
| `pnpm format:check`   | Verify code formatting                             |
| `pnpm type-check`     | Run TypeScript compiler checks                     |
| `pnpm clean`          | Remove all build artifacts and cache               |

---

## 🧪 Development Flow

1. **Tokens/Colors**: Define or generate visual constants in `packages/tokens` or `packages/colors`.
2. **Primitives**: Create behavior-only logic in `packages/primitives`.
3. **UI Components**: Build the final styled components in `packages/ui`.
4. **Verification**: Preview changes instantly in `apps/playground` or document in `apps/docs`.

---

## 📦 Package Documentation

Explore detailed documentation for each module:

- [**Packages UI**](packages/ui/README.md) - Styled components and layout engine.
- [**Packages Primitives**](packages/primitives/README.md) - Headless logic and A11y.
- [**Packages Tokens**](packages/tokens/README.md) - Spacing, typography, and theme vars.
- [**Packages Colors**](packages/colors/README.md) - Palette generation utility.
- [**Packages CLI**](packages/cli/README.md) - Scaffolding and developer automation.
- [**Packages Config**](packages/config/README.md) - Shared linter and compiler configs.

---

## 📜 License

MIT © Yuva Devlab
