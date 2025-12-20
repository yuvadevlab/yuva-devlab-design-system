import React from "react";

export interface InputPrimitiveProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean;
}

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
