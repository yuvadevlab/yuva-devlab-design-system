import {
  SliderRoot,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@yuva-devlab/primitives";
import clsx from "clsx";
import React from "react";

import { Typography } from "../typography";

import * as styles from "./slider.styles.css";
import type { SliderProps } from "./slider.types";

/**
 * Slider component for selecting a value or range.
 *
 * @example
 * <Slider label="Volume" min={0} max={100} defaultValue={[50]} />
 */
export const Slider = React.forwardRef<HTMLSpanElement, SliderProps>(
  (
    {
      size = "md",
      label,
      helperText,
      error,
      showValue = false,
      formatValue = (value) => value.toString(),
      className,
      value,
      defaultValue,
      ...rest
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState<number[]>(
      value || defaultValue || [0],
    );

    const displayValue = value || internalValue;

    const handleValueChange = React.useCallback(
      (newValue: number[]) => {
        setInternalValue(newValue);
        rest.onValueChange?.(newValue);
      },
      [rest],
    );

    return (
      <div className={styles.wrapper}>
        {(label || showValue) && (
          <div className={styles.labelRow}>
            {label && (
              <Typography
                variant="label"
                className={styles.label}
              >
                {label}
              </Typography>
            )}
            {showValue && (
              <Typography
                variant="label"
                className={styles.value}
              >
                {displayValue.length === 1
                  ? formatValue(displayValue[0])
                  : `${formatValue(displayValue[0])} - ${formatValue(displayValue[1])}`}
              </Typography>
            )}
          </div>
        )}
        <SliderRoot
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          onValueChange={handleValueChange}
          className={clsx(styles.root, className)}
          {...rest}
        >
          <SliderTrack className={styles.track}>
            <SliderRange className={styles.range} />
          </SliderTrack>
          {displayValue.map((val) => (
            <SliderThumb
              key={`thumb-${val}`}
              className={clsx(styles.thumb, styles.thumbSize[size])}
            />
          ))}
        </SliderRoot>
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
      </div>
    );
  },
);

Slider.displayName = "Slider";
