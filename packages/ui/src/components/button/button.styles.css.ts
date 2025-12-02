import { style, styleVariants } from "@vanilla-extract/css";
import { colors, radii, spacing, typography } from "@yuva-devlab/tokens";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.xs,
  fontFamily: typography.fonts.sans,
  fontWeight: typography.fontWeights.medium,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: radii.md,
  cursor: "pointer",
  transition:
    "background-color 150ms, border-color 150ms, color 150ms, box-shadow 150ms",
  whiteSpace: "nowrap",
  outline: "none",
  ":focus-visible": {
    boxShadow: colors.focusRing,
  },
});

// Size variants
export const size = styleVariants({
  small: {
    paddingInline: spacing.sm,
    paddingBlock: spacing.xs,
    fontSize: typography.fontSizes.xs,
    height: "24px",
  },
  middle: {
    paddingInline: spacing.md,
    paddingBlock: spacing.xs,
    fontSize: typography.fontSizes.sm,
    height: "32px",
  },
  large: {
    paddingInline: spacing.lg,
    paddingBlock: spacing.sm,
    fontSize: typography.fontSizes.md,
    height: "40px",
  },
});

// Variant styles
export const variant = styleVariants({
  default: {
    backgroundColor: colors.bgSurface,
    color: colors.textPrimary,
    borderColor: colors.borderDefault,
    ":hover": {
      backgroundColor: colors.bgSurfaceHover,
      borderColor: colors.borderStrong,
    },
    ":active": {
      backgroundColor: colors.bgSurfaceActive,
    },
  },
  primary: {
    backgroundColor: colors.accentPrimary,
    color: colors.textOnPrimary,
    borderColor: colors.accentPrimary,
    ":hover": {
      backgroundColor: colors.accentPrimaryHover,
      borderColor: colors.accentPrimaryHover,
    },
    ":active": {
      backgroundColor: colors.accentPrimaryActive,
      borderColor: colors.accentPrimaryActive,
    },
  },
  ghost: {
    backgroundColor: "transparent",
    color: colors.textSecondary,
    borderColor: "transparent",
    ":hover": {
      backgroundColor: colors.bgSubtle,
      color: colors.textPrimary,
    },
    ":active": {
      backgroundColor: colors.bgSurfaceActive,
    },
  },
  link: {
    backgroundColor: "transparent",
    color: colors.accentPrimary,
    borderColor: "transparent",
    paddingInline: 0,
    paddingBlock: 0,
    height: "auto",
    ":hover": {
      textDecoration: "underline",
      color: colors.accentPrimaryHover,
    },
  },
});

// Modifier styles
export const danger = style({
  backgroundColor: colors.accentDanger,
  borderColor: colors.accentDanger,
  color: colors.textOnPrimary,
  ":hover": {
    backgroundColor: colors.accentDangerHover,
    borderColor: colors.accentDangerHover,
  },
});

export const block = style({
  display: "flex",
  width: "100%",
});

export const disabled = style({
  opacity: 0.6,
  cursor: "not-allowed",
});
