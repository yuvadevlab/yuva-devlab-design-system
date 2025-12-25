import React from "react";

import { type NumberInputPrimitiveProps } from "./number-input.primitive.types";

/**
 * Foundational number input primitive.
 * Handles numeric input with ref forwarding.
 */
export const NumberInputPrimitive = React.forwardRef<
  HTMLInputElement,
  NumberInputPrimitiveProps
>((props, ref) => {
  return (
    <input
      ref={ref}
      type="number"
      {...props}
    />
  );
});

NumberInputPrimitive.displayName = "NumberInputPrimitive";
