import { ButtonPrimitive } from "@yuva-devlab/primitives";
import clsx from "clsx";
import React from "react";

import * as styles from "./button.styles.css";
import type { ButtonProps } from "./button.types";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "middle",
      danger = false,
      block = false,
      className,
      disabled,
      loading,
      ...rest
    },
    ref,
  ) => {
    return (
      <ButtonPrimitive
        ref={ref}
        loading={loading}
        disabled={disabled}
        aria-busy={loading}
        className={clsx(
          styles.base,
          styles.size[size],
          styles.variant[variant],
          danger && styles.danger,
          block && styles.block,
          (disabled || loading) && styles.disabled,
          className,
        )}
        {...rest}
      />
    );
  },
);

Button.displayName = "Button";
