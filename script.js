// Your JavaScript code here
// Make it functional and interactive
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');

    let currentInput = '';
    let currentOperator = null;
    let firstValue = null;

    // Function to update the display
    const updateDisplay = () => {
        display.value = currentInput;
    };

    // Function to clear the calculator
    const clearCalculator = () => {
        currentInput = '';
        currentOperator = null;
        firstValue = null;
        updateDisplay();
    };

    // Function to delete the last character
    const deleteLastCharacter = () => {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    };

    // Function to handle number clicks
    const handleNumberClick = (number) => {
        currentInput += number;
        updateDisplay();
    };

    // Function to handle operator clicks
    const handleOperatorClick = (operator) => {
        if (firstValue === null) {
            firstValue = parseFloat(currentInput);
            currentOperator = operator;
            currentInput = '';
        } else {
            // Perform calculation if another operator is clicked
            calculate();
            currentOperator = operator;
        }
    };

    // Function to handle equals click
    const handleEqualsClick = () => {
        if (firstValue !== null && currentOperator !== null) {
            calculate();
            currentOperator = null;
        }
    };

    // Function to perform the calculation
    const calculate = () => {
        const secondValue = parseFloat(currentInput);
        let result = 0;

        switch (currentOperator) {
            case '+':
                result = firstValue + secondValue;
                break;
            case '-':
                result = firstValue - secondValue;
                break;
            case '*':
                result = firstValue * secondValue;
                break;
            case '/':
                if (secondValue === 0) {
                    currentInput = 'Error';
                    updateDisplay();
                    return;
                }
                result = firstValue / secondValue;
                break;
            case '^':
                result = Math.pow(firstValue, secondValue);
                break;
            default:
                return;
        }

        currentInput = result.toString();
        updateDisplay();
        firstValue = null;
    };

    // Function to handle function clicks (sin, cos, tan, log, sqrt, pi)
    const handleFunctionClick = (func) => {
        let value = parseFloat(currentInput);

        switch (func) {
            case 'sin':
                currentInput = Math.sin(value).toString();
                break;
            case 'cos':
                currentInput = Math.cos(value).toString();
                break;
            case 'tan':
                currentInput = Math.tan(value).toString();
                break;
            case 'log':
                currentInput = Math.log10(value).toString();
                break;
            case '√':
                if (value < 0) {
                    currentInput = 'Error';
                    break;
                }
                currentInput = Math.sqrt(value).toString();
                break;
            case 'π':
                currentInput = Math.PI.toString();
                break;
            case '%':
                currentInput = (value / 100).toString();
                break;
            default:
                return;
        }

        updateDisplay();
    };

    // Event listeners for buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (/[0-9]/.test(buttonText)) {
                handleNumberClick(buttonText);
            } else if (['+', '-', '*', '/', '^'].includes(buttonText)) {
                handleOperatorClick(buttonText);
            } else if (buttonText === '=') {
                handleEqualsClick();
            } else if (buttonText === 'C') {
                clearCalculator();
            } else if (buttonText === 'Del') {
                deleteLastCharacter();
            } else {
                handleFunctionClick(buttonText);
            }
        });
    });

    // Prevent inputting invalid characters
    display.addEventListener('input', () => {
        display.value = display.value.replace(/[^0-9\.\+\-\*\/\^()]/g, '');
    });
});