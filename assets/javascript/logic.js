var choices = ["rock", "paper", "scissors"];
var player1WinScore = 0;
var player2WinScore = 0;
var player1LoseScore = 0;
var player2LoseScore = 0;

const player1WinScore_span = document.getElementById("player1-score");
const player2WinScore_span = document.getElementById("player2-score");
const player1Score_span = document.getElementById("player1-score");
const player2Score_span = document.getElementById("player2-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

function getPlayer2Choice() {
	var randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
getPlayer2Choice();

function win(player1Choice, player2Choice) {
	//move data to firebase
	player1WinScore++;
	player2LoseScore++;
	document.getElementById("player1-WinScore").innerHTML = player1WinScore;
	document.getElementById("player2-LoseScore").innerHTML = player2LoseScore;
	document.querySelector(".result").innerHTML =
		player1Choice + " beats " + player2Choice + "!";
}

function lose() {
	player1LoseScore++;
	player2WinScore++;
	document.getElementById("player1-LoseScore").innerHTML = player1WinScore;
	document.getElementById("player2-WinScore").innerHTML = player2LoseScore;
	console.log(player1WinScore);
}

function tie() {
	alert("tie");
}

function game(player1Choice) {
	var player2Choice = getPlayer2Choice();
	switch (player1Choice + player2Choice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(player1Choice, player2Choice);
			break;
		case "scissorsrock":
		case "rockpaper":
		case "paperscissors":
			lose(player1Choice, player2Choice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			tie(player1Choice, player2Choice);
			break;
	}
}

function main() {
	document.getElementById("rock").addEventListener("click", function () {
		game("rock");
	});
	document.getElementById("paper").addEventListener("click", function () {
		game("paper");
	});

	document.getElementById("scissors").addEventListener("click", function () {
		game("scissors");
	});
}
main();
