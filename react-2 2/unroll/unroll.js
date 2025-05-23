function unroll(square) {
  const result = [];

  while (square.length) {
    result.push(...square.shift());

    for (let i = 0; i < square.length; i++) {
      if (square[i].length) {
        result.push(square[i].pop());
      }
    }

    if (square.length) {
      result.push(...square.pop().reverse());
    }

    for (let i = square.length - 1; i >= 0; i--) {
      if (square[i].length) {
        result.push(square[i].shift());
      }
    }
  }

  return result;
}

module.exports = unroll;
