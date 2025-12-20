import { InputPrimitiveProps } from "@yuva-devlab/primitives";

export type InputVariant = "outline" | "filled";
export type InputSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface InputProps extends Omit<InputPrimitiveProps, "size"> {
  variant?: InputVariant;
  size?: InputSize;
  error?: boolean;
  label?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  helperText?: string;
  errorMessage?: string;
}
