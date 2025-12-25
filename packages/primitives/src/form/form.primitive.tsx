import React from "react";

import { type FormPrimitiveProps } from "./form.primitive.types";

/**
 * Foundational form primitive.
 * Handles form submission with ref forwarding.
 */
export const FormPrimitive = React.forwardRef<
  HTMLFormElement,
  FormPrimitiveProps
>((props, ref) => {
  return (
    <form
      ref={ref}
      {...props}
    />
  );
});

FormPrimitive.displayName = "FormPrimitive";
