function evenAndOddSubstraction(arr){
    let even = 0;
    let odd = 0;
    for (let i = 0; i <= arr.length - 1; i++){
        if (arr[i] % 2 === 0){
            even += arr[i];
        } else {
            odd += arr[i];
        }
    }
    console.log(even - odd);
}
evenAndOddSubstraction([1,2,3,4,5,6]);