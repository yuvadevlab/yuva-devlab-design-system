import { createThemeContract } from "@vanilla-extract/css";

/**
 * Colors are expressed as CSS variables.
 * ThemeProvider + ConfigProvider are responsible for setting the actual values.
 */
export const colors = createThemeContract({
  // Brand / Primary
  accentPrimary: null,
  accentPrimaryHover: null,
  accentPrimaryActive: null,
  accentPrimarySubtle: null,

  // Danger / Error
  accentDanger: null,
  accentDangerHover: null,
  accentDangerActive: null,
  accentDangerSubtle: null,

  // Success
  accentSuccess: null,
  accentSuccessHover: null,
  accentSuccessActive: null,
  accentSuccessSubtle: null,

  // Warning
  accentWarning: null,
  accentWarningHover: null,
  accentWarningActive: null,
  accentWarningSubtle: null,

  // Info
  accentInfo: null,
  accentInfoHover: null,
  accentInfoActive: null,
  accentInfoSubtle: null,

  // Text
  textPrimary: null,
  textSecondary: null,
  textTertiary: null, // Muted
  textDisabled: null,
  textOnPrimary: null,
  textOnColor: null, // For other colored backgrounds
  textInverse: null, // For dark-on-light scenarios

  // Borders
  borderSubtle: null,
  borderDefault: null,
  borderStrong: null,
  borderInteractive: null,
  borderDisabled: null,

  // Backgrounds
  bgBody: null,
  bgSurface: null,
  bgSurfaceHover: null,
  bgSurfaceActive: null,
  bgSurfaceRaised: null, // Elevated surface
  bgSurfaceOverlay: null, // For modals/dialogs
  bgCanvas: null,
  bgSubtle: null,
  bgDisabled: null,

  // Components
  bgButton: null,
  bgButtonHover: null,
  bgButtonActive: null,

  // Interaction
  focusRing: null,
  overlay: null, // For modal/drawer backdrops
});
