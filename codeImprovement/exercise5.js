const calculateFactorial = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  }
  let index = 2;
  while (index < number)
    return number.reduce((factorial, index) => factorial * index, 1);
  index++;
};
