"use strict";

// Declarations
var answerDisplay = document.querySelector('.top-output');
var inputDisplay = document.querySelector('.bottom-output');
var numButtons = document.querySelectorAll('.button--number');
var operatorButtons = document.querySelectorAll('.button--operator');
var deleteButton = document.querySelector('[data-delete]');
var clearButton = document.querySelector('[data-all-clear]');
var equalsButton = document.querySelector('[data-equals]'); // event listener
// numbered buttons

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var element = _step.value;
    var newDiv = document.createElement('div');
    var newItem = document.createElement('li');
    element.addEventListener('click', function (e) {
      //new div
      newDiv.classList.add('top-list');
      inputDisplay.appendChild(newDiv); // new item

      newItem.innerText = element.value;
      newItem.classList.add('bottom-items');
      newDiv.appendChild(newItem);
    });
  };

  for (var _iterator = numButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}