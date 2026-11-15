// Returns a random whole number from 1 to 6
function getRandomNumber() {
  var randomNumber = Math.random();
  var diceNumber = Math.floor(randomNumber * 6 + 1);
  return diceNumber;
}
var number1 = getRandomNumber();
var number2 = getRandomNumber();

// Show the matching dice image for each player
document
  .querySelector(".img1")
  .setAttribute("src", "./images/" + "dice" + number1 + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "./images/" + "dice" + number2 + ".png");

// Decide the winner and update the heading
if (number1 === number2) {
  document.querySelector("h1").innerHTML = "Draw";
} else if (number1 > number2) {
  document.querySelector("h1").innerHTML = "Player 1 WINS";
} else {
  document.querySelector("h1").innerHTML = "Player 2 WINS";
}
