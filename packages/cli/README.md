# 🛠️ @yuva-devlab/cli

[![npm version](https://img.shields.io/npm/v/@yuva-devlab/cli.svg)](https://www.npmjs.com/package/@yuva-devlab/cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Official CLI tool for scaffolding components and primitives in the Yuva Devlab
> ecosystem.

## Features

- 🚀 **Component Generation** - Create fully-structured UI components with
  styles and types
- 🧩 **Primitive Generation** - Scaffold headless primitives with proper
  architecture
- 📁 **Smart Templates** - Pre-configured file structures following best
  practices
- 🎯 **Monorepo Aware** - Automatically detects workspace root
- ✅ **Naming Conventions** - Enforces consistent naming patterns
- ⚡ **Zero Config** - Works out of the box

## Installation

### Global Installation (Recommended)

```bash
npm install -g @yuva-devlab/cli
```

Then use anywhere:

```bash
yuva create component button
yuva create component select --kind primitive
```

### Local Installation

```bash
npm install --save-dev @yuva-devlab/cli
```

Use with npx:

```bash
npx yuva create component button
```

### Workspace Usage

If you're working within the yuva-devlab monorepo:

```bash
pnpm exec yuva create component button
```

## Commands

### Create Component

Generate a new styled UI component:

```bash
yuva create component <name>
```

**Example:**

```bash
yuva create component card
```

**Generates:**

```
packages/ui/src/components/card/
├── card.tsx                 # Component implementation
├── card.styles.css.ts       # Vanilla Extract styles
├── card.types.ts            # TypeScript types
├── card.test.tsx            # Vitest tests
└── index.ts                 # Barrel export
```

### Create Primitive

Generate a new headless primitive:

```bash
yuva create component <name> --kind primitive
```

**Example:**

```bash
yuva create component select --kind primitive
```

**Generates:**

```
packages/primitives/src/select/
├── select.primitive.tsx     # Primitive implementation
├── select.primitive.types.ts # TypeScript types
└── index.ts                 # Barrel export
```

## Options

| Flag     | Description                                    | Default     |
| -------- | ---------------------------------------------- | ----------- |
| `--kind` | Type of component (`component` or `primitive`) | `component` |
| `--help` | Show help information                          | -           |

## Examples

### Creating a Button Component

```bash
yuva create component button
```

This generates a complete button component with:

- React component file
- Vanilla Extract styles
- TypeScript type definitions
- Test file setup
- Barrel export

### Creating a Select Primitive

```bash
yuva create component select --kind primitive
```

This generates a headless select primitive with:

- Primitive logic implementation
- Type definitions
- Barrel export

## Generated File Templates

### Component Template

```tsx
// card.tsx
import { forwardRef } from "react";
import type { CardProps } from "./card.types";
import * as styles from "./card.styles.css";

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={styles.card}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
```

### Primitive Template

```tsx
// select.primitive.tsx
import { forwardRef } from "react";
import type { SelectPrimitiveProps } from "./select.primitive.types";

export const SelectPrimitive = forwardRef<
  HTMLSelectElement,
  SelectPrimitiveProps
>(({ children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});

SelectPrimitive.displayName = "SelectPrimitive";
```

## Development

### Building the CLI

```bash
pnpm --filter @yuva-devlab/cli build
```

### Testing Locally

```bash
# Link globally
pnpm --filter @yuva-devlab/cli link --global

# Use the CLI
yuva create component test
```

## Architecture

The CLI follows a simple, maintainable architecture:

```
@yuva-devlab/cli
├── src/
│   ├── commands/          # Command implementations
│   ├── templates/         # File templates
│   ├── utils/             # Helper functions
│   └── index.ts           # CLI entry point
└── package.json
```

## Roadmap

- [ ] Interactive mode with prompts
- [ ] Custom template support
- [ ] Component variant generation
- [ ] Storybook story generation
- [ ] Test file customization

## Related Packages

- [@yuva-devlab/ui](../ui) - Component library
- [@yuva-devlab/primitives](../primitives) - Headless primitives

## License

MIT © Yuva Devlab
