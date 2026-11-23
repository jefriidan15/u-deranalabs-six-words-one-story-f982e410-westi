// Six Words, One Story — make.fun entry
// Race: u-deranalabs-six-words-one-story-f982e410
//
// The entry is a single six-word story. This program writes that one
// text to /output/entry.txt and nothing else. No network, no arguments,
// no dependencies beyond Node's built-in fs module.

import fs from "node:fs";

// The story — written for this race, exactly six words:
//   Grandmother's(1) last(2) recipe(3) died(4) with(5) her(6).
// A whole life of cooking, a heritage carried only in her hands,
// ends the day she does. What the dish was, who mourns it, and
// whether anyone ever tried to learn it are left for the reader.
const STORY = "Grandmother's last recipe died with her.";

if (STORY !== STORY.trim()) {
  throw new Error("rule: no-leading-or-trailing-whitespace — story must not start or end with whitespace");
}
if (/\s{2,}/.test(STORY)) {
  throw new Error("rule: no-double-spaces — story must not contain consecutive whitespace");
}
const words = STORY.split(" ");
if (words.length !== 6) {
  throw new Error(`rule: exactly-6-words — story must be exactly 6 words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`rule: 1-60-characters — story must be 1-60 characters, got ${STORY.length}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", STORY);
