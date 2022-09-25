"use-strict";

const body = document.querySelector("body");
const question = document.querySelector(".question");
const scoreField = document.querySelector(".score");
const scoreValue = document.querySelector(".score-value");
const highscoreField = document.querySelector(".highscore");
const highscoreValue = document.querySelector(".highscore-value");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  const messageField = document.querySelector(".message");
  messageField.textContent = message;
};

// start game function
checkButton.addEventListener("click", function () {
  const input = document.querySelector(".input");
  const guessValue = Number(input.value);
  // No input
  if (!guessValue) {
    displayMessage("Invalid Guess!");
    // input out of range
  } else if (guessValue <= 0) {
    displayMessage("Value out of Range");
    // correct input
  } else if (guessValue === secretNumber) {
    displayMessage("Correct Number!");
    question.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highscoreValue.textContent = highscore;
    }

    body.style.backgroundColor = "#60b347";
    question.style.width = "30rem";

    checkButton.disabled = true;
    // wrong input
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      displayMessage(guessValue > secretNumber ? "To High" : "To Low");
      score--;
      scoreValue.textContent = score;
    }
  } else {
    displayMessage("You Lost the Game!");
    scoreValue.textContent = 0;
  }
});

// new game function
againButton.addEventListener("click", function () {
  const input = document.querySelector(".input");

  // resetting values
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  question.textContent = "?";
  scoreValue.textContent = score;
  input.value = "";
  checkButton.disabled = false;

  // resetting styles
  body.style.backgroundColor = "#222";
  question.style.width = "15rem";
});
