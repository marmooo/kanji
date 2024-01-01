import { TextLineStream } from "https://deno.land/std/streams/mod.ts";

function initStrokesPatchDB() {
  return {
    "范": 8, // U+8303
    "骨": 10, // U+9AA8
    "𪁠": 18, // U+2A060
  };
}

function initRadicalPatchDB() {
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
  const radicals =
    "一丨丶丿乙亅二亠人儿入八冂冖冫几凵刀力勹匕匚匸十卜卩厂厶又口囗土士夂夊夕大女子宀寸小尢尸屮山巛工己巾干幺广廴廾弋弓彐彡彳心戈戶手支攴文斗斤方无日曰月木欠止歹殳毋比毛氏气水火爪父爻爿片牙牛犬玄玉瓜瓦甘生用田疋疒癶白皮皿目矛矢石示禸禾穴立竹米糸缶网羊羽老而耒耳聿肉臣自至臼舌舛舟艮色艸虍虫血行衣襾見角言谷豆豕豸貝赤走足身車辛辰辵邑酉釆里金長門阜隶隹雨靑非面革韋韭音頁風飛食首香馬骨高髟鬥鬯鬲鬼魚鳥鹵鹿麥麻黃黍黑黹黽鼎鼓鼠鼻齊齒龍龜龠";
  return {
    "㚇": radicals.indexOf("夊"), // U+3687
    "䁀": radicals.indexOf("目"), // U+4040
    "䍇": radicals.indexOf("缶"), // U+4347
    "䓕": radicals.indexOf("艸"), // U+44D5
    "䧹": radicals.indexOf("隹"), // U+49F9
    "丬": radicals.indexOf("爿"), // U+4E2C Unicode配列とは異なる
    "习": radicals.indexOf("乙"), // U+4E60
    "乸": radicals.indexOf("乙"), // U+4E78
    "亀": radicals.indexOf("乙"), // U+4E80
    "亐": radicals.indexOf("二"), // U+4E90
    "亲": radicals.indexOf("亠"), // U+4EB2
    "処": radicals.indexOf("几"), // U+51E6
    "凬": radicals.indexOf("几"), // U+51EC 康熙字典網上版では風部
    "凼": radicals.indexOf("几"), // U+51FC
    "刍": radicals.indexOf("刀"), // U+520D
    "初": radicals.indexOf("刀"), // U+521D
    "剤": radicals.indexOf("刀"), // U+5264
    "勗": radicals.indexOf("力"), // U+52D7
    "勲": radicals.indexOf("力"), // U+52F2
    "卄": radicals.indexOf("十"), // U+5344
    "卟": radicals.indexOf("卜"), // U+535F
    "卤": radicals.indexOf("卜"), // U+5364
    "卧": radicals.indexOf("卜"), // U+5367
    "卿": radicals.indexOf("卩"), // U+537F
    "厯": radicals.indexOf("厂"), // U+53AF
    "厼": radicals.indexOf("厶"), // U+53BC
    "唾": radicals.indexOf("口"), // U+553E
    "啟": radicals.indexOf("口"), // U+555F
    "営": radicals.indexOf("口"), // U+55B6
    "噕": radicals.indexOf("口"), // U+5655
    "囊": radicals.indexOf("口"), // U+56CA
    "垂": radicals.indexOf("土"), // U+5782
    "埊": radicals.indexOf("土"), // U+57CA
    "塁": radicals.indexOf("土"), // U+5841
    "墨": radicals.indexOf("土"), // U+58A8
    "夻": radicals.indexOf("大"), // U+593B
    "妛": radicals.indexOf("女"), // U+599B
    "娄": radicals.indexOf("女"), // U+5A04
    "将": radicals.indexOf("寸"), // U+5C06
    "尡": radicals.indexOf("小"), // U+5C21
    "尧": radicals.indexOf("尢"), // U+5C27
    "尭": radicals.indexOf("尢"), // U+5C2D
    "尹": radicals.indexOf("尸"), // U+5C39
    "屗": radicals.indexOf("尸"), // U+5C57
    "屘": radicals.indexOf("尸"), // U+5C58
    "巗": radicals.indexOf("山"), // U+5DD7
    "巡": radicals.indexOf("巛"), // U+5DE1
    "幂": radicals.indexOf("巾"), // U+5E42
    "彪": radicals.indexOf("彡"), // U+5F6A
    "捶": radicals.indexOf("手"), // U+6376
    "攰": radicals.indexOf("支"), // U+6530
    "敌": radicals.indexOf("攴"), // U+654C 康熙字典網上版では舌部
    "斉": radicals.indexOf("文"), // U+6589
    "昼": radicals.indexOf("日"), // U+663C
    "曱": radicals.indexOf("日"), // U+66F1
    "最": radicals.indexOf("日"), // U+6700
    "朡": radicals.indexOf("月"), // U+6721 康熙字典網上版では肉部
    "朰": radicals.indexOf("木"), // U+6730
    "欽": radicals.indexOf("欠"), // U+6B3D
    "歯": radicals.indexOf("止"), // U+6B6F
    "歶": radicals.indexOf("止"), // U+6B76
    "毗": radicals.indexOf("比"), // U+6BD7
    "氹": radicals.indexOf("水"), // U+6C39
    "氽": radicals.indexOf("水"), // U+6C3D
    "泵": radicals.indexOf("水"), // U+6CF5
    "渠": radicals.indexOf("水"), // U+6E20
    "滋": radicals.indexOf("水"), // U+6ECB
    "烾": radicals.indexOf("火"), // U+70FE
    "煛": radicals.indexOf("火"), // U+715B 康熙字典網上版では目部
    "牢": radicals.indexOf("牛"), // U+7262
    "牵": radicals.indexOf("牛"), // U+7275
    "猪": radicals.indexOf("犬"), // U+732A
    "玊": radicals.indexOf("玉"), // U+738A
    "琉": radicals.indexOf("玉"), // U+7409
    "畑": radicals.indexOf("田"), // U+7551
    "畓": radicals.indexOf("田"), // U+7553
    "畨": radicals.indexOf("田"), // U+7568
    "瘟": radicals.indexOf("疒"), // U+761F
    "癀": radicals.indexOf("疒"), // U+7640
    "着": radicals.indexOf("目"), // U+7740
    "睡": radicals.indexOf("目"), // U+7761
    "秌": radicals.indexOf("禾"), // U+79CC
    "竜": radicals.indexOf("立"), // U+7ADC
    "竟": radicals.indexOf("立"), // U+7ADF
    "章": radicals.indexOf("立"), // U+7AE0
    "翵": radicals.indexOf("羽"), // U+7FF5 康熙字典網上版では鳥部
    "耆": radicals.indexOf("老"), // U+8006
    "艰": radicals.indexOf("艮"), // U+8270
    "荆": radicals.indexOf("艸"), // U+8346
    "萬": radicals.indexOf("艸"), // U+842C
    "蒸": radicals.indexOf("艸"), // U+84B8
    "蔱": radicals.indexOf("艸"), // U+8531
    "虒": radicals.indexOf("虍"), // U+8652
    "視": radicals.indexOf("見"), // U+8996
    "贁": radicals.indexOf("貝"), // U+8D01
    "辞": radicals.indexOf("辛"), // U+8F9E
    "辮": radicals.indexOf("辛"), // U+8FAE
    "迸": radicals.indexOf("辵"), // U+8FF8
    "遷": radicals.indexOf("辵"), // U+9077
    "难": radicals.indexOf("隹"), // U+96BE
    "雐": radicals.indexOf("隹"), // U+96D0
    "靖": radicals.indexOf("靑"), // U+9756
    "靥": radicals.indexOf("面"), // U+9765
    "顈": radicals.indexOf("面"), // U+9848
    "飱": radicals.indexOf("食"), // U+98F1
    "鵤": radicals.indexOf("鳥"), // U+9D64
    "鷠": radicals.indexOf("鳥"), // U+9DE0
    "黄": radicals.indexOf("黃"), // U+9EC4
    "黙": radicals.indexOf("黑"), // U+9ED9
    "黯": radicals.indexOf("黑"), // U+9EEF
    "齐": radicals.indexOf("齊"), // U+9F50
    "龐": radicals.indexOf("龍"), // U+9F90
    "龽": radicals.indexOf("火"), // U+9FBD
    "鿂": radicals.indexOf("車"), // U+9FC2
    "着": radicals.indexOf("目"), // U+FAAA
    "靖": radicals.indexOf("靑"), // U+FAC8
    "𠁣": radicals.indexOf("丨"), // U+20063
    "𠁤": radicals.indexOf("囗"), // U+20064 Unicode配列とは異なる
    "𠂙": radicals.indexOf("丿"), // U+20099
    "𠃛": radicals.indexOf("乙"), // U+200DB
    "𠎤": radicals.indexOf("人"), // U+203A4
    "𠔻": radicals.indexOf("八"), // U+2053B
    "𠔾": radicals.indexOf("冂"), // U+2053E
    "𠕫": radicals.indexOf("冂"), // U+2056B
    "𡙶": radicals.indexOf("大"), // U+21676
    "𢆡": radicals.indexOf("干"), // U+221A1
    "𢘅": radicals.indexOf("心"), // U+22605
    "𢾣": radicals.indexOf("攴"), // U+22FA3
    "𣁛": radicals.indexOf("文"), // U+2305B
    "𣯡": radicals.indexOf("毛"), // U+23BE1
    "𤄯": radicals.indexOf("水"), // U+2412F
    "𤏲": radicals.indexOf("火"), // U+243F2
    "𤒼": radicals.indexOf("火"), // U+244BC
    "𤓰": radicals.indexOf("爪"), // U+244F0
    "𤛿": radicals.indexOf("牛"), // U+246FF
    "𤮖": radicals.indexOf("瓦"), // U+24B96
    "𥉩": radicals.indexOf("目"), // U+25269
    "𥪝": radicals.indexOf("立"), // U+25A9D
    "𥪞": radicals.indexOf("立"), // U+25A9E
    "𦑑": radicals.indexOf("羽"), // U+26451
    "𦻇": radicals.indexOf("艸"), // U+26EC7
    "𧢛": radicals.indexOf("見"), // U+2789B
    "𪁠": radicals.indexOf("鳥"), // U+2A060
    "𪇺": radicals.indexOf("鳥"), // U+2A1FA
    "𪥛": radicals.indexOf("大"), // U+2A95B
    "𪪩": radicals.indexOf("广"), // U+2AAA9
    "𪱯": radicals.indexOf("月"), // U+2AC6F
    "𪷹": radicals.indexOf("水"), // U+2ADF9
    "𪽞": radicals.indexOf("田"), // U+2AF5E
    "𪿁": radicals.indexOf("目"), // U+2AFC1
    "𫏽": radicals.indexOf("車"), // U+2B3FD
    "𫠠": radicals.indexOf("弋"), // U+2B820
    "𫡀": radicals.indexOf("一"), // U+2B840
    "𫡏": radicals.indexOf("丿"), // U+2B84F
    "𫣙": radicals.indexOf("木"), // U+2B8D9 Unicode配列とは異なる
    "𫣚": radicals.indexOf("木"), // U+2B8DA Unicode配列とは異なる
    "𫷙": radicals.indexOf("干"), // U+2BDD9
    "𬂀": radicals.indexOf("月"), // U+2C080
    "𬂙": radicals.indexOf("月"), // U+2C099
    "𬔔": radicals.indexOf("穴"), // U+2C514
    "𬺱": radicals.indexOf("一"), // U+2CEB1
    "𬼉": radicals.indexOf("丿"), // U+2CF09
    "𭅟": radicals.indexOf("匸"), // U+2D15F
    "𭠍": radicals.indexOf("手"), // U+2D80D
    "𮄿": radicals.indexOf("立"), // U+2E13F
    "𮯰": radicals.indexOf("一"), // U+2EBF0
    "𮯱": radicals.indexOf("丶"), // U+2EBF1
    "𮯲": radicals.indexOf("丿"), // U+2EBF2
    "𮯳": radicals.indexOf("亠"), // U+2EBF3
    "𮰄": radicals.indexOf("冖"), // U+2EC04
    "𮰙": radicals.indexOf("土"), // U+2EC19
    "𮶇": radicals.indexOf("网"), // U+2ED87
    "𮶍": radicals.indexOf("羽"), // U+2ED8D
    "𮶖": radicals.indexOf("自"), // U+2ED96
    "灰": radicals.indexOf("厂"), // U+2F835
    "𰌮": radicals.indexOf("子"), // U+3032E
    "𱍐": radicals.indexOf("一"), // U+31350
    "𱑖": radicals.indexOf("卜"), // U+31456
    "𱜦": radicals.indexOf("巾"), // U+31726
    "𱣨": radicals.indexOf("木"), // U+318E8
    "𱵀": radicals.indexOf("石"), // U+31D40
    "𱶿": radicals.indexOf("穴"), // U+31DBF
    "𱻢": radicals.indexOf("羽"), // U+31EE2
  };
}

