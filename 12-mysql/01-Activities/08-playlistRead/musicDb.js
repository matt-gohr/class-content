var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "fatboy11",
  database: "music_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
  secondQuery();
  connection.end();

});

// SELECT * FROM Customers
// WHERE Country='Germany'
// LIMIT 3;

function afterConnection() {
  connection.query("SELECT * FROM songs ", function(err, res) {
    if (err) throw err;
    console.log(res);
    // connection.end();
  });

}

function secondQuery() {
  connection.query("SELECT * FROM songs WHERE artist=?", ["matt"], function(err, res) {
    if (err) throw err;
    console.log(res);
  });
}
