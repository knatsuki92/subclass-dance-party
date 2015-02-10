var HomerDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('homer');



  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function



};

HomerDancer.prototype= Object.create(Dancer.prototype);
HomerDancer.prototype.constructor = HomerDancer;

// BlinkyDancer.prototype.step = function(){
//   // call the old version of step at the beginning of any call to this new version of step
//   var oldStep = this.step;
//   oldStep();
//   this.$node.toggle();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
// };

  HomerDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    Dancer.prototype.step.call(this);
    //this.$node.fadeToggle();
    //this.$node.toggleClass("grow-scale");
    this.soberDance();
  };

  HomerDancer.prototype.soberDance = function(){

    var moveVertical = (Math.random() > .5) ? true : false;
    if(moveVertical){
      var Yrand = (Math.random() > .5) ? 1 : -1;
      this.top += 100*Yrand;
      this.top = Math.max(this.top,150);
      this.top = Math.min(this.top, $("body").height()-150);
    } else {
      var Xrand = (Math.random() > .5) ? 1 : -1;
      this.left += 100*Xrand;
      this.left = Math.max(this.left,150);
      this.left = Math.min(this.left, $("body").width()-150);
    }
    this.setPosition(this.top,this.left);

  };

  HomerDancer.prototype.drunkDance = function(){
    this.$node.addClass('drunk-homer');
  }

