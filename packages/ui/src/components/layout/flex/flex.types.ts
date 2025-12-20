import { BoxProps, SpacingValue } from "../box/box.types";

export interface FlexProps extends BoxProps {
  direction?: "row" | "column" | "rowReverse" | "columnReverse";
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: "nowrap" | "wrap" | "wrapReverse";
  gap?: SpacingValue;
}
