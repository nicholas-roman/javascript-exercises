const add = function(n1, n2) {
	return n1 + n2
};

const subtract = function(n1, n2) {
	return n1 - n2
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1)
};

const power = function(n1, n2) {
  res = 1
	for (let i=0; i < n2; i++) {
    res *= n1
  }
  return res
};

const factorial = function(n) {

  if (n === 0) {
    return 1
  }

  multiplier = n - 1
  while (multiplier > 0) {
    n *= multiplier
    multiplier -= 1
  }
  return n
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
