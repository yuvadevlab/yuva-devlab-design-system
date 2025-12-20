import clsx from "clsx";
import React from "react";

import { Box } from "../box/box";

import * as styles from "./grid.styles.css";
import { GridProps } from "./grid.types";

/**
 * Grid layout component for complex two-dimensional layouts.
 * Extends Box with declarative CSS Grid properties like columns, rows, and token-based gaps.
 *
 * @example
 * <Grid columns={3} gap="lg">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 */
export const Grid = React.forwardRef<HTMLElement, GridProps>(
  (
    { columns, gap, columnGap, rowGap, align, justify, className, ...props },
    ref,
  ) => {
    return (
      <Box
        ref={ref}
        display="grid"
        className={clsx(
          styles.base,
          columns && styles.columns[columns],
          gap && styles.gap[gap],
          columnGap && styles.columnGap[columnGap],
          rowGap && styles.rowGap[rowGap],
          align && styles.align[align],
          justify && styles.justify[justify],
          className,
        )}
        {...props}
      />
    );
  },
);

Grid.displayName = "Grid";
