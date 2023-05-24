export function romanToNumber(roman) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanArray = roman.split("");
  let result = 0;
  let prevValue = 0;
  for (let char of romanArray) {
    //all number that are corresponding to the character
    const numericValue = romanValues[char];
    console.log(numericValue);
    //check if numeric value is not greater the prevValue
    if (numericValue > prevValue) {
      result += numericValue - 2 * prevValue;
    } else {
      result += numericValue;
    }
    prevValue = numericValue;
  }
  return result;
}
