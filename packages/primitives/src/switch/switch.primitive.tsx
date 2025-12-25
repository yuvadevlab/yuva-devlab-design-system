import * as SwitchPrimitive from "@radix-ui/react-switch";
import React from "react";

import { type SwitchPrimitiveProps } from "./switch.primitive.types";

/**
 * Foundational switch primitive with accessibility built-in.
 */
export const SwitchRoot = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  SwitchPrimitiveProps
>((props, ref) => {
  return (
    <SwitchPrimitive.Root
      ref={ref}
      {...props}
    />
  );
});

SwitchRoot.displayName = "SwitchRoot";

/**
 * Switch thumb - the draggable part
 */
export const SwitchThumb = SwitchPrimitive.Thumb;

SwitchThumb.displayName = "SwitchThumb";
