import { TypographyPrimitive } from "@yuva-devlab/primitives";
import clsx from "clsx";
import React from "react";

import * as styles from "./typography.css";
import { TypographyProps, TypographyVariant } from "./typography.types";

const variantElementMap: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  caption: "span",
  captionError: "span",
  label: "label",
};

/**
 * Typography component for consistent text styling.
 * Supports various variants (h1-h6, body, caption, label) and weights.
 *
 * @example
 * <Typography variant="h1" weight="bold">
 *   Main Title
 * </Typography>
 */
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant = "body", weight, className, asChild, ...props }, ref) => {
    // If asChild is true, we don't force a specific element tag, otherwise we map variant to tag

    // Note: TypographyPrimitive handles 'ref' and 'asChild' logic internally via Slot if passed directly,
    // but here we might need to be careful. Ideally TypographyPrimitive accepts `as`.

    /* Actually, since TypographyPrimitive uses Slot when asChild is true, we can just pass props. 
       If asChild is false, we want to control the rendered tag. 
       The simplest way with our primitive:
    */

    const defaultTag = variantElementMap[variant];

    return (
      <TypographyPrimitive
        ref={ref}
        asChild={asChild}
        {...(!asChild && { as: defaultTag })}
        className={clsx(
          styles.base,
          styles.variant[variant],
          weight && styles.weight[weight],
          className,
        )}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";
