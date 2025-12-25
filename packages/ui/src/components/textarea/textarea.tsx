import { TextareaPrimitive } from "@yuva-devlab/primitives";
import clsx from "clsx";
import React from "react";

import { Typography } from "../typography";

import * as styles from "./textarea.styles.css";
import type { TextareaProps } from "./textarea.types";

/**
 * Textarea component for multi-line text input.
 *
 * @example
 * <Textarea label="Description" placeholder="Enter description..." />
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size = "md",
      label,
      helperText,
      error,
      showCount = false,
      maxLength,
      autoResize = false,
      className,
      id,
      value,
      defaultValue,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const [charCount, setCharCount] = React.useState(0);

    // Combine refs
    React.useImperativeHandle(
      ref,
      () => textareaRef.current as HTMLTextAreaElement,
    );

    // Auto-resize functionality
    const adjustHeight = React.useCallback(() => {
      const textarea = textareaRef.current;
      if (textarea && autoResize) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [autoResize]);

    // Handle value changes
    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCharCount(e.target.value.length);
        adjustHeight();
        onChange?.(e);
      },
      [onChange, adjustHeight],
    );

    // Initialize character count
    React.useEffect(() => {
      const initialValue = value || defaultValue || "";
      setCharCount(initialValue.length);
      adjustHeight();
    }, [value, defaultValue, adjustHeight]);

    const isOverLimit = maxLength ? charCount > maxLength : false;

    return (
      <div className={styles.wrapper}>
        {label && (
          <Typography
            variant="label"
            htmlFor={textareaId}
            style={{ marginBottom: "8px" }}
          >
            {label}
          </Typography>
        )}
        <div className={styles.textareaWrapper}>
          <TextareaPrimitive
            ref={textareaRef}
            id={textareaId}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            maxLength={maxLength}
            className={clsx(
              styles.textarea,
              styles.size[size],
              error && styles.error,
              autoResize && styles.autoResize,
              className,
            )}
            {...rest}
          />
        </div>
        <div className={styles.footer}>
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
          {showCount && maxLength && (
            <span
              className={clsx(styles.count, isOverLimit && styles.countError)}
            >
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
