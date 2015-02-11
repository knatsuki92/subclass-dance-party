var DuffDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('duff');
  this.$node.addClass('grow');
  this.$node.addClass('grow-scale');
  // this.spin();



  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function



};

DuffDancer.prototype= Object.create(Dancer.prototype);
DuffDancer.prototype.constructor = DuffDancer;

// BlinkyDancer.prototype.step = function(){
//   // call the old version of step at the beginning of any call to this new version of step
//   var oldStep = this.step;
//   oldStep();
//   this.$node.toggle();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
// };

  DuffDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    Dancer.prototype.step.call(this);
    this.grow();
    this.spin;
  };

  DuffDancer.prototype.grow = function(){
    this.$node.toggleClass("grow-scale");
  };


  DuffDancer.prototype.spin = function () {
    this.$node.toggleClass("rotate");
  };

  //DuffDancer.prototype.glow = function(){

  //};
