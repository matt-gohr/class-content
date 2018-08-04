// fs is a core Node package for reading and writing files
var fs = require("fs");

var action = process.argv[2];
var ammount = process.argv[3];

var bankFile = 'Unsolved/bank.txt';

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("Unsolved/bank.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(", ");

  // We will then re-display the content as an array for later use.
  // console.log(dataArr);
  var total = 0;

  switch (action) {
    case 'total':
      total1();
      break;

    case 'with':
      deposit();
      break;

    case 'deposit':
      withdraw();
      break;
  }

  function total1() {
    for (var i = 0; i < dataArr.length; i++) {
      total = total + parseFloat(dataArr[i]);
    }
    console.log(total);
  }

  function deposit() {
    fs.appendFile(bankFile, ", " + ammount, function(err) {
      console.log(err);
    })
  }

  function withdraw() {
    fs.appendFile(bankFile, ", -" + ammount, function(err) {
      console.log(err);
    })
  }
})
