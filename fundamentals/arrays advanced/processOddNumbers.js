function processOddNumbers(array){
    let arrOfOddNums = array.filter((num, i) => i % 2 !== 0)
        .map(num => num * 2);

    console.log(arrOfOddNums.reverse().join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);