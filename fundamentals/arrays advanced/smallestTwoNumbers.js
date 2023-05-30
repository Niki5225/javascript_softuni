function smallestTwoNums(arr) {
    let sortedArray = arr.sort((a, b) => a - b);

    console.log(sortedArray[0], sortedArray[1]);
}
smallestTwoNums([30, 15, 50, 5]);