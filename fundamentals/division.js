function divisionChecker(number){
    let result = null;
    if (number % 10 === 0){
        result = 10;
    } else if (number % 7 === 0){
        result = 7;
    } else if (number % 6 === 0){
        result = 6;
    } else if (number % 3 === 0){
        result = 3;
    } else if (number % 2 === 0){
        result = 2;
    }

    if (result === null){
        console.log("Not divisible");
    } else {
        console.log(`The number is divisible by ${result}`)
    }
}
divisionChecker(76543211)