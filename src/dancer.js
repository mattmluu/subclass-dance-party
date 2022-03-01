Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step, this.timeBetweenSteps);
};

Dancer.prototype.setpostion = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  //this or makeDancer --> {  }
  // use jQuery to create an HTML <span> tag
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setposition(this.top, this.left);

};





