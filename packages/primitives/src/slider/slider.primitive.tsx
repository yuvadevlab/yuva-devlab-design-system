import * as SliderPrimitive from "@radix-ui/react-slider";
import React from "react";

import { type SliderPrimitiveProps } from "./slider.primitive.types";

/**
 * Foundational slider primitive with accessibility built-in.
 */
export const SliderRoot = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  SliderPrimitiveProps
>((props, ref) => {
  return (
    <SliderPrimitive.Root
      ref={ref}
      {...props}
    />
  );
});

SliderRoot.displayName = "SliderRoot";

/**
 * Slider track - the full track
 */
export const SliderTrack = SliderPrimitive.Track;
SliderTrack.displayName = "SliderTrack";

/**
 * Slider range - the filled portion
 */
export const SliderRange = SliderPrimitive.Range;
SliderRange.displayName = "SliderRange";

/**
 * Slider thumb - the draggable handle
 */
export const SliderThumb = SliderPrimitive.Thumb;
SliderThumb.displayName = "SliderThumb";
