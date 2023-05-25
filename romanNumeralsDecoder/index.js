/**
 * Converts a Roman numeral to its decimal value.
 * @param {string} roman - The Roman numeral to convert.
 * @returns {number} - The decimal value of the Roman numeral.
 */

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
  // Array of numbers that correspond to the Roman numeral
  const arrOfNumbers = roman.split("").map((number) => romanNumeral[number]);
  // Perform the reduction to calculate the decimal value
  const result = arrOfNumbers.reduce(
    (sum, currentNumber, index, arrOfNumbers) => {
      // Check if the current number is less than the next number in the array to perform subtraction
      if (currentNumber < arrOfNumbers[index + 1]) {
        return sum - currentNumber;
      }
      return sum + currentNumber;
    },
    0
  );

  return result;
}
