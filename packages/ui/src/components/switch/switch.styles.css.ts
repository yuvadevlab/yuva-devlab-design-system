import { style, styleVariants } from "@vanilla-extract/css";
import {
  colors,
  radii,
  spacing,
  typography,
  transitions,
} from "@yuva-devlab/tokens";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.xs,
});

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: spacing.sm,
});

export const labelPosition = styleVariants({
  left: {
    flexDirection: "row-reverse",
  },
  right: {
    flexDirection: "row",
  },
});

export const root = style({
  all: "unset",
  position: "relative",
  backgroundColor: colors.border.default,
  borderRadius: radii.full,
  cursor: "pointer",
  transition: `background-color ${transitions.duration.normal} ${transitions.easing.standard}`,
  flexShrink: 0,

  ":hover": {
    backgroundColor: colors.border.strong,
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
      backgroundColor: colors.brand.primary.main,
    },
    '&[data-state="checked"]:hover': {
      backgroundColor: colors.brand.primary.hover,
    },
  },
});

export const size = styleVariants({
  sm: {
    width: 32,
    height: 18,
  },
  md: {
    width: 44,
    height: 24,
  },
  lg: {
    width: 56,
    height: 30,
  },
});

export const thumb = style({
  display: "block",
  backgroundColor: colors.bg.surface,
  borderRadius: radii.full,
  transition: `transform ${transitions.duration.normal} ${transitions.easing.standard}`,
  willChange: "transform",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
});

export const thumbSize = styleVariants({
  sm: {
    width: 14,
    height: 14,
    transform: "translateX(2px)",
    selectors: {
      '&[data-state="checked"]': {
        transform: "translateX(16px)",
      },
    },
  },
  md: {
    width: 20,
    height: 20,
    transform: "translateX(2px)",
    selectors: {
      '&[data-state="checked"]': {
        transform: "translateX(22px)",
      },
    },
  },
  lg: {
    width: 26,
    height: 26,
    transform: "translateX(2px)",
    selectors: {
      '&[data-state="checked"]': {
        transform: "translateX(28px)",
      },
    },
  },
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
  marginLeft: spacing["2xl"],
});

export const errorText = style({
  fontSize: typography.fontSizes.xs,
  color: colors.brand.danger.main,
  marginLeft: spacing["2xl"],
});
