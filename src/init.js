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

    var xPos = $("body").width() * Math.random();
    xPos = Math.max(xPos, 100);
    xPos = Math.min(xPos, $("body").width()-100);

    var yPos = $("body").height() * Math.random();
    yPos = Math.max(yPos, 100);
    yPos = Math.min(yPos, $("body").width()-100);


    //var yPos = Math.max(200,Math.min($("body").height()-200, $("body").height() * Math.random()));
    //var xPos = Math.max(200,Math.min($("body").width()-200, $("body").width() * Math.random()));

    var timeStep;
    if(dancerMakerFunctionName === "HomerDancer"){
      timeStep = 250;
    } else if(dancerMakerFunctionName === "DuffDancer"){
      timeStep = 500;
    }

    var dancer = new dancerMakerFunction(
      yPos,
      xPos,
      timeStep
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    if (dancer instanceof HomerDancer) {
      window.homerDancers.push(dancer);
    }

    if (dancer instanceof DuffDancer) {
      window.duffDancers.push(dancer);
      dancer.$node.on("mouseover", function(event){
        dancer.spin();
      });

    }

  });

   $(".lineup").on("click", function(event){
    var spacer = 20;
    var xPosition = $("body").width()/2;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(spacer, xPosition);
      spacer += 50;
    }
   });




});

