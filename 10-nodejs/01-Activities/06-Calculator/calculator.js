var arith = process.argv[2];
var num1 = parseFloat(process.argv[3]);
var num2 = parseFloat(process.argv[4]);

if (arith === 'subtract') {
  console.log(num1 - num2);
} else if (arith === 'add') {
  console.log(num1 + num2)
} else if (arith === 'multiply') {
  console.log(num1 * num2)
} else if (arith === 'divide') {
  console.log(num1 / num2)
} else if (arith === 'remainder') {
  console.log(num1 % num2)
} else {
  console.log('try again playa');
}
