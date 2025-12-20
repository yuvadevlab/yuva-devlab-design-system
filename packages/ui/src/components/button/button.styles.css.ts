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
    backgroundColor: "var(--yd-color-accent-primary)",
    color: "var(--yd-color-text-on-primary)",
    borderColor: "var(--yd-color-accent-primary)",
    ":hover": {
      backgroundColor: "var(--yd-color-accent-primary-hover)",
      borderColor: "var(--yd-color-accent-primary-hover)",
    },
    ":active": {
      backgroundColor: "var(--yd-color-accent-primary-active)",
      borderColor: "var(--yd-color-accent-primary-active)",
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
    color: "var(--yd-color-accent-primary)",
    borderColor: "transparent",
    paddingInline: 0,
    paddingBlock: 0,
    height: "auto",
    ":hover": {
      textDecoration: "underline",
      color: "var(--yd-color-accent-primary-hover)",
    },
  },
});

// Modifier styles
export const danger = style({
  backgroundColor: "var(--yd-color-accent-danger)",
  borderColor: "var(--yd-color-accent-danger)",
  color: "var(--yd-color-text-on-primary)",
  ":hover": {
    backgroundColor: "var(--yd-color-accent-danger-hover)",
    borderColor: "var(--yd-color-accent-danger-hover)",
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
