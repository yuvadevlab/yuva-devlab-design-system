import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

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

createGlobalTheme(":root", typography, {
  fonts: {
    sans: '"Inter", "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"Roboto Mono", "SF Mono", Monaco, "Cascadia Code", "Courier New", monospace',
    display:
      '"Inter", "Google Sans Display", -apple-system, BlinkMacSystemFont, sans-serif',
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },
  fontWeights: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeights: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },
  letterSpacing: {
    tight: "-0.01em",
    normal: "0",
    wide: "0.025em",
  },
});
