import { createThemeContract } from "@vanilla-extract/css";

/**
 * Responsive breakpoint tokens.
 * Mobile-first approach aligned with common device sizes.
 */
export const breakpoints = createThemeContract({
  xs: null, // Mobile portrait
  sm: null, // Mobile landscape
  md: null, // Tablet
  lg: null, // Desktop
  xl: null, // Large desktop
  "2xl": null, // Extra large desktop
});
