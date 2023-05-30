function lastNumbers(n, k){
    let array = [1];

    for (let i = 0; array.length < n; i++){
        let result = 0;
        for (let j = 0; j < k; j++){
            if (array.length - 1 < j){
                break;
            }
            result += array[array.length - 1 - j];
        }
        array.push(result);
    }
    console.log(array.join(' '));
}
lastNumbers(8, 2);