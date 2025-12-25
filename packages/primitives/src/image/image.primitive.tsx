import React from "react";

import { type ImagePrimitiveProps } from "./image.primitive.types";

/**
 * Foundational image primitive.
 */
export const ImagePrimitive = React.forwardRef<
  HTMLImageElement,
  ImagePrimitiveProps
>((props, ref) => {
  return (
    <img
      ref={ref}
      {...props}
    />
  );
});

ImagePrimitive.displayName = "ImagePrimitive";
