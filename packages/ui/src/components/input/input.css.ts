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
    borderColor: colors.borderDefault,
    backgroundColor: colors.bgSurface,
    color: colors.textPrimary,
    ":focus": {
      borderColor: colors.accentPrimary,
      boxShadow: `0 0 0 2px ${colors.accentPrimarySubtle}`,
    },
  },
  filled: {
    borderColor: "transparent",
    backgroundColor: colors.bgSubtle,
    color: colors.textPrimary,
    ":focus": {
      backgroundColor: colors.bgSurface,
      boxShadow: `0 0 0 2px ${colors.accentPrimarySubtle}`,
    },
  },
});

export const size = styleVariants({
  small: {
    padding: `${spacing.xs} ${spacing.sm}`,
    fontSize: typography.fontSizes.sm,
  },
  middle: {
    padding: `${spacing.sm} ${spacing.md}`,
    fontSize: typography.fontSizes.md,
  },
  large: {
    padding: `${spacing.md} ${spacing.lg}`,
    fontSize: typography.fontSizes.lg,
  },
});

export const error = style({
  borderColor: colors.accentDanger,
  ":focus": {
    borderColor: colors.accentDanger,
    boxShadow: `0 0 0 2px ${colors.accentDangerSubtle}`,
  },
});
