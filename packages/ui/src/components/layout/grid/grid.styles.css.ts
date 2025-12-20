import { style, styleVariants } from "@vanilla-extract/css";
import { spacing } from "@yuva-devlab/tokens";

export const base = style({
  display: "grid",
});

export const columns = styleVariants({
  1: { gridTemplateColumns: "repeat(1, minmax(0, 1fr))" },
  2: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
  3: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
  4: { gridTemplateColumns: "repeat(4, minmax(0, 1fr))" },
  5: { gridTemplateColumns: "repeat(5, minmax(0, 1fr))" },
  6: { gridTemplateColumns: "repeat(6, minmax(0, 1fr))" },
  12: { gridTemplateColumns: "repeat(12, minmax(0, 1fr))" },
});

export const gap = styleVariants(spacing, (val) => ({ gap: val }));
export const columnGap = styleVariants(spacing, (val) => ({ columnGap: val }));
export const rowGap = styleVariants(spacing, (val) => ({ rowGap: val }));

export const align = styleVariants({
  start: { alignItems: "start" },
  center: { alignItems: "center" },
  end: { alignItems: "end" },
  stretch: { alignItems: "stretch" },
});

export const justify = styleVariants({
  start: { justifyItems: "start" },
  center: { justifyItems: "center" },
  end: { justifyItems: "end" },
  stretch: { justifyItems: "stretch" },
});
