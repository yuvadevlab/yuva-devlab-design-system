import type { CheckboxPrimitiveProps } from "@yuva-devlab/primitives";

export type CheckboxSize = "sm" | "md" | "lg";

export interface CheckboxProps extends CheckboxPrimitiveProps {
  /**
   * Size of the checkbox
   * @default "md"
   */
  size?: CheckboxSize;
  /**
   * Label text for the checkbox
   */
  label?: string;
  /**
   * Helper text displayed next to the checkbox
   */
  helperText?: string;
  /**
   * Error message to display
   */
  error?: string;
}
