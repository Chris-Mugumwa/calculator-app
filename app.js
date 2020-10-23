/* Selectors */
const container = document.querySelector('.container');
const buttons = container.querySelector('.buttons');
const topOutput = container.querySelector('.top-output');


/* Event Listeners */

buttons.addEventListener('click', e => {
    if (!e.target.closest('button')) return;
    const key = e.target;
    const keyValue = key.textContent;
    const topDisplayValue = topOutput.textContent;
    const { type } = key.dataset;
    const { previousKeyType } = container.dataset;

    // if button contains number
    if (type === 'number') {
        if (topDisplayValue === '0') {
            topOutput.textContent = keyValue;
        } else if (previousKeyType === 'operator') {
            topOutput.textContent = keyValue;
        } else {
            topOutput.textContent =
                        topDisplayValue + keyValue;
        }
    }
    
    // if button contains operator
    if (type === 'operator') {
        const operatorKeys = buttons.querySelectorAll('[data-type="operator"]');
        operatorKeys.forEach(el => el.dataset.state = '');
        key.dataset.state = 'selected';

        container.dataset.firstNumber = topDisplayValue;
        container.dataset.operator = key.dataset.key;
    }

    if (type === 'equals') {
        const firstNumber = parseInt(container.dataset.firstNumber);
        const operator = container.dataset.operator;
        const secondNumber = parseInt(topDisplayValue);

        let result = '';

        if (operator === 'plus') result = firstNumber + secondNumber;
        if (operator === 'minus') result = firstNumber - secondNumber;
        if (operator === 'times') result = firstNumber * secondNumber;
        if (operator === 'divide') result = firstNumber / secondNumber;

        topOutput.textContent = result;
    }
    
    container.dataset.previousKeyType = type;
});

