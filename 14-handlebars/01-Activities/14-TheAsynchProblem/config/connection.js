var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fatboy11",
  database: "parties_db"
});

connection.connect(function(err, data) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  console.log(data);
});

module.exports = connection;
