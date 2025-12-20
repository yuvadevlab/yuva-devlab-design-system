import React from "react";

import { type InputPrimitiveProps } from "./input.primitive.types";

/**
 * Foundational input primitive.
 * Standard HTML input wrapper for use in high-level form components.
 */
export const InputPrimitive = React.forwardRef<
  HTMLInputElement,
  InputPrimitiveProps
>(({ asChild, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
    />
  );
});

InputPrimitive.displayName = "InputPrimitive";
