function calculateMatrixSum(matrix) {
    let sum = 0;
    for (let index = 0; index < matrix.length; index++)
      for (let index_ = 0; index_ < matrix[index].length; index_++)
        sum += matrix[index][index_];
    return sum;
  }