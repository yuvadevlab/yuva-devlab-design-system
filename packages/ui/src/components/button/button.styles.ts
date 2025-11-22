import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "@yuva-devlab/tokens";

export const buttonStyles = stylex.create({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
    fontWeight: 500,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: "9999px",
    cursor: "pointer",
    transitionProperty: "background-color, border-color, color, box-shadow",
    transitionDuration: "150ms",
    whiteSpace: "nowrap",
  },

  size_small: {
    paddingInline: spacing.sm,
    paddingBlock: "4px",
    fontSize: "0.75rem",
  },
  size_middle: {
    paddingInline: spacing.md,
    paddingBlock: "6px",
    fontSize: "0.875rem",
  },
  size_large: {
    paddingInline: spacing.lg,
    paddingBlock: "8px",
    fontSize: "0.9375rem",
  },

  type_default: {
    backgroundColor: colors.bgButton,
    color: colors.textPrimary,
    borderColor: colors.borderSubtle,
    ":hover": {
      backgroundColor: colors.borderSubtle,
    },
  },

  type_primary: {
    backgroundColor: colors.accentPrimary,
    color: colors.textOnPrimary,
    borderColor: colors.accentPrimary,
    ":hover": {
      backgroundColor: colors.accentPrimaryHover,
      borderColor: colors.accentPrimaryHover,
    },
  },

  type_ghost: {
    backgroundColor: "transparent",
    color: colors.textPrimary,
    borderColor: "transparent",
    ":hover": {
      backgroundColor: colors.borderSubtle,
    },
  },

  type_link: {
    backgroundColor: "transparent",
    color: colors.accentPrimary,
    borderColor: "transparent",
    paddingInline: 0,
    paddingBlock: 0,
    ":hover": {
      textDecorationLine: "underline",
    },
  },

  danger: {
    backgroundColor: colors.accentDanger,
    borderColor: colors.accentDanger,
    color: colors.textOnPrimary,
    ":hover": {
      backgroundColor: colors.accentDangerHover,
      borderColor: colors.accentDangerHover,
    },
  },

  block: {
    display: "flex",
    width: "100%",
  },

  disabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },
});
