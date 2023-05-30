function firstAndLastNums(arr){
    let range = arr.shift();
    let firstNums = arr.slice(0, range);
    let lastNums = arr.slice(arr.length - range, arr.length);

    console.log(firstNums.join(' '));
    console.log(lastNums.join(' '));
}

firstAndLastNums([2, 
    7, 8, 9]);