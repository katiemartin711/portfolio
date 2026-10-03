import { cpSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const siteDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const root = join(siteDir, "..");
const dist = join(root, "dist");

for (const name of readdirSync(dist)) {
  const dest = join(root, name);
  rmSync(dest, { recursive: true, force: true });
  cpSync(join(dist, name), dest, { recursive: true });
}

writeFileSync(join(root, ".nojekyll"), "");
console.log("Copied the production build to the repository root.");
