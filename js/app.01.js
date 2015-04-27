
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
function newGame() {
	hiddenNumber = Math.floor((Math.random() * 100) + 1);
	$("#userGuess").empty();
	$("#guessList").empty();
	$("#userGuess").val('');
	$("#count").text('0');
	$("#feedback").text("Make Your Guess!");
	$("input").prop('disabled', false);
	guessCount = 1;
}

// On click function

	$("#guessButton").click(function(g) {
		g.preventDefault();
		var userNumber = $("#userGuess").val();
		
		//check number is real

		if (isNaN(userNumber) || userNumber>=101 || userNumber<=0) {
			$("#feedback").text("Please enter a number between 1 and 100");
			$("#userGuess").val('');
		} else {
			checkGuess(userNumber);
		}
	});

	function guessParamaters(Pguess){
			$("#userGuess").val('');
			$("#guessList").append("<li>"+Pguess+"</li>");
			$("#count").text(guessCount);
			guessCount++;
			prevGuess = ($(" li:last ").text());
		}

	function checkGuess(guess) {
		var difference = Math.abs((hiddenNumber-guess));
		var prevInt = parseInt(prevGuess);
		var prevDifference = Math.abs((prevInt-hiddenNumber));

		if (guessCount==1) {
				if (guess == hiddenNumber) {
					$("#feedback").text("The number was "+(hiddenNumber)+" - You Win!");
					$("#userGuess").val('');
					$("#count").text(guessCount);
					$("input").prop('disabled', true);
				} else if (difference <= 2) {
					$("#feedback").text("Very Hot!!!");
				} else if (difference <= 5) {
					$("#feedback").text("Hot!!");
				} else if (difference <= 10) {
					$("#feedback").text("Very Warm");
				} else if (difference <= 15) {
					$("#feedback").text("Warm");
				} else if (difference <= 20) {
					$("#feedback").text("Luke Warm");
				} else if (difference <= 25) {
					$("#feedback").text("Tepid");
				} else if (difference <= 45) {
					$("#feedback").text("Cold");
				} else if (difference <= 60) {
					$("#feedback").text("Very Cold");
				} else if (difference <= 70) {
					$("#feedback").text("Winter is coming...");
				} else if (difference >= 70) {
					$("#feedback").text("Just the Coldest...");
				}
			}
		else {
			if (guess == hiddenNumber) {
					$("#feedback").text("The number was "+(hiddenNumber)+" - You Win!");
					$("#userGuess").val('');
					$("#count").text(guessCount);
					$("input").prop('disabled', true);
					}
			else if (prevDifference > difference) {
				if ((prevDifference-difference)<=5){
					if (difference <= 3){
						$("#feedback").text("So Close!!");
					} else {
					$("#feedback").text("A little warmer!");
					}
				}
				else if ((prevDifference-difference)<=15){
					$("#feedback").text("Warmer!");
					}
				else if ((prevDifference-difference)>=15){
					$("#feedback").text("Much Warmer!");
					}
				}
			else if (prevDifference < difference) {
				if ((difference-prevDifference)<=5){
					$("#feedback").text("A little colder");
					}
				else if ((difference-prevDifference)<=15){
					$("#feedback").text("Colder");
					}
				else if ((difference-prevDifference)>=15){
					$("#feedback").text("Much Colder");
					}
				}
			}
		guessParamaters(guess);
	}

});


