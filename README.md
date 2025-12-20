# 🧩 yuva-devlab-workspace

A fully–modular, scalable monorepo powering the **Yuva Devlab UI Library** — including tokens, primitives, styled components, theming, CLI tools, docs, and sandbox apps.

This workspace is built with:

- **pnpm workspaces**
- **Turborepo** task pipelines
- **TypeScript**
- **Vanilla Extract** (CSS-in-TS)
- **Radix UI** (Headless Primitives)
- **Storybook** (Documentation)
- **Vite** (Rapid Development)
- **Custom CLI (`yuva`)**
- **Strict architecture based on modern design system patterns**

---

## 📁 Monorepo Structure

```bash
yuva-devlab-workspace/
├── apps/
│   ├── docs/           # Storybook documentation app
│   └── playground/     # Vite React sandbox for component testing
├── packages/
│   ├── cli/            # `yuva` CLI for scaffolding and automation
│   ├── colors/         # Color palette generation utilities
│   ├── config/         # Shared ESLint, Prettier, and TSConfig
│   ├── primitives/     # Accessible, headless logic components (Radix)
│   ├── tokens/         # Design system tokens (Vanilla Extract)
│   └── ui/             # Premium UI component library (Natural Theme)
└── ...
```

---

## 🚀 Scripts

### Root-level commands

| Command               | Description                                     |
| --------------------- | ----------------------------------------------- |
| `pnpm build`          | Runs build across all apps & packages via Turbo |
| `pnpm dev`            | Runs all packages/apps in development mode      |
| `pnpm dev:playground` | Start the Vite playground app                   |
| `pnpm dev:docs`       | Start the Storybook documentation               |
| `pnpm test`           | Runs unit tests across the workspace            |
| `pnpm lint`           | Lints code using shared ESLint config           |
| `pnpm format`         | Formats codebase using Prettier                 |
| `pnpm clean`          | Clean build artifacts and Turbo cache           |

---

## 🧪 Development Flow

1. **Tokens/Colors**: Update or generate new design constants.
2. **Primitives**: Implement core logic and accessibility (Radix UI).
3. **UI Components**: Build styled, premium components using Vanilla Extract + Tokens.
4. **Verification**: Preview in `apps/playground` or document in `apps/docs`.

---

## 📦 Packages

Each package is documented with its own dedicated README:

- [**Packages UI**](packages/ui/README.md) - Styled components and layout system.
- [**Packages Primitives**](packages/primitives/README.md) - Headless logic and A11y.
- [**Packages Tokens**](packages/tokens/README.md) - Design tokens and theme automation.
- [**Packages Colors**](packages/colors/README.md) - Palette generation utilities.
- [**Packages CLI**](packages/cli/README.md) - Scaffolding and developer tools.
- [**Packages Config**](packages/config/README.md) - Shared linter and compiler configs.

---

## 🧩 Architecture Philosophy

- **Atomic Tokens**: One source of truth for every visual constant.
- **Headless Foundation**: Separation of behavior (Radix) from aesthetics.
- **Organic Aesthetic**: Custom "Natural" theme using Green/Cream palettes.
- **Developer First**: CLI-driven creation and zero-runtime styling.

---

## 📜 License

MIT © Yuva Devlab
