import clsx from "clsx";
import React from "react";

import { Box } from "../box/box";

import * as styles from "./container.styles.css";
import { ContainerProps } from "./container.types";

/**
 * Centered layout wrapper with constrained max-widths.
 * Used for top-level page structures to maintain consistent content alignment.
 *
 * @example
 * <Container size="xl">
 *   Page Content
 * </Container>
 */
export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ size = "lg", className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={clsx(styles.base, size && styles.size[size], className)}
        {...props}
      />
    );
  },
);

Container.displayName = "Container";
