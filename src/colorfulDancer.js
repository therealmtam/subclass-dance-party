var ColorfulDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('colorfulDancer');
  this.$node.on('mouseover', function () {
    $(this).addClass('hover');        
  });
  this.$node.on('mouseleave', function () {
    $(this).removeClass('hover');        
  });
};

ColorfulDancer.prototype = Object.create(Dancer.prototype);
ColorfulDancer.prototype.constructor = ColorfulDancer;

ColorfulDancer.prototype.step = function (timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  var r = String(Math.floor(255 * Math.random()));
  var g = String(Math.floor(255 * Math.random()));
  var b = String(Math.floor(255 * Math.random()));
  var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  this.$node.css('border-color', color);
  
};
