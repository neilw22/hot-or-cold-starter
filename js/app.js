
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
var prevGuess = 0
// var prevDifference = 0

// New Game Function
function newGame(){
	hiddenNumber = Math.floor((Math.random() * 100) + 1);
	$("#userGuess").empty();
	$("#guessList").empty();
	$("#userGuess").val('');
	$("#feedback").text("Make Your Guess!");
}
// On click function

	$("#guessButton").click(function(g) {
		g.preventDefault();
		var userNumber = $("#userGuess").val();
		var difference = Math.abs((hiddenNumber-userNumber));
		var prevInt = parseInt(prevGuess);
		var prevDifference = Math.abs((prevInt-hiddenNumber));

		//Debug log
		console.log('user'+userNumber);
		console.log('prevint'+prevInt);
		console.log('diff'+difference);
		console.log('prevdiff'+prevDifference);

	function guessParamaters(){
		$("#userGuess").val('');
		$("#guessList").append("<li>"+userNumber+"</li>");
		$("#count").text(guessCount);
		guessCount++;
		prevGuess = ($(" li:last ").text());
	}

		if (guessCount==1) {
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
					$("#feedback").text("Very Hot!!!");
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
			}
		else {
			if (userNumber == hiddenNumber) {
					$("#feedback").text("The number was "+(hiddenNumber)+" - You Win!");
					$("#userGuess").val('');
					$("#count").text(guessCount);
					}
			else if (isNaN(userNumber)) {
					$("#feedback").text("Please enter a valid number!");
					$("#userGuess").val('');
			else if (prevDifference > difference) {
					$("#feedback").text("Hotter");
					guessParamaters();
				}
			else if (prevDifference < difference) {
					$("#feedback").text("Colder");
					guessParamaters();
				}	
			}
	})
});


