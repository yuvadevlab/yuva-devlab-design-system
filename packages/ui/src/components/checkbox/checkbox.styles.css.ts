import { style, styleVariants } from "@vanilla-extract/css";
import {
  colors,
  radii,
  spacing,
  typography,
  transitions,
} from "@yuva-devlab/tokens";

export const wrapper = style({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.sm,
});

export const root = style({
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: colors.border.default,
  backgroundColor: colors.bg.surface,
  borderRadius: radii.sm,
  cursor: "pointer",
  transition: `all ${transitions.duration.normal} ${transitions.easing.standard}`,
  flexShrink: 0,

  ":hover": {
    borderColor: colors.brand.primary.main,
    backgroundColor: colors.bg.surfaceHover,
  },

  ":focus-visible": {
    boxShadow: `0 0 0 2px ${colors.bg.body}, 0 0 0 4px ${colors.brand.primary.main}`,
  },

  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  selectors: {
    '&[data-state="checked"]': {
      borderColor: colors.brand.primary.main,
      backgroundColor: colors.brand.primary.main,
    },
  },
});

export const size = styleVariants({
  sm: {
    width: 16,
    height: 16,
  },
  md: {
    width: 20,
    height: 20,
  },
  lg: {
    width: 24,
    height: 24,
  },
});

export const indicator = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  color: colors.bg.surface,
});

export const label = style({
  fontSize: typography.fontSizes.sm,
  fontWeight: typography.fontWeights.medium,
  color: colors.text.primary,
  cursor: "pointer",
  userSelect: "none",

  selectors: {
    [`${root}:disabled ~ &`]: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

export const helperText = style({
  fontSize: typography.fontSizes.xs,
  color: colors.text.secondary,
  marginLeft: spacing.xl,
});

export const errorText = style({
  fontSize: typography.fontSizes.xs,
  color: colors.brand.danger.main,
  marginLeft: spacing.xl,
});
