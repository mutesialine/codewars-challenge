const VOWELS_REGEX = /[aeiou]/gi;

const reverseVowels = (string) => {
  const allVowels = string.match(VOWELS_REGEX);
  const reversedVowels = allVowels.reverse();
  let result = "";
  let vowelIndex = 0;
  if (!allVowels) {
    return string;
  }
  for (const letter of string) {
    if (VOWELS_REGEX.test(letter)) {
      result += reversedVowels[vowelIndex];
      vowelIndex++;
    } else {
      result += letter;
    }
  }

  return result;
};
