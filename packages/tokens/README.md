# 🎨 @yuva-devlab/tokens

[![npm version](https://img.shields.io/npm/v/@yuva-devlab/tokens.svg)](https://www.npmjs.com/package/@yuva-devlab/tokens)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Design system tokens built with Vanilla Extract, providing a comprehensive
> foundation for consistent UI development.

## Features

- 🎨 **Automated Tonal Palettes** - Material Design 3 inspired color generation
- 🌓 **Light/Dark Themes** - Semantic color tokens that adapt to theme
- 📏 **Systematic Spacing** - Consistent scale from 2xs to 5xl
- 📝 **Typography Scale** - Harmonious type system
- 🎯 **Zero Runtime** - All tokens compiled to CSS variables at build time
- 🔒 **Type-Safe** - Full TypeScript autocomplete for all tokens

## Installation

```bash
# npm
npm install @yuva-devlab/tokens

# yarn
yarn add @yuva-devlab/tokens

# pnpm
pnpm add @yuva-devlab/tokens
```

**Zero runtime dependencies** - All tokens are compiled to static CSS at build
time.

## Token Categories

### Colors

- **Tonal Palettes** - 13-shade palettes for primary, secondary, tertiary,
  neutral, and error
- **Semantic Colors** - Theme-aware tokens (background, surface, primary, etc.)
- **State Colors** - Hover, active, and disabled states

### Spacing

- **Scale**: `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`
- **Values**: 4px to 96px in systematic increments

### Typography

- **Sizes**: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`
- **Weights**: `light`, `regular`, `medium`, `semibold`, `bold`
- **Line Heights**: Optimized for readability

### Other Tokens

- **Border Radius**: `sm`, `md`, `lg`, `xl`, `full`
- **Shadows**: `sm`, `md`, `lg`, `xl`
- **Z-Index**: Layered system for overlays, modals, tooltips
- **Breakpoints**: Responsive design breakpoints

## Usage

### In Vanilla Extract

```ts
import { vars } from "@yuva-devlab/tokens";
import { style } from "@vanilla-extract/css";

export const card = style({
  backgroundColor: vars.colors.surface,
  padding: vars.spacing.lg,
  borderRadius: vars.radii.md,
  boxShadow: vars.shadows.sm,

  // Typography
  fontSize: vars.typography.size.md,
  lineHeight: vars.typography.lineHeight.md,

  // Responsive
  "@media": {
    [vars.breakpoints.md]: {
      padding: vars.spacing.xl,
    },
  },
});
```

### Importing CSS

```tsx
// Import compiled CSS in your app entry point
import "@yuva-devlab/tokens/tokens.css";
```

### Using CSS Variables Directly

```css
.my-component {
  background-color: var(--colors-surface);
  padding: var(--spacing-md);
  border-radius: var(--radii-md);
}
```

## Color System

### Tonal Palettes

Each color has 13 shades (0-100 in increments of 10):

```ts
import { vars } from "@yuva-devlab/tokens";

// Primary palette
vars.palettes.primary[0]; // Lightest
vars.palettes.primary[50]; // Mid-tone
vars.palettes.primary[100]; // Darkest

// Available palettes:
// - primary (Natural green)
// - secondary
// - tertiary
// - neutral
// - neutralVariant
// - error
```

### Semantic Colors

Theme-aware tokens that automatically adapt:

```ts
vars.colors.background; // Page background
vars.colors.surface; // Card/panel background
vars.colors.primary; // Primary brand color
vars.colors.onPrimary; // Text on primary
vars.colors.secondary; // Secondary color
vars.colors.error; // Error state
vars.colors.outline; // Borders
```

## Spacing System

```ts
import { vars } from "@yuva-devlab/tokens";

vars.spacing["2xs"]; // 4px
vars.spacing.xs; // 8px
vars.spacing.sm; // 12px
vars.spacing.md; // 16px
vars.spacing.lg; // 24px
vars.spacing.xl; // 32px
vars.spacing["2xl"]; // 48px
vars.spacing["3xl"]; // 64px
vars.spacing["4xl"]; // 80px
vars.spacing["5xl"]; // 96px
```

## Typography

```ts
import { vars } from "@yuva-devlab/tokens";

// Sizes
vars.typography.size.xs; // 12px
vars.typography.size.sm; // 14px
vars.typography.size.md; // 16px
vars.typography.size.lg; // 18px
vars.typography.size.xl; // 20px
vars.typography.size["2xl"]; // 24px
vars.typography.size["3xl"]; // 30px
vars.typography.size["4xl"]; // 36px
vars.typography.size["5xl"]; // 48px

// Weights
vars.typography.weight.light; // 300
vars.typography.weight.regular; // 400
vars.typography.weight.medium; // 500
vars.typography.weight.semibold; // 600
vars.typography.weight.bold; // 700
```

## Development

```bash
# Build tokens
pnpm --filter @yuva-devlab/tokens build

# Watch mode
pnpm --filter @yuva-devlab/tokens dev
```

## Architecture

```
Color Seeds (HSL)
      ↓
Tonal Palette Generation (MD3 algorithm)
      ↓
Semantic Token Mapping (Light/Dark)
      ↓
CSS Variables (Compiled by Vanilla Extract)
      ↓
Your Components
```

## Related Packages

- [@yuva-devlab/colors](../colors) - Palette generation utility
- [@yuva-devlab/ui](../ui) - Components using these tokens

## License

MIT © Yuva Devlab
