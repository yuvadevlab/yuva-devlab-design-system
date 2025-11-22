# 🧩 yuva-devlab-workspace

A fully–modular, scalable monorepo powering the **Yuva Devlab UI Library** —  
including tokens, primitives, styled components, theming, CLI tools, docs, and sandbox apps.

This workspace is built with:

- **pnpm workspaces**
- **Turborepo** task pipelines
- **TypeScript**
- **StyleX**
- **Storybook (docs app)**
- **Vite (playground app)**
- **Custom CLI (`yuva`)**
- **Strict architecture based on modern design system patterns**

---

## 📁 Monorepo Structure

```bash
yuva-devlab-workspace/
├── apps/
│   ├── docs/           # Storybook docs app
│   └── playground/     # Vite React sandbox app
├── packages/
│   ├── cli/            # `yuva` CLI -- scaffolding + tooling
│   ├── primitives/     # Headless primitives (un-styled components)
│   ├── tokens/         # Design system tokens (StyleX)
│   └── ui/             # Main UI component library (styled components)
└── package.json        # Root package
└── pnpm-lock.yaml      # pnpm lock file
└── pnpm-workspace.yaml # pnpm workspace configuration
└── README.md           # This file
└── tsconfig.json       # Root TypeScript configuration
└── turbo.json          # Turborepo task pipelines
```

---

## 🚀 Scripts

### Root-level commands

| Command                 | Description                                         |
| ----------------------- | --------------------------------------------------- |
| `pnpm build`            | Runs build across all apps & packages via Turbo     |
| `pnpm build:packages`   | Runs build across all packages via Turbo            |
| `pnpm build:apps`       | Runs build across all apps via Turbo                |
| `pnpm build:cli`        | Runs build across all CLI packages via Turbo        |
| `pnpm build:ui`         | Runs build across all UI packages via Turbo         |
| `pnpm build:tokens`     | Runs build across all tokens packages via Turbo     |
| `pnpm build:primitives` | Runs build across all primitives packages via Turbo |
| `pnpm build:docs`       | Runs build across all docs packages via Turbo       |
| `pnpm build:playground` | Runs build across all playground packages via Turbo |
| `pnpm clean`            | Clean all build artifacts & Turbo cache             |
| `pnpm dev`              | Runs all packages/apps that expose `dev`            |
| `pnpm dev:docs`         | Start Storybook docs                                |
| `pnpm format`           | Formats code using Prettier                         |
| `pnpm dev:playground`   | Start Vite playground                               |
| `pnpm test`             | Runs tests across the workspace                     |
| `pnpm lint`             | Lints packages using shared ESLint config           |

---

## 🧪 Development Flow

1. Build primitives or tokens
2. Add UI components (using CLI or manually)
3. Test changes in:
   - `apps/playground` (sandbox dev app)
   - `apps/docs` (Storybook)

---

## 🛠 Tooling

### pnpm Workspaces

Handles dependency hoisting, linking, and workspace boundaries.

### Turborepo

Used to:

- orchestrate **build / lint / test** pipelines
- enable **remote/local caching**
- run tasks only where files changed

### Storybook

Interactive documentation for every UI component.

### Vite

Fast React dev environment for testing components inside real app context.

---

## 📦 Packages

Each package has its own dedicated README:

- [`packages/ui`](packages/ui/README.md)
- [`packages/primitives`](packages/primitives/README.md)
- [`packages/tokens`](packages/tokens/README.md)
- [`packages/cli`](packages/cli/README.md)
- [`packages/config`](packages/config/README.md)

Apps also have their own READMEs:

- [`apps/playground`](apps/playground/README.md)
- [`apps/docs`](apps/docs/README.md)

---

## 🧩 Architecture Philosophy

This workspace follows:

- **Tokens → Primitives → UI Components**
- **Single source of truth for theme**
- **Consistent folder structure**
- **Zero Storybook files inside library package**
- **Change-management via CLI**
- **Testable isolated packages**

---

## 📜 License

MIT © Yuva Devlab
