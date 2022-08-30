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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//Reveal secret number for temporary testing purposes
document.querySelector('.number').textContent = secretNumber;
//INITIAL GAME SCORE COUNTER
let score = 20;

//INPUT NUMBER CHECK (on a selected DOM element with a class 'check' with a JS 'click' eventhandler function)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!'; //check whether input is number or falsy value
  } else if (guess > 20 || guess < 0) {
    document.querySelector('.message').textContent =
      '🚫 Input number between 1 and 20!'; //filter out numbers between 1 and 20 - game rule
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    //check if score hit 0 or not then execute the core code else render end of game
    if (score > 1) {
      document.querySelector('.message').textContent = '🔻 Too high!';
      score--; //reduce the score
      document.querySelector('.score').textContent = score; //render to html
    } else {
      document.querySelector('.message').textContent = '💥 End of game!';
      document.querySelector('.score').textContent = 0; //zero the score to html
    }
  } else if (guess < secretNumber) {
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
