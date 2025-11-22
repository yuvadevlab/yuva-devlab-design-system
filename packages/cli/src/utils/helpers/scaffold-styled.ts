import path from "node:path";
import { ensureDirExists, writeFileIfNotExists } from "../fs";
import chalk from "chalk";
import { styledTemplates } from "../templates";

export const scaffoldStyledComponent = (
  uiRoot: string,
  kebab: string,
  pascal: string
) => {
  const componentDir = path.join(uiRoot, "components", kebab);
  const templates = styledTemplates(pascal, kebab);
  ensureDirExists(componentDir);

  const componentFile = path.join(componentDir, `${kebab}.tsx`);
  const typesFile = path.join(componentDir, `${kebab}.types.ts`);
  const stylesFile = path.join(componentDir, `${kebab}.styles.ts`);
  const testFile = path.join(componentDir, `${kebab}.test.tsx`);
  const indexFile = path.join(componentDir, "index.ts");

  writeFileIfNotExists(componentFile, templates.component);

  writeFileIfNotExists(typesFile, templates.types);

  writeFileIfNotExists(stylesFile, templates.styles);

  writeFileIfNotExists(indexFile, templates.index);

  writeFileIfNotExists(testFile, templates.test);

  console.log(
    `✅ Created styled component ${chalk.cyan(pascal)} in ${chalk.gray(
      `packages/ui/src/components/${kebab}`
    )}`
  );
};
