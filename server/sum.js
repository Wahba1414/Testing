var sum = function () {
  // As a good solution for variable number of arguments
  arguments = Object.values(arguments);

  if (!arguments.every((item) => Number.isFinite(item))) {
    throw new TypeError('Some arguments are not a number');
  }

  return arguments.reduce(function (a, b) {
    return a + b;
  }, 0);

}

// console.log(sum(1, 2, 3, 'as'));

module.exports = sum;