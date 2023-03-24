$( function() {
    $( ".card" ).draggable();
    $( ".column" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .append( ui.draggable );
      }
    });
  });