var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "fatboy11",
  database: "music_db"
});

var tableName = 'AuctionItems'

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");

  makeItemsArr();

  inquire();

  createTable(tableName);

});

function makeItemsArr () {
  var query = connection.query(
    "LECT * FROM bids ?",
    {
      flavor: "Rocky Road",
      price: 3.0,
      quantity: 50
    },
    function(err, res) {
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
  );

}

function inquire () {
  inquirer
    .prompt([
      // Here we give the user a list to choose from.
      {
        type: "list",
        message: "Which Pokemon do you choose?",
        choices: ["Bulbasaur", "Squirtle", "Charmander"],
        name: "pokemon"
      },
      // Here we ask the user to confirm.
      {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
      }
    ])
    .then(function(inquirerResponse) {
      // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
      if (inquirerResponse.confirm) {
        console.log("\nWelcome " + inquirerResponse.username);
        console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
      }
      else {
        console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
      }
    });

}

function createTable (table) {
    var query = connection.query(
      "CREATE TABLE songs ?",
      {
        flavor: "Rocky Road",
        price: 3.0,
        quantity: 50
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        updateProduct();
      }
    );
}
