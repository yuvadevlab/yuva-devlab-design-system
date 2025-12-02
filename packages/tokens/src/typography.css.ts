import { createThemeContract } from "@vanilla-extract/css";

/**
 * Typography tokens using Google Sans-inspired font stack.
 * Expanded scale for modern web applications.
 */
export const typography = createThemeContract({
  fonts: {
    sans: null,
    mono: null,
    display: null,
  },
  fontSizes: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    "2xl": null,
    "3xl": null,
    "4xl": null,
    "5xl": null,
    "6xl": null,
  },
  fontWeights: {
    regular: null,
    medium: null,
    semibold: null,
    bold: null,
  },
  lineHeights: {
    tight: null,
    normal: null,
    relaxed: null,
  },
  letterSpacing: {
    tight: null,
    normal: null,
    wide: null,
  },
});
