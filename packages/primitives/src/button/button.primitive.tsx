import React from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonPrimitiveProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  loading?: boolean;
}

export const ButtonPrimitive = React.forwardRef<
  HTMLButtonElement,
  ButtonPrimitiveProps
>(({ asChild, loading, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} {...props} disabled={loading || props.disabled} />;
});

ButtonPrimitive.displayName = "ButtonPrimitive";
