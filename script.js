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

//Add evenhandler JS function on a selected DOM element with a class 'check'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';
  }
});
*/
