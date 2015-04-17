
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("a.new").click(function(){
	newGame();
	});

// Random number on page load
var hiddenNumber = Math.floor((Math.random() * 100) + 1);
console.log(hiddenNumber);

var guessCount = 1

function newGame(){
	hiddenNumber = Math.floor((Math.random() * 100) + 1);
	console.log(hiddenNumber);

	$("#userGuess").empty();
	$("#guessList").empty();
	$("#userGuess").val('');
	$("#feedback").text("Make Your Guess!");

}



	$("#guessButton").click(function(g) {
		g.preventDefault();
		var userNumber = $("#userGuess").val();
		var difference = Math.abs((hiddenNumber-userNumber));

	function guessParamaters(){
		$("#userGuess").val('');
		$("#guessList").append("<li />"+userNumber);
		$("#count").text(guessCount);
		guessCount++;
	}

		if (isNaN(userNumber)) {
			$("#feedback").text("Please enter a valid number!");
			$("#userGuess").val('');
		} else if (userNumber > 100) {
			$("#feedback").text("Please enter a number between 1 and 100");
			$("#userGuess").val('');
		} else if (userNumber <= 0) {
			$("#feedback").text("Please enter a number between 1 and 100");
			$("#userGuess").val('');
		} else if (userNumber == hiddenNumber) {
			$("#feedback").text("The number was "+(hiddenNumber)+" - You Win!");
			$("#userGuess").val('');
			$("#count").text(guessCount);
		} else if (difference <= 2) {
			$("#feedback").text("Very Hot!!");
			guessParamaters();
		} else if (difference <= 5) {
			$("#feedback").text("Hot!!");
			guessParamaters();
		} else if (difference <= 10) {
			$("#feedback").text("Very Warm");
			guessParamaters();
		} else if (difference <= 15) {
			$("#feedback").text("Warm");
			guessParamaters();
		} else if (difference <= 20) {
			$("#feedback").text("Luke Warm");
			guessParamaters();
		} else if (difference <= 25) {
			$("#feedback").text("Tepid");
			guessParamaters();
		} else if (difference <= 45) {
			$("#feedback").text("Cold");
			guessParamaters();
		} else if (difference <= 60) {
			$("#feedback").text("Very Cold");
			guessParamaters();
		} else if (difference <= 70) {
			$("#feedback").text("Winter is coming...");
			guessParamaters();
		} else if (difference >= 70) {
			$("#feedback").text("Just the Coldest...");
			guessParamaters();
		}
	})
});


