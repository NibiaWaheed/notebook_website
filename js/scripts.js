$( document ).ready(function() {

	//true is front, false is back
	var sideDisplaying = true;

	$( ".front" ).load("1.html");

    $(".box").click(function(){
	    removeSelectedClass();
        $(this).toggleClass("selected");

        sideDisplaying = !sideDisplaying;

	    var goToPage = $(this).data("page");
	  	$("#card").toggleClass("flipped");

	  	changeContent(sideDisplaying, goToPage)
    });

	function changeContent(sideToChange, pageNumber) {

		var fileToLoad = pageNumber+".html";

		if(sideToChange) {
			$( ".front" ).load(fileToLoad);
		} else {
			$(".back").load(fileToLoad);
		}
	}

    function removeSelectedClass() {
        $(".box").removeClass("selected");
    }


});

$(document).ajaxComplete(function() {


});

