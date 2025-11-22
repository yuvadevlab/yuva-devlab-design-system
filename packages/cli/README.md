# 🛠️ @yuva-devlab/cli

The official CLI for generating components and primitives inside  
`@yuva-devlab/ui`.

---

## 🚀 Features

- Create a full UI component folder with styles + types
- Create a headless primitive
- Auto-detect monorepo root
- Enforce naming conventions
- Zero config required

---

## 📦 Installation (Workspace)

CLI is automatically linked to your pnpm workspace.

Run with:

```bash
pnpm exec yuva --help
```

---

## 🧱 Commands

Create a Styled UI Component:

```bash
pnpm exec yuva create component <component-name>
```

Create a Headless Primitive:

```bash
pnpm exec yuva create component <primitive-name> --kind primitive
```

---

## 📁 Generated Structure (example)

```bash
packages/ui/src/components/button/
├── button.primitive.tsx
├── button.styles.ts
├── button.test.tsx
├── button.types.ts
└── index.ts
```

or for a primitive:

```bash
packages/primitives/src/button/
├── button.primitive.tsx
└── index.ts
```

---

## ⚙️ Development

Build CLI:

```bash
pnpm --filter @yuva-devlab/cli run build
```
