// Initialize Firebase
var config = {
  apiKey: "AIzaSyAIWrc7C-g6Zcd1P7yCIOBLjktV7ATU6q8",
  authDomain: "first-project-3fa4f.firebaseapp.com",
  databaseURL: "https://first-project-3fa4f.firebaseio.com",
  projectId: "first-project-3fa4f",
  storageBucket: "first-project-3fa4f.appspot.com",
  messagingSenderId: "128232668232"
};
firebase.initializeApp(config);

// Variables
// ================================================================================

// Get a reference to the database service
var database = firebase.database();

// Capture Button Click
$("#add-employee-btn").on("click", function() {
  // Don't refresh the page!
  event.preventDefault();
  console.log('pushed to the database');

  // YOUR TASK!!!
  var name = $("#employee-name-input").val().trim();
  var role = $("#role-input").val().trim();
  var startData = moment($("#start-input").val().trim(), "MM/DD/YY").format('X');
  var rate = $("#rate-input").val().trim();

  // Code in the logic for storing and retrieving the most recent user.
  var newEmp = {
    'name': name,
    'role': role,
    'startDate': startData,
    'rate': rate
  };

  // Don't forget to handle the "initial load"

  database.ref().push(newEmp);

});




//pull from database
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
      console.log(childSnapshot.val().name);
      console.log(prevChildKey);
      console.log("somthing in there");

      var empName = childSnapshot.val().name;
      var empRate = childSnapshot.val().rate;
      var empRole = childSnapshot.val().role;
      var empStartDate = childSnapshot.val().startDate;

      $(".employee-name-table").append(empName);
      $(".employee-role-table").append(empRate);
      $(".employee-start-table").append(empRole);
      $(".employee-months-table").append(empStartDate);