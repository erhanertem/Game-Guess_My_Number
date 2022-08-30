'use strict';
/*
// document.querySelector('#message'); //if it was an id selector
// console.log(document.querySelector('.message')); // selects the element with class of 'message'
// console.log(document.querySelector('.message').textContent); //selects the element's text content  which has a class of 'message'
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 22;
//innerHTML injects code and text formatting
//innerText injects only text with no formatting
//textContent inserts text with formatting. In essense it doesn't have security issues like innerHTML as it doesn't parse HTML like innerText.

//for the input element
console.log(document.querySelector('.guess').value); //initially null
document.querySelector('.guess').value = 22; //assign input a value of 22
console.log(document.querySelector('.guess').value); // 22

*/

//CREATE A RANDOM SECRET NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//Reveal secret number for temporary testing purposes
document.querySelector('.number').textContent = secretNumber;
//INITIAL GAME SCORE COUNTER
let score = 20;
let highscore = 0;
let gameWon = 'false';

//INPUT NUMBER CHECK FUNCTION ON CLICK (on a selected DOM element with a class 'check' with a JS 'click' eventhandler function)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is a falsy input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!'; //check whether input is number or falsy value
  }
  // when it vioplates the game input rule
  else if (guess > 20 || guess < 0) {
    document.querySelector('.message').textContent =
      '🚫 Input number between 1 and 20!'; //filter out numbers between 1 and 20 - game rule
  }
  // when the player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347'; // change the entire background color
    document.querySelector('.number').style.width = '30rem'; // increase the width of the element
    document.querySelector('.number').textContent = secretNumber; // reveal secret number
    document.querySelector('.check').style.visibility = 'hidden'; // conceal the check button

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore; // change the highscore on html
    }

    gameWon = 'true'; // store gamewon status for again! btn
  }
  // when guess is over secret number
  else if (guess > secretNumber) {
    //check if score hit 0 or not then execute the core code else render end of game
    if (score > 1) {
      document.querySelector('.message').textContent = '🔻 Too high!';
      score--; //reduce the score
      document.querySelector('.score').textContent = score; //render to html
    } else {
      document.querySelector('.message').textContent = '💥 End of game!';
      document.querySelector('.score').textContent = 0; //zero the score to html
    }
  }
  // when guess is below secret number
  else if (guess < secretNumber) {
    //check if score hit 0 or not then execute the core code else render end of game
    if (score > 1) {
      document.querySelector('.message').textContent = '🔺 Too low!';
      score--; //reduce the score
      document.querySelector('.score').textContent = score; //render to html
    } else {
      document.querySelector('.message').textContent = '💥 End of game!';
      document.querySelector('.score').textContent = 0; //zero the score to html
    }
  }
});

//GAME RESET FUNCTION ON CLICK
document.querySelector('.again').addEventListener('click', function () {
  if (gameWon) {
    resetGame();
  } else {
    console.log('BAD TO SEE YOU QUIT!');
    resetGame();
  }
});

function resetGame() {
  score = 20; //reinitialize countdown score
  secretNumber = Math.trunc(Math.random() * 20) + 1; //new secret number
  document.querySelector('.message').textContent = 'Start guessing...'; // reset initial message on html
  document.querySelector('.score').textContent = score; // reset initial countdown score to 20 on html
  document.querySelector('.number').textContent = '?'; // reset initial guess number placeholder to ? on html
  document.querySelector('.guess').value = ''; // reset input field on html
  document.querySelector('body').style.backgroundColor = '#222'; //revert to intial backgroud color
  document.querySelector('.number').style.width = '15rem'; //revert to initial width of the element

  gameWon = false; //reset status
  //Reveal secret number for temporary testing purposes
  document.querySelector('.number').textContent = secretNumber;

  document.querySelector('.check').style.visibility = 'visible'; // reveal the check button
}
