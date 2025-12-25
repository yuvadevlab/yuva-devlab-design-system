import { style, styleVariants } from "@vanilla-extract/css";
import { colors } from "@yuva-devlab/tokens";

export const root = style({
  flexShrink: 0,
  backgroundColor: colors.border.default,
});

export const orientation = styleVariants({
  horizontal: {
    height: "1px",
    width: "100%",
  },
  vertical: {
    height: "100%",
    width: "1px",
  },
});

export const variant = styleVariants({
  solid: {
    border: "none",
  },
  dashed: {
    background: "none",
    borderTop: `1px dashed ${colors.border.default}`,
    height: 0,
    selectors: {
      "&[data-orientation='vertical']": {
        borderTop: "none",
        borderLeft: `1px dashed ${colors.border.default}`,
        height: "100%",
        width: 0,
      },
    },
  },
});
