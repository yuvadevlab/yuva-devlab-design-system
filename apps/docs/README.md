# 📘 @yuva-devlab/docs

Interactive Storybook documentation for all UI components.

This is the public-facing documentation for the Yuva Devlab design system.

---

## 🚀 Run Storybook

```bash
pnpm dev:docs
```

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

---

## 📁 Structure

```bash
apps/docs/
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── stories/
│   │   └── Button.stories.tsx
│   ├── App.tsx
│   └── index.css
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## ✨ Features

- AutoDocs enabled
- Global decorators for theme + config providers
- Uses real @yuva-devlab/ui components
- Isolated from the library’s source code (clean architecture)

---

## 🌱 Adding new stories

Add under: `apps/docs/src/stories/<Component>.stories.tsx`

Each story automatically uses the project’s theming context.
