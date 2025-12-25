import type { SelectPrimitiveProps } from "@yuva-devlab/primitives";

export type SelectSize = "sm" | "md" | "lg";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectOptionGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps extends Omit<SelectPrimitiveProps, "children"> {
  /**
   * Size of the select
   * @default "md"
   */
  size?: SelectSize;
  /**
   * Label text for the select
   */
  label?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Helper text displayed below the select
   */
  helperText?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Array of select options or grouped options
   */
  options: SelectOption[] | SelectOptionGroup[];
  /**
   * Additional className for the trigger
   */
  className?: string;
}
