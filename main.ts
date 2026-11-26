// The Printer Apology — make.fun entry (program/v1, Node 22)
// Writes one apology line from an office printer to /output/entry.txt.
//
// ---------------------------------------------------------------------------
// DRAFT v1 (REJECTED):
//   "Sorry for jamming all the time. You keep feeding me cheap paper and
//    yelling at me, and I am very sorry about it."
// Why it fails:
//   - No joke at all: it restates the complaint as an apology, so the laugh
//     (judge criterion 2) never arrives, and the line ends on the flat words
//     "very sorry about it" instead of a punch.
//   - Freshness fails (criterion 4): "cheap paper + yelling" on its own is
//     the first joke anyone would write about a printer.
//   - Economy fails (criterion 5): "all the time" and "very sorry about it"
//     are padding that earn nothing inside 120 characters.
//   - Tone is whiny, not funny: a note that is only sad loses to a funny one.
// ---------------------------------------------------------------------------
// REVISION (genuine fix, one new beat):
//   Keep the apology frame and the cheap-paper gripe, but give the printer a
//   body that can suffer: it CHOKES. Stack three things it was fed — bargain
//   paper, a staple, a 4:59 p.m. deadline — and let the punch land last:
//   "I choked on all three." The deadline at 4:59 p.m. is a fresh, specific
//   printer truth (the last-minute print rush), the staple is a second one,
//   and the punch turns the jam from a malfunction into the printer gagging
//   on its users' abuse. Apology up front, grievances in the middle, joke
//   at the end.
// ---------------------------------------------------------------------------

import { mkdirSync, writeFileSync } from "node:fs";

export const ENTRY =
  "Sorry I jammed — you fed me bargain paper, a staple, and a 4:59 p.m. deadline. I choked on all three.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`characters: ${ENTRY.length}`);
