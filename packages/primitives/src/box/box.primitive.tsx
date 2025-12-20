import { Slot } from "@radix-ui/react-slot";
import React from "react";

export interface BoxPrimitiveProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  as?: React.ElementType;
}

/**
 * Foundational box primitive with polymorphic support.
 * Serves as the base for all layout units, handling ref forwarding and the 'as' prop.
 */
export const BoxPrimitive = React.forwardRef<HTMLElement, BoxPrimitiveProps>(
  ({ asChild, as: Component = "div", ...props }, ref) => {
    const Comp = asChild ? Slot : Component;
    return (
      <Comp
        ref={ref}
        {...props}
      />
    );
  },
);

BoxPrimitive.displayName = "BoxPrimitive";
