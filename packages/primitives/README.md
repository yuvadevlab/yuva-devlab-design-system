# 📦 @yuva-devlab/primitives

Headless, behavior-only primitives used by `@yuva-devlab/ui`.

These are **NOT** styled. They provide the core interaction logic, accessibility
(A11y), and rendering contracts for our component library.

---

## 🛠 Tech Stack

- **Radix UI**: Leveraged for complex, high-accessibility primitives (e.g.,
  Select, Switch).
- **Polymorphism**: Built with `asChild` support via `@radix-ui/react-slot`.
- **TypeScript**: Full type safety for all primitive props.

---

## 📁 Folder Structure

```bash
packages/primitives/
├── src/
│   ├── box/            # Polymorphic layout base
│   ├── button/         # Accessible button logic
│   ├── input/          # Base input logic
│   ├── typography/     # Text rendering logic
│   └── index.ts        # Entry point
└── README.md
```

---

## Example: Box Primitive

Our `BoxPrimitive` serves as the foundation for the entire layout system,
handling polymorphic `as` and `asChild` props.

```tsx
import { Slot } from "@radix-ui/react-slot";

export const BoxPrimitive = React.forwardRef<HTMLElement, BoxPrimitiveProps>(
  ({ asChild, as: Component = "div", ...props }, ref) => {
    const Comp = asChild ? Slot : Component;
    return (
      <Comp
        ref={ref}
        {...props}
      />
    );
  },
);
```

---

## Usage in UI Package

```tsx
import { BoxPrimitive } from "@yuva-devlab/primitives";

// In @yuva-devlab/ui, we wrap these with Vanilla Extract styles
```
