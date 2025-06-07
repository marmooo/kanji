import { Kanji } from "./kanji.js";
import { Joyo } from "./jinmei.js";
import { UnicodeRadical } from "./unicode-radical.js";

const joyo = new Kanji([Joyo]);
export const JoyoRadical = structuredClone(UnicodeRadical);
JoyoRadical.filter((list, grade) => {
  JoyoRadical[grade] = list.filter((kanji) => joyo.dict[kanji]);
});
