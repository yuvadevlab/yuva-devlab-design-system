import { BoxPrimitiveProps } from "@yuva-devlab/primitives";
import { spacing } from "@yuva-devlab/tokens";

export type SpacingValue = keyof typeof spacing;

export interface BoxProps extends BoxPrimitiveProps {
  p?: SpacingValue;
  px?: SpacingValue;
  py?: SpacingValue;
  pt?: SpacingValue;
  pr?: SpacingValue;
  pb?: SpacingValue;
  pl?: SpacingValue;
  m?: SpacingValue;
  mx?: SpacingValue;
  my?: SpacingValue;
  mt?: SpacingValue;
  mr?: SpacingValue;
  mb?: SpacingValue;
  ml?: SpacingValue;
  display?:
    | "block"
    | "flex"
    | "grid"
    | "inline"
    | "inlineBlock"
    | "inlineFlex"
    | "inlineGrid"
    | "none";
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  overflow?: "visible" | "hidden" | "scroll" | "auto";
}
