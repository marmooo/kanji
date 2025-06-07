import { Kanji } from "./kanji.js";
import { Joyo } from "./jinmei.js";
import { UnicodeRadicalStrokes } from "./unicode-radical-strokes.js";

const joyo = new Kanji([Joyo]);
export const JoyoRadicalStrokes = structuredClone(UnicodeRadicalStrokes);
for (let grade = 0; grade < JoyoRadicalStrokes.length; grade++) {
  const list = JoyoRadicalStrokes[grade];
  const filtered = [];
  for (let i = 0; i < list.length; i++) {
    const kanji = list[i];
    if (joyo.dict[kanji]) filtered.push(kanji);
  }
  JoyoRadicalStrokes[grade] = filtered;
}
