import { Kanji } from "./kanji.js";
import { Joyo } from "./jinmei.js";
import { Unicode1RadicalStrokes } from "./unicode1-radical-strokes.js";

const joyo = new Kanji([Joyo]);
export const JoyoRadicalStrokes = JSON.parse(
  JSON.stringify(Unicode1RadicalStrokes),
);
JoyoRadicalStrokes.filter((list, grade) => {
  JoyoRadicalStrokes[grade] = list.filter((kanji) => joyo.getGrade(kanji) >= 0);
});
JoyoRadicalStrokes[3].push("𠮟");
