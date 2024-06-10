const analyzeArray = (arr) => {
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;
  let length = arr.length;
  arr.forEach((num) => {
    sum += num;
    if (num < min) {
      min = num;
    }

    if (num > max) {
      max = num;
    }
  });
  return {
    average: sum / length,
    min: min,
    max: max,
    length: length,
  };
};

module.exports = analyzeArray;
