/**
 * Converts a Roman numeral to its decimal value.
 * @param {string} roman - The Roman numeral to convert.
 * @returns {number} - The decimal value of the Roman numeral.
 */

const ROMAN_NUMERAL = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const solution = (roman) => {
  const arrayOfNumbers = [...roman].map((number) => ROMAN_NUMERAL[number]);
  // eslint-disable-next-line unicorn/no-array-reduce
  const result = arrayOfNumbers.reduce(
    (sum, currentNumber, index, arrayOfNumbers_) => {
      // Check if the current number is less than the next number in the array to perform subtraction
      if (currentNumber < arrayOfNumbers_[index + 1]) {
        return sum - currentNumber;
      }
      return sum + currentNumber;
    },
    0
  );

  return result;
};
