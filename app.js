// Declarations
const answerDisplay = document.querySelector('.top-output');
const inputDisplay = document.querySelector('.bottom-output');
const numButtons = document.querySelectorAll('.button--number');
const operatorButtons = document.querySelectorAll('.button--operator');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');

// event listener
// numbered buttons
for (let element of numButtons) {
    const newDiv = document.createElement('div');
    const newItem = document.createElement('li');

    element.addEventListener('click', function (e) {
        //new div
        newDiv.classList.add('top-list');
        inputDisplay.appendChild(newDiv);
        // new item
        newItem.innerText = element.value;
        newItem.classList.add('bottom-items');
        newDiv.appendChild(newItem);
    });
}