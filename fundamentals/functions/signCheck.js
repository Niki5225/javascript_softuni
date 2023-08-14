function signCheck(num1, num2, num3){
    function multiplyThreeNums(number1, number2, number3){
        return number1 * number2 * number3;
    }

    let result = multiplyThreeNums(num1, num2, num3);

    if (result >= 0){
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

signCheck(1, 2, -4);