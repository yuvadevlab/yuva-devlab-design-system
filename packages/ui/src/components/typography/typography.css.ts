import { style, styleVariants } from "@vanilla-extract/css";
import { typography, colors, spacing } from "@yuva-devlab/tokens";

export const base = style({
  fontFamily: typography.fonts.sans,
  margin: 0,
});

export const variant = styleVariants({
  h1: {
    fontSize: typography.fontSizes["2xl"],
    fontWeight: typography.fontWeights.bold,
    lineHeight: typography.lineHeights.tight,
  },
  h2: {
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.bold,
    lineHeight: typography.lineHeights.tight,
  },
  h3: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.bold,
    lineHeight: typography.lineHeights.normal,
  },
  h4: {
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.bold,
    lineHeight: typography.lineHeights.normal,
  },
  h5: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    lineHeight: typography.lineHeights.normal,
  },
  h6: {
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.bold,
    lineHeight: typography.lineHeights.normal,
  },
  body: {
    fontSize: typography.fontSizes.md,
    lineHeight: typography.lineHeights.normal,
  },
  caption: {
    fontSize: typography.fontSizes.sm,
    lineHeight: typography.lineHeights.normal,
    color: colors.text.secondary,
  },
  captionError: {
    fontSize: typography.fontSizes.sm,
    lineHeight: typography.lineHeights.normal,
    color: colors.brand.danger.main,
  },
  label: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.medium,
    lineHeight: typography.lineHeights.tight,
    marginBottom: spacing["2xs"],
    display: "block",
    color: colors.text.primary,
  },
});

export const weight = styleVariants({
  normal: { fontWeight: typography.fontWeights.regular },
  medium: { fontWeight: typography.fontWeights.medium },
  bold: { fontWeight: typography.fontWeights.bold },
});
