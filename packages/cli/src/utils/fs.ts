import fs from "node:fs";
import path from "node:path";

export const findRepoRoot = (startDir: string = process.cwd()): string => {
  let dir = startDir;

  while (true) {
    const workspace = path.join(dir, "pnpm-workspace.yaml");
    const pkgJson = path.join(dir, "package.json");

    const hasWorkspace = fs.existsSync(workspace);
    const hasPkgJson = fs.existsSync(pkgJson);

    if (hasWorkspace && hasPkgJson) {
      return dir;
    }

    const parent = path.dirname(dir);

    if (parent === dir) {
      throw new Error(
        "Could not find workspace root (pnpm-workspace.yaml and package.json)",
      );
    }

    dir = parent;
  }
};

export const ensureDirExists = (dir: string): void => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

export const writeFileIfNotExists = (
  filePath: string,
  contents: string,
): void => {
  if (fs.existsSync(filePath)) {
    return;
  }

  fs.writeFileSync(filePath, contents, { encoding: "utf-8" });
};
