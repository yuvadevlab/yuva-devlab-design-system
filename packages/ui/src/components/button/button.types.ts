import type { ButtonPrimitiveProps } from "@yuva-devlab/primitives";

export type ButtonType =
  | "primary"
  | "default"
  | "ghost"
  | "link"
  | "elevated"
  | "filled"
  | "tonal"
  | "outlined"
  | "text"
  | "secondary"
  | "tertiary";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export type ButtonShape = "round" | "square";

export type ButtonWidth = "narrow" | "default" | "wide";

export interface ButtonProps extends ButtonPrimitiveProps {
  variant?: ButtonType;
  size?: ButtonSize;
  shape?: ButtonShape;
  width?: ButtonWidth;
  danger?: boolean;
  block?: boolean;
  morph?: boolean;
}
