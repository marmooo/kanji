import { assertEquals } from "https://deno.land/std/assert/mod.ts";
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

Deno.test("JIS code check", () => {
  const jisCode = new Kanji(JISCode);
  JISCode.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, jisCode.getGrade(kanji));
    });
  });
});
Deno.test("Jinmei check", () => {
  const jinmei = new Kanji(Jinmei);
  Jinmei.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, jinmei.getGrade(kanji));
    });
  });
});
Deno.test("JKAT check", () => {
  const jkat = new Kanji(JKAT);
  JKAT.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, jkat.getGrade(kanji));
    });
  });
});
Deno.test("Joyo strokes check", () => {
  const strokes = new Kanji(JoyoStrokes);
  JoyoStrokes.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, strokes.getGrade(kanji));
    });
  });
});
Deno.test("Joyo radical check", () => {
  const radicals = new Kanji(JoyoRadical);
  JoyoRadical.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, radicals.getGrade(kanji));
    });
  });
});
Deno.test("Joyo radical strokes check", () => {
  const strokes = new Kanji(JoyoRadicalStrokes);
  JoyoRadicalStrokes.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, strokes.getGrade(kanji));
    });
  });
});
Deno.test("Unicode check", () => {
  const unicode = new Kanji(Unicode);
  Unicode.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, unicode.getGrade(kanji));
    });
  });
});
Deno.test("Unicode chart check", () => {
  const unicodeChart = new Kanji(UnicodeChart);
  UnicodeChart.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, unicodeChart.getGrade(kanji));
    });
  });
});
Deno.test("Unicode radical check", () => {
  const radicals = new Kanji(UnicodeRadical);
  UnicodeRadical.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, radicals.getGrade(kanji));
    });
  });
});
Deno.test("Unicode radical strokes check", () => {
  const strokes = new Kanji(UnicodeRadicalStrokes);
  UnicodeRadicalStrokes.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, strokes.getGrade(kanji));
    });
  });
});
Deno.test("Unicode strokes check", () => {
  const strokes = new Kanji(UnicodeStrokes);
  UnicodeStrokes.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, strokes.getGrade(kanji));
    });
  });
});
