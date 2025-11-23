import { createThemeContract } from "@vanilla-extract/css";

/**
 * Colors are expressed as CSS variables.
 * ThemeProvider + ConfigProvider are responsible for setting the actual values.
 */
export const colors = createThemeContract({
  accentPrimary: null,
  accentPrimaryHover: null,
  accentDanger: null,
  accentDangerHover: null,
  textPrimary: null,
  textOnPrimary: null,
  textMuted: null,
  borderSubtle: null,
  borderStrong: null,
  bgButton: null,
  bgBody: null,
});
