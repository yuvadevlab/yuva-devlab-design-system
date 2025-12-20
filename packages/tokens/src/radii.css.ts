import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

/**
 * Border radius tokens for modern rounded aesthetic.
 */
export const radii = createThemeContract({
  none: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  "2xl": null,
  "3xl": null,
  full: null,
});

createGlobalTheme(":root", radii, {
  none: "0",
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "20px",
  "3xl": "24px",
  full: "9999px",
});
