function processOddNumbers(array){
    let oddNumsArr = [];

    for (let i = array.length - 1; i > 0; i--){
        let currentNumber = array[i];

        if (i % 2 != 0){
            oddNumsArr.push(currentNumber * 2);
        }
    }

    console.log(oddNumsArr.join(' '));
}
processOddNumbers([10, 15, 20, 25]);