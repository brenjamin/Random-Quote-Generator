$(document).ready(function() {
    updateDisplay();
    getNewQuote();
    $("#new").on("click", function(e) {
      updateDisplay();
      getNewQuote();
    });
  
  });
  
  function getNewQuote() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
      var author = json.quoteAuthor === "" ? "Anonymous" : json.quoteAuthor;
      var quote = json.quoteText;
  
      console.log(author);
  
      $("#quote").css("display", "none");
      $("#author").css("display", "none");
  
      $("#quote").html(quote);
      $("#author").html("- " + author);
      $("#tweet-link").attr("href",
        "https://twitter.com/intent/tweet?&text=" + quote + " -" + author)
  
      $("#quote").fadeIn(2000);
      $("#author").fadeIn(2000);
  
    });
  }
  
  function updateDisplay() {
    var randScheme = colorObj.getColorScheme();
    var backgroundColor = randScheme[0];
    var boxColor = randScheme[1];
    
    $("body").css("background", backgroundColor);
    $("#quote_box").css("background", boxColor);
    $(".fa-twitter-square").css("color", backgroundColor);
    $(".btn").css("background", backgroundColor);
  }
  
  function ColorObject(colorArray) {
    this.colors = colorArray;
  
    this.getColorScheme = function() {
      var randNum = Math.floor(Math.random() * 9) + 1;
      console.log(randNum);
      var first = this.colors[0];
      this.colors[0] = this.colors[randNum];
      this.colors[randNum] = first;
  
      return this.colors[randNum];
    }
  }
  
  var colorSchemes = [
    ["lightblue", "beige"],
    ["#FF787F", "#E0DA48", "peachlime"],
    ["#0BA5A3", "#28D1D8", "undersea"],
    ["#32ABDA", "#FED4A4", "beach"],
    ["#FF8F84", "#7EF2B1", "watermelon"],
    ["#F13005", "#FFBE74", "citrus"],
    ["#DDD8FF", "#F4EFD2", "lilac"],
    ["#3D3533", "#B3FFE1", "mintchoc"],
    ["#2D3E50", "#B3FFE1", "nautical"],
    ["#F78D3B", "#B2E1E0", "pooltangerine"]
  ];
  
  var colorObj = new ColorObject(colorSchemes);