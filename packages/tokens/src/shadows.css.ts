import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

/**
 * Provides depth and hierarchy through layered shadows.
 */
export const shadows = createThemeContract({
  none: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  "2xl": null,
  inner: null,
  focus: null, // Accessible focus indicator
});

createGlobalTheme(":root", shadows, {
  none: "none",
  xs: "0 1px 2px 0 rgba(60, 64, 67, 0.15)",
  sm: "0 1px 3px 0 rgba(60, 64, 67, 0.15), 0 1px 2px 0 rgba(60, 64, 67, 0.10)",
  md: "0 4px 6px -1px rgba(60, 64, 67, 0.15), 0 2px 4px -1px rgba(60, 64, 67, 0.10)",
  lg: "0 10px 15px -3px rgba(60, 64, 67, 0.15), 0 4px 6px -2px rgba(60, 64, 67, 0.10)",
  xl: "0 20px 25px -5px rgba(60, 64, 67, 0.15), 0 10px 10px -5px rgba(60, 64, 67, 0.10)",
  "2xl": "0 25px 50px -12px rgba(60, 64, 67, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(60, 64, 67, 0.10)",
  focus: "0 0 0 3px rgba(26, 115, 232, 0.2)",
});
