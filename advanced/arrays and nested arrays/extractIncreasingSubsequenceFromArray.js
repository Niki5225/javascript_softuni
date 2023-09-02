function extractIncreasingSubsequenceFromArray(array) {
    let currentBiggestNum = -Infinity;
    let result = [];

    for (let element of array) {
        if (element >= currentBiggestNum) {
            currentBiggestNum = element;
            result.push(element);
        }
    }
    return result;
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);