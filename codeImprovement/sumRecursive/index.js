const sumRecursive = (array, index = 0) => {
    if (index === array.length) {
      return 0;
    }
    return array[index] + sumRecursive(array, index + 1);
  };
