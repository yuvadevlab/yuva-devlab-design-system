import type { ImagePrimitiveProps } from "@yuva-devlab/primitives";

export interface ImageProps extends ImagePrimitiveProps {
  /**
   * Object fit behavior
   * @default "cover"
   */
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  /**
   * Border radius
   */
  rounded?: boolean;
}
