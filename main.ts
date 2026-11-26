import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The internet in one word: "feral".
// Wild, untamed, no rules, thriving on its own — funny on first read,
// true of the whole internet rather than one site, and short enough
// to land in a single beat.
const WORD = "feral";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
console.log(WORD);
