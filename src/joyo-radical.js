import { Kanji } from "./kanji.js";
import { Joyo } from "./jinmei.js";
import { Unicode1Radical } from "./unicode1-radical.js";

const joyo = new Kanji([Joyo]);
export const JoyoRadical = structuredClone(Unicode1Radical);
JoyoRadical.filter((list, grade) => {
  JoyoRadical[grade] = list.filter((kanji) => joyo.getGrade(kanji) >= 0);
});
JoyoRadical[29].push("𠮟");
