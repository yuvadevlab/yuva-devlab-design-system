# 🧪 Yuva Devlab Playground

> A lightweight React + Vite sandbox for rapid component testing and
> development.

## Overview

The playground is a minimal React application used to test `@yuva-devlab/ui`
components in a real-world environment. Unlike Storybook (which is for
documentation), this is for quick, iterative development and testing.

## Quick Start

```bash
# From workspace root
pnpm dev:playground

# Or from this directory
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Purpose

### ✅ Use the Playground For:

- **Rapid Prototyping** - Quickly test new component ideas
- **Integration Testing** - See how components work together
- **State Management** - Test components with React state/hooks
- **Real-World Scenarios** - Validate components in actual app context
- **Performance Testing** - Check bundle size and runtime performance
- **Theme Validation** - Test theming across the entire app

### ❌ Don't Use the Playground For:

- **Documentation** - Use Storybook (`apps/docs`) instead
- **Unit Tests** - Use Vitest in component packages
- **Production Code** - This is a sandbox only

## Structure

```
apps/playground/
├── src/
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── index.html
├── vite.config.ts
└── package.json
```

## Example Usage

### Testing a New Component

```tsx
// src/App.tsx
import { Button, Input, Stack, Container } from "@yuva-devlab/ui";
import "@yuva-devlab/ui/styles.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <Container size="md">
      <Stack gap="lg">
        <h1>Component Testing</h1>

        <Input
          label="Test Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
        />

        <Button onClick={() => console.log(value)}>Log Value: {value}</Button>
      </Stack>
    </Container>
  );
}
```

### Testing Layout Components

```tsx
import { Grid, Box, Flex } from "@yuva-devlab/ui";

function LayoutTest() {
  return (
    <Grid
      cols={{ base: 1, md: 2, lg: 3 }}
      gap="md"
    >
      <Box
        p="lg"
        style={{ background: "#f0f0f0" }}
      >
        Grid Item 1
      </Box>
      <Box
        p="lg"
        style={{ background: "#e0e0e0" }}
      >
        Grid Item 2
      </Box>
      <Box
        p="lg"
        style={{ background: "#d0d0d0" }}
      >
        Grid Item 3
      </Box>
    </Grid>
  );
}
```

## Development Workflow

1. **Make changes** to components in `packages/ui`
2. **Hot reload** automatically updates the playground
3. **Test interactions** with real React state
4. **Verify behavior** before writing stories or tests

## Building

```bash
pnpm run build
```

Builds the app for production to `dist/`.

## Features

- ⚡ **Vite** - Lightning-fast HMR
- ⚛️ **React 19** - Latest React features
- 🔥 **Hot Reload** - Instant feedback on changes
- 📦 **Local Packages** - Uses workspace packages directly
- 🎨 **Theme Testing** - Full theme support

## Tips

### Quick Component Testing

Keep `App.tsx` simple and focused on what you're currently testing. Don't try to
test everything at once.

### State Management

The playground is perfect for testing components with complex state:

```tsx
function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Test loading states, async operations, etc.
}
```

### Debugging

Use React DevTools and browser DevTools to inspect component behavior.

## Related

- [@yuva-devlab/ui](../../packages/ui) - Component library
- [Storybook Docs](../docs) - For documentation

## License

MIT © Yuva Devlab
