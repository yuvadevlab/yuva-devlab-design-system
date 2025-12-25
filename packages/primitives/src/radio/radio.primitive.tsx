import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React from "react";

import {
  type RadioGroupPrimitiveProps,
  type RadioItemPrimitiveProps,
} from "./radio.primitive.types";

/**
 * Foundational radio group primitive with accessibility built-in.
 */
export const RadioGroupRoot = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupPrimitiveProps
>((props, ref) => {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      {...props}
    />
  );
});

RadioGroupRoot.displayName = "RadioGroupRoot";

/**
 * Radio item primitive
 */
export const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioItemPrimitiveProps
>((props, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      {...props}
    />
  );
});

RadioGroupItem.displayName = "RadioGroupItem";

/**
 * Radio indicator - renders when checked
 */
export const RadioGroupIndicator = RadioGroupPrimitive.Indicator;

RadioGroupIndicator.displayName = "RadioGroupIndicator";
