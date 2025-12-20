import { style, styleVariants } from "@vanilla-extract/css";
import { spacing } from "@yuva-devlab/tokens";

export const base = style({
  display: "flex",
});

export const direction = styleVariants({
  row: { flexDirection: "row" },
  column: { flexDirection: "column" },
  rowReverse: { flexDirection: "row-reverse" },
  columnReverse: { flexDirection: "column-reverse" },
});

export const align = styleVariants({
  start: { alignItems: "flex-start" },
  center: { alignItems: "center" },
  end: { alignItems: "flex-end" },
  baseline: { alignItems: "baseline" },
  stretch: { alignItems: "stretch" },
});

export const justify = styleVariants({
  start: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
  between: { justifyContent: "space-between" },
  around: { justifyContent: "space-around" },
  evenly: { justifyContent: "space-evenly" },
});

export const wrap = styleVariants({
  nowrap: { flexWrap: "nowrap" },
  wrap: { flexWrap: "wrap" },
  wrapReverse: { flexWrap: "wrap-reverse" },
});

export const gap = styleVariants(spacing, (val) => ({ gap: val }));
