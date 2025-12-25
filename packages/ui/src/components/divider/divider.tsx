import clsx from "clsx";
import React from "react";

import * as styles from "./divider.styles.css";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The orientation of the divider.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  /**
   * The visual style of the divider.
   * @default "solid"
   */
  variant?: "solid" | "dashed";
}

/**
 * Divider component for separating content.
 */
export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    { orientation = "horizontal", variant = "solid", className, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-orientation={orientation}
        role="separator"
        className={clsx(
          styles.root,
          styles.orientation[orientation],
          variant !== "solid" && styles.variant[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Divider.displayName = "Divider";
