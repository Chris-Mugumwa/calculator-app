"use strict";

/* Selectors */
var container = document.querySelector('.container');
var buttons = container.querySelector('.buttons');
var topOutput = container.querySelector('.top-output');
/* Event Listeners */

buttons.addEventListener('click', function (e) {
  if (!e.target.closest('button')) return;
  var key = e.target;
  var keyValue = key.textContent;
  var topDisplayValue = topOutput.textContent;
  var type = key.dataset.type;
  var previousKeyType = container.dataset.previousKeyType; // if button contains number

  if (type === 'number') {
    if (topDisplayValue === '0') {
      topOutput.textContent = keyValue;
    } else if (previousKeyType === 'operator') {
      topOutput.textContent = keyValue;
    } else {
      topOutput.textContent = topDisplayValue + keyValue;
    }
  } // if button contains operator


  if (type === 'operator') {
    var operatorKeys = buttons.querySelectorAll('[data-type="operator"]');
    operatorKeys.forEach(function (el) {
      return el.dataset.state = '';
    });
    key.dataset.state = 'selected';
    container.dataset.firstNumber = topDisplayValue;
    container.dataset.operator = key.dataset.key;
  }

  if (type === 'equals') {
    var firstNumber = parseInt(container.dataset.firstNumber);
    var operator = container.dataset.operator;
    var secondNumber = parseInt(topDisplayValue);
    var result = '';
    if (operator === 'plus') result = firstNumber + secondNumber;
    if (operator === 'minus') result = firstNumber - secondNumber;
    if (operator === 'times') result = firstNumber * secondNumber;
    if (operator === 'divide') result = firstNumber / secondNumber;
    topOutput.textContent = result;
  }

  container.dataset.previousKeyType = type;
});