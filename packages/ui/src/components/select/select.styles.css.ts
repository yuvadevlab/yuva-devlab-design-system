import { style, styleVariants } from "@vanilla-extract/css";
import {
  colors,
  radii,
  spacing,
  typography,
  shadows,
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

export const trigger = style({
  all: "unset",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: spacing.sm,
  width: "100%",
  fontFamily: typography.fonts.sans,
  fontSize: typography.fontSizes.sm,
  color: colors.text.primary,
  backgroundColor: colors.bg.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: colors.border.default,
  borderRadius: radii.md,
  cursor: "pointer",
  transition: `all ${transitions.duration.normal} ${transitions.easing.standard}, border-radius ${transitions.duration.normal} ${transitions.easing.standard}`,

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

  selectors: {
    "&[data-placeholder]": {
      color: colors.text.tertiary,
    },
  },
});

export const size = styleVariants({
  sm: {
    height: 32,
    paddingInline: spacing.sm,
  },
  md: {
    height: 40,
    paddingInline: spacing.md,
  },
  lg: {
    height: 48,
    paddingInline: spacing.lg,
  },
});

export const error = style({
  borderColor: colors.brand.danger.main,

  ":focus": {
    borderColor: colors.brand.danger.main,
    boxShadow: `0 0 0 1px ${colors.brand.danger.main}`,
  },
});

export const icon = style({
  color: colors.text.secondary,
  transition: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)",

  selectors: {
    '[data-state="open"] &': {
      transform: "rotate(180deg)",
    },
  },
});

export const content = style({
  overflow: "hidden",
  backgroundColor: colors.bg.surface,
  borderRadius: radii.md,
  border: `1px solid ${colors.border.default}`,
  boxShadow: shadows.lg,
  zIndex: 1000,
  minWidth: "var(--radix-select-trigger-width)",
  maxWidth: "min(var(--radix-select-trigger-width), 320px)",
  maxHeight: "var(--radix-select-content-available-height)",
});

export const viewport = style({
  padding: spacing.sm,
});

export const item = style({
  all: "unset",
  fontSize: typography.fontSizes.sm,
  lineHeight: 1.5,
  color: colors.text.primary,
  borderRadius: radii.sm,
  display: "flex",
  alignItems: "center",
  minHeight: 36,
  padding: `${spacing.sm} ${spacing.md}`,
  paddingLeft: spacing.xl,
  position: "relative",
  userSelect: "none",
  cursor: "pointer",
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",

  selectors: {
    "&[data-disabled]": {
      color: colors.text.tertiary,
      pointerEvents: "none",
      opacity: 0.5,
    },
    "&[data-highlighted]": {
      outline: "none",
      backgroundColor: colors.bg.surface,
      color: colors.text.primary,
    },
    '&[data-state="checked"]': {
      fontWeight: typography.fontWeights.medium,
      color: colors.text.primary,
    },
  },
});

export const itemIndicator = style({
  position: "absolute",
  left: 0,
  width: 20,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const groupLabel = style({
  padding: `${spacing.sm} ${spacing.md}`,
  paddingTop: spacing.md,
  paddingBottom: spacing.xs,
  fontSize: typography.fontSizes.xs,
  fontWeight: typography.fontWeights.bold,
  color: colors.text.secondary,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
});

export const separator = style({
  height: 1,
  backgroundColor: colors.border.default,
  margin: spacing.xs,
});

export const scrollButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: colors.bg.surface,
  color: colors.text.secondary,
  cursor: "default",
});

export const helperText = style({
  fontSize: typography.fontSizes.xs,
  color: colors.text.secondary,
});

export const errorText = style({
  fontSize: typography.fontSizes.xs,
  color: colors.brand.danger.main,
});
