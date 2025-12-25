# 🎨 @yuva-devlab/colors

[![npm version](https://img.shields.io/npm/v/@yuva-devlab/colors.svg)](https://www.npmjs.com/package/@yuva-devlab/colors)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> A lightweight, zero-dependency color palette generation library for creating
> harmonious 10-shade color systems.

## Features

- 🎨 **10-Shade Palettes** - Generate complete color scales from a single seed
- 🔄 **Smart Saturation** - Automatic adjustment for optimal color harmony
- 🎯 **Zero Dependencies** - Pure TypeScript implementation
- 🔒 **Type-Safe** - Full TypeScript support
- ⚡ **Lightweight** - Minimal bundle size
- 🧮 **Color Utilities** - Built-in RGB, HSL, and Hex conversion functions

## Installation

```bash
# npm
npm install @yuva-devlab/colors

# yarn
yarn add @yuva-devlab/colors

# pnpm
pnpm add @yuva-devlab/colors
```

## Quick Start

```ts
import { generate } from "@yuva-devlab/colors";

// Generate a 10-shade palette from any hex color
const palette = generate("#3E6A4D");

console.log(palette);
// [
//   '#F0F7F2', // Shade 0 (lightest)
//   '#DBEBE0',
//   '#C6DFCE',
//   '#B1D3BC',
//   '#9CC7AA',
//   '#87BB98',
//   '#72AF86',
//   '#5D9D74',
//   '#488B62',
//   '#0D1A12'  // Shade 9 (darkest)
// ]
```

## API Reference

### `generate(color, options?)`

Generates a 10-shade color palette from a seed color.

**Parameters:**

- `color` (string): Hex color code (e.g., `"#3E6A4D"`)
- `options` (optional): Generation options
  - `saturationAdjustment` (number): Adjust saturation curve (-100 to 100)
  - `lightnessRange` (object): Custom lightness range
    - `min` (number): Minimum lightness (0-100)
    - `max` (number): Maximum lightness (0-100)

**Returns:** Array of 10 hex color strings

**Example:**

```ts
import { generate } from "@yuva-devlab/colors";

// Basic usage
const palette = generate("#FF5733");

// With custom options
const customPalette = generate("#FF5733", {
  saturationAdjustment: 10,
  lightnessRange: { min: 10, max: 95 },
});
```

### Color Conversion Utilities

#### `hexToRgb(hex)`

Converts hex color to RGB.

```ts
import { hexToRgb } from "@yuva-devlab/colors";

const rgb = hexToRgb("#3E6A4D");
// { r: 62, g: 106, b: 77 }
```

#### `rgbToHsl(r, g, b)`

Converts RGB to HSL.

```ts
import { rgbToHsl } from "@yuva-devlab/colors";

const hsl = rgbToHsl(62, 106, 77);
// { h: 140, s: 26, l: 33 }
```

#### `hslToRgb(h, s, l)`

Converts HSL to RGB.

```ts
import { hslToRgb } from "@yuva-devlab/colors";

const rgb = hslToRgb(140, 26, 33);
// { r: 62, g: 106, b: 77 }
```

#### `rgbToHex(r, g, b)`

Converts RGB to hex.

```ts
import { rgbToHex } from "@yuva-devlab/colors";

const hex = rgbToHex(62, 106, 77);
// "#3E6A4D"
```

## Use Cases

### Design System Generation

```ts
import { generate } from "@yuva-devlab/colors";

const brandColors = {
  primary: generate("#3E6A4D"),
  secondary: generate("#6A4D3E"),
  accent: generate("#4D3E6A"),
};

// Use in your design system
const theme = {
  colors: {
    primary: {
      50: brandColors.primary[0],
      100: brandColors.primary[1],
      // ... etc
      900: brandColors.primary[9],
    },
  },
};
```

### Dynamic Theming

```ts
import { generate } from "@yuva-devlab/colors";

function createTheme(brandColor: string) {
  const palette = generate(brandColor);

  return {
    background: palette[0],
    surface: palette[1],
    border: palette[3],
    text: palette[8],
    primary: palette[5],
  };
}

const theme = createTheme("#3E6A4D");
```

### Color Manipulation

```ts
import { hexToRgb, rgbToHsl, hslToRgb, rgbToHex } from "@yuva-devlab/colors";

function lightenColor(hex: string, amount: number): string {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  // Increase lightness
  const newHsl = { ...hsl, l: Math.min(100, hsl.l + amount) };
  const newRgb = hslToRgb(newHsl.h, newHsl.s, newHsl.l);

  return rgbToHex(newRgb.r, newRgb.g, newRgb.b);
}

const lighter = lightenColor("#3E6A4D", 20);
```

## Algorithm

The palette generation uses a sophisticated algorithm that:

1. **Converts** the seed color to HSL
2. **Generates** 10 shades with evenly distributed lightness
3. **Adjusts** saturation dynamically for optimal color harmony
4. **Ensures** sufficient contrast between adjacent shades

This approach is inspired by modern design systems like Ant Design and Tailwind
CSS.

## Development

```bash
# Build the package
pnpm --filter @yuva-devlab/colors build

# Run type checking
pnpm --filter @yuva-devlab/colors type-check
```

## Related Packages

- [@yuva-devlab/tokens](../tokens) - Uses this package for palette generation
- [@yuva-devlab/ui](../ui) - Components using generated palettes

## License

MIT © Yuva Devlab
