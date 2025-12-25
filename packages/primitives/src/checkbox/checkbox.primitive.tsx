import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React from "react";

import { type CheckboxPrimitiveProps } from "./checkbox.primitive.types";

/**
 * Foundational checkbox primitive with accessibility built-in.
 * Handles checked/unchecked/indeterminate states.
 */
export const CheckboxRoot = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxPrimitiveProps
>((props, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      {...props}
    />
  );
});

CheckboxRoot.displayName = "CheckboxRoot";

/**
 * Checkbox indicator - renders when checked or indeterminate
 */
export const CheckboxIndicator = CheckboxPrimitive.Indicator;

CheckboxIndicator.displayName = "CheckboxIndicator";
