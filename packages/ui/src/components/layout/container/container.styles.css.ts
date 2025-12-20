import { style, styleVariants } from "@vanilla-extract/css";
import { spacing } from "@yuva-devlab/tokens";

export const base = style({
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: spacing.lg,
  paddingRight: spacing.lg,
});

export const size = styleVariants({
  sm: { maxWidth: "640px" },
  md: { maxWidth: "768px" },
  lg: { maxWidth: "1024px" },
  xl: { maxWidth: "1280px" },
  full: { maxWidth: "100%" },
});
