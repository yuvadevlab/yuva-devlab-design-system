import type { SliderPrimitiveProps } from "@yuva-devlab/primitives";

export type SliderSize = "sm" | "md" | "lg";

export interface SliderProps extends SliderPrimitiveProps {
  /**
   * Size of the slider
   * @default "md"
   */
  size?: SliderSize;
  /**
   * Label text for the slider
   */
  label?: string;
  /**
   * Helper text displayed below the slider
   */
  helperText?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * When true, shows the current value
   */
  showValue?: boolean;
  /**
   * Format function for displaying the value
   */
  formatValue?: (value: number) => string;
  /**
   * Additional className for the root
   */
  className?: string;
}
