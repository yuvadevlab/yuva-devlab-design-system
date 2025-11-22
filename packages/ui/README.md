# 📦 @yuva-devlab/ui

A fully-typed, themeable, StyleX-powered component library built on top of:

- `@yuva-devlab/tokens` (design tokens)
- `@yuva-devlab/primitives` (headless logic)
- Custom **ThemeProvider + ConfigProvider**
- Full TypeScript support

This is the main **consumer-facing** UI library.

---

## ✨ Features

- Atomic foundation components
- Strict folder-per-component architecture
- StyleX styling
- Themeable via CSS variables + ConfigProvider
- No Storybook files inside this package
- Ready for npm publishing (if desired)

---

## 📁 Folder Structure

```bash
packages/ui/
├── src/
│ ├── components/
│ │ ├── button/
│ │ │ ├── button.tsx
│ │ │ ├── button.test.tsx
│ │ │ ├── button.styles.ts
│ │ │ ├── button.types.ts
│ │ │ └── index.ts
│ │ └── ...
│ ├── utils/
│ │ ├── cn.ts
│ │ └── index.ts
│ ├── theme/
│ │ ├── ConfigProvider.tsx
│ │ ├── ThemeProvider.tsx
│ │ └── index.ts
│ │ └── types.ts
│ ├── constants/
│ │ ├── defaultTheme.ts
│ │ ├── cssVariables.ts
│ │ └── index.ts
│ └── index.ts
├── test/
│ └── setup.ts
└── README.md
```

---

## 🎨 Theming

Usage:

```tsx
import { ThemeProvider, ConfigProvider, Button } from "@yuva-devlab/ui";

<ThemeProvider mode="system">
  <ConfigProvider
    theme={{
      tokens: {
        color: { accentPrimary: "#22c55e" },
      },
    }}
  >
    <Button type="primary">Click me</Button>
  </ConfigProvider>
</ThemeProvider>;
```

---

## 🧪 Testing

Tests live inside each component:

```bash
button/
└──  button.test.tsx
```

Run tests:

```bash
pnpm --filter @yuva-devlab/ui test
```

## 📚 Documentation

UI components are documented in:

```bash
apps/docs/src/stories
```
