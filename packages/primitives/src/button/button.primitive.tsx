import { Slot } from "@radix-ui/react-slot";
import React from "react";

import { type ButtonPrimitiveProps } from "./button.primitive.types";

/**
 * Foundational button primitive with polymorphic support.
 * Handles base button logic, ref forwarding, and loading/disabled states.
 */
export const ButtonPrimitive = React.forwardRef<
  HTMLButtonElement,
  ButtonPrimitiveProps
>(({ asChild, loading, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      {...props}
      disabled={loading || props.disabled}
    />
  );
});

ButtonPrimitive.displayName = "ButtonPrimitive";
