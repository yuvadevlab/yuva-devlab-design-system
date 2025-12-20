import { style, styleVariants } from "@vanilla-extract/css";
import {
  colors,
  radii,
  spacing,
  typography,
  shadows,
} from "@yuva-devlab/tokens";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.sm,
  fontFamily: typography.fonts.sans,
  fontWeight: typography.fontWeights.medium,
  borderWidth: 1,
  borderStyle: "solid",
  cursor: "pointer",
  transition:
    "all 200ms cubic-bezier(0.4, 0, 0.2, 1), border-radius 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  whiteSpace: "nowrap",
  outline: "none",
  position: "relative",
  overflow: "hidden",
  ":focus-visible": {
    boxShadow: `0 0 0 2px ${colors.bg.body}, 0 0 0 4px ${colors.brand.primary.main}`,
  },
  ":disabled": {
    opacity: 0.38,
    cursor: "not-allowed",
    pointerEvents: "none",
  },
  ":active": {
    transform: "scale(0.97)",
  },
});

// Size variants (Standard heights)
export const size = styleVariants({
  xs: { height: "28px", fontSize: typography.fontSizes.xs },
  sm: { height: "32px", fontSize: typography.fontSizes.sm },
  md: { height: "40px", fontSize: typography.fontSizes.sm },
  lg: { height: "48px", fontSize: typography.fontSizes.md },
  xl: { height: "56px", fontSize: typography.fontSizes.md },
});

// Static shape variants
export const shape = styleVariants({
  round: {
    borderRadius: radii.xl,
  },
  square: {
    borderRadius: radii.md,
  },
});

// Standalone morph styles
export const morph = styleVariants({
  round: {
    ":active": {
      borderRadius: radii.md,
    },
  },
  square: {
    ":active": {
      borderRadius: radii.xl,
    },
  },
});

// Width variants (Padding control)
export const width = styleVariants({
  narrow: { paddingInline: spacing.md },
  default: { paddingInline: spacing.lg },
  wide: { paddingInline: spacing["2xl"] },
});

// Variant styles
export const variant = styleVariants({
  default: {
    backgroundColor: colors.bg.surface,
    color: colors.text.primary,
    borderColor: colors.border.default,
    ":hover": {
      backgroundColor: colors.bg.surfaceHover,
      borderColor: colors.border.strong,
    },
    ":active": {
      backgroundColor: colors.bg.surfaceActive,
    },
  },
  primary: {
    backgroundColor: colors.brand.primary.main,
    color: colors.text.onPrimary,
    borderColor: colors.brand.primary.main,
    ":hover": {
      backgroundColor: colors.brand.primary.hover,
      borderColor: colors.brand.primary.hover,
      boxShadow: shadows.sm,
    },
    ":active": {
      backgroundColor: colors.brand.primary.active,
    },
  },
  ghost: {
    backgroundColor: "transparent",
    color: colors.text.secondary,
    borderColor: "transparent",
    ":hover": {
      backgroundColor: colors.bg.surfaceHover,
      color: colors.text.primary,
    },
    ":active": {
      backgroundColor: colors.bg.surfaceActive,
    },
  },
  link: {
    backgroundColor: "transparent",
    color: colors.brand.primary.main,
    borderColor: "transparent",
    paddingInline: 0,
    height: "auto",
    borderRadius: 0,
    ":hover": {
      color: colors.brand.primary.hover,
      textDecoration: "underline",
    },
  },
  elevated: {
    backgroundColor: colors.bg.surfaceRaised,
    color: colors.brand.primary.main,
    borderColor: "transparent",
    boxShadow: shadows.sm,
    ":hover": {
      backgroundColor: colors.bg.surfaceHover,
      boxShadow: shadows.md,
    },
    ":active": {
      backgroundColor: colors.bg.surfaceActive,
      boxShadow: shadows.sm,
    },
  },
  filled: {
    backgroundColor: colors.brand.primary.main,
    color: colors.text.onPrimary,
    borderColor: "transparent",
    ":hover": {
      backgroundColor: colors.brand.primary.hover,
      boxShadow: shadows.xs,
    },
    ":active": {
      backgroundColor: colors.brand.primary.active,
    },
  },
  tonal: {
    backgroundColor: colors.brand.primary.subtle,
    color: colors.text.primary,
    borderColor: "transparent",
    ":hover": {
      backgroundColor: colors.bg.surfaceHover,
      boxShadow: shadows.xs,
    },
    ":active": {
      backgroundColor: colors.bg.surfaceActive,
    },
  },
  outlined: {
    backgroundColor: "transparent",
    color: colors.brand.primary.main,
    borderColor: colors.border.default,
    ":hover": {
      backgroundColor: colors.bg.surfaceHover,
      borderColor: colors.brand.primary.main,
    },
    ":active": {
      backgroundColor: colors.bg.surfaceActive,
      borderColor: colors.brand.primary.main,
    },
  },
  text: {
    backgroundColor: "transparent",
    color: colors.brand.primary.main,
    borderColor: "transparent",
    ":hover": {
      backgroundColor: colors.bg.surfaceHover,
    },
    ":active": {
      backgroundColor: colors.bg.surfaceActive,
    },
  },
  secondary: {
    backgroundColor: colors.brand.secondary.main,
    color: colors.text.onPrimary,
    borderColor: colors.brand.secondary.main,
    ":hover": {
      backgroundColor: colors.brand.secondary.hover,
      borderColor: colors.brand.secondary.hover,
      boxShadow: shadows.sm,
    },
    ":active": {
      backgroundColor: colors.brand.secondary.active,
    },
  },
  tertiary: {
    backgroundColor: colors.brand.tertiary.main,
    color: colors.text.onPrimary,
    borderColor: colors.brand.tertiary.main,
    ":hover": {
      backgroundColor: colors.brand.tertiary.hover,
      borderColor: colors.brand.tertiary.hover,
      boxShadow: shadows.sm,
    },
    ":active": {
      backgroundColor: colors.brand.tertiary.active,
    },
  },
});

// Modifier styles
export const danger = style({
  backgroundColor: colors.brand.danger.main,
  borderColor: colors.brand.danger.main,
  color: colors.text.onPrimary,
  ":hover": {
    backgroundColor: colors.brand.danger.hover,
    borderColor: colors.brand.danger.hover,
    boxShadow: shadows.sm,
  },
  ":active": {
    backgroundColor: colors.brand.danger.active,
  },
});

export const block = style({
  display: "flex",
  width: "100%",
});

export const disabled = style({
  backgroundColor: colors.brand.primary.subtle,
  color: colors.text.primary,
  borderColor: colors.border.default,
  cursor: "not-allowed",
  pointerEvents: "none",
});
