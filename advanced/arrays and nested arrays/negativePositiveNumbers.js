function negativePositiveNumbers(input){
    let result = [];

    for (let number of input){
        if (number < 0){
            result.unshift(number);
        } else {
            result.push(number);
        }
    }

    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9] )