import { generate } from "@yuva-devlab/colors";

export interface SemanticShades {
  main: string;
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
): SemanticShades => {
  const palette = generate(hex, { theme });

  // For light theme:
  // 5 is base, 6 is hover, 7 is active, 0 is subtle
  if (theme === "light") {
    return {
      main: palette[5],
      hover: palette[6],
      active: palette[7],
      subtle: palette[0],
    };
  }

  // For dark theme (inverted map):
  // 5 is base, 6 is hover, 7 is active, 0 is subtle
  // (In DARK_LIGHTNESS_MAP, 7 is lighter than 5)
  return {
    main: palette[5],
    hover: palette[4], // Darker in dark mode means lower index
    active: palette[3], // Even darker
    subtle: palette[0], // Very dark background
  };
};
