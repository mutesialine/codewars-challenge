const calculateAverage = (numbers) => {
  return numbers.reduce(
    (average, number) => average + number / numbers.length,
    0
  );
};
