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
  width: "100%",
});

export const label = style({
  fontSize: typography.fontSizes.sm,
  fontWeight: typography.fontWeights.medium,
  color: colors.text.primary,
});

export const textareaWrapper = style({
  position: "relative",
  width: "100%",
});

export const textarea = style({
  width: "100%",
  fontFamily: typography.fonts.sans,
  fontSize: typography.fontSizes.sm,
  color: colors.text.primary,
  backgroundColor: colors.bg.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: colors.border.default,
  borderRadius: radii.md,
  outline: "none",
  transition: `all ${transitions.duration.normal} ${transitions.easing.standard}`,
  resize: "vertical",

  "::placeholder": {
    color: colors.text.tertiary,
  },

  ":hover": {
    borderColor: colors.border.strong,
  },

  ":focus": {
    borderColor: colors.brand.primary.main,
    boxShadow: `0 0 0 1px ${colors.brand.primary.main}`,
  },

  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    backgroundColor: colors.bg.surfaceHover,
  },
});

export const size = styleVariants({
  sm: {
    padding: spacing.sm,
    minHeight: 80,
  },
  md: {
    padding: spacing.md,
    minHeight: 120,
  },
  lg: {
    padding: spacing.lg,
    minHeight: 160,
  },
});

export const error = style({
  borderColor: colors.brand.danger.main,

  ":focus": {
    borderColor: colors.brand.danger.main,
    boxShadow: `0 0 0 1px ${colors.brand.danger.main}`,
  },
});

export const autoResize = style({
  resize: "none",
  overflow: "hidden",
});

export const footer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: spacing.sm,
});

export const helperText = style({
  fontSize: typography.fontSizes.xs,
  color: colors.text.secondary,
});

export const errorText = style({
  fontSize: typography.fontSizes.xs,
  color: colors.brand.danger.main,
});

export const count = style({
  fontSize: typography.fontSizes.xs,
  color: colors.text.tertiary,
  marginLeft: "auto",
});

export const countError = style({
  color: colors.brand.danger.main,
});
