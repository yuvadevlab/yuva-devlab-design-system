import {
  RadioGroupRoot,
  RadioGroupItem,
  RadioGroupIndicator,
} from "@yuva-devlab/primitives";
import clsx from "clsx";
import React from "react";

import { Typography } from "../typography";

import * as styles from "./radio.styles.css";
import type { RadioGroupProps } from "./radio.types";

/**
 * Radio group component for selecting a single option from a set.
 *
 * @example
 * <RadioGroup
 *   options={[
 *     { label: "Option 1", value: "1" },
 *     { label: "Option 2", value: "2" }
 *   ]}
 *   value="1"
 * />
 */
export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      size = "md",
      options,
      label,
      error,
      helperText,
      orientation = "vertical",
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={styles.wrapper}>
        {label && <Typography variant="label">{label}</Typography>}
        <RadioGroupRoot
          ref={ref}
          className={clsx(
            styles.root,
            styles.orientation[orientation],
            className,
          )}
          {...rest}
        >
          {options.map((option, index) => {
            const itemId = `radio-${option.value}-${index}`;
            return (
              <div
                key={option.value}
                className={styles.itemWrapper}
              >
                <div className={styles.itemContainer}>
                  <RadioGroupItem
                    value={option.value}
                    id={itemId}
                    disabled={option.disabled}
                    className={clsx(styles.item, styles.size[size])}
                  >
                    <RadioGroupIndicator
                      className={clsx(
                        styles.indicator,
                        styles.indicatorSize[size],
                      )}
                    />
                  </RadioGroupItem>
                  <Typography
                    variant="label"
                    htmlFor={itemId}
                    className={styles.label}
                  >
                    {option.label}
                  </Typography>
                </div>
                {option.helperText && (
                  <Typography
                    variant="caption"
                    className={styles.itemHelperText}
                  >
                    {option.helperText}
                  </Typography>
                )}
              </div>
            );
          })}
        </RadioGroupRoot>
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

RadioGroup.displayName = "RadioGroup";
