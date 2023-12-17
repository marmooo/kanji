import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import {
  Jinmei,
  JIS4UnihanStrokes,
  JISCode,
  JKAT,
  JoyoRadical,
  JoyoRadicalStrokes,
  JoyoStrokes,
  Kanji,
  Unicode,
  Unicode1Radical,
  Unicode1RadicalStrokes,
  Unicode1UnihanStrokes,
  UnihanStrokes,
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
Deno.test("Unicode1 radical check", () => {
  const radicals = new Kanji(Unicode1Radical);
  Unicode1Radical.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, radicals.getGrade(kanji));
    });
  });
});
Deno.test("Unicode1 radical strokes check", () => {
  const strokes = new Kanji(Unicode1RadicalStrokes);
  Unicode1RadicalStrokes.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, strokes.getGrade(kanji));
    });
  });
});
Deno.test("Unicode1 Unihan strokes check", () => {
  const strokes = new Kanji(Unicode1UnihanStrokes);
  Unicode1UnihanStrokes.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, strokes.getGrade(kanji));
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
Deno.test("JIS4 Unihan strokes check", () => {
  const strokes = new Kanji(JIS4UnihanStrokes);
  JIS4UnihanStrokes.forEach((list, grade) => {
    list.forEach((kanji) => {
      assertEquals(grade, strokes.getGrade(kanji));
    });
  });
});
Deno.test("Unihan strokes check", () => {
  const strokes = new Kanji(UnihanStrokes);
  UnihanStrokes.forEach((list, grade) => {
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
