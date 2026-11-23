// News image entry for make.fun bounty "news-image-20261123".
// Copies the generated front-page image (entry.png) to /output/entry.png.
// Node 22+, standard library only, no dependencies.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = "/output";
const dest = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
console.log(`Wrote ${dest}`);
