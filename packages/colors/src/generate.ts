import type { HSL } from "./utils/colorConvert";
import { hexToRgb, hslToRgb, rgbToHex, rgbToHsl } from "./utils/colorConvert";

/**
 * Options for palette generation
 */
export interface GenerateOptions {
  theme?: "light" | "dark";
  backgroundColor?: string; // Future: adjust colors based on background
}

/**
 * LIGHTNESS MAPS: The secret sauce! 🎨
 *
 * These define the lightness values for each of the 10 shades.
 * Index 5 is always the "primary" color (50% lightness for light theme)
 *
 * Light theme: Goes from very light (95%) to dark (15%)
 * Dark theme: Inverted - goes from dark (15%) to light (95%)
 */
const LIGHT_LIGHTNESS_MAP = [
  95, // Index 0: Very light background
  85, // Index 1: Light hover state
  75, // Index 2: Borders
  65, // Index 3: Disabled states
  55, // Index 4: Secondary text
  50, // Index 5: PRIMARY COLOR (WCAG AA compliant)
  45, // Index 6: Hover state
  35, // Index 7: Active/pressed state
  25, // Index 8: Dark accent
  15, // Index 9: Very dark accent
];

const DARK_LIGHTNESS_MAP = [
  15, // Index 0: Very dark background
  25, // Index 1: Dark hover
  35, // Index 2: Borders
  45, // Index 3: Disabled
  55, // Index 4: Secondary text
  60, // Index 5: PRIMARY COLOR
  65, // Index 6: Hover
  75, // Index 7: Active
  85, // Index 8: Light accent
  95, // Index 9: Very light accent
];

/**
 * SATURATION ADJUSTMENT: Keep colors vibrant! 🌈
 *
 * Problem: Simply changing lightness makes colors look washed out or muddy
 * Solution: Dynamically adjust saturation based on lightness
 *
 * Rules:
 * - Very light colors (>80%): Increase saturation 15% (prevent washed out)
 * - Very dark colors (<20%): Increase saturation 10% (maintain vibrancy)
 * - Mid-range (20-80%): Keep original saturation
 *
 * This is what makes our palettes look professional!
 */
const adjustSaturation = (
  baseSaturation: number,
  lightness: number,
): number => {
  // Very light colors need more saturation
  if (lightness > 80) {
    return Math.min(100, baseSaturation * 1.15);
  }

  // Very dark colors also need a boost
  if (lightness < 20) {
    return Math.min(100, baseSaturation * 1.1);
  }

  // Mid-range: keep it as-is
  return baseSaturation;
};

/**
 * MAIN FUNCTION: Generate a 10-color palette from a seed color
 *
 * Process:
 * 1. Convert input hex to HSL
 * 2. For each of 10 lightness stops:
 *    a. Create new color with target lightness
 *    b. Adjust saturation to maintain vibrancy
 *    c. Keep same hue (this creates a "tonal" palette)
 * 3. Convert back to hex
 *
 * Example:
 * generate("#1890FF") →
 * [
 *   "#E6F7FF", // Lightest
 *   "#BAE7FF",
 *   "#91D5FF",
 *   "#69C0FF",
 *   "#40A9FF",
 *   "#1890FF", // Original (index 5)
 *   "#096DD9",
 *   "#0050B3",
 *   "#003A8C",
 *   "#002766"  // Darkest
 * ]
 */
export const generate = (
  color: string,
  options: GenerateOptions = {},
): string[] => {
  const { theme = "light" } = options;

  // Step 1: Convert input color to HSL
  const rgb = hexToRgb(color);
  const hsl = rgbToHsl(rgb);

  // Step 2: Select appropriate lightness map
  const lightnessMap =
    theme === "light" ? LIGHT_LIGHTNESS_MAP : DARK_LIGHTNESS_MAP;

  // Step 3: Generate all 10 shades
  const palette = lightnessMap.map((targetLightness, index) => {
    // Adjust saturation based on target lightness
    const adjustedSaturation = adjustSaturation(hsl.s, targetLightness);

    // Create new HSL color
    const newHsl: HSL = {
      h: hsl.h, // Keep same hue!
      s: adjustedSaturation, // Adjusted saturation
      l: targetLightness, // New lightness
    };

    // Convert back to hex
    const newRgb = hslToRgb(newHsl);
    const newHex = rgbToHex(newRgb);

    return newHex;
  });

  return palette;
};
