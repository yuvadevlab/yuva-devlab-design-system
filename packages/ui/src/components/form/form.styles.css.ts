import { style } from "@vanilla-extract/css";
import { colors, spacing, typography } from "@yuva-devlab/tokens";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.md,
  width: "100%",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.lg,
  width: "100%",
});

export const loading = style({
  opacity: 0.6,
  pointerEvents: "none",
  cursor: "not-allowed",
});

export const errorMessage = style({
  fontSize: typography.fontSizes.sm,
  color: colors.brand.danger.main,
  padding: spacing.sm,
  backgroundColor: colors.brand.danger.subtle,
  borderRadius: "4px",
  border: `1px solid ${colors.brand.danger.main}`,
});

export const successMessage = style({
  fontSize: typography.fontSizes.sm,
  color: colors.brand.success.main,
  padding: spacing.sm,
  backgroundColor: colors.brand.success.subtle,
  borderRadius: "4px",
  border: `1px solid ${colors.brand.success.main}`,
});
