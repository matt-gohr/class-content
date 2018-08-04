var val1 = parseFloat(process.argv[2]);
var val2 = parseFloat(process.argv[3])


if (process.argv[2] === process.argv[3]) {
  console.log(true);
}else {
  console.log('false');
}

var remain1 = val1 % 7;
var remain2 = val1 % 7;
// console.log(remain1);
// console.log(remain2);

if (remain1 === 0 && remain2 === 0) {
  console.log(true);
} else {
  console.log('false');
}
