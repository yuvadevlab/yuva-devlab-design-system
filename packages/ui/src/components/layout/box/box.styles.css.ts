import { style, styleVariants } from "@vanilla-extract/css";
import { spacing } from "@yuva-devlab/tokens";

export const base = style({
  boxSizing: "border-box",
});

export const padding = styleVariants(spacing, (val) => ({ padding: val }));
export const paddingX = styleVariants(spacing, (val) => ({
  paddingLeft: val,
  paddingRight: val,
}));
export const paddingY = styleVariants(spacing, (val) => ({
  paddingTop: val,
  paddingBottom: val,
}));
export const paddingTop = styleVariants(spacing, (val) => ({
  paddingTop: val,
}));
export const paddingRight = styleVariants(spacing, (val) => ({
  paddingRight: val,
}));
export const paddingBottom = styleVariants(spacing, (val) => ({
  paddingBottom: val,
}));
export const paddingLeft = styleVariants(spacing, (val) => ({
  paddingLeft: val,
}));

export const margin = styleVariants(spacing, (val) => ({ margin: val }));
export const marginX = styleVariants(spacing, (val) => ({
  marginLeft: val,
  marginRight: val,
}));
export const marginY = styleVariants(spacing, (val) => ({
  marginTop: val,
  marginBottom: val,
}));
export const marginTop = styleVariants(spacing, (val) => ({ marginTop: val }));
export const marginRight = styleVariants(spacing, (val) => ({
  marginRight: val,
}));
export const marginBottom = styleVariants(spacing, (val) => ({
  marginBottom: val,
}));
export const marginLeft = styleVariants(spacing, (val) => ({
  marginLeft: val,
}));

export const display = styleVariants({
  block: { display: "block" },
  flex: { display: "flex" },
  grid: { display: "grid" },
  inline: { display: "inline" },
  inlineBlock: { display: "inline-block" },
  inlineFlex: { display: "inline-flex" },
  inlineGrid: { display: "inline-grid" },
  none: { display: "none" },
});

export const position = styleVariants({
  static: { position: "static" },
  relative: { position: "relative" },
  absolute: { position: "absolute" },
  fixed: { position: "fixed" },
  sticky: { position: "sticky" },
});

export const overflow = styleVariants({
  visible: { overflow: "visible" },
  hidden: { overflow: "hidden" },
  scroll: { overflow: "scroll" },
  auto: { overflow: "auto" },
});
