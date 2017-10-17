describe('new size dancers', function() {
  
  var sizeDancer;
  var timeBetweenSteps = 100;
  
  beforeEach(function() {
    sizeDancer = new SizeDancer(10, 20, timeBetweenSteps);
  });
  
  it('new dancers should have a jQuery $node object', function() {
    expect(sizeDancer.$node).to.be.an.instanceof(jQuery);
  });
});