window.onload = function() {

	var $gifs = $("ARTICLE img[src*='anigif']");

	$.each($gifs, function() {
		$(this).css({visibility : "hidden"});
	});

	console.info("BuzzFeed Muted");
};