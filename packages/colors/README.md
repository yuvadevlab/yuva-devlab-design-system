# 🎨 @yuva-devlab/colors

A utility-first color palette generation library inspired by Ant Design and
modern HSL algorithms.

## Features

- **Generate 10-shade palettes** from any hex color seed.
- **Dynamic Saturation**: Automatically adjusts saturation for brighter/muted
  tones.
- **Color Conversion**: Built-in utilities for RGB, HSL, and Hex conversions.
- **Zero Dependencies**: Lightweight and fast.

## Installation

```bash
pnpm add @yuva-devlab/colors
```

## Usage

```ts
import { generate } from "@yuva-devlab/colors";

const palette = generate("#3E6A4D");
// returns ['#F0F7F2', '#DBEBE0', ..., '#0D1A12']
```

## API

### `generate(color: string, options?: GenerateOptions)`

Generates a 10-shade color palette.

### `hexToRgb`, `rgbToHsl`, `hslToRgb`, `rgbToHex`

Standard color conversion utilities.
