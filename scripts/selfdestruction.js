$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = "scale";
  
      // Most effect types need no options passed by default
      var options = {};
     
  
      // Run the effect
      $( "body" ).hide( selectedEffect, options, 1000, callback );
    };
  
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "body" ).removeAttr( "style" ).hide().fadeIn();
      }, 10000000 );
    };
  
    // Set effect from select menu value
    $( "#buttonDEST" ).on( "click", function() {
      runEffect();
    });
  } );