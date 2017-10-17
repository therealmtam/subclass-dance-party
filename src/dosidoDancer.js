var DoSiDoDancer = function (top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('doSiDoDancer');
  this.lastPositionIndex = 0;
};

DoSiDoDancer.prototype = Object.create(Dancer.prototype);
DoSiDoDancer.prototype.constructor = DoSiDoDancer;

DoSiDoDancer.prototype.step = function(timeBetweenSteps) {
  timeBetweenSteps = (Math.random() * 5) + 5;
  Dancer.prototype.step.call(this, timeBetweenSteps);

 
  
  if (!this.cTup) {
    this.cTup = this.renderCoordinates(this.top, this.left);
  }
  var styleSettings = {
    top: this.cTup[0][this.lastPositionIndex],
    left: this.cTup[1][this.lastPositionIndex]
  };
  
  this.lastPositionIndex++;
  if (this.lastPositionIndex >= this.cTup[0].length) {
    this.lastPositionIndex = 0;
  }
  
  this.$node.css(styleSettings);
  
  
};
DoSiDoDancer.prototype.renderCoordinates = function (top, left) {
  var closestNeighbor, shortestRadius;
  if (window.dancers.length > 0) {
    for (var i = 0; i < window.dancers.length; i++) {
      var currentDancer = window.dancers[i];
      var aSquared = Math.pow(Number(currentDancer.$node.css('top').split('px')[0]) - top, 2);
      var bSquared = Math.pow(Number(currentDancer.$node.css('left').split('px')[0]) - left, 2);
      var cDistance = Math.sqrt(aSquared + bSquared);
      
      if (i === 0) {
        closestNeighbor = currentDancer;
        shortestRadius = cDistance;
      }
      if (cDistance < shortestRadius) {
        shortestRadius = cDistance;
        closestNeighbor = currentDancer;
      }
    }
    var closestTop = Number(closestNeighbor.$node.css('top').split('px')[0]);
    var closestLeft = Number(closestNeighbor.$node.css('left').split('px')[0]);
  } else {
    var shortestRadius = 20;
    var closestTop = $("body").height() / 2;
    var closestLeft = $("body").width() / 2;
  }
  
  return (function x (radius, steps, centerX, centerY) {
    var returnArr = [];
    var xValues = [centerX];
    var yValues = [centerY];

    for (var i = 0; i < steps; i++) {
      xValues[i] = (centerX + radius * Math.cos(2 * Math.PI * i / steps));
      yValues[i] = (centerY + radius * Math.sin(2 * Math.PI * i / steps));
    }
    returnArr.push(xValues, yValues);
    return returnArr;
  }(shortestRadius, 128, closestTop, closestLeft));
};
