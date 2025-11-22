import { indexTemplate } from "./index.template";

const styledComponentTemplate = (pascal: string, kebab: string) => {
  return `
import React from "react";
import * as stylex from "@stylexjs/stylex";
import { ${pascal}Primitive } from "@yuva-devlab/primitives";
import { ${kebab}Styles } from "./${kebab}.styles";
import type { ${pascal}Props } from "./${kebab}.types";

export const ${pascal}: React.FC<${pascal}Props> = ({
  children,
  ...rest
}) => {
  const sx = stylex.props(${kebab}Styles.base);

  return (
    <${pascal}Primitive {...sx} {...rest}>
      {children}
    </${pascal}Primitive>
  );
};
`;
};

const styledTypesTemplate = (pascal: string) => {
  return `
import type { ${pascal}PrimitiveProps } from "@yuva-devlab/primitives";

export interface ${pascal}Props extends ${pascal}PrimitiveProps {
  // add styled props here
}
`;
};

const styledStylesTemplate = (pascal: string) => {
  return `
import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "@yuva-devlab/tokens";

export const ${pascal}Styles = stylex.create({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    paddingInline: spacing.md,
    paddingBlock: spacing.sm,
    borderRadius: "9999px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.borderSubtle,
    backgroundColor: colors.bgButton,
    color: colors.textPrimary,
    cursor: "pointer"
  }
});
`;
};

export const styledTestTemplate = (pascal: string, kebab: string) => {
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

export const styledTemplates = (pascal: string, kebab: string) => {
  return {
    component: styledComponentTemplate(pascal, kebab),
    types: styledTypesTemplate(pascal),
    styles: styledStylesTemplate(pascal),
    test: styledTestTemplate(pascal, kebab),
    index: indexTemplate(pascal),
  };
};
