// The Agent's Uh-Oh: one word an agent says when it has no idea what to do.
// The GPS voice — the sound of a machine that has lost its way mid-task.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "Recalculating";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word);
