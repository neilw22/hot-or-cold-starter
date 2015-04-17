
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
		console.log(userNumber);
		if (isNaN(userNumber)) {
			$("#feedback").text("Please enter a number!");
			$("#userGuess").val('');
		}
		else if (userNumber == hiddenNumber) {
			$("#feedback").text("Correct!");
			$("#userGuess").val('');
		} else {
			$("#feedback").text("Incorrect!");
			$("#userGuess").val('');
			$("#guessList").append("<li />"+userNumber);
		}
	})


// newGame();


});


