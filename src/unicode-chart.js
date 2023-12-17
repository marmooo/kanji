function range(start, end) {
  const list = Array(end - start);
  for (let i = 0; i < end - start; i++) {
    list[i] = String.fromCodePoint(start + i);
  }
  return list;
}

export const URO1 = range(Number(0x4E00), Number(0x62FF) + 1);
export const URO2 = range(Number(0x6300), Number(0x77FF) + 1);
export const URO3 = range(Number(0x7800), Number(0x8CFF) + 1);
export const URO4 = range(Number(0x8D00), Number(0x9FFF) + 1);
export const ExtA = range(Number(0x3400), Number(0x4DBF) + 1);
export const ExtB1 = range(Number(0x20000), Number(0x215FF) + 1);
export const ExtB2 = range(Number(0x21600), Number(0x230FF) + 1);
export const ExtB3 = range(Number(0x23100), Number(0x245FF) + 1);
export const ExtB4 = range(Number(0x24600), Number(0x260FF) + 1);
export const ExtB5 = range(Number(0x26100), Number(0x275FF) + 1);
export const ExtB6 = range(Number(0x27600), Number(0x290FF) + 1);
export const ExtB7 = range(Number(0x29100), Number(0x2A6DF) + 1);
export const ExtC = range(Number(0x2A700), Number(0x2B739) + 1);
export const ExtD = range(Number(0x2B740), Number(0x2B81D) + 1);
export const ExtE = range(Number(0x2B820), Number(0x2CEA1) + 1);
export const ExtF = range(Number(0x2CEB0), Number(0x2EBE0) + 1);
export const ExtG = range(Number(0x30000), Number(0x3134A) + 1);
export const ExtH = range(Number(0x31350), Number(0x323AF) + 1);
export const ExtI = range(Number(0x2EBF0), Number(0x2EE5D) + 1);

export const UnicodeChart = [
  URO1,
  URO2,
  URO3,
  URO4,
  ExtA,
  ExtB1,
  ExtB2,
  ExtB3,
  ExtB4,
  ExtB5,
  ExtB6,
  ExtB7,
  ExtC,
  ExtD,
  ExtE,
  ExtF,
  ExtG,
  ExtH,
  ExtI,
];
