import { ImagePrimitive } from "@yuva-devlab/primitives";
import clsx from "clsx";
import React from "react";

import * as styles from "./image.styles.css";
import type { ImageProps } from "./image.types";

/**
 * Image component with responsive sizing and object-fit support.
 *
 * @example
 * <Image src="/photo.jpg" alt="Description" objectFit="cover" rounded />
 */
export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    { objectFit = "cover", rounded = false, className, style, ...rest },
    ref,
  ) => {
    return (
      <ImagePrimitive
        ref={ref}
        className={clsx(styles.image, rounded && styles.rounded, className)}
        style={{
          objectFit,
          ...style,
        }}
        {...rest}
      />
    );
  },
);

Image.displayName = "Image";
