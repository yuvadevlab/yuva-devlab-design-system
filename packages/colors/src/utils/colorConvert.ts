/**
 * RGB Color representation
 * Each channel ranges from 0-255
 */
export interface RGB {
  r: number; // Red: 0-255
  g: number; // Green: 0-255
  b: number; // Blue: 0-255
}

/**
 * HSL Color representation
 * More intuitive for creating color variations
 */
export interface HSL {
  h: number; // Hue: 0-360 degrees (color wheel position)
  s: number; // Saturation: 0-100% (color intensity)
  l: number; // Lightness: 0-100% (brightness)
}

/**
 * Convert HEX color to RGB
 * Example: "#FF0000" → { r: 255, g: 0, b: 0 }
 *
 * How it works:
 * 1. Parse hex string (remove #)
 * 2. Extract 2-character chunks (RR, GG, BB)
 * 3. Convert each from base-16 to base-10
 */
export const hexToRgb = (hex: string): RGB => {
  // Remove # if present and match RGB components
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) {
    return { r: 0, g: 0, b: 0 }; // Return black if invalid
  }

  return {
    r: parseInt(result[1], 16), // Parse RR as hex
    g: parseInt(result[2], 16), // Parse GG as hex
    b: parseInt(result[3], 16), // Parse BB as hex
  };
};

/**
 * Convert RGB to HSL
 * This is the KEY conversion for our color generation!
 *
 * Algorithm explanation:
 * 1. Normalize RGB values to 0-1 range
 * 2. Find max and min values
 * 3. Calculate Lightness: average of max and min
 * 4. Calculate Saturation: based on the difference
 * 5. Calculate Hue: based on which channel is dominant
 */
export const rgbToHsl = ({ r, g, b }: RGB): HSL => {
  // Step 1: Normalize to 0-1 range
  r /= 255;
  g /= 255;
  b /= 255;

  // Step 2: Find max and min
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;

  // Step 3: Calculate Lightness
  const l = (max + min) / 2;

  // Step 4 & 5: Calculate Saturation and Hue (only if not grayscale)
  if (max !== min) {
    const d = max - min;

    // Saturation formula changes based on lightness
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    // Hue depends on which channel is dominant
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360), // Convert to degrees
    s: Math.round(s * 100), // Convert to percentage
    l: Math.round(l * 100), // Convert to percentage
  };
};

/**
 * Convert HSL to RGB
 * Reverse of rgbToHsl - needed to convert back to displayable colors
 *
 * Uses a helper function to calculate RGB from hue position
 */
export const hslToRgb = ({ h, s, l }: HSL): RGB => {
  // Normalize to 0-1 range
  h /= 360;
  s /= 100;
  l /= 100;

  let r: number, g: number, b: number;

  if (s === 0) {
    // Achromatic (gray) - all channels equal
    r = g = b = l;
  } else {
    /**
     * Helper function: converts hue to RGB channel value
     * This is the mathematical formula for HSL → RGB
     */
    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
};

/**
 * Convert RGB to HEX
 * Final step: convert back to CSS-usable format
 *
 * Example: { r: 255, g: 0, b: 0 } → "#ff0000"
 */
export const rgbToHex = ({ r, g, b }: RGB): string => {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16); // Convert to base-16
        return hex.padStart(2, "0"); // Ensure 2 digits (e.g., "0f" not "f")
      })
      .join("")
  );
};
