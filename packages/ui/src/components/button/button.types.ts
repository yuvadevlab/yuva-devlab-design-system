import type { ButtonPrimitiveProps } from "@yuva-devlab/primitives";

export type ButtonType = "primary" | "default" | "ghost" | "link";
export type ButtonSize = "small" | "middle" | "large";

export interface ButtonProps extends ButtonPrimitiveProps {
  variant?: ButtonType;
  size?: ButtonSize;
  danger?: boolean;
  block?: boolean;
}
