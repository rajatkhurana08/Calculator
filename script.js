const number = document.querySelectorAll('.number');
const previousDisplay = document.querySelector('.prev-display');
const currentDisplay = document.querySelector('.curr-display');
const operands = document.querySelectorAll('.operation');
const clearButton = document.querySelector('.all-clear');
const equalButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.delete');

let operation;

function appendNumber(number) {
    if (number === '.' && currentDisplay.innerText.includes('.')) return;
    currentDisplay.innerText += number;
}

function chooseOperation(operand) {
    if (currentDisplay.innerText === '') return;
    compute(operand);
    operation = operand;
    currentDisplay.innerText += operand;
    previousDisplay.innerText = currentDisplay.innerText;
    currentDisplay.innerText += '';
}

function clearDisplay() {
    previousDisplay.innerText = '';
    currentDisplay.innerText = '';
}

function compute(operand) {
    let result;
    const previousValue = parseFloat(previousDisplay.innerText);
    const currentValue = parseFloat(currentDisplay.innerText);

    if (isNaN(previousValue) || isNaN(currentValue)) return;

    switch (operation) {
        case '+':
            result = previousValue + currentValue;
            break;

        case '-':
            result = previousValue - currentValue;
            break;

        case '*':
            result = previousValue * currentValue;
            break;

        case '/':
            result = previousValue / currentValue;
            break;

        default:
            break;
    }

    currentDisplay.innerText = result;
}

number.forEach((num) => {
    num.addEventListener('click', () => {
        appendNumber(num.innerText);
    });
});

operands.forEach((operand) => {
    operand.addEventListener('click', () => {
        chooseOperation(operand.innerText);
    });
});

clearButton.addEventListener('click', () => {
    clearDisplay();
});

equalButton.addEventListener('click', () => {
    compute();
    previousDisplay.innerText = '';
});

deleteButton.addEventListener('click', () => {
    currentDisplay.innerText = currentDisplay.innerText.slice(0, -1);
});