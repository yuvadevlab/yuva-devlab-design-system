# 🎨 @yuva-devlab/tokens

Design system tokens implemented using **Vanilla Extract**.

These tokens power:

- Tonal Palettes (Automated generation)
- Semantic Colors (Natural / Organic theme)
- Spacing (Systemic 2xs-5xl scales)
- Typography (Scale-based)
- Radii & Shadows
- Breakpoints & Z-indices

---

## 📁 Folder Structure

```bash
packages/tokens/
├── src/
│   ├── utils/          # Token generation logic
│   ├── palettes.css.ts # Global tonal palettes
│   ├── themes.css.ts   # Semantic light/dark mappings
│   ├── spacing.css.ts  # Spacing scales
│   ├── typography.css.ts # Type scales
│   └── index.ts        # Entry point
└── README.md
```

---

## 🚀 Key Technical Features

### 1. Automated Tonal Palettes

We use a single source of truth (`SEEDS`) to generate mathematically consistent
MD3 tonal palettes.

### 2. Zero-Runtime CSS

Vanilla Extract compiles these tokens into static CSS variables at build time,
ensuring maximum performance with type-safety.

---

## How UI library uses tokens

```ts
import { vars } from "@yuva-devlab/tokens";
import { style } from "@vanilla-extract/css";

export const componentStyle = style({
  backgroundColor: vars.colors.primary,
  padding: vars.spacing.md,
});
```
