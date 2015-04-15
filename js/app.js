
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

// Random number on page load
var hiddenNumber = Math.floor((Math.random() * 100) + 1);
console.log(hiddenNumber);

function newGame() {
	hiddenNumber = Math.floor((Math.random() * 100) + 1);
	$("#userGuess").empty();
	$("#guessList").empty();
	$("#feedback").text("Make Your Guess!");
}

// New Game Button

	$("a.new").click(function(){
		newGame();
	});

$("#guessButton").click(function(){
	var userNumber = $("#userGuess").val();
	if (userNumber == hiddenNumber) {
		$("#feedback").text("Correct!");
	} else {
		$("#feedback").text("Inorrect!");
	}

});













});


