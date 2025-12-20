/**
 * @yuva-devlab/colors
 *
 * A color palette generation library inspired by Ant Design.
 * Generate beautiful, accessible color palettes from a single seed color.
 *
 * Features:
 * - Generate 10-shade palettes from any hex color
 * - HSL-based algorithm with dynamic saturation adjustment
 * - Light and dark theme support
 * - Preset palettes for common colors
 * - Zero dependencies
 * - Fully typed with TypeScript
 *
 * @example
 * ```typescript
 * import { generate } from '@yuva-devlab/colors';
 *
 * // Generate custom palette
 * const myPalette = generate('#FF0000');
 * console.log(myPalette[5]); // Primary red
 * ```
 */

// Core generation function
export { generate } from "./generate";
export type { GenerateOptions } from "./generate";

// Color conversion utilities (for advanced users)
export { hexToRgb, rgbToHsl, hslToRgb, rgbToHex } from "./utils/colorConvert";
export type { RGB, HSL } from "./utils/colorConvert";
