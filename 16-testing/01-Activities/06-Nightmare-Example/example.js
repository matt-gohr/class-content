var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true,typeInterval: 2 });

nightmare
  .goto("https://google.com")
  .type("#lst-ib", "github nightmare")
  .click("#lst-ib")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
