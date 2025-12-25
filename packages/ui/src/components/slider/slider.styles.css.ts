import { style, styleVariants } from "@vanilla-extract/css";
import { colors, radii, spacing, typography } from "@yuva-devlab/tokens";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.sm,
  width: "100%",
});

export const labelRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const label = style({
  fontSize: typography.fontSizes.sm,
  fontWeight: typography.fontWeights.medium,
  color: colors.text.primary,
});

export const value = style({
  fontSize: typography.fontSizes.sm,
  fontWeight: typography.fontWeights.medium,
  color: colors.brand.primary.main,
});

export const root = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: "100%",

  selectors: {
    '&[data-orientation="horizontal"]': {
      height: 20,
    },
    '&[data-orientation="vertical"]': {
      flexDirection: "column",
      width: 20,
      height: 200,
    },
    "&[data-disabled]": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

export const track = style({
  backgroundColor: colors.bg.surfaceHover,
  position: "relative",
  flexGrow: 1,
  borderRadius: radii.full,

  selectors: {
    '&[data-orientation="horizontal"]': {
      height: 4,
    },
    '&[data-orientation="vertical"]': {
      width: 4,
    },
  },
});

export const range = style({
  position: "absolute",
  backgroundColor: colors.brand.primary.main,
  borderRadius: radii.full,

  selectors: {
    '&[data-orientation="horizontal"]': {
      height: "100%",
    },
    '&[data-orientation="vertical"]': {
      width: "100%",
    },
  },
});

export const thumb = style({
  all: "unset",
  display: "block",
  backgroundColor: colors.bg.surface,
  border: `2px solid ${colors.brand.primary.main}`,
  borderRadius: radii.full,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",

  ":hover": {
    transform: "scale(1.1)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },

  ":focus": {
    outline: `2px solid ${colors.brand.primary.main}`,
    outlineOffset: 2,
  },

  ":active": {
    transform: "scale(1.15)",
  },
});

export const thumbSize = styleVariants({
  sm: {
    width: 14,
    height: 14,
  },
  md: {
    width: 18,
    height: 18,
  },
  lg: {
    width: 22,
    height: 22,
  },
});

export const helperText = style({
  fontSize: typography.fontSizes.xs,
  color: colors.text.secondary,
});

export const errorText = style({
  fontSize: typography.fontSizes.xs,
  color: colors.brand.danger.main,
});
