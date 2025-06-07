import { TextLineStream } from "@std/streams";

// https://www.unicode.org/charts/PDF/U3400.pdf
// https://www.unicode.org/charts/PDF/U4E00.pdf
// https://www.unicode.org/charts/PDF/UF900.pdf
// https://www.unicode.org/charts/PDF/U20000.pdf
// https://www.unicode.org/charts/PDF/U2A700.pdf
// https://www.unicode.org/charts/PDF/U2B820.pdf
// https://www.unicode.org/charts/PDF/U2CEB0.pdf
// https://www.unicode.org/charts/PDF/U2EBF0.pdf
// https://www.unicode.org/charts/PDF/U2F800.pdf
// https://www.unicode.org/charts/PDF/U30000.pdf
// https://www.unicode.org/charts/PDF/U31350.pdf
// https://www.unicode.org/Public/UCD/latest/ucd/Unihan.zip
// https://www.unicode.org/reports/tr38/index.html#kTotalStrokes
// https://www.unicode.org/reports/tr38/index.html#kRSUnicode
async function build() {
  const radicalDB = new Array(214);
  for (let i = 0; i < radicalDB.length; i++) {
    radicalDB[i] = "";
  }
  const strokesDB = {};
  const file = await Deno.open("Unihan/Unihan_IRGSources.txt");
  const lineStream = file.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream());
  for await (const line of lineStream) {
    if (!line) continue;
    if (line.startsWith("#")) continue;
    const [codeStr, key, value] = line.split("\t");
    switch (key) {
      case "kTotalStrokes": {
        const code = Number("0x" + codeStr.slice(2));
        const kanji = String.fromCodePoint(code);
        const strokesList = value.split(" ").map((x) => Number(x));
        if (value.includes(" ")) console.log(line, strokesList);
        for (let i = 0; i < strokesList.length; i++) {
          const strokes = strokesList[i];
          if (strokes in strokesDB) {
            strokesDB[strokes] += kanji;
          } else {
            strokesDB[strokes] = kanji;
          }
        }
        break;
      }
      case "kRSUnicode": {
        const code = Number("0x" + codeStr.slice(2));
        const kanji = String.fromCodePoint(code);
        const radicalArray = value.split(" ")
          .map((str) => Number(str.split(".")[0].replace(/'/g, "")) - 1);
        const radicalList = Array.from(new Set(radicalArray));
        if (value.includes(" ")) console.log(line, radicalList);
        for (let i = 0; i < radicalList.length; i++) {
          const radical = radicalList[i];
          if (radical in radicalDB) {
            radicalDB[radical] += kanji;
          } else {
            radicalDB[radical] = kanji;
          }
        }
        break;
      }
    }
  }
  buildRadical(radicalDB);
  buildStrokes(strokesDB);
}

function buildRadical(radicalDB) {
  let result = "";
  for (let i = 0; i < radicalDB.length; i++) {
    const name = `UnicodeRadical${i}`;
    result += `export const ${name} = Array.from("${radicalDB[i]}");\n`;
  }
  const arrayString = radicalDB.map((_, i) => `UnicodeRadical${i}`).join(",");
  result += `export const UnicodeRadical = [${arrayString}];`;
  Deno.writeTextFileSync("src/unicode-radical.js", result);
}

function buildStrokes(strokesDB) {
  let result = "";
  const strokes = Array.from(Object.keys(strokesDB))
    .filter((x) => x !== "undefined").map((x) => Number(x));
  const maxStrokes = Math.max(...strokes);
  const arr = new Array(maxStrokes);
  for (let i = 0; i <= maxStrokes; i++) {
    const name = `UnicodeStrokes${i}`;
    if (i in strokesDB) {
      arr[i] = Array.from(strokesDB[i]).sort().join("");
      result += `export const ${name} = Array.from("${strokesDB[i]}");\n`;
    } else {
      arr[i] = [];
      result += `export const ${name} = [];\n`;
    }
  }
  const arrayString = [...Array(maxStrokes + 1)]
    .map((_, i) => `UnicodeStrokes${i}`).join(",");
  result += `export const UnicodeStrokes = [${arrayString}];`;
  Deno.writeTextFileSync("src/unicode-strokes.js", result);
}

await build();
