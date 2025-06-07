import { Kanji } from "./kanji.js";
import { Joyo } from "./jinmei.js";
import { UnicodeRadicalStrokes } from "./unicode-radical-strokes.js";

const joyo = new Kanji([Joyo]);
export const JoyoRadicalStrokes = JSON.parse(
  JSON.stringify(UnicodeRadicalStrokes),
);
JoyoRadicalStrokes.filter((list, grade) => {
  JoyoRadicalStrokes[grade] = list.filter((kanji) => joyo.dict[kanji]);
});
