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

  it("should have a step function that makes its node blink", function() {
    sinon.spy(duffDancer.$node, 'toggle');
    duffDancer.step();
    expect(duffDancer.$node.toggle.called).to.be.true;
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
