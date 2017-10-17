describe('new colorful dancers', function() {
  
  var colorfulDancer;
  var timeBetweenSteps = 100;
  
  beforeEach(function() {
    colorfulDancer = new ColorfulDancer(10, 20, timeBetweenSteps);
  });
  
  it('new dancers should have a jQuery $node object', function() {
    expect(colorfulDancer.$node).to.be.an.instanceof(jQuery);
  });
});