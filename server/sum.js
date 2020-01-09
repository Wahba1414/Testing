var sum = function () {
  arguments = Object.values(arguments);

  if (!arguments.every((item) => Number.isFinite(item))) {
    throw new TypeError('Some argument is not a number');
  }

  return arguments.reduce(function (a, b) {
    return a + b;
  }, 0);

}

// console.log(sum(1, 2, 3, 'as'));

module.exports = sum;