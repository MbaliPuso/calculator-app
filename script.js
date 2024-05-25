const currentNumber = ''; // Variable to store the current number being entered
const previousNumber = ''; // Variable to store the previous number entered
const operator = ''; // variable to store the selected operation

// Function to add numbers
function add(a, b) {
    return a + b;
}

// Function to subtract numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply numbers
function multiply(a,b) {
    return a * b;
}

// Function to divide functions
function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }

    return a / b;
}

// Function to perform the calculation
function calculate() {
    let result;
    const prev = parseFloat(previousNumber); // Convert previous number to float
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return; // Do nothing if either number is NaN
    switch (operator) {
        case '+':
            result = add(prev, current);
            break;
        case '-':
            result = subtract(prev, current);
            break;
        case '*':
            result = multiply(prev, current);
            break;
        case '/':
            result = divide(prev, current);
            break;
        default:
            return; // Do nothing if no valid operator
    }
    currentNumber = result;
    operator = ''; // Clear the operator
    previousNumber = '';
    operator = '';
    updateScreen();
}

function selectOperation(op) {
    if (currentNumber === '') return; // Do nothing if current number is emoty
    if (previousNumber !== '') {
        calculate();
    }

    operator = op; // Set the operator to the selected operation
    previousNumber = currentNumber; // Store the current number as the previous number
    currentNumber = '';
}

function changeNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return; // Prevents decimal points
    currentNumber += number.toString(); // Rounding off
    updateScreen(); // Update the display
}

function updateScreen() {
    const screen = document.getElementById('output-screen');
    screen.value = currentNumber;
}

function reset() {
    currentNumber = ''; // Clear the current number
    previousNumber = ''; // Clear the previous number
    operator = ''; // Clear the operator
    updateScreen(); 
}

function percentage() {
    if (currentNumber === '') return;
    currentNumber = (parseFloat(currentNumber) / 100).toString(); // Convert to percentage formula
    updateScreen();
}