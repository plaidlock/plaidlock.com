$(function() {
  $("a.portfolio_image").fancybox();

	$("a.more").click(function(){
	  toggleHiddenInfo();
	});
	
	$('.fancybox').fancybox({
	  'hideOnContentClick' : false,
	  'overlayOpacity' : '0.5'
	});
});

function toggleHiddenInfo() {
	if($(this).hasClass("more")) {
		$(this).parents(".single-work").children(".hidden-info").fadeIn("slow");
		$(this).toggleClass("more less");
		$(this).text("Less info");
  } else {
			$(this).parents(".single-work").children(".hidden-info").slideUp("slow");
	  $(this).toggleClass("more less");
	  $(this).text("More info");
  }
  
  return false;
}