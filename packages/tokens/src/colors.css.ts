import { createGlobalThemeContract } from "@vanilla-extract/css";

/**
 * Colors are expressed as CSS variables.
 * ThemeProvider + ConfigProvider are responsible for setting the actual values.
 *
 * This contract matches our YD Design System Token structure.
 * We use createGlobalThemeContract to enforce specific variable names
 * that match our runtime theme application logic.
 */
export const colors = createGlobalThemeContract({
  // ========== Brand / Primary ==========
  accentPrimary: "yd-color-accent-primary",
  accentPrimaryHover: "yd-color-accent-primary-hover",
  accentPrimaryActive: "yd-color-accent-primary-active",
  accentPrimarySubtle: "yd-color-accent-primary-subtle",

  // ========== Danger / Error ==========
  accentDanger: "yd-color-accent-danger",
  accentDangerHover: "yd-color-accent-danger-hover",
  accentDangerActive: "yd-color-accent-danger-active",
  accentDangerSubtle: "yd-color-accent-danger-subtle",

  // ========== Success ==========
  accentSuccess: "yd-color-accent-success",
  accentSuccessHover: "yd-color-accent-success-hover",
  accentSuccessActive: "yd-color-accent-success-active",
  accentSuccessSubtle: "yd-color-accent-success-subtle",

  // ========== Warning ==========
  accentWarning: "yd-color-accent-warning",
  accentWarningHover: "yd-color-accent-warning-hover",
  accentWarningActive: "yd-color-accent-warning-active",
  accentWarningSubtle: "yd-color-accent-warning-subtle",

  // ========== Info ==========
  accentInfo: "yd-color-accent-info",
  accentInfoHover: "yd-color-accent-info-hover",
  accentInfoActive: "yd-color-accent-info-active",
  accentInfoSubtle: "yd-color-accent-info-subtle",

  // ========== Text ==========
  textPrimary: "yd-color-text-primary",
  textSecondary: "yd-color-text-secondary",
  textTertiary: "yd-color-text-tertiary",
  textDisabled: "yd-color-text-disabled",
  textOnPrimary: "yd-color-text-on-primary",
  textOnColor: "yd-color-text-on-color",
  textInverse: "yd-color-text-inverse",

  // ========== Borders ==========
  borderSubtle: "yd-color-border-subtle",
  borderDefault: "yd-color-border-default",
  borderStrong: "yd-color-border-strong",
  borderInteractive: "yd-color-border-interactive",
  borderDisabled: "yd-color-border-disabled",

  // ========== Backgrounds ==========
  bgBody: "yd-color-bg-body",
  bgSurface: "yd-color-bg-surface",
  bgSurfaceHover: "yd-color-bg-surface-hover",
  bgSurfaceActive: "yd-color-bg-surface-active",
  bgSurfaceRaised: "yd-color-bg-surface-raised",
  bgSurfaceOverlay: "yd-color-bg-surface-overlay",
  bgCanvas: "yd-color-bg-canvas",
  bgSubtle: "yd-color-bg-subtle",
  bgDisabled: "yd-color-bg-disabled",

  // ========== Components ==========
  bgButton: "yd-color-bg-button",
  bgButtonHover: "yd-color-bg-button-hover",
  bgButtonActive: "yd-color-bg-button-active",

  // ========== Interaction ==========
  focusRing: "yd-color-focus-ring",
  overlay: "yd-color-overlay",
});
