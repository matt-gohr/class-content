var inquirer = require('inquirer');
var NodeGeocoder = require('node-geocoder');

var apiKey = 'AIzaSyBiXS_31ZvXlesW_mfN1lxQs9RfRGtk5EQ';

var options = {
  provider: 'google',
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: apiKey, // for Mapquest, OpenCage, Google Premier
};

var geocoder = NodeGeocoder(options);

inquirer.prompt([
  { "type": "input", "message": "Where?", "name": "where" },
  { "type": "confirm", "message": "REALLY???", "name": "really" }
]).then(function(response) {

  console.log(response.where);

  geocoder.geocode(response.where, function(err, data) {
    console.log(JSON.stringify(data, null, 2));
  });
});
