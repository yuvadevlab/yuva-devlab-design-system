export interface TypographyPrimitiveProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  asChild?: boolean;
  as?: React.ElementType;
}
