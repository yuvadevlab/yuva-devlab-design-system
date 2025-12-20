import React from "react";

import { Flex } from "../flex/flex";
import { FlexProps } from "../flex/flex.types";

export interface StackProps extends Omit<FlexProps, "direction"> {
  direction?: "vertical" | "horizontal";
}

/**
 * Stack component for simple vertical or horizontal spacing.
 * A specialized version of Flex that defaults to a vertical column.
 *
 * @example
 * <Stack gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 */
export const Stack = React.forwardRef<HTMLElement, StackProps>(
  ({ direction = "vertical", ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        direction={direction === "vertical" ? "column" : "row"}
        {...props}
      />
    );
  },
);

Stack.displayName = "Stack";
