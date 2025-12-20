import clsx from "clsx";
import React from "react";

import { Box } from "../box/box";

import * as styles from "./flex.styles.css";
import { FlexProps } from "./flex.types";

/**
 * Flex layout component for one-dimensional layouts.
 * Extends Box with declarative flexbox properties like direction, alignment, and gaps.
 *
 * @example
 * <Flex direction="row" gap="md" align="center" justify="between">
 *   <div>Start</div>
 *   <div>End</div>
 * </Flex>
 */
export const Flex = React.forwardRef<HTMLElement, FlexProps>(
  ({ direction, align, justify, wrap, gap, className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        display="flex"
        className={clsx(
          styles.base,
          direction && styles.direction[direction],
          align && styles.align[align],
          justify && styles.justify[justify],
          wrap && styles.wrap[wrap],
          gap && styles.gap[gap],
          className,
        )}
        {...props}
      />
    );
  },
);

Flex.displayName = "Flex";
