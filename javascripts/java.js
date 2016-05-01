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
      $('h1').hover(function(){
        $(this).css({"background-color":"red"
          });
        },function() {
      $(this).stop().css({"background-color":"blue"});

       });     
       }); 
});

var media = "software";
var limitOfSearchResults = 1;

var search = function() {
  
  var element = $('#search'); 
  var searchterm = $(element).attr('value'); 

  
  $.getJSON("http://itunes.apple.com/search?term=" + searchterm 
              + "&country=de&limit=" + limitOfSearchResults 
              + "&media=" + media 
              + "&callback=?", function(data) {
    
    img = data["results"][0].artworkUrl100;
    
    $('#img').html('<img src="' + img + '"/>');

  });}


var Results = 1;

var pic = function() {
  
  var element = $('#pic'); 
  var searchterm = $(element).attr('value'); 

  $.getJSON("https://itunes.apple.com/search?term=jim+jones&country=ca" + searchterm

              + "&country=de&limit=" + Results 
              + "&callback=?", function(data) {
    
    img = data["results"][0].artworkUrl100;
    
    $('#img').html('<img src="' + img + '"/>');

  });}


