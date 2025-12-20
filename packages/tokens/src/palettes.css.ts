import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

import { generateTonalPalette } from "./utils/color-generator";

/**
 * Seed colors for tonal palette generation
 * These are the basis for the entire tonal system.
 */
export const SEEDS = {
  primary: "#3e6a4d",
  secondary: "#516350",
  tertiary: "#3b6470",
  error: "#ba1a1a",
  neutral: "#5e615b",
  neutralVariant: "#5d6259",
};

/**
 * Complete tonal palette system with 13 levels per color (0-100)
 * These are the foundation colors that semantic tokens map to
 */
export const palettes = createThemeContract({
  primary: {
    0: null,
    10: null,
    20: null,
    30: null,
    40: null,
    50: null,
    60: null,
    70: null,
    80: null,
    90: null,
    95: null,
    99: null,
    100: null,
  },
  secondary: {
    0: null,
    10: null,
    20: null,
    30: null,
    40: null,
    50: null,
    60: null,
    70: null,
    80: null,
    90: null,
    95: null,
    99: null,
    100: null,
  },
  tertiary: {
    0: null,
    10: null,
    20: null,
    30: null,
    40: null,
    50: null,
    60: null,
    70: null,
    80: null,
    90: null,
    95: null,
    99: null,
    100: null,
  },
  error: {
    0: null,
    10: null,
    20: null,
    30: null,
    40: null,
    50: null,
    60: null,
    70: null,
    80: null,
    90: null,
    95: null,
    99: null,
    100: null,
  },
  neutral: {
    0: null,
    10: null,
    20: null,
    30: null,
    40: null,
    50: null,
    60: null,
    70: null,
    80: null,
    90: null,
    95: null,
    99: null,
    100: null,
  },
  neutralVariant: {
    0: null,
    10: null,
    20: null,
    30: null,
    40: null,
    50: null,
    60: null,
    70: null,
    80: null,
    90: null,
    95: null,
    99: null,
    100: null,
  },
});

createGlobalTheme(":root", palettes, {
  primary: generateTonalPalette(SEEDS.primary),
  secondary: generateTonalPalette(SEEDS.secondary),
  tertiary: generateTonalPalette(SEEDS.tertiary),
  error: generateTonalPalette(SEEDS.error),
  neutral: generateTonalPalette(SEEDS.neutral),
  neutralVariant: generateTonalPalette(SEEDS.neutralVariant),
});
