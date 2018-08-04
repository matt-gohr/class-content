var express = require("express");
var mysql = require("mysql");
var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "fatboy11",
  database: "bamazon"
});


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
  res.render("dog", {type: animals[0].animalType,
    pet: animals[0].pet,
    fierceness: animals[0].fierceness});

    connection.query(`SELECT * FROM products`, function(err, results) {
      if (err) throw err;
      // once you have the items, prompt the user for which they'd like to bid on
      console.log(`calling inital tabel`);
    
      for (var i = 0; i < results.length; i++) {
        table.push([results[i].id, results[i].product_name, results[i].price, results[i].stock_quantity])
      }

      console.log(table.toString());
      firstQuestion();

    });
  // console.log(animals.dog);
  // 1. Send the dog object from the animals array to the dog.handlebars file.

});


app.listen(port);
