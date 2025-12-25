import { InputPrimitive } from "@yuva-devlab/primitives";
import clsx from "clsx";
import React from "react";

import { Typography } from "../typography";

import * as styles from "./input.styles.css";
import { InputProps } from "./input.types";

const defaultLabelProps = {
  style: {
    marginBottom: "8px",
  },
};

/**
 * Input component for text entry.
 * Includes support for labels, helper text, and error states.
 *
 * @example
 * <Input
 *   label="Email"
 *   placeholder="Enter your email"
 *   errorMessage="Invalid email address"
 * />
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "outline",
      size = "md",
      error = false,
      label,
      labelProps,
      helperText,
      errorMessage,
      className,
      id: idProp,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const id = idProp || generatedId;
    const helperTextId = `${id}-helper-text`;
    const errorMessageId = `${id}-error-message`;

    // Determine aria-describedby
    const describedBy = clsx(
      props["aria-describedby"],
      helperText && helperTextId,
      errorMessage && errorMessageId,
    );

    const inputElement = (
      <InputPrimitive
        ref={ref}
        id={id}
        aria-invalid={error || !!errorMessage}
        aria-describedby={describedBy || undefined}
        autoComplete="on"
        className={clsx(
          styles.base,
          styles.variant[variant],
          styles.size[size],
          (error || !!errorMessage) && styles.error,
          className,
        )}
        {...props}
      />
    );

    if (!label && !helperText && !errorMessage) return inputElement;

    return (
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {label && (
          <Typography
            variant="label"
            htmlFor={id}
            {...defaultLabelProps}
            {...labelProps}
          >
            {label}
          </Typography>
        )}
        {inputElement}
        {errorMessage && (
          <Typography
            variant="captionError"
            id={errorMessageId}
          >
            {errorMessage}
          </Typography>
        )}
        {!errorMessage && helperText && (
          <Typography
            variant="caption"
            id={helperTextId}
          >
            {helperText}
          </Typography>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
