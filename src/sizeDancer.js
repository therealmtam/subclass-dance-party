var SizeDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sizeDancer');
  
};

SizeDancer.prototype = Object.create(Dancer.prototype);
SizeDancer.prototype.constructor = SizeDancer;

SizeDancer.prototype.step = function (timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  
  var oldRadius = this.$node.css('border-radius');
  
  if (oldRadius === '10px') {
    this.$node.css('border-radius', '6px');   
  } else if (oldRadius === '6px') {
    this.$node.css('border-radius', '0px');
  } else if (oldRadius === '0px') {
    this.$node.css('border-radius', '4px');
  } else {
    this.$node.css('border-radius', '10px');
  }
  
    
};