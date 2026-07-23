function multiply(x, y) {
    return x * y;
}

function calculate(x, y, operation) {
    var result = operation(x, y);
    displayResult(result);
}

function displayResult(result) {
    console.log(result);
}

calculate(4, 5, multiply);