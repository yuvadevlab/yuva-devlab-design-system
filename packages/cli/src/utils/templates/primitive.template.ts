import { primitiveIndexTemplate } from "./index.template";

const primitiveComponentTemplate = (pascal: string): string => {
  return `
import React from "react";

import type { ${pascal}PrimitiveProps } from "./${pascal.toLowerCase()}.primitive.types";

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

const primitiveTypeTemplate = (pascal: string): string => {
  return `
import React from "react";

export interface ${pascal}PrimitiveProps
  extends React.HTMLAttributes<HTMLDivElement> {
  // add primitive-specific props here
}
`;
};

export const primitiveTemplates = (
  pascal: string,
  kebab: string,
): Record<string, string> => {
  return {
    component: primitiveComponentTemplate(pascal),
    type: primitiveTypeTemplate(pascal),
    index: primitiveIndexTemplate(kebab),
  };
};
