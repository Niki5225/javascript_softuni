function addAndSubtract(num1, num2, num3) {
    function sum(n1, n2) {
        return n1 + n2;
    }


    function subtract(func_result, n3) {
        return func_result - n3;
    }

    let sumOfTwoIntegers = sum(num1, num2);
    console.log(subtract(sumOfTwoIntegers, num3));
}

addAndSubtract(1, 2, 3)