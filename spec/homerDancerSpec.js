describe("homerDancer", function() {

  var homerDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    homerDancer = new HomerDancer(100, 200, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(homerDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should be an instance of Dancer class", function(){
   expect(homerDancer).to.be.an.instanceof(Dancer);
  });

  it("should have a soberDance method that makes it move", function() {
    var oldTop = homerDancer.top;
    var oldLeft = homerDancer.left;
    homerDancer.soberDance();
    var sum = homerDancer.top - oldTop + homerDancer.left - oldLeft;
    expect(sum).to.not.equal(0);
  });



  it("should have a drunk function that makes it toggles classes when it's close to Duff can", function() {
    sinon.spy(homerDancer.$node, 'toggleClass');
    homerDancer.nearestDuffDist = 0;
    homerDancer.drunkDance();
    expect(homerDancer.$node.toggleClass.called).to.be.true;
  });



  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(homerDancer, "step");
      expect(homerDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(homerDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(homerDancer.step.callCount).to.be.equal(2);
    });

  });
});
