import { Slot } from "@radix-ui/react-slot";
import React from "react";

import { type ButtonPrimitiveProps } from "./button.primitive.types";

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
