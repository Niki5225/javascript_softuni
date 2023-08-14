function simpleCalculator(num1, num2, operation) {
    let multiplication = (number1, number2) => number1 * number2;

    let addition = (number1, number2) => number1 + number2;

    let subtraction = (number1, number2) => number1 - number2;

    let division = (number1, number2) => {
        if (number2 === 0) {
            return 0;
        } else {
            return number1 / number2;
        }
    }


    switch (operation){
        case 'add': console.log(addition(num1, num2)); break;
        case 'subtract': console.log(subtraction(num1, num2)); break;
        case 'multiply': console.log(multiplication(num1, num2)); break;
        case 'divide': console.log(division(num1, num2)); break;
    }
}

simpleCalculator(1, 2, 'multiply');