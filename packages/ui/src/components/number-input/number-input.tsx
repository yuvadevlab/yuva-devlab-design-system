import { NumberInputPrimitive } from "@yuva-devlab/primitives";
import clsx from "clsx";
import React from "react";

import { Box } from "../layout";
import { Typography } from "../typography";

import * as styles from "./number-input.styles.css";
import type { NumberInputProps } from "./number-input.types";

/**
 * NumberInput component for numeric input with increment/decrement controls.
 *
 * @example
 * <NumberInput label="Quantity" min={0} max={100} defaultValue={1} />
 */
export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      size = "md",
      label,
      helperText,
      error,
      showControls = true,
      className,
      wrapperClassName,
      id,
      min,
      max,
      step = 1,
      value,
      defaultValue,
      onChange,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    // Combine refs
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const handleIncrement = (): void => {
      const input = inputRef.current;
      if (!input) return;

      const currentValue = parseFloat(input.value) || 0;
      const newValue = currentValue + step;

      if (max !== undefined && newValue > max) return;

      input.value = newValue.toString();

      // Create and dispatch native input event
      const nativeEvent = new Event("input", { bubbles: true });
      input.dispatchEvent(nativeEvent);

      // Trigger onChange with synthetic event
      if (onChange) {
        const syntheticEvent = {
          target: input,
          currentTarget: input,
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    };

    const handleDecrement = (): void => {
      const input = inputRef.current;
      if (!input) return;

      const currentValue = parseFloat(input.value) || 0;
      const newValue = currentValue - step;

      if (min !== undefined && newValue < min) return;

      input.value = newValue.toString();

      // Create and dispatch native input event
      const nativeEvent = new Event("input", { bubbles: true });
      input.dispatchEvent(nativeEvent);

      // Trigger onChange with synthetic event
      if (onChange) {
        const syntheticEvent = {
          target: input,
          currentTarget: input,
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    };

    const currentValue =
      value !== undefined ? parseFloat(value.toString()) : undefined;
    const isIncrementDisabled =
      disabled ||
      (max !== undefined && currentValue !== undefined && currentValue >= max);
    const isDecrementDisabled =
      disabled ||
      (min !== undefined && currentValue !== undefined && currentValue <= min);

    return (
      <Box className={clsx(styles.wrapper, wrapperClassName)}>
        {label && (
          <Typography
            variant="label"
            htmlFor={inputId}
            style={{ marginBottom: "8px" }}
          >
            {label}
          </Typography>
        )}
        <Box className={styles.inputWrapper}>
          <NumberInputPrimitive
            ref={inputRef}
            id={inputId}
            min={min}
            max={max}
            step={step}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            disabled={disabled}
            className={clsx(
              styles.input,
              styles.size[size],
              showControls && styles.withControls,
              error && styles.error,
              className,
            )}
            {...rest}
          />
          {showControls && (
            <div className={styles.controls}>
              <button
                type="button"
                onClick={handleIncrement}
                disabled={isIncrementDisabled}
                className={clsx(styles.controlButton, styles.controlButtonTop)}
                aria-label="Increment"
                tabIndex={-1}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L7.5 3.20711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleDecrement}
                disabled={isDecrementDisabled}
                className={styles.controlButton}
                aria-label="Decrement"
                tabIndex={-1}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </Box>
        {error && (
          <Typography
            variant="captionError"
            className={styles.errorText}
          >
            {error}
          </Typography>
        )}
        {!error && helperText && (
          <Typography
            variant="caption"
            className={styles.helperText}
          >
            {helperText}
          </Typography>
        )}
      </Box>
    );
  },
);

NumberInput.displayName = "NumberInput";
