import { style, styleVariants } from "@vanilla-extract/css";
import { colors, radii, spacing, typography } from "@yuva-devlab/tokens";

export const base = style({
  border: "1px solid",
  borderRadius: radii.sm,
  outline: "none",
  transition: "all 0.2s ease-in-out",
  width: "100%",
  fontFamily: typography.fonts.sans,
  ":disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },
});

export const variant = styleVariants({
  outline: {
    borderColor: colors.border.default,
    backgroundColor: colors.bg.surface,
    color: colors.text.primary,
    ":focus": {
      borderColor: colors.brand.primary.main,
      boxShadow: `0 0 0 2px ${colors.brand.primary.subtle}`,
    },
  },
  filled: {
    borderColor: "transparent",
    backgroundColor: colors.bg.subtle,
    color: colors.text.primary,
    ":focus": {
      backgroundColor: colors.bg.surface,
      boxShadow: `0 0 0 2px ${colors.brand.primary.subtle}`,
    },
  },
});

export const size = styleVariants({
  xs: {
    height: "28px",
    paddingInline: spacing.xs,
    fontSize: typography.fontSizes.xs,
  },
  sm: {
    height: "32px",
    paddingInline: spacing.sm,
    fontSize: typography.fontSizes.sm,
  },
  md: {
    height: "40px",
    paddingInline: spacing.md,
    fontSize: typography.fontSizes.sm,
  },
  lg: {
    height: "48px",
    paddingInline: spacing.md,
    fontSize: typography.fontSizes.md,
  },
  xl: {
    height: "56px",
    paddingInline: spacing.lg,
    fontSize: typography.fontSizes.md,
  },
});

export const error = style({
  borderColor: colors.brand.danger.main,
  ":focus": {
    borderColor: colors.brand.danger.main,
    boxShadow: `0 0 0 2px ${colors.brand.danger.subtle}`,
  },
});
