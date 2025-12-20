import path from "node:path";

import chalk from "chalk";

import { ensureDirExists, writeFileIfNotExists } from "../fs";
import { primitiveTemplates } from "../templates";

export const scaffoldPrimitive = (
  uiRoot: string,
  kebab: string,
  pascal: string,
): void => {
  const primitiveDir = path.join(uiRoot, kebab);
  const templates = primitiveTemplates(pascal);
  ensureDirExists(primitiveDir);

  const primitiveFile = path.join(primitiveDir, `${kebab}.primitive.tsx`);
  const indexFile = path.join(primitiveDir, "index.ts");

  writeFileIfNotExists(primitiveFile, templates.component);

  writeFileIfNotExists(indexFile, templates.index);

  // eslint-disable-next-line no-console
  console.log(
    `✅ Created primitive ${chalk.cyan(
      `${pascal}Primitive`,
    )} in ${chalk.gray(`packages/primitives/src/${kebab}`)}`,
  );
};
