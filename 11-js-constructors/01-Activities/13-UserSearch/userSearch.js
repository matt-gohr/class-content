// Here we include the weather-js so we can use it in our Node application.
var weather = require("weather-js");

function UserSearch (name, location) {
  this.name = name;
  this.location = location;
  this.date = Date.now();

  this.getWeather = function () {
    weatherCall(this.location);
    console.log('call weather');
  }
}

function weatherCall (loc) {
  // Then we use the package to search for the weather at a location
  weather.find({ search: loc, degreeType: "F" }, function(err, result) {

    // If there is an error log it.
    if (err) {
      console.log(err);
    }

    // If there is no error... then print out the weather data.
    // We use JSON.stringify to print the data in string format.
    // We use the JSON.stringify argument of "2" to make the format pretty.
    // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
    console.log(JSON.stringify(result, null, 2));
    console.log(result[0].current.temperature);

  });
}

var newSearch = new UserSearch(process.argv[2], process.argv[3]);

console.log('this comment');
newSearch.getWeather();
