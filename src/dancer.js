
//pseudoclassical Dancer Factory
var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

//Dancer Methods
Dancer.prototype.step = function (timeBetweenSteps) {
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);

};

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function () {
  var oldHeight = this.$node.css('top');
  this.oldHeight = oldHeight;
  console.log(oldHeight);
  var midpoint = $("body").height() / 2;
  midpoint = midpoint + 'px';
  this.$node.css('top', midpoint);
  
};