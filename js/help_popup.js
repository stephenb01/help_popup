
(function($){

//------------------------------------------------------------------------------

Drupal.behaviors.HelpPopup = {
  attach: function (context,settings) {

    $("div[id=help_popup]").hide();
    
    $("a[data-reveal-id$='_help_popup']").once('_popup', function () {
      $("a[data-reveal-id$='_help_popup']").click(function (event) {
        var field = $(this).attr('data-reveal-id');
        var entity_type = $(this).attr('entity-type');
        var bundle = $(this).attr('bundle');
        var field_name = $(this).attr('field-name');
       // alert("help_popup_"+field_name);
var tt = $("input[name=help_popup_"+field_name+"]").val();
$('#popup_content').html(tt);
//alert(tt);
//        $.ajax({
//            type: 'POST',
//            url: Drupal.settings.basePath +'help_popup/get_details',
//            dataType: 'json',
//            success: ajaxCompleted,
//            // Will need to pass the bundle and entity_Type as well.
//            // Might need to use hidden variables unless I ca nget it from the webpage.
//            data: { field_name:field_name,bundle:bundle,entity_type:entity_type}// $("input#edit-field-agency-autocomplete").val()
//        });
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup 
			}, 200); // .5 second
	return false;
      });
      
      
  



	
	/* event for close the popup */
	$("div.close").hover(
					function() {
						$('span.ecs_tooltip').show();
					},
					function () {
    					$('span.ecs_tooltip').hide();
  					}
				);
	
	$("div.close").click(function() {
		disablePopup();  // function close pop up
	});
	
	$(this).keyup(function(event) {
		if (event.which == 27) { // 27 is 'Ecs' in the keyboard
			disablePopup();  // function close pop up
		}  	
	});
	
	$("div#backgroundPopup").click(function() {
		disablePopup();  // function close pop up
	});
	
	$('a.livebox').click(function() {
		alert('Hello World!');
	return false;
	});
	     
      
      
      
      
    });
    function ajaxCompleted (data) {
    // Parse Json
    // Add some stuff to your DOM.

        $.each(data, function(index, element) {
          $('#popup_content').html(element.help_popup_value);
            loading(); // loading
            loadPopup();
        });
    }
  }
}



	 /************** start: functions. **************/
	function loading() {
		$("div.loader").show();  
	}
	function closeloading() {
		$("div.loader").fadeOut('normal');  
	}
	
	var popupStatus = 0; // set value
	
	function loadPopup() { 
		if(popupStatus == 0) { // if value is 0, show popup
			closeloading(); // fadeout loading
			$("#toPopup").fadeIn(0500); // fadein popup div
			$("#backgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8
			$("#backgroundPopup").fadeIn(0001); 
			popupStatus = 1; // and set value to 1
		}	
	}
		
	function disablePopup() {
		if(popupStatus == 1) { // if value is 1, close popup
			$("#toPopup").fadeOut("normal");  
			$("#backgroundPopup").fadeOut("normal");  
			popupStatus = 0;  // and set value to 0
		}
	}
	/************** end: functions. **************/


})(jQuery);