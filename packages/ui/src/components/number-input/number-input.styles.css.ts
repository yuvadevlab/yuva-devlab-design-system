import { style, styleVariants } from "@vanilla-extract/css";
import { colors, radii, spacing, typography } from "@yuva-devlab/tokens";

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

export const inputWrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const input = style({
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
  transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",

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

  // Hide default number input spinners
  "::-webkit-outer-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  MozAppearance: "textfield",
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

export const withControls = style({
  paddingRight: spacing["2xl"],
});

export const error = style({
  borderColor: colors.brand.danger.main,

  ":focus": {
    borderColor: colors.brand.danger.main,
    boxShadow: `0 0 0 1px ${colors.brand.danger.main}`,
  },
});

export const controls = style({
  position: "absolute",
  right: 1,
  top: 1,
  bottom: 1,
  display: "flex",
  flexDirection: "column",
  borderRadius: `0 ${radii.md} ${radii.md} 0`,
  overflow: "hidden",
});

export const controlButton = style({
  all: "unset",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  backgroundColor: colors.bg.surfaceHover,
  color: colors.text.secondary,
  cursor: "pointer",
  transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  borderLeft: `1px solid ${colors.border.default}`,

  ":hover": {
    backgroundColor: colors.bg.surfaceActive,
    color: colors.text.primary,
  },

  ":active": {
    backgroundColor: colors.brand.primary.subtle,
  },

  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    pointerEvents: "none",
  },
});

export const controlButtonTop = style({
  borderBottom: `1px solid ${colors.border.default}`,
});

export const helperText = style({
  fontSize: typography.fontSizes.xs,
  color: colors.text.secondary,
});

export const errorText = style({
  fontSize: typography.fontSizes.xs,
  color: colors.brand.danger.main,
});
