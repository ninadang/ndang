

$(function(){

	var last = "#67";//the same number
	$("#1, #2, #3, #4, #5, #6").hide();
		var stuck = true;

	$('.work').click(function(){
		var x = $(this).attr('class').split(' ')[1];
		var str = '#' + x;
		$("#1, #2, #3, #4, #5, #6").hide();
		//console.log("x: " + x);
		//console.log("str: " + str);
		//console.log("stuck: " + stuck);
		if (last === str) {
			//console.log("clicking on the same number");
			if (stuck == true) {
				//console.log("hide descriptions, and show icons");
				$("#1, #2, #3, #4, #5, #6").hide();
				$('.project-icons').show();
				stuck = !stuck;
			} else {
				//console.log("show icons, and hide descriptions");
				$('.project-icons').hide();
				$(str).show();
				stuck = true;
			}
		} else {
			//console.log("clicking on a new number");
			$('.project-icons').hide();
			$(str).show();
		}
		last = str;
	});
});





