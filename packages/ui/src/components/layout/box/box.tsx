import { BoxPrimitive } from "@yuva-devlab/primitives";
import clsx from "clsx";
import React from "react";

import * as styles from "./box.styles.css";
import { BoxProps } from "./box.types";

/**
 * Foundational layout component with utility-first spacing and display props.
 * Supports padding (p, px, py, pt, pr, pb, pl) and margin (m, mx, my, mt, mr, mb, ml) props
 * that map directly to our design tokens.
 *
 * @example
 * <Box p="lg" display="flex" position="relative">
 *   Layout Content
 * </Box>
 */
export const Box = React.forwardRef<HTMLElement, BoxProps>(
  (
    {
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      display,
      position,
      overflow,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <BoxPrimitive
        ref={ref}
        className={clsx(
          styles.base,
          p && styles.padding[p],
          px && styles.paddingX[px],
          py && styles.paddingY[py],
          pt && styles.paddingTop[pt],
          pr && styles.paddingRight[pr],
          pb && styles.paddingBottom[pb],
          pl && styles.paddingLeft[pl],
          m && styles.margin[m],
          mx && styles.marginX[mx],
          my && styles.marginY[my],
          mt && styles.marginTop[mt],
          mr && styles.marginRight[mr],
          mb && styles.marginBottom[mb],
          ml && styles.marginLeft[ml],
          display && styles.display[display],
          position && styles.position[position],
          overflow && styles.overflow[overflow],
          className,
        )}
        {...props}
      />
    );
  },
);

Box.displayName = "Box";
