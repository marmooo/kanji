import { TextLineStream } from "https://deno.land/std/streams/mod.ts";
import { JISCode, Kanji } from "./src/mod.js";

// https://www.unicode.org/Public/UCD/latest/ucd/Unihan.zip
async function build(keyword, codeDB) {
  let result = "";
  const dict = {};
  const file = await Deno.open("Unihan/Unihan_IRGSources.txt");
  const lineStream = file.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream());
  for await (const line of lineStream) {
    if (!line) continue;
    if (line.startsWith("#")) continue;
    const [codeStr, key, value] = line.split("\t");
    if (key != "kTotalStrokes") continue;
    const code = Number("0x" + codeStr.slice(2));
    const kanji = String.fromCodePoint(code);
    if (kanji in codeDB.dict === false) continue;
    const strokes = Number(value.split(" ").at(-1));
    if (strokes in dict) {
      dict[strokes] += kanji;
    } else {
      dict[strokes] = kanji;
    }
  }
  const maxStrokes = Math.max(...Array.from(Object.keys(dict)));
  const arr = new Array(maxStrokes);
  for (let i = 0; i <= maxStrokes; i++) {
    const name = `${keyword}UnihanStrokes${i}`;
    if (i in dict) {
      arr[i] = Array.from(dict[i]).sort().join("");
      result += `export const ${name} = Array.from("${dict[i]}");\n`;
    } else {
      arr[i] = [];
      result += `export const ${name} = [];\n`;
    }
  }
  const arrayString = [...Array(maxStrokes + 1)]
    .map((_, i) => `${keyword}UnihanStrokes${i}`).join(",");
  result += `export const ${keyword}UnihanStrokes = [${arrayString}];`;
  const fileName = `./src/${keyword.toLowerCase()}-unihan-strokes.js`;
  Deno.writeTextFileSync(fileName, result);
}

async function buildUnihan() {
  let result = "";
  const dict = {};
  const file = await Deno.open("Unihan/Unihan_IRGSources.txt");
  const lineStream = file.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream());
  for await (const line of lineStream) {
    if (!line) continue;
    if (line.startsWith("#")) continue;
    const [codeStr, key, value] = line.split("\t");
    if (key != "kTotalStrokes") continue;
    const code = Number("0x" + codeStr.slice(2));
    const kanji = String.fromCodePoint(code);
    const strokes = Number(value.split(" ").at(-1));
    if (strokes in dict) {
      dict[strokes] += kanji;
    } else {
      dict[strokes] = kanji;
    }
  }
  const maxStrokes = Math.max(...Array.from(Object.keys(dict)));
  const arr = new Array(maxStrokes);
  for (let i = 0; i <= maxStrokes; i++) {
    const name = `UnihanStrokes${i}`;
    if (i in dict) {
      arr[i] = Array.from(dict[i]).sort().join("");
      result += `export const ${name} = Array.from("${dict[i]}");\n`;
    } else {
      arr[i] = [];
      result += `export const ${name} = [];\n`;
    }
  }
  const arrayString = [...Array(maxStrokes + 1)]
    .map((_, i) => `UnihanStrokes${i}`).join(",");
  result += `export const UnihanStrokes = [${arrayString}];`;
  const fileName = `./src/unihan-strokes.js`;
  Deno.writeTextFileSync(fileName, result);
}

function range(start, end) {
  const list = Array(end - start);
  for (let i = 0; i < end - start; i++) {
    list[i] = String.fromCodePoint(start + i);
  }
  return list;
}

const Unicode1 = [range(19968, 40870)];
await build("Unicode1", new Kanji(Unicode1));
await build("JIS4", new Kanji(JISCode));
await buildUnihan();
