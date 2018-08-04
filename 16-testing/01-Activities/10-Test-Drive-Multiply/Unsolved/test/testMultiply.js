var multiply = require("../src/multiply.js");
var expect = require("chai").expect;

describe("Multiply",function(){
    it("should return the product of a couple of numbers",function(){
      expect(multiply(2,2)).to.equal(4);
    });
});
