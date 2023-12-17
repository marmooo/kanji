# @marmooo/kanji

Get various grade information about kanji.

## Usage

```
import { Kanji, JKAT } from "@marmooo/kanji";

const kanji = new Kanji(list);
const jkat = new Kanji(JKAT); // 教育指導要領 / 日本漢字能力検定
jkat.getGrade("学校");   // --> 0
jkat.getGrade("漢");     // --> 2
jkat.getGrade("おたま"); // --> -1
```

### Supported list

- `JISCode`: JIS 漢字コード (第 1 水準〜第 4 水準)
- `Jinmei`: 人名用漢字 (常用漢字, 常用漢字の異体字, 人名用漢字)
- `JKAT`: 教育指導要領 / 日本漢字能力検定 (10級〜1級)
- `Unicode1Radical`: Unicode 1.1 の康熙字典 214 部首コード
- `Unicode1RadicalStrokes`: Unicode 1.1 の康熙字典 214 部首の画数データ
- `Unicode1UnihanStrokes`: Unicode 1.1 の Unihan_IRGSources.txt
  に基づく画数データ
- `JoyoRadical`: 常用漢字の康熙字典 214 部首コード
- `JoyoRadicalStrokes`: 常用漢字の康熙字典 214 部首の画数データ
- `JoyoStrokes`: 常用漢字の画数データ
- `JIS4UnihanStrokes`: JIS 第 4 水準の Unihan_IRGSources.txt に基づく画数データ
- `UnihanStrokes`: Unihan_IRGSources.txt に基づく画数データ
- `Unicode`: CJK 統合漢字 (URO〜Ext.I)
- `UnicodeChart`: CJK 統合漢字 (URO〜Ext.I)

## License

MIT
