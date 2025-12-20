import { Slot } from "@radix-ui/react-slot";
import React from "react";

import { TypographyPrimitiveProps } from "./typography.primitive.types";

/**
 * Foundational typography primitive with polymorphic support.
 * Handles base text structure, ref forwarding, and element tag mapping.
 */
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
