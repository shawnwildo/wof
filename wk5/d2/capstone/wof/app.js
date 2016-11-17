// create a global game var
var game;
//check if document is TOTALLY LOADED
$(document).ready(function() {
	// LET US KNOW READY FUNCTION WORKS
	console.log('document ready');
	// Assign global game variable to a Game Object
	game = new Game();
	// Start the Game by running the Game function,even if undefined initially
	game.start();
});

function Phrase(options){
	// Both this answer, and hint, are variables or properties for Phrase. In the current
	//example 'this' refers to Phrase.
	this.answer = options['answer'];
	this.hint = options['hint'];
}

// Create a Game Object Contstructor(contains things)
function Game() {
	/* GAME PROPERTIES / VARIABLES */
	// Game contains all the phrases
	this.phrases = [
			new Phrase({answer: 'my answer',hint: 'my hint'}),
			new Phrase({answer: 'something',hint: 'my hint about it'}),
			new Phrase({answer: 'understand',hint: 'getting the gist of it'}),
	];
	// Give it a score property with an integer value
	this.score = 0;
	this.current_phrase;
	this.guesses = [];

	/* GAME FUNCTIONS / ACTIONS */

	// Create a start function so you can run game
	this.start = function () {
		// let us know the start function fired
		console.log('starting game');
		this.choose_phrase();
		this.draw_board();
	}
	this.guess = function(){
		guess = document.getElementById('guess').value;
		this.guesses.push(guess);
		document.getElementById('guess').value = ""
		$('#guessed').append('<div class="guess">'+guess+'</div>');
		console.log('Guessed: ' + guess);
		
		this.draw_board();
	}
	this.choose_phrase = function(){
		this.current_phrase = this.phrases[2];

	} 
	// draw the tiles on the screen
	this.draw_board = function(){
		var content = "";
		for(i = 0; i < this.current_phrase.answer.length; i++){
			if(this.guesses.indexOf(this.current_phrase.answer[i]) == -1){
				content += '<div class="tile"><h1>&nbsp;</h1></div>'
			} else {
				content += '<div class="tile"><h1>'+this.current_phrase.answer[i]+'</h1></div>'
			}
			
		}
		// set the hint
		$('#hint').html(this.current_phrase.hint);
		// change the board html to be the tiles
		$('#board').html(content);
		//change the board html tiles to uppercase
		

	}
}