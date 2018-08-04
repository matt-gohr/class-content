// Require dependencies.
var generate = require("../shared/generate");

// Generate array of given length.
var length = 14;
var stuff = generate(length);
var randomValue = stuff[Math.floor(Math.random() * length)];

/*
 - Write a `for` loop that looks at each index of the array to see if it matches the random value
 - If it does match the random value display an alert box with the index of the array and the value
*/