// https://www.unicode.org/Public/UCD/latest/ucd/Unihan.zip
// https://www.unicode.org/reports/tr38/index.html#kTotalStrokes
// https://www.unicode.org/reports/tr38/index.html#kRSUnicode
async function build() {
  const strokesPatchDB = initStrokesPatchDB();
  const radicalPatchDB = initRadicalPatchDB();
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
        let strokes;
        if (value.includes(" ")) {
          console.log(line);
          strokes = strokesPatchDB[kanji];
          if (strokes === undefined) console.log(`error: ${codeStr}`);
        } else {
          strokes = Number(value);
        }
        if (strokes in strokesDB) {
          strokesDB[strokes] += kanji;
        } else {
          strokesDB[strokes] = kanji;
        }
        break;
      }
      case "kRSUnicode": {
        const code = Number("0x" + codeStr.slice(2));
        const kanji = String.fromCodePoint(code);
        let radical;
        if (value.includes(" ")) {
          console.log(line);
          radical = radicalPatchDB[kanji];
          if (radical === undefined) console.log(`error: ${codeStr}`);
        } else {
          radical = parseInt(value.split(".")[0]) - 1;
        }
        radicalDB[radical] += kanji;
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
  const maxStrokes = Math.max(...Array.from(Object.keys(strokesDB)));
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
