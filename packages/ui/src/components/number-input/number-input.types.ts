import type { NumberInputPrimitiveProps } from "@yuva-devlab/primitives";

export type NumberInputSize = "sm" | "md" | "lg";

export interface NumberInputProps
  extends Omit<NumberInputPrimitiveProps, "size"> {
  /**
   * Size of the number input
   * @default "md"
   */
  size?: NumberInputSize;
  /**
   * Label text for the number input
   */
  label?: string;
  /**
   * Helper text displayed below the number input
   */
  helperText?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * When true, shows increment/decrement buttons
   * @default true
   */
  showControls?: boolean;
  /**
   * Additional className for the wrapper
   */
  wrapperClassName?: string;
}
