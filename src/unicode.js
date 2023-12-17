function range(start, end) {
  const list = Array(end - start);
  for (let i = 0; i < end - start; i++) {
    list[i] = String.fromCodePoint(start + i);
  }
  return list;
}

export const URO = range(Number(0x4E00), Number(0x9FFF) + 1);
export const CI = range(Number(0xF900), Number(0xFAD9) + 1);
export const CIS = range(Number(0x2F800), Number(0x2FA1D) + 1);
export const ExtA = range(Number(0x3400), Number(0x4DBF) + 1);
export const ExtB = range(Number(0x20000), Number(0x2A6DF) + 1);
export const ExtC = range(Number(0x2A700), Number(0x2B739) + 1);
export const ExtD = range(Number(0x2B740), Number(0x2B81D) + 1);
export const ExtE = range(Number(0x2B820), Number(0x2CEA1) + 1);
export const ExtF = range(Number(0x2CEB0), Number(0x2EBE0) + 1);
export const ExtG = range(Number(0x30000), Number(0x3134A) + 1);
export const ExtH = range(Number(0x31350), Number(0x323AF) + 1);
export const ExtI = range(Number(0x2EBF0), Number(0x2EE5D) + 1);

export const Unicode = [
  URO,
  CI,
  CIS,
  ExtA,
  ExtB,
  ExtC,
  ExtD,
  ExtE,
  ExtF,
  ExtG,
  ExtH,
  ExtI,
];
