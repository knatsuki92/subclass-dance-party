describe("duffDancer", function() {

  var duffDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    duffDancer = new DuffDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(duffDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should be an instance of Dancer class", function(){
   expect(duffDancer).to.be.an.instanceof(Dancer);
  });

  it("should have a step function that makes it grow", function() {
    sinon.spy(duffDancer.$node, 'toggleClass');
    duffDancer.step();
    expect(duffDancer.$node.toggleClass.called).to.be.true;
  });
  it("should have a spin function that makes it rotate upside down", function() {
    sinon.spy(duffDancer.$node, 'toggleClass');
    duffDancer.spin();
    expect(duffDancer.$node.toggleClass.called).to.be.true;
  });


  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(duffDancer, "step");
      expect(duffDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(duffDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(duffDancer.step.callCount).to.be.equal(2);
    });

  });
});
