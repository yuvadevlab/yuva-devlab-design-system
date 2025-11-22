import * as stylex from "@stylexjs/stylex";

/**
 * Colors are expressed as CSS variables.
 * ThemeProvider + ConfigProvider are responsible for setting the actual values.
 */
export const colors = stylex.defineVars({
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
