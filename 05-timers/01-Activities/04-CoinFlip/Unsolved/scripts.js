// Coin Flip JavaScript
// These variables are declared for us.
var headsCount = 0;
var tailsCount = 0;
var wins = 0;
var losses = 0;
alert("test");

function flipThatCoin(result) {

  //  STEP ONE:

  //  Declare and initialize a variable named randomNumber to either 0 or 1. Make it random.
  var randNumber = Math.floor(Math.random() * 2)
  //  STEP TWO:

  //  If randomNumber is equal to zero then:
  if (randNumber === 0) {

    //  Find the div with an id of coin-image.
    //  Replace its html with an img tag containing this image:
    //  http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg
    $("#coin-image").html("<scr hrf='http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg'></img>")

  }

  // Else:
  else {
    $("#coin-image").html("<scr hrf='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg'></img>")

  }

  //  Find the div with an id of coin-image.
  //  Replace its html with an img tag containing this image:
  //  http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg

  //  STEP THREE:

  // If result is equal to randomNumber, do the following:
  if (result === randNumber){
    wins++;
    $("#win-lose").html("<h2>winner!</h2>")
    $("#wins").html("<h2>"+wins+"</h2>")
  }

  else{
    losses++;
    $("#win-lose").html("<h2>loser!</h2>")
    $("#wins").html("<h2>"+lossses+"</h2>")
  }
  //  Increment wins by one.
  //  Find the div with an id of win-lose. Update it with an h2 of "Winner!"
  //  Find the div with an id of wins. Update it with the value of the wins variable.

  // Else:

  //  Increment losses by one.
  //  Find the div with an id of win-lose. Update it with an h2 of "Loser!"
  //  Find the div with an id of losses. Update it with the value of the losses variable.

}

// This on click function has been completed for us.
$("#heads").on("click", function() {
  headsCount++;
  $("#heads-chosen").text(headsCount);
  $("#guess").html("<b>Heads</b>");
  flipThatCoin(0);
});

$("#tails").on("click", function() {
  headsCount++;
  $("#heads-chosen").text(headsCount);
  $("#guess").html("<b>tales</b>");
  flipThatCoin(1);
});
  //  STEP FOUR:

  //  Increment tailsCount by one.
  //  Find the span with an id of tails-chosen. Replace the html inside of the span with the tailsCount.
  //  Find the div with an id of guess. Update it with the word "Tails" bolded.
  //  Call the flipThatCoin function and pass value 1 into it.

});
