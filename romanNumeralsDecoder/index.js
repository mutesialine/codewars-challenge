const romanNumeral = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
export function solution(roman) {
  //string roman numeral into an integer

  const romanArray = roman.split("");
  let result = 0;
  let prevValue = 0;
  for (let char of romanArray) {
    //all number that are corresponding to the character
    const numericValue = romanNumeral[char];
    //check if numeric value is  greater the prevValue
    if (numericValue > prevValue) {
      result += numericValue - 2 * prevValue;
    } else {
      result += numericValue;
    }
    prevValue = numericValue;
  }
  return result;
}
