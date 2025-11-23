import { style, styleVariants } from "@vanilla-extract/css";
import { colors, spacing } from "@yuva-devlab/tokens";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.xs,
  fontWeight: 500,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: "9999px",
  cursor: "pointer",
  transition:
    "background-color 150ms, border-color 150ms, color 150ms, box-shadow 150ms",
  whiteSpace: "nowrap",
});

// Size variants
export const size = styleVariants({
  small: {
    paddingInline: spacing.sm,
    paddingBlock: "4px",
    fontSize: "0.75rem",
  },
  middle: {
    paddingInline: spacing.md,
    paddingBlock: "6px",
    fontSize: "0.875rem",
  },
  large: {
    paddingInline: spacing.lg,
    paddingBlock: "8px",
    fontSize: "0.9375rem",
  },
});

// Variant styles
export const variant = styleVariants({
  default: {
    backgroundColor: colors.bgButton,
    color: colors.textPrimary,
    borderColor: colors.borderSubtle,
    ":hover": {
      backgroundColor: colors.borderSubtle,
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
  },
  ghost: {
    backgroundColor: "transparent",
    color: colors.textPrimary,
    borderColor: "transparent",
    ":hover": {
      backgroundColor: colors.borderSubtle,
    },
  },
  link: {
    backgroundColor: "transparent",
    color: colors.accentPrimary,
    borderColor: "transparent",
    paddingInline: 0,
    paddingBlock: 0,
    ":hover": {
      textDecoration: "underline",
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
