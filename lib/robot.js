'use strict';

function Robot() {
}

Robot.prototype.orient = function(direction) {
  if (direction != "north" && direction != "south" && direction != "east" && direction != "west") {
    throw new Error("Invalid Robot Bearing")
  } else {
    this.bearing = direction;
  }
}

Robot.prototype.turnRight = function() {
  if (this.bearing == "north") {
    this.bearing = "east";
  } else if (this.bearing == "east") {
    this.bearing = "south"
  } else if (this.bearing == "south") {
    this.bearing = "west"
  } else {
    this.bearing = "north"
  }
}

Robot.prototype.turnLeft = function() {
  if (this.bearing == "north") {
    this.bearing = "west";
  } else if (this.bearing == "east") {
    this.bearing = "north"
  } else if (this.bearing == "south") {
    this.bearing = "east"
  } else {
    this.bearing = "south"
  }
}

Robot.prototype.at = function(c1, c2) {
  this.coordinates = [c1, c2]
}

Robot.prototype.advance = function() {
  if (this.bearing == "north") {
    this.coordinates = [(this.coordinates[0]), eval(this.coordinates[1] + 1)];
  } else if (this.bearing == "east") {
    this.coordinates = [eval(this.coordinates[0] + 1), this.coordinates[1]];
  } else if (this.bearing == "south") {
    this.coordinates = [(this.coordinates[0]), eval(this.coordinates[1] - 1)];
  } else {
    this.coordinates = [eval(this.coordinates[0] - 1), this.coordinates[1]];
  }
}

Robot.prototype.instructions = function(letters) {
  var series = letters.split("");
  var instructions = [];

  series.forEach(function(letter) {
    if (letter == "L") {
      instructions.push('turnLeft');
    } else if (letter == "R") {
      instructions.push('turnRight');
    } else if (letter == "A") {
      instructions.push('advance');
    } 
  })
  return instructions
}

Robot.prototype.place = function(location) {
  this.coordinates = [location.x, location.y];
  this.bearing = location.direction;

  this.evaluate = function(letters) {
    this.instructions(letters).forEach(function(order){
      this[order]();
    }, this)
  }
}





