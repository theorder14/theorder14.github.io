$(document).ready(function(){
	$("img").animate({
		opacity:.5
	});
	$('img').hover(function(){
       $(this).stop().animate({opacity:1});

	 },function() {
	$(this).stop().animate({opacity:.5});

    });

    $(document).ready(function(){
         alert($('div').attr('title'));
    });

    $(document).ready(function(){
    	$('h1').hover(function(){
        $(this).css({"background-color":"red"
          });
         },function() {
	    $(this).stop().css({"background-color":"blue"});

       });
    });

 });

	
 