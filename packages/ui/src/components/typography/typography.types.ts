import { TypographyPrimitiveProps } from "@yuva-devlab/primitives";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "caption"
  | "captionError"
  | "label";

export type TypographyWeight = "normal" | "medium" | "bold";

export interface TypographyProps extends TypographyPrimitiveProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
}
