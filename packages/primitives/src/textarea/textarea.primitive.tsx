import React from "react";

import { type TextareaPrimitiveProps } from "./textarea.primitive.types";

/**
 * Foundational textarea primitive.
 * Handles multi-line text input with ref forwarding.
 */
export const TextareaPrimitive = React.forwardRef<
  HTMLTextAreaElement,
  TextareaPrimitiveProps
>((props, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
    />
  );
});

TextareaPrimitive.displayName = "TextareaPrimitive";
