// gta6-meme-x-01 entry for @boskong — "The Sick Note" (Node 22, stdlib only).
//
// The entry itself is the X post named by POST.json: a GTA 6 meme built
// around a doctor's sick note signed by the make.fun ghost. This program's
// whole job is to hand that address to the grader: it copies POST.json from
// the bot directory into the output directory, where the gate reads it.
//
// Local check, from this directory:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (err) {
  console.error(
    `Could not copy POST.json from ${botDir} to ${outputDir}: ${(err as Error).message}`
  );
  process.exit(1);
}
