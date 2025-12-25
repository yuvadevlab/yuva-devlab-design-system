import { styledIndexTemplate } from "./index.template";

const styledComponentTemplate = (pascal: string, kebab: string): string => {
  return `
import React from "react";
import { ${pascal}Primitive } from "@yuva-devlab/primitives";
import clsx from "clsx";

import * as styles from "./${kebab}.styles.css";
import type { ${pascal}Props } from "./${kebab}.types";

export const ${pascal} = React.forwardRef<HTMLDivElement, ${pascal}Props>(
  ({ className, children, ...rest }, ref) => {
    return (
      <${pascal}Primitive
        ref={ref}
        className={clsx(styles.base, className)}
        {...rest}
      >
        {children}
      </${pascal}Primitive>
    );
  },
);

${pascal}.displayName = "${pascal}";
`;
};

const styledTypesTemplate = (pascal: string): string => {
  return `
import type { ${pascal}PrimitiveProps } from "@yuva-devlab/primitives";

export interface ${pascal}Props extends ${pascal}PrimitiveProps {
  // TODO: Add props here
}
`;
};

const styledStylesTemplate = (): string => {
  return `
import { style } from "@vanilla-extract/css";
import { colors, spacing } from "@yuva-devlab/tokens";

export const base = style({
  // TODO: Add styles here
  // padding: spacing.md,
  // backgroundColor: colors.bg.surface,
  // color: colors.text.primary,
});
`;
};

export const styledTestTemplate = (pascal: string, kebab: string): string => {
  return `
import React from "react";
import { render } from "@testing-library/react";
import { ${pascal} } from "../${kebab}";

describe("${pascal}", () => {
  it("renders without crashing", () => {
    render(<${pascal}>Hello World</${pascal}>);
  });
});
`;
};

export const styledTemplates = (
  pascal: string,
  kebab: string,
): Record<string, string> => {
  return {
    component: styledComponentTemplate(pascal, kebab),
    types: styledTypesTemplate(pascal),
    styles: styledStylesTemplate(),
    test: styledTestTemplate(pascal, kebab),
    index: styledIndexTemplate(kebab),
  };
};
