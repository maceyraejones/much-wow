$(function() {
    console.log("document is ready!");

    // $('#meme').draggable().droppable();

    var $start_counter = $( "#event-start" ),
    $drag_counter = $( "#event-drag" ),
    $stop_counter = $( "#event-stop" ),
    counts = [ 0, 0, 0 ];

  $( "#meme" ).draggable({
    start: function() {
      counts[ 0 ]++;
      updateCounterStatus( $start_counter, counts[ 0 ] );
    },
    drag: function() {
      counts[ 1 ]++;
      updateCounterStatus( $drag_counter, counts[ 1 ] );
    //   calculateWow($new_count); 
    },
    stop: function() {
      counts[ 2 ]++;
      updateCounterStatus( $stop_counter, counts[ 2 ] );
    }
  });

  function updateCounterStatus( $event_counter, new_count ) {
    // first update the status visually...
    if ( !$event_counter.hasClass( "ui-state-hover" ) ) {
      $event_counter.addClass( "ui-state-hover" )
        .siblings().removeClass( "ui-state-hover" );
    }
    // ...then update the numbers
    $( "span.count", $event_counter ).text( new_count );

    calculateWow(new_count); 
  }



function calculateWow (xyz){

    if (xyz < 500){
        $('#countarea').html('Not much wow (' + xyz +  ')');
    }

    else{
        $('#countarea').html('So much wow (' + xyz +  ')');
    }
}

});