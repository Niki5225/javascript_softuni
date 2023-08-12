function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 0;
    } else {
        return num1 / num2;
    }
}

function calculator(num1, action, num2) {
    let result = undefined;

    if (action === '+') {
        result = add(num1, num2);
    } else if (action === '-') {
        result = subtract(num1, num2);
    } else if (action === '*') {
        result = multiply(num1, num2);
    } else if (action === '/') {
        result = divide(num1, num2);
    }

    console.log(result);
}

calculator(5,
    '+',
    10);