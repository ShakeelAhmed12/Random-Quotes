const api = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

/* Fetches data from the json and displays a short animation to show the text of the quote appearing */
let getQuote = function(data) {
  $(".quote-text").animate(
    { opacity: 0 },
    500,
    function() {
      $(this).animate({ opacity: 1}, 500);
      $("#text").text(data.quoteText);
    }
  );

  /* Fetches data from the json and displays a Short animation to show the text of author appearing */
  $(".quote-author").animate(
    { opacity: 0 },
    500,
    function() {
      $(this).animate({ opacity: 1}, 500);
      if(data.quoteAuthor == ""){
        $("#author").text("By " + "Unknown");
      }else{
        $("#author").text("By " + data.quoteAuthor);
      }
    }
  );

let color = Math.floor(Math.random() * colors.length); /* Picks a random color from the array colors*/

/* Short animation to change the color of the background */
 $("body").animate(
   {
     backgroundColor: colors[color],
      color: colors[color]
   },
   1000
 );

/* Short animation to change the color of the get-quotes button */
  $(".get-quotes").animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );
};

/* Event listener for the get-quotes button that will invoke the function to get a random quote */
$(".get-quotes").on("click", function() {
	$.getJSON(api, getQuote, "jsonp");
});

/* On page load, a quote will appear */
$(document).ready(function(){
  $.getJSON(api, getQuote, "jsonp");
});
