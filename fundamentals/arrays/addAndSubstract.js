function addAndSubstract(arr){
    let oldSum = 0;
    for (let j of arr){
        oldSum += j;
    } 

    for (let i = 0; i <= arr.length - 1; i++){
        if (arr[i] % 2 === 0){
            arr[i] += i
        } else {
            arr[i] -= i
        }
    }
    
    let newSum = 0;
    for (let a of arr){
        newSum += a;
    }
    console.log(arr);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35]);