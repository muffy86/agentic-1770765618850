let displayValue = '';

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
