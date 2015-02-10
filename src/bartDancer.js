var BartDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function



};

BartDancer.prototype= Object.create(Dancer.prototype);
BartDancer.prototype.constructor = BartDancer;

// BlinkyDancer.prototype.step = function(){
//   // call the old version of step at the beginning of any call to this new version of step
//   var oldStep = this.step;
//   oldStep();
//   this.$node.toggle();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
// };

  BartDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
    this.$node.fadeToggle();
  };
