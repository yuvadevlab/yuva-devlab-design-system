import { Slot } from "@radix-ui/react-slot";
import React from "react";

export interface TypographyPrimitiveProps
  extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  as?: React.ElementType;
}

export const TypographyPrimitive = React.forwardRef<
  HTMLElement,
  TypographyPrimitiveProps
>(({ asChild, as: Component = "span", ...props }, ref) => {
  const Comp = asChild ? Slot : Component;
  return (
    <Comp
      ref={ref}
      {...props}
    />
  );
});

TypographyPrimitive.displayName = "TypographyPrimitive";
