# 📦 @yuva-devlab/primitives

Headless, behavior-only primitives used by `@yuva-devlab/ui`.

These are NOT styled.  
They only contain interaction logic, accessibility, and rendering contracts.

---

## Purpose

- Provide reusable building blocks
- Keep UI layer clean
- Ensure consistent behavior across components

---

## 📁 Folder Structure

```bash
packages/primitives/
├── src/
│ ├── button/
│ │ ├── button.primitive.tsx
│ │ └── index.ts
│ └── index.ts
```

---

## Example Primitive

```tsx
export const ButtonPrimitive = React.forwardRef<
  HTMLButtonElement,
  ButtonPrimitiveProps
>(({ loading, disabled, children, ...rest }, ref) => {
  return (
    <button ref={ref} disabled={loading || disabled} {...rest}>
      {children}
    </button>
  );
});
```

---

## Usage

UI layer component primitives

```tsx
import { ButtonPrimitive } from "@yuva-devlab/primitives";
```
