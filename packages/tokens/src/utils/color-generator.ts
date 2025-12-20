import {
  generate,
  hexToRgb,
  rgbToHsl,
  hslToRgb,
  rgbToHex,
} from "@yuva-devlab/colors";

export interface TonalPalette {
  0: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  95: string;
  99: string;
  100: string;
}

export interface SemanticShades {
  main: string;
  onMain: string;
  container: string;
  onContainer: string;
  hover: string;
  active: string;
  subtle: string;
}

/**
 * Generates semantic shades (main, hover, active, subtle) from a single seed hex color.
 *
 * Mapping logic based on @yuva-devlab/colors LIGHTNESS_MAP:
 * - main:   Index 5 (Primary)
 * - hover:  Index 6 (Darker)
 * - active: Index 7 (Even darker)
 * - subtle: Index 0 (Very light)
 */
export const generateSemanticShades = (
  hex: string,
  theme: "light" | "dark" = "light",
  overrides?: Partial<Omit<SemanticShades, "hover" | "active" | "subtle">>,
): SemanticShades => {
  const palette = generate(hex, { theme });

  // Fallback generation based on standard tonal maps
  const base = {
    main: theme === "light" ? palette[5] : palette[5],
    onMain: theme === "light" ? "#ffffff" : "#000000",
    container: theme === "light" ? palette[1] : palette[1],
    onContainer: theme === "light" ? palette[9] : palette[9],
    hover: theme === "light" ? palette[6] : palette[6],
    active: theme === "light" ? palette[7] : palette[7],
    subtle: palette[0],
  };

  return {
    ...base,
    ...overrides,
  };
};

/**
 * Generates a full MD3-compatible 13-shade tonal palette (0-100) from a seed color.
 */
export const generateTonalPalette = (hex: string): TonalPalette => {
  const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100] as const;
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb);

  const palette: Record<number, string> = {};

  tones.forEach((tone) => {
    // MD3 Tones are essentially lightness values
    const newHsl = {
      h: hsl.h,
      s: hsl.s,
      l: tone,
    };

    palette[tone] = rgbToHex(hslToRgb(newHsl));
  });

  return palette as unknown as TonalPalette;
};
