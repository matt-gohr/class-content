// Using the tools and techniques you learned so far,
// you will scrape a website of your choice, then place the data
// in a MongoDB database. Be sure to make the database and collection
// before running this exercise.

// Consult the assignment files from earlier in class
// if you need a refresher on Cheerio.

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function (req, res) {
  res.send("Hello world");
});

// TODO: make two more routes

// Route 1
// =======
// This route will retrieve all of the data
// from the scrapedData collection as a json (this will be populated
// by the data you scrape using the next route)
app.get("/all", (req, res) => {
  db.scrapedData.find({}, (err, found) => {
    res.json(found);
  });
});
// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
// TIP: Think back to how you pushed website data
// into an empty array in the last class. How do you
// push it into a MongoDB collection instead?

app.get("/scrape", function (req, res) {
  request("http://www.awwwards.com/websites/clean/", function (
    error,
    response,
    html
  ) {
    // Load the HTML into cheerio
    var $ = cheerio.load(html);

    // Make an empty array for saving our scraped info
    var results = [];

    // With cheerio, look at each award-winning site, enclosed in "figure" tags with the class name "site"
    $("figure.rollover").each(function (i, element) {
      /* Cheerio's find method will "find" the first matching child element in a parent.
       *    We start at the current element, then "find" its first child a-tag.
       *    Then, we "find" the lone child img-tag in that a-tag.
       *    Then, .attr grabs the imgs srcset value.
       *    The srcset value is used instead of src in this case because of how they're displaying the images
       *    Visit the website and inspect the DOM if there's any confusion
       */
      var imgLink = $(element)
        .find("a")
        .find("img")
        .attr("data-srcset")
        .split(",")[0]
        .split(" ")[0];

      // Push the image's URL (saved to the imgLink var) into the results array
      results.push({ link: imgLink });
      // db.scrapedData.insert({ link: imgLink }, (err, result) => {
      //   if (err) {
      //     throw err;
      //   }
      //   console.log(result);
      // });
    });
    console.log(results);
    // console.log(db.scrapedData.find({}));
    db.scrapedData.insertMany(results);
    res.send("scraped");
  });
});

// Listen on port 3000
app.listen(3000, function () {
  console.log("App running on port 3000!");
});
