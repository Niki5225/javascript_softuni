function equalSums(arr){
    let result = 'no';

    for (let i = 0; i < arr.length; i++){
        let leftSum = 0; 
        let rigthSum = 0;

        for (let j = 0; j < i; j++){
            leftSum += arr[j];
        }

        for (let k = i + 1; k < arr.length; k++){
            rigthSum += arr[k];
        }

        if (rigthSum === leftSum){
            result = i;
            break;
        }
    }
    console.log(result);
}
equalSums([1, 2, 3, 3]);