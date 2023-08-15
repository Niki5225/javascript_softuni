function perfectNumber(number){
    let divisors = [];

    for (let i = 1; i <= number - 1; i++){
        if (number % i === 0){
            divisors.push(i);
        }
    }

    let sumOfDivisors = 0;
    for (let num of divisors){
        sumOfDivisors += num;
    }

    if (sumOfDivisors === number){
        console.log( "We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);