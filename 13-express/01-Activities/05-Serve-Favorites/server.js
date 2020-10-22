// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
  // Capture the url the request is made to
  var path = req.url;
  console.log("path: ", path);

  // Depending on the URL, display a different HTML file.
  switch (path) {
    case "/":
      console.log("index");
      return goToPage("/index.html", req, res);

    case "/food.html":
      console.log("food");
      return goToPage(path, req, res);

    case "/movie.html":
      console.log("movie");
      return goToPage(path, req, res);

    case "/css.html":
      return goToPage(path, req, res);

    default:
      console.log("default");
      return goToPage("/index.html", req, res);
  }
}

// Starts our server
server.listen(PORT, function () {
  console.log("Server is listening on PORT: " + PORT);
});

function goToPage(url, req, res) {
  console.log("goToPage called!!!!");
  console.log("url is: " + url);
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + url, function (err, data) {
    console.log("fs called");
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
    // console.log("data is: " + data);

    if (err) {
      console.log("error message" + err);
    }
  });
}
