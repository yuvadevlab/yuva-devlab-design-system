import { BoxProps, SpacingValue } from "../box/box.types";

export interface GridProps extends BoxProps {
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: SpacingValue;
  columnGap?: SpacingValue;
  rowGap?: SpacingValue;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "stretch";
}
