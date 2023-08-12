function condenseArrayToNumber(array) {
    if (array.length === 1) {
        console.log(array[0]);
        return
    }

    while (array.length > 1) {
        for (let i = 0; i <= array.length - 1; i++) {
            array[i] = array[i] + array[i + 1];
        }
        array.pop();
    }

    console.log(array[0]);
}

condenseArrayToNumber([5, 0, 4, 1, 2]);