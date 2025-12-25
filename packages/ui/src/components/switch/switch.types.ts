import type { SwitchPrimitiveProps } from "@yuva-devlab/primitives";

export type SwitchSize = "sm" | "md" | "lg";

export interface SwitchProps extends SwitchPrimitiveProps {
  /**
   * Size of the switch
   * @default "md"
   */
  size?: SwitchSize;
  /**
   * Label text for the switch
   */
  label?: string;
  /**
   * Helper text displayed below the switch
   */
  helperText?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Position of the label
   * @default "right"
   */
  labelPosition?: "left" | "right";
}
