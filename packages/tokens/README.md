# 🎨 @yuva-devlab/tokens

Design system tokens implemented using **StyleX variables**.

These tokens power:

- Colors
- Spacing
- Typography (later)
- Radii (later)
- Shadows (later)

---

## 📁 Folder Structure

```bash
packages/tokens/
├── src/
│ ├── color.stylex.ts
│ ├── spacing.stylex.ts
│ └── index.ts
└── README.md
```

---

## Example

```ts
export const colors = stylex.defineVars({
  accentPrimary: "var(--yd-color-accent-primary)",
  textPrimary: "var(--yd-color-text-primary)",
});
```

---

## How UI library uses tokens

```ts
import { colors, spacing } from "@yuva-devlab/tokens";

stylex.create({
  backgroundColor: colors.accentPrimary,
  padding: spacing.md,
});
```
