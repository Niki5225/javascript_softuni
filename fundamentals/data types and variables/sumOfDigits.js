function sumOfDigits(number) {
    let numStr = String(number);
    let sum = 0;

    for (let i = 0; i < numStr.length; i++){
        sum += parseInt(numStr[i]);
    }
    console.log(sum);
}

sumOfDigits(245678);