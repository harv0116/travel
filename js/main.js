
document.addEventListener("DOMContentLoaded", init);

function init(){
	//startup script
    var initialValue = 1000;
	
			$( "#slider" ).slider({
               min: 100,
               max: 2000,
               value: 1000,
			   create: function( event, ui ) {
					$( "#cost p" ).text('$' + initialValue);
			   },
			   slide: function( event, ui ) {
					$( "#cost p" ).text('$' + ui.value);
			   }
           });
		   


	
}