# 📦 @yuva-devlab/ui

A fully-typed, themeable, **Vanilla Extract** powered component library built on
top of:

- `@yuva-devlab/tokens` (design tokens)
- `@yuva-devlab/primitives` (headless logic)
- Full TypeScript support

This is the main **consumer-facing** UI library.

---

## ✨ Features

- **Atomic Foundation**: Components like Button, Input, and Typography.
- **Layout System**: High-level primitives for `Box`, `Flex`, `Grid`, and
  `Stack`.
- **Vanilla Extract**: Type-safe, zero-runtime CSS with deep token integration.
- **Natural Theme**: Organic-inspired aesthetics with "MD3" influence.
- **Polymorphism**: Components support the `as` prop for semantic flexibility.

---

## 📁 Folder Structure

```bash
packages/ui/
├── src/
│   ├── components/
│   │   ├── button/
│   │   │   ├── button.tsx
│   │   │   ├── button.styles.css.ts # Vanilla Extract styles
│   │   │   ├── button.types.ts
│   │   │   └── index.ts
│   │   ├── layout/         # Box, Flex, Grid, Stack, Container
│   │   └── ...
│   └── index.ts
└── README.md
```

---

## 🎨 Layout System

We provide a specialized set of components to handle all structural needs
without custom CSS:

```tsx
import { Container, Stack, Flex, Box } from "@yuva-devlab/ui";

<Container size="xl">
  <Stack gap="lg">
    <Flex
      align="center"
      justify="between"
    >
      <Box p="md">Brand</Box>
      <Box>Menu</Box>
    </Flex>
  </Stack>
</Container>;
```

---

## 🧪 Testing

Run tests across the UI library:

```bash
pnpm --filter @yuva-devlab/ui test
```

## 📚 Documentation

UI components are documented in `apps/docs` using Storybook and can be previewed
in real-time in `apps/playground`.
