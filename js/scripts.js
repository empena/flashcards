
$(document).ready( function(){
  
  $( "h4" ).hover(
    function() {
      $( this ).replaceWith( $( "<span><h4>This is where the answer will go</h4></span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );

  $("#formButton1").click(function() {
    $("#form1").toggle();
  });
  
  $("#formButton2").click(function() {
    $("#form2").toggle();
  });

  $("#formButton3").click(function() {
    $("#form3").toggle();
  });

  $( "delete1" ).click(function() {
    $( "#first" ).remove();
  });

  $( "delete2" ).click(function() {
    $( "#second" ).remove();
  });

  $( "delete3" ).click(function() {
    $( "#third" ).remove();
  });
})