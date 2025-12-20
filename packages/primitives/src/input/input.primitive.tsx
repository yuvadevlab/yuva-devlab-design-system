import React from "react";

import { type InputPrimitiveProps } from "./input.primitive.types";

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
