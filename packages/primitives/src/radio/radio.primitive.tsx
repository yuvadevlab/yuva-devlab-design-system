import React from "react";

import { RadioPrimitiveProps } from "./radio.primitive.types";

export const RadioPrimitive = React.forwardRef<
  HTMLInputElement,
  RadioPrimitiveProps
>(({ asChild, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
    />
  );
});

RadioPrimitive.displayName = "RadioPrimitive";
