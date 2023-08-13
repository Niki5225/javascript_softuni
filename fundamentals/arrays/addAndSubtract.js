function addAndSubtract(array) {
    let oldSum = 0;
    let newSum = 0;

    for (let oldEl of array) {
        oldSum += oldEl;
    }

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        if (currentNumber % 2 === 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
    }

    for (let newEl of array) {
        newSum += newEl;
    }
    console.log(array);
    console.log(oldSum);
    console.log(newSum);
}

addAndSubtract([5, 15, 23, 56, 35]);