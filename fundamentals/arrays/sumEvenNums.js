function sumEvenNums(arr){
    let result = 0;
    for (let i = 0; i <= arr.length - 1; i++){
        let num = Number(arr[i]);
        if (num % 2 === 0){
            result += num;
        }
    }
    console.log(result);
}
sumEvenNums(['1','2','3','4','5','6']);