var fs = require("fs");

function main (str, fn) {
  console.log(str);

  fn();
}

function bool (boolean, fn ) {
  if (boolean) {
    fn();
  }
}

function funky (fn, val) {
  return function () {
    return fn(val);
  }
}

fs.writeFile('aFile.txt', 'write something!', function (err) {
  if (err) throw err;
  console.log('Saved!');

}
