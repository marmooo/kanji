import { Kanji } from "./kanji.js";
import { Joyo } from "./jinmei.js";
import { UnicodeRadical } from "./unicode-radical.js";

const joyo = new Kanji([Joyo]);
export const JoyoRadical = structuredClone(UnicodeRadical);
for (let grade = 0; grade < JoyoRadical.length; grade++) {
  const list = JoyoRadical[grade];
  const filtered = [];
  for (let i = 0; i < list.length; i++) {
    const kanji = list[i];
    if (joyo.dict[kanji]) filtered.push(kanji);
  }
  JoyoRadical[grade] = filtered;
}
