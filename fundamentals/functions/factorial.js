function factorial(num1, num2){
    let factorial1 = num1;
    let factorial2 = num2;
    for (let i = 1; i < num1; i++){
        factorial1 *= i;
    }

    for (let j = 1; j < num2; j++){
        factorial2 *= j;
    }

    console.log((factorial1 / factorial2).toFixed(2));
}
factorial(5, 2);