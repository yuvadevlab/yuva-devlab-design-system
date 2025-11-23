import { createThemeContract } from "@vanilla-extract/css";

/**
 * Spacing tokens also use CSS variables so they're themeable if needed.
 */
export const spacing = createThemeContract({
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
});
