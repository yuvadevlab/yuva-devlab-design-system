import { indexTemplate } from "./index.template";

const primitiveComponentTemplate = (pascal: string): string => {
  return `
import React from "react";

export interface ${pascal}PrimitiveProps
  extends React.HTMLAttributes<HTMLDivElement> {
  // add primitive-specific props here
}

/**
 * Headless primitive for ${pascal}.
 */
export const ${pascal}Primitive = React.forwardRef<
  HTMLDivElement,
  ${pascal}PrimitiveProps
>(({ children, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

${pascal}Primitive.displayName = "${pascal}Primitive";
`;
};

export const primitiveTemplates = (pascal: string): Record<string, string> => {
  return {
    component: primitiveComponentTemplate(pascal),
    index: indexTemplate(pascal),
  };
};
