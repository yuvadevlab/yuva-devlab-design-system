import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

/**
 * Spacing tokens using 4px base unit for consistent rhythm.
 * Expanded scale for granular control.
 */
export const spacing = createThemeContract({
  "2xs": null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  "2xl": null,
  "3xl": null,
  "4xl": null,
  "5xl": null,
});

createGlobalTheme(":root", spacing, {
  "2xs": "2px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "32px",
  "3xl": "48px",
  "4xl": "64px",
  "5xl": "96px",
});
