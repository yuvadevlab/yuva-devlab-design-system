import { createGlobalTheme, createTheme } from "@vanilla-extract/css";

import { colors } from "./colors.css";
import { palettes } from "./palettes.css";
import { generateSemanticShades } from "./utils/color-generator";

/**
 * ============================================================================
 * PALETTE THEMES
 * ============================================================================
 */

/**
 * Dark Theme Palettes
 * Scoped theme override for dark mode foundation colors.
 */
export const darkPalettes = createTheme(palettes, {
  primary: {
    0: "#000000",
    10: "#001a41",
    20: "#002f65",
    30: "#004494",
    40: "#1a73e8",
    50: "#4285f4",
    60: "#669df6",
    70: "#8ab4f8",
    80: "#aecbfa",
    90: "#d2e3fc",
    95: "#e8f0fe",
    99: "#fafbff",
    100: "#ffffff",
  },
  secondary: {
    0: "#000000",
    10: "#1d192b",
    20: "#332d41",
    30: "#4a4458",
    40: "#625b71",
    50: "#7a7289",
    60: "#958da5",
    70: "#b0a7c0",
    80: "#ccc2dc",
    90: "#e8def8",
    95: "#f6edff",
    99: "#fffbfe",
    100: "#ffffff",
  },
  tertiary: {
    0: "#000000",
    10: "#31111d",
    20: "#492532",
    30: "#633b48",
    40: "#7d5260",
    50: "#986977",
    60: "#b58392",
    70: "#d29dac",
    80: "#efb8c8",
    90: "#ffd8e4",
    95: "#ffecf1",
    99: "#fffbfa",
    100: "#ffffff",
  },
  error: {
    0: "#000000",
    10: "#410e0b",
    20: "#601410",
    30: "#8c1d18",
    40: "#b3261e",
    50: "#dc362e",
    60: "#e46962",
    70: "#ec928e",
    80: "#f2b8b5",
    90: "#f9dedc",
    95: "#fceeee",
    99: "#fffbf9",
    100: "#ffffff",
  },
  neutral: {
    0: "#000000",
    10: "#1c1b1f",
    20: "#313033",
    30: "#484649",
    40: "#605d62",
    50: "#787579",
    60: "#939094",
    70: "#aeaaae",
    80: "#c9c5ca",
    90: "#e6e1e5",
    95: "#f4eff4",
    99: "#fffbfe",
    100: "#ffffff",
  },
  neutralVariant: {
    0: "#000000",
    10: "#1d1a22",
    20: "#322f37",
    30: "#49454f",
    40: "#605d66",
    50: "#79747e",
    60: "#938f99",
    70: "#aea9b4",
    80: "#cac4d0",
    90: "#e7e0ec",
    95: "#f5eefa",
    99: "#fffbfe",
    100: "#ffffff",
  },
});

/**
 * ============================================================================
 * SEMANTIC COLOR THEMES
 * ============================================================================
 * Developer-friendly API that maps to palette values
 */

const primaryPalette = generateSemanticShades("#1a73e8");
const secondaryPalette = generateSemanticShades("#7a7289");
const tertiaryPalette = generateSemanticShades("#7d5260"); // Subtle pink/brown tonal
const errorPalette = generateSemanticShades("#b3261e");
const successPalette = generateSemanticShades("#1e8e3e");
const warningPalette = generateSemanticShades("#f9ab00");
const infoPalette = generateSemanticShades("#1967d2");

/**
 * Light Theme - Semantic Colors
 * Maps semantic tokens to appropriate palette tones globally on :root.
 */
createGlobalTheme(":root", colors, {
  brand: {
    primary: primaryPalette,
    secondary: secondaryPalette,
    tertiary: tertiaryPalette,
    danger: errorPalette,
    success: successPalette,
    warning: warningPalette,
    info: infoPalette,
  },

  text: {
    primary: "#1c1b1f",
    secondary: "#49454f",
    tertiary: "#79747e",
    disabled: "#c9c5ca",
    onPrimary: "#ffffff",
    onColor: "#ffffff",
    inverse: "#e6e1e5",
  },

  bg: {
    body: "#fffbfe",
    surface: "#fffbfe",
    surfaceHover: "#f4eff4",
    surfaceActive: "#e6e1e5",
    surfaceRaised: "#ffffff",
    surfaceOverlay: "#ffffff",
    canvas: "#f4eff4",
    subtle: "#f5eefa",
    disabled: "#e6e1e5",
  },

  border: {
    subtle: "#e7e0ec",
    default: "#cac4d0",
    strong: "#79747e",
    interactive: "#1a73e8",
    disabled: "#e7e0ec",
  },

  interaction: {
    focusRing: "0 0 0 3px rgba(26, 115, 232, 0.2)",
    overlay: "rgba(28, 27, 31, 0.32)",
  },
});

export const lightTheme = "light-theme";

/**
 * Dark Theme - Semantic Colors
 * Maps semantic tokens to appropriate palette tones for dark mode
 */
const darkPrimaryPalette = generateSemanticShades("#1a73e8", "dark");
const darkSecondaryPalette = generateSemanticShades("#7a7289", "dark");
const darkTertiaryPalette = generateSemanticShades("#7d5260", "dark");
const darkErrorPalette = generateSemanticShades("#b3261e", "dark");
const darkSuccessPalette = generateSemanticShades("#1e8e3e", "dark");
const darkWarningPalette = generateSemanticShades("#f9ab00", "dark");
const darkInfoPalette = generateSemanticShades("#1967d2", "dark");

export const darkTheme = createTheme(colors, {
  brand: {
    primary: darkPrimaryPalette,
    secondary: darkSecondaryPalette,
    tertiary: darkTertiaryPalette,
    danger: darkErrorPalette,
    success: darkSuccessPalette,
    warning: darkWarningPalette,
    info: darkInfoPalette,
  },

  text: {
    primary: "#e6e1e5",
    secondary: "#cac4d0",
    tertiary: "#938f99",
    disabled: "#605d62",
    onPrimary: "#001a41",
    onColor: "#000000",
    inverse: "#1c1b1f",
  },

  bg: {
    body: "#1c1b1f",
    surface: "#1c1b1f",
    surfaceHover: "#313033",
    surfaceActive: "#484649",
    surfaceRaised: "#313033",
    surfaceOverlay: "#313033",
    canvas: "#000000",
    subtle: "#1d1a22",
    disabled: "#313033",
  },

  border: {
    subtle: "#322f37",
    default: "#49454f",
    strong: "#938f99",
    interactive: "#aecbfa",
    disabled: "#322f37",
  },

  interaction: {
    focusRing: "0 0 0 3px rgba(174, 203, 250, 0.3)",
    overlay: "rgba(0, 0, 0, 0.6)",
  },
});

/**
 * Default theme exports
 */
export const defaultTheme = lightTheme;
