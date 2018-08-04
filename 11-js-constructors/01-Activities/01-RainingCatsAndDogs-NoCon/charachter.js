function character(name, profession, gender, age, strength, hitPoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = parseInt(age);
  this.strength = strength;
  this.hitPoints = hitPoints;

  //is alive
  this.isAlive = function() {
    if (this.hitPoints < 0) {
      return true;
    } else {
      return false;
    };
  };

  //Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
  this.attack = function(enemyHitPoints) {
    if (this.hitPoints < 0) {
      return true;
    } else {
      return false;
    };
  };

  this.printStats = function() {
    for (var propt in this) {
      console.log(this[propt]);
    }
    //console.log('hey!');
  };
}


var chris = new character('Chris', 'wild man', 'prius', 21, 5, Infinity);
//console.log(chris.printAt());
chris.printStats()
