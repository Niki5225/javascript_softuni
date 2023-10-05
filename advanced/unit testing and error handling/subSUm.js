function subSum(arr, startIndex, endIndex){
    if (!Array.isArray(arr)) {
        return NaN;
    }

    for (const arrElement of arr) {
        if (typeof arrElement !== 'number'){
            return NaN;
        }
    }

    if (startIndex < 0){
        startIndex = 0;
    }

    if (endIndex > arr.length - 1){
        endIndex = arr.length - 1;
    }

    let sum = 0;

    for (let i = startIndex; i <= endIndex ; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(subSum('text', 0, 2));