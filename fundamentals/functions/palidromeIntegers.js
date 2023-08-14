function palindromeIntegers(array) {
    for (let element of array) {
        let numAsStr = String(element);
        console.log(numAsStr === numAsStr.split('').reverse().join(''));
    }
}

palindromeIntegers([123, 323, 421, 121]);