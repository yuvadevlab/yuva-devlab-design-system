import { SwitchRoot, SwitchThumb } from "@yuva-devlab/primitives";
import clsx from "clsx";
import React from "react";

import { Typography } from "../typography";

import * as styles from "./switch.styles.css";
import type { SwitchProps } from "./switch.types";

/**
 * Switch component for toggling between on/off states.
 *
 * @example
 * <Switch label="Enable notifications" checked={true} />
 */
export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      size = "md",
      label,
      helperText,
      error,
      labelPosition = "right",
      className,
      id,
      ...rest
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const switchId = id || generatedId;

    return (
      <div className={styles.wrapper}>
        <div
          className={clsx(
            styles.container,
            styles.labelPosition[labelPosition],
          )}
        >
          <SwitchRoot
            ref={ref}
            id={switchId}
            className={clsx(styles.root, styles.size[size], className)}
            {...rest}
          >
            <SwitchThumb
              className={clsx(styles.thumb, styles.thumbSize[size])}
            />
          </SwitchRoot>
          {label && (
            <Typography
              variant="label"
              htmlFor={switchId}
              className={styles.label}
            >
              {label}
            </Typography>
          )}
        </div>
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

Switch.displayName = "Switch";
