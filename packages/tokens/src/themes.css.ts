import {
  createGlobalTheme,
  createTheme,
  globalStyle,
} from "@vanilla-extract/css";

import { colors } from "./colors.css";
import { palettes } from "./palettes.css";
import {
  generateSemanticShades,
  type SemanticShades,
  type TonalPalette,
} from "./utils/color-generator";

/**
 * Semantic Color Mapping
 * Instead of hardcoding hex codes, we map semantic roles to specific tones
 * in our foundation palettes. This ensures that changing a foundation seed
 * updates the entire theme consistently.
 */
const mapTones = (
  palette: TonalPalette,
  mainTone: keyof TonalPalette,
  onMainTone: keyof TonalPalette,
  containerTone: keyof TonalPalette,
  onContainerTone: keyof TonalPalette,
): SemanticShades => ({
  main: palette[mainTone],
  onMain: palette[onMainTone],
  container: palette[containerTone],
  onContainer: palette[onContainerTone],
  // Tonal generation for interaction states
  // Note: These can also be mapped if we add more tones to our foundation
  hover: palette[mainTone === 40 ? 50 : 70], // Dynamic hover
  active: palette[mainTone === 40 ? 60 : 60], // Dynamic active
  subtle: palette[95],
});

/**
 * ============================================================================
 * SEMANTIC COLOR THEMES
 * ============================================================================
 * Developer-friendly API that maps to palette values
 */

const primaryPalette = mapTones(palettes.primary, 40, 100, 90, 10);
const secondaryPalette = mapTones(palettes.secondary, 40, 100, 90, 10);
const tertiaryPalette = mapTones(palettes.tertiary, 40, 100, 90, 10);
const errorPalette = mapTones(palettes.error, 40, 100, 90, 10);

// We keep these as generated for now as they are distinct semantic scales
const successPalette = generateSemanticShades("#3e6a4d");
const warningPalette = generateSemanticShades("#815600");
const infoPalette = generateSemanticShades("#006682");

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
    primary: palettes.neutral[10],
    secondary: palettes.neutralVariant[30],
    tertiary: palettes.neutralVariant[50],
    disabled: palettes.neutral[80],
    onPrimary: palettes.primary[100],
    onColor: palettes.primary[100],
    inverse: palettes.neutral[95],
  },

  bg: {
    body: palettes.neutral[99],
    surface: palettes.neutral[99],
    surfaceHover: palettes.neutral[95],
    surfaceActive: palettes.neutral[90],
    surfaceRaised: palettes.neutral[100],
    surfaceOverlay: palettes.neutral[100],
    canvas: palettes.neutral[95],
    subtle: palettes.primary[95],
    disabled: palettes.neutral[90],
  },

  border: {
    subtle: palettes.neutralVariant[90],
    default: palettes.neutralVariant[50],
    strong: palettes.neutralVariant[30],
    interactive: palettes.primary[40],
    disabled: palettes.neutralVariant[80],
  },

  interaction: {
    focusRing: `0 0 0 3px ${palettes.primary[90]}`,
    overlay: "rgba(0, 0, 0, 0.12)",
  },
});

export const lightTheme = "light-theme";

/**
 * Dark Theme - Semantic Colors
 * Maps semantic tokens to appropriate palette tones for dark mode
 */
const darkPrimaryPalette = mapTones(palettes.primary, 80, 20, 30, 90);
const darkSecondaryPalette = mapTones(palettes.secondary, 80, 20, 30, 90);
const darkTertiaryPalette = mapTones(palettes.tertiary, 80, 20, 30, 90);
const darkErrorPalette = mapTones(palettes.error, 80, 20, 30, 90);

const darkSuccessPalette = generateSemanticShades("#3e6a4d", "dark");
const darkWarningPalette = generateSemanticShades("#815600", "dark");
const darkInfoPalette = generateSemanticShades("#006682", "dark");

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
    primary: palettes.neutral[90],
    secondary: palettes.neutralVariant[80],
    tertiary: palettes.neutralVariant[60],
    disabled: palettes.neutral[30],
    onPrimary: palettes.primary[20],
    onColor: palettes.primary[10],
    inverse: palettes.neutral[10],
  },

  bg: {
    body: palettes.neutral[10],
    surface: palettes.neutral[10],
    surfaceHover: palettes.neutral[20],
    surfaceActive: palettes.neutral[20],
    surfaceRaised: palettes.neutral[20],
    surfaceOverlay: palettes.neutral[20],
    canvas: palettes.neutral[0],
    subtle: palettes.primary[20],
    disabled: palettes.neutral[20],
  },

  border: {
    subtle: palettes.neutralVariant[30],
    default: palettes.neutralVariant[60],
    strong: palettes.neutralVariant[80],
    interactive: palettes.primary[80],
    disabled: palettes.neutralVariant[20],
  },

  interaction: {
    focusRing: `0 0 0 3px ${palettes.primary[40]}`,
    overlay: "rgba(255, 255, 255, 0.08)",
  },
});

/**
 * Default theme exports
 */
export const defaultTheme = lightTheme;

/**
 * Global Styles
 * These ensure the core brand experience (like text selection) is consistent.
 */
globalStyle("::selection", {
  backgroundColor: colors.brand.primary.container,
  color: colors.brand.primary.onContainer,
});
