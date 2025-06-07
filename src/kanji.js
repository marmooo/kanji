export class Kanji {
  constructor(list) {
    this.list = list;
    this.dict = this.setDict(this.list);
  }

  setDict(list) {
    const dict = {};
    for (let grade = 0; grade < list.length; grade++) {
      const kanjis = list[grade];
      for (let i = 0; i < kanjis.length; i++) {
        const kanji = kanjis[i];
        if (dict[kanji]) {
          dict[kanji].push(grade);
        } else {
          dict[kanji] = [grade];
        }
      }
    }
    return dict;
  }

  getGrade(word) {
    const arr = Array.from(word);
    let max = -1;
    for (let i = 0; i < arr.length; i++) {
      const kanji = arr[i];
      const grades = this.dict[kanji];
      if (!grades) continue;
      for (let j = 0; j < grades.length; j++) {
        if (max < grades[j]) max = grades[j];
      }
    }
    return max;
  }
}
