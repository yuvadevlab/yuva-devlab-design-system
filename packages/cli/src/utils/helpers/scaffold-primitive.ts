import path from "node:path";
import { ensureDirExists, writeFileIfNotExists } from "../fs";
import chalk from "chalk";
import { primitiveTemplates } from "../templates";

export const scaffoldPrimitive = (
  uiRoot: string,
  kebab: string,
  pascal: string
) => {
  const primitiveDir = path.join(uiRoot, kebab);
  const templates = primitiveTemplates(pascal);
  ensureDirExists(primitiveDir);

  const primitiveFile = path.join(primitiveDir, `${kebab}.primitive.tsx`);
  const indexFile = path.join(primitiveDir, "index.ts");

  writeFileIfNotExists(primitiveFile, templates.component);

  writeFileIfNotExists(indexFile, templates.index);

  console.log(
    `✅ Created primitive ${chalk.cyan(
      `${pascal}Primitive`
    )} in ${chalk.gray(`packages/primitives/src/${kebab}`)}`
  );
};
