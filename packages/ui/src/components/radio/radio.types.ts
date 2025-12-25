import type { RadioGroupPrimitiveProps } from "@yuva-devlab/primitives";

export type RadioSize = "sm" | "md" | "lg";

export type RadioOrientation = "horizontal" | "vertical";

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
  helperText?: string;
}

export interface RadioGroupProps extends RadioGroupPrimitiveProps {
  /**
   * Size of the radio buttons
   * @default "md"
   */
  size?: RadioSize;
  /**
   * Array of radio options
   */
  options: RadioOption[];
  /**
   * Label for the radio group
   */
  label?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Helper text displayed below the radio group
   */
  helperText?: string;
  /**
   * Layout orientation
   * @default "vertical"
   */
  orientation?: RadioOrientation;
}
