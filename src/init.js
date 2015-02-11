$(document).ready(function(){
  window.dancers = [];
  window.homerDancers = [];
  window.duffDancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var timeStep;
    if(dancerMakerFunctionName === "HomerDancer"){
      timeStep = 250;
    } else if(dancerMakerFunctionName === "DuffDancer"){
      timeStep = 500;
    }

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      // Math.random() * 1000
      timeStep
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    if (dancer instanceof HomerDancer) {
      window.homerDancers.push(dancer);
    }

    if (dancer instanceof DuffDancer) {
      window.duffDancers.push(dancer);
      $(".duff").on("mouseover", function(event){
        console.log('test');
      });

    }

  });

   $(".lineup").on("click", function(event){
    var spacer = 20;
    var xPosition = $("body").width()/2
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(spacer, xPosition);
      spacer += 50;
    }
   });




});

