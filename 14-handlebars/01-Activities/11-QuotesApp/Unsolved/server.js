var express = require("express");
var sql = require('mysql');
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fatboy11",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Express and MySQL code should go here.

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});

app.get("/show-all", function (req, res) {
  connection.query(`SELECT * FROM quotes`, function (err, results) {
    if (err) throw err;
    console.log(results);
    res.render("index", {quotes: results});

  } )
  // res.render("in")
})
app.get("/id:", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.
  console.log(req.parse.id);
  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
  // res.render("index", {animals: animals});

});
