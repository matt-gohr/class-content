function digitalPal(hungry, sleepy, bored, age) {
  this.hungry = hungry;
  this.sleepy = sleepy;
  this.bored = bored;
  this.age = parseInt(age);

  //is alive
  this.feed = function() {
    if (hungry) {
      console.log('that was delicious!');
    } else {
      console.log('no thanks, i\'m full!');
    };
  };

  // The second method is "sleep()" - If sleepy is true, print "Zzzzzzzz", set
  //   sleepy to false, then set bored to true, and then run increaseAge(). If
  //   sleepy is false, print "No way! I'm not tired."
  //Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
  this.sleep = function() {
    if (sleepy === true) {
      console.log('Zzzzzz');
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    } else {
      console.log('No way!');
    };
  };

  this.printStats = function() {
    for (var propt in this) {
      console.log(this[propt]);
    }
    //console.log('hey!');
  };
  this.play = function() {
    if (this.bored === true) {
      console.log("Yay! Let's play");
      this.bored = false;
      this.hungry = true;
    } else {
      console.log("Not right now. Later?");
    }
  }

  // - The fourth method is "increaseAge()" - This method is called by the sleep()
  // method when the DigitalPal goes to sleep and increases the DigitalPal's age
  // by one while also printing "Happy Birthday to me! I am "+age+" old!"

  this.increaseAge = function() {
    this.age++;
    console.log('Happy Birthday to me!');
  }

}

var dog = new digitalPal(true, true, false, 45);
dog.outside = false;
dog.bark = function() {
  console.log('woof woof!');
}

dog.bark();

dog.sleep();
console.log(dog.age);
