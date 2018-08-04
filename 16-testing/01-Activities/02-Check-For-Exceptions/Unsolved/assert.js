var assertThrows = function(func, x, y) {
  var threw = false;
  try {
    func(x, y);
  } catch (err) {
    console.log(err);
    threw = true;
  }

  // Depending on whether an error was thrown, threw is either true or false
  return threw;
};

var multiply = function(x, y) {
  // use 'typeof' keyword to check if both x and y are numbers:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  if (typeof(x) !== 'number' || typeof(y) !== 'number') {
    throw "param is not a number!"
  } else return x * y;
};

console.log(assertThrows(multiply, 3, 2));
