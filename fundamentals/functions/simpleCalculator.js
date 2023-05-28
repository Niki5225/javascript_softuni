function calculator(num1, num2, operator) {
    function divide(num1, num2) {
        if (num2 === 0) {
            return 0
        } else {
            return num1 / num2;
        }
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    if (operator === 'multiply') {
        console.log(multiply(num1, num2));

    } else if (operator === 'add') {
        console.log(add(num1, num2));

    } else if (operator === 'subtract') {
        console.log(subtract(num1, num2));

    } else if (operator === 'divide') {
        console.log(divide(num1, num2));
    }
}

calculator(13, 5, 'divide');