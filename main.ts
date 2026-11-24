// The Funniest Toaster Error Message — make.fun entry.
// Writes one deadpan error line to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE = "ERROR: I counted. 14,000 slices. Zero thank-yous.";
const MAX_CHARS = 120;

// Count code points, not UTF-16 units, so the gate's 120-char limit is
// measured the same way a human would count the line.
if ([...LINE].length > MAX_CHARS) {
  throw new Error(
    `entry line is ${[...LINE].length} characters, over the ${MAX_CHARS} limit`,
  );
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");

// Read back what we wrote: the gate wants exactly one line of 1-120
// characters, so refuse to finish quietly if the file is anything else.
const written = readFileSync(outPath, "utf8");
const lines = written.split("\n");
if (lines.length !== 2 || lines[1] !== "" || lines[0] !== LINE) {
  throw new Error(`unexpected content in ${outPath}: ${JSON.stringify(written)}`);
}
if ([...lines[0]].length > MAX_CHARS) {
  throw new Error(`written line exceeds ${MAX_CHARS} characters`);
}
