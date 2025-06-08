import { assert, assertEquals } from "@std/assert";
import {
  Jinmei,
  JISCode,
  JKAT,
  JoyoRadical,
  JoyoRadicalStrokes,
  JoyoStrokes,
  Kanji,
  Unicode,
  UnicodeChart,
  UnicodeRadical,
  UnicodeRadicalStrokes,
  UnicodeStrokes,
} from "./mod.js";

function checkDict(arr) {
  const kanji = new Kanji(arr);
  for (let grade = 0; grade < arr.length; grade++) {
    const list = arr[grade];
    for (let i = 0; i < list.length; i++) {
      const char = list[i];
      const answers = kanji.dict[char];
      assert(answers.includes(grade));
    }
  }
}

function checkGrade(arr) {
  const kanji = new Kanji(arr);
  for (let grade = 0; grade < arr.length; grade++) {
    const list = arr[grade];
    for (let i = 0; i < list.length; i++) {
      const char = list[i];
      assertEquals(grade, kanji.getGrade(char));
    }
  }
}

Deno.test("JIS code check", () => {
  checkDict(JISCode);
  checkGrade(JISCode);
});
Deno.test("Jinmei check", () => {
  checkDict(Jinmei);
  checkGrade(Jinmei);
});
Deno.test("JKAT check", () => {
  checkDict(JKAT);
  checkGrade(JKAT);
});
Deno.test("Joyo strokes check", () => {
  checkDict(JoyoStrokes);
});
Deno.test("Joyo radical check", () => {
  checkDict(JoyoRadical);
});
Deno.test("Joyo radical strokes check", () => {
  checkDict(JoyoRadicalStrokes);
});
Deno.test("Unicode check", () => {
  checkDict(Unicode);
  checkGrade(Unicode);
});
Deno.test("Unicode chart check", () => {
  checkDict(UnicodeChart);
  checkGrade(UnicodeChart);
});
Deno.test("Unicode strokes check", () => {
  checkDict(UnicodeStrokes);
});
Deno.test("Unicode radical check", () => {
  checkDict(UnicodeRadical);
});
Deno.test("Unicode radical strokes check", () => {
  checkDict(UnicodeRadicalStrokes);
});
