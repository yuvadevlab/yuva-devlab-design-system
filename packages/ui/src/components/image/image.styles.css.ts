import { style } from "@vanilla-extract/css";
import { radii } from "@yuva-devlab/tokens";

export const image = style({
  display: "block",
  maxWidth: "100%",
  height: "auto",
});

export const rounded = style({
  borderRadius: radii.md,
});
