export class Kanji {
  constructor(list) {
    this.list = list;
    this.dict = this.setDict(this.list);
  }

  setDict(list) {
    const dict = {};
    for (let grade = 0; grade < list.length; grade++) {
      list[grade].forEach((kanji) => {
        dict[kanji] = grade;
      });
    }
    return dict;
  }

  getGrade(word) {
    const grades = Array.from(word).map((kanji) => {
      const grade = this.dict[kanji];
      return grade ?? -1;
    });
    return Math.max(...grades);
  }
}
