function mathOperations(num1, num2, operator){
    switch (operator){
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '**':
            console.log(num1 ** num2);
            break;
        case '%':
            console.log(num1 % num2);
            break;
        case '/':
            if (num2 === 0){
                console.log(0);
            } else {
                console.log(num1 / num2);
            }
            break;
    }
}
mathOperations(5, 6, '+');