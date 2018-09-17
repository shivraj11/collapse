
$(document).ready(function(){

$( "#showr1" ).click(function() {
  $( "#sone" ).toggle( "slow" );
});

$( "#showr2" ).click(function() {
  $( "#stwo" ).toggle( "slow" );
});

$( "#showr3" ).click(function() {
  $( "#sthree" ).toggle( "slow" );
});



$( "button" ).hover(
	function() {
	 $( this ).addClass( "colorr" );
},
    function() {
      $( this ).removeClass( "colorr" );
});

   
})

