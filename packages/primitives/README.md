# 📦 @yuva-devlab/primitives

[![npm version](https://img.shields.io/npm/v/@yuva-devlab/primitives.svg)](https://www.npmjs.com/package/@yuva-devlab/primitives)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Headless, unstyled React primitives providing core component logic,
> accessibility, and interaction patterns.

## Overview

This package provides the behavioral foundation for `@yuva-devlab/ui`. Each
primitive is:

- **Unstyled** - Pure logic, no visual styling
- **Accessible** - ARIA-compliant with keyboard navigation
- **Polymorphic** - Supports `as` and `asChild` props via Radix Slot
- **Type-Safe** - Full TypeScript support
- **Composable** - Build complex components from simple primitives

## Installation

```bash
npm install @yuva-devlab/primitives
```

### Peer Dependencies

```bash
npm install react@^19.2.0 react-dom@^19.2.0
```

## Available Primitives

### Core Primitives

- **BoxPrimitive** - Polymorphic container base for all layout components
- **ButtonPrimitive** - Accessible button with keyboard navigation
- **InputPrimitive** - Form input with label association
- **TypographyPrimitive** - Polymorphic text rendering

### Coming Soon

- SelectPrimitive (Radix UI based)
- SwitchPrimitive (Radix UI based)
- CheckboxPrimitive (Radix UI based)
- RadioPrimitive (Radix UI based)

## Usage

### BoxPrimitive

The foundation for all layout components, supporting polymorphism:

```tsx
import { BoxPrimitive } from "@yuva-devlab/primitives";

// Render as different elements
<BoxPrimitive as="div">Default div</BoxPrimitive>
<BoxPrimitive as="section">Semantic section</BoxPrimitive>
<BoxPrimitive as="article">Article element</BoxPrimitive>

// Use with asChild for composition
<BoxPrimitive asChild>
  <a href="/home">Link wrapper</a>
</BoxPrimitive>
```

### ButtonPrimitive

Accessible button with proper ARIA attributes:

```tsx
import { ButtonPrimitive } from "@yuva-devlab/primitives";

<ButtonPrimitive
  type="button"
  disabled={false}
  onClick={() => console.log("clicked")}
>
  Click Me
</ButtonPrimitive>

// Polymorphic usage
<ButtonPrimitive as="a" href="/submit">
  Submit Link
</ButtonPrimitive>
```

### InputPrimitive

Form input with label association:

```tsx
import { InputPrimitive } from "@yuva-devlab/primitives";

<InputPrimitive
  id="email"
  type="email"
  placeholder="you@example.com"
  required
  aria-label="Email address"
/>;
```

### TypographyPrimitive

Polymorphic text component:

```tsx
import { TypographyPrimitive } from "@yuva-devlab/primitives";

// Render as different heading levels
<TypographyPrimitive as="h1">Main Title</TypographyPrimitive>
<TypographyPrimitive as="h2">Subtitle</TypographyPrimitive>
<TypographyPrimitive as="p">Paragraph text</TypographyPrimitive>
<TypographyPrimitive as="span">Inline text</TypographyPrimitive>
```

## Building Custom Components

Primitives are designed to be wrapped with styling:

```tsx
import { ButtonPrimitive } from "@yuva-devlab/primitives";
import { style } from "@vanilla-extract/css";

const buttonStyle = style({
  padding: "12px 24px",
  borderRadius: "8px",
  backgroundColor: "#007bff",
  color: "white",
});

export function CustomButton(props) {
  return (
    <ButtonPrimitive
      {...props}
      className={buttonStyle}
    />
  );
}
```

## Architecture

```
@yuva-devlab/primitives (Behavior + A11y)
           ↓
@yuva-devlab/ui (Styling + Tokens)
           ↓
    Your Application
```

## Development

```bash
# Build primitives
pnpm --filter @yuva-devlab/primitives build

# Type check
pnpm --filter @yuva-devlab/primitives type-check

# Lint
pnpm --filter @yuva-devlab/primitives lint
```

## Related Packages

- [@yuva-devlab/ui](../ui) - Styled components built on these primitives
- [@yuva-devlab/tokens](../tokens) - Design system tokens

## License

MIT © Yuva Devlab
