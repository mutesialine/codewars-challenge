const VOWELS_REGEX = /[euaio]/gi;

function reverseVowels(string) {
  const allVowels = string.match(VOWELS_REGEX);
  if (!allVowels) {
    return string;
  }

  const reversedVowels = allVowels.reverse();
  let result = "";
  let vowelIndex = 0;

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter.match(VOWELS_REGEX)) {
      result += reversedVowels[vowelIndex];
      vowelIndex++;
    } else {
      result += letter;
    }
  }

  return result;
}
