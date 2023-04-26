function checkForEquality(arr1, arr2){
    let sum = 0
    let areEqual = true
    for (let i = 0; i <= arr1.length - 1; i++){
        if (arr1[i] === arr2[i]){
            sum += Number(arr1[i]);
        } else {
            console.log( `Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }
    if (areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
checkForEquality(['1'], ['10']);