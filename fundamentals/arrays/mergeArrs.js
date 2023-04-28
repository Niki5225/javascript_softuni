function mergeArrs(arr1, arr2){
    let mergedArr = [];

    for (let i = 0; i <= arr1.length - 1; i++){
        if (i % 2 === 0){
            element = Number(arr1[i]) + Number(arr2[i]);
            mergedArr.push(element);
        } else {
            element = arr1[i] + arr2[i];
            mergedArr.push(element);
        }
    }
    console.log(mergedArr.join(" - "));
}

mergeArrs(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);