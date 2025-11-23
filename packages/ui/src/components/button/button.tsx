import * as stylex from "@stylexjs/stylex";
import { ButtonPrimitive } from "@yuva-devlab/primitives";
import React from "react";

import { cn } from "../../utils";

import { buttonStyles } from "./button.styles";
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
    const stylexProps = stylex.props(
      buttonStyles.base,
      size === "small" && buttonStyles.size_small,
      size === "middle" && buttonStyles.size_middle,
      size === "large" && buttonStyles.size_large,
      variant === "default" && buttonStyles.type_default,
      variant === "primary" && buttonStyles.type_primary,
      variant === "ghost" && buttonStyles.type_ghost,
      variant === "link" && buttonStyles.type_link,
      danger && buttonStyles.danger,
      block && buttonStyles.block,
      (disabled || loading) && buttonStyles.disabled,
    );

    return (
      <ButtonPrimitive
        ref={ref}
        loading={loading}
        disabled={disabled}
        className={cn(stylexProps.className, className)}
        style={stylexProps.style}
        {...rest}
      />
    );
  },
);

Button.displayName = "Button";
