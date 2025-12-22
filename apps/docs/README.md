# 📘 Yuva Devlab Documentation

> Interactive Storybook documentation for the Yuva Devlab UI component library.

## Overview

This Storybook application provides comprehensive, interactive documentation for
all components in `@yuva-devlab/ui`. It serves as both developer documentation
and a visual testing environment.

## Quick Start

```bash
# From workspace root
pnpm dev:docs

# Or from this directory
pnpm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view the documentation.

## Features

- 📚 **Interactive Examples** - Live component playground
- 🎨 **Theme Preview** - See components in light/dark themes
- 📖 **Auto-Generated Docs** - Props tables and descriptions
- 🧪 **Visual Testing** - Verify component states and variants
- 🔍 **Search** - Quickly find components and stories
- 📱 **Responsive Preview** - Test components at different viewport sizes

## Structure

```
apps/docs/
├── .storybook/
│   ├── main.ts           # Storybook configuration
│   └── preview.tsx       # Global decorators and parameters
├── src/
│   └── stories/
│       ├── Button.stories.tsx
│       ├── Input.stories.tsx
│       └── ...
└── package.json
```

## Writing Stories

### Basic Story

```tsx
// src/stories/Card.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@yuva-devlab/ui";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Card content",
  },
};

export const WithPadding: Story = {
  args: {
    children: "Padded card",
    p: "lg",
  },
};
```

### Story with Multiple Variants

```tsx
export const AllVariants: Story = {
  render: () => (
    <Stack gap="md">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </Stack>
  ),
};
```

## Available Addons

- **Controls** - Dynamically interact with component props
- **Actions** - Log component events
- **Viewport** - Test responsive behavior
- **Backgrounds** - Preview on different backgrounds
- **Docs** - Auto-generated documentation

## Building for Production

```bash
pnpm run build-storybook
```

This generates a static site in `storybook-static/` that can be deployed
anywhere.

## Deployment

The documentation can be deployed to:

- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

## Development

### Adding New Stories

1. Create a new file in `src/stories/`
2. Follow the naming convention: `ComponentName.stories.tsx`
3. Use the template above as a starting point
4. Add multiple stories to showcase different states

### Global Decorators

Global decorators (theme providers, etc.) are configured in
`.storybook/preview.tsx`.

## Related

- [@yuva-devlab/ui](../../packages/ui) - Component library being documented
- [Storybook Documentation](https://storybook.js.org/docs)

## License

MIT © Yuva Devlab
