const ROMAN_NUMERAL = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
const solution = (number) => {
  let result = "";
  for (const currentValue in ROMAN_NUMERAL) {
    while (number >= ROMAN_NUMERAL[currentValue]) {
      result += currentValue;
      number -= ROMAN_NUMERAL[currentValue];
    }
  }
  return result;
};
