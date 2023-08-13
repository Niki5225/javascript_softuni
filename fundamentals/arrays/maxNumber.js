function maxNumber(array) {
    let maxNumbers = [];

    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        let isBigger = true;
        for (let j = i + 1; j < array.length; j++) {
            if (number <= array[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            maxNumbers.push(number);
        }
    }
    console.log(maxNumbers.join(' '));
}

maxNumber([1, 4, 3, 2,]);