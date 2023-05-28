function positiveOrNegative(num1, num2, num3){
    function multiplyThreeNums(num1, num2, num3){
        return num1 * num2 * num3;
    }

    let result = multiplyThreeNums(num1, num2, num3);

    if (result >= 0){
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

positiveOrNegative(-5, 12, -15);