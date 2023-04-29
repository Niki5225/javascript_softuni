function MaxNumber(arr){
    let maxNums = [];

    for (let i = 0; i <= arr.length; i++){
        let biggerThanAllNums = true
        let currentNumber = arr[i];
        
        for (let j = i + 1; j <= arr.length; j++){
            if (currentNumber <= arr[j]){
                biggerThanAllNums = false;
                break;
            }
        }
        if (biggerThanAllNums){
            maxNums.push(currentNumber);
        }
    }
    console.log(maxNums.join(" "));
}
MaxNumber([27, 19, 42, 2, 13, 45, 48]);