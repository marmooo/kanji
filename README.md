# @marmooo/kanji

Get various grade information about kanji.

## Usage

```
import { Kanji, JKAT } from "@marmooo/kanji";

const jkat = new Kanji(JKAT); // 教育指導要領 / 日本漢字能力検定
jkat.getGrade("学校");   // --> 0
jkat.getGrade("漢");     // --> 2
jkat.getGrade("おたま"); // --> -1
```

### Supported list

- `JISCode`: JIS 漢字コード (第 1 水準〜第 4 水準)
- `Jinmei`: 人名用漢字 (常用漢字, 常用漢字の異体字, 人名用漢字)
- `JKAT`: 教育指導要領 / 日本漢字能力検定 (10級〜1級) に基づく画数データ
- `JoyoRadical`: 常用漢字の康熙字典 214 部首コード
- `JoyoRadicalStrokes`: 常用漢字の康熙字典 214 部首の画数データ
- `JoyoStrokes`: 常用漢字の画数データ
- `Unicode`: CJK 統合漢字 (URO〜Ext.I)
- `UnicodeChart`: CJK 統合漢字 (URO〜Ext.I)
- `UnicodeRadical`: Unihan_IRGSources.txt に基づく康熙字典 214 部首コード
- `UnicodeRadicalStrokes`: Unihan_IRGSources.txt に基づく康熙字典 214
  部首の画数データ
- `UnicodeStrokes`: Unihan_IRGSources.txt に基づく画数データ

## License

MIT

## Attribution

- [Unihan Database](https://www.unicode.org/Public/UCD/latest/ucd/Unihan.zip)
