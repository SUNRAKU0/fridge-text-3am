// Fridge text entry: writes one 3am fridge text to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The fridge has seen things no crisper drawer should ever witness.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = '3am. The leftovers you hid behind the pickles are gone. I watched you eat them. Standing up. In the dark. Like a raccoon.';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line + '\n', 'utf8');
