function smallestTwoNumbers(array){
    let sortedArr = array.sort((a, b) => a - b);
    console.log(sortedArr.slice(0, 2).join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);