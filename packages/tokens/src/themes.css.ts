import { createTheme } from "@vanilla-extract/css";

import { colors } from "./colors.css";
import { spacing } from "./spacing.css";

/**
 * Default theme that maps to your CSS variables
 * This maintains the same CSS variable names as before
 */
export const defaultTheme = createTheme(colors, {
  accentPrimary: "var(--yd-color-accent-primary)",
  accentPrimaryHover: "var(--yd-color-accent-primary-hover)",
  accentDanger: "var(--yd-color-accent-danger)",
  accentDangerHover: "var(--yd-color-accent-danger-hover)",
  textPrimary: "var(--yd-color-text-primary)",
  textOnPrimary: "var(--yd-color-text-on-primary)",
  textMuted: "var(--yd-color-text-muted)",
  borderSubtle: "var(--yd-color-border-subtle)",
  borderStrong: "var(--yd-color-border-strong)",
  bgButton: "var(--yd-color-bg-button)",
  bgBody: "var(--yd-color-bg-body)",
});

export const defaultSpacing = createTheme(spacing, {
  xs: "var(--yd-space-xs)",
  sm: "var(--yd-space-sm)",
  md: "var(--yd-space-md)",
  lg: "var(--yd-space-lg)",
  xl: "var(--yd-space-xl)",
});
