import { createThemeContract } from "@vanilla-extract/css";

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
